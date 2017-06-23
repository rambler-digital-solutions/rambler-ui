import {
  unstable_renderSubtreeIntoContainer as renderSubtreeIntoContainer, // eslint-disable-line camelcase
  unmountComponentAtNode,
  findDOMNode
} from 'react-dom'
import React, { Children, PureComponent, Component, cloneElement } from 'react'
import PropTypes from 'prop-types'
import EventEmitter from 'events'
import debounce from 'lodash/debounce'
import pick from 'lodash/pick'
import zIndexStack from '../hoc/z-index-stack'
import windowEvents from '../hoc/window-events'
import { DROPDOWN_ZINDEX } from '../constants/z-indexes'
import { POINTS_X, POINTS_Y, MAPPING_POINTS } from '../constants/overlay'
import { getBoundingClientRect as originalGetBoundingClientRect, MutationObserver } from '../utils/DOM'


// 1. Рендерим анкор
// 2. После маунта анкора, если нужно показать контент, маунтим контент в отдельный контейнер
// 3. После маунтинга, проверяем позицию и выставляем нужную позицию контенту + пробрасываем в компонент контента нужные props
// 4. После проброса нужных свойств, ждем событие обновления внутри контента
// 5. После события скролла, обновляем позицию div (left/top)

class ContentElementWrapper extends Component {

  static propTypes = {
    /**
     * Свойства контента
     */
    contentProps: PropTypes.object
  };

  get isVisible() {
    return this.contentProps.isVisible
  }

  constructor(props) {
    super(props)
    this.contentProps = props.contentProps || {}
    this.state = {contentProps: this.contentProps}
  }

  updateContentProps(newContentProps) {
    let changed = false
    // eslint-disable-next-line no-restricted-syntax
    for (const k in newContentProps)
      if (newContentProps[k] !== this.contentProps[k]) {
        changed = true
        break
      }
    if (!changed)
      return
    this.contentProps = {
      ...this.contentProps,
      ...newContentProps
    }
    this.setState({
      contentProps: this.contentProps
    })
  }

  render() {
    const { content, ...props } = this.state.contentProps
    return cloneElement(content, props)
  }

}

/**
 * Получить scrollY
 * @return {Number}
 */
function originalGetYScroll() {
  if (window.pageYOffset !== undefined)
    return window.pageYOffset
  return document.documentElement.scrollTop || document.body.scrollTop
}

/**
 * Получить опции позиции контента
 * @param  {Object}  params       -
 * @param  {Object}  params.anchorRect    - объект с полями {left, right, top, bottom}
 * @param  {Number}  params.contentHeight - высота элемента с контентом
 * @param  {Number}  params.contentWidth  - ширина элемента с контентом
 * @param  {String}  params.anchorPointX  - точка прикрепления
 * @param  {String}  params.anchorPointY  - точка прикрепления
 * @param  {String}  params.contentPointX - точка прикрепления
 * @param  {String}  params.contentPointY - точка прикрепления
 * @param  {Boolean} params.autoPositionX - автопозиционирование по оси X
 * @param  {Boolean} params.autoPositionY - автопозиционирование по оси Y
 * @param  {Boolean} params.noRecalculate - не пересчитывать
 * @return {Object}
 */
function getPositionOptions(params) {

  const {
    anchorRect,
    contentHeight,
    contentWidth,
    autoPositionX,
    autoPositionY,
    noRecalculate,
    windowSize
  } = params
  let {
    contentPointX,
    contentPointY,
    anchorPointX,
    anchorPointY
  } = params

  let left, top, overflowX = 0, overflowY = 0
  let newAnchorPointX, newAnchorPointY

  if (contentPointX === 'left') {

    if (anchorPointX === 'left')
      left = anchorRect.left
    else if (anchorPointX === 'center')
      left = anchorRect.left + anchorRect.width / 2
    else if (anchorPointX === 'right')
      left = anchorRect.left + anchorRect.width
    if (autoPositionX)
      overflowX = left + contentWidth - windowSize.width

  } else if (contentPointX === 'center') {

    if (anchorPointX === 'left') {
      left = anchorRect.left - contentWidth / 2
      if (autoPositionX)
        overflowX = -left
    } else if (anchorPointX === 'center') {
      left = anchorRect.left + anchorRect.width / 2 - contentWidth / 2
      if (autoPositionX) {
        const overflowXLeft = -left
        const overflowXRight = left + contentWidth - windowSize.width
        overflowX = Math.max(overflowXLeft, overflowXRight)
        newAnchorPointX = overflowXLeft > overflowXRight ? 'left' : 'right'
      }
    } else if (anchorPointX === 'right') {
      left = anchorRect.right - contentWidth / 2
      if (autoPositionX)
        overflowX = left + contentWidth / 2 - windowSize.width
    }

  } else if (contentPointX === 'right') {

    if (anchorPointX === 'left')
      left = anchorRect.left - contentWidth
    else if (anchorPointX === 'center')
      left = anchorRect.left + anchorRect.width / 2 - contentWidth
    else if (anchorPointX === 'right')
      left = anchorRect.right - contentWidth
    if (autoPositionX)
      overflowX = -left

  }

  if (contentPointY === 'top') {

    if (anchorPointY === 'top')
      top = anchorRect.top
    else if (anchorPointY === 'center')
      top = anchorRect.top + anchorRect.height / 2
    else if (anchorPointY === 'bottom')
      top = anchorRect.bottom
    if (autoPositionY)
      overflowY = top + contentHeight - windowSize.height

  } else if (contentPointY === 'center') {

    if (anchorPointY === 'top') {
      top = anchorRect.top - contentHeight / 2
      if (autoPositionY)
        overflowY = -top
    } else if (anchorPointY === 'center') {
      top = anchorRect.top - contentHeight / 2 + anchorRect.height / 2
      if (autoPositionY) {
        const overflowYTop = -top
        const overflowYBottom = top + contentHeight - windowSize.height
        overflowY = Math.max(overflowYTop, overflowYBottom)
        newAnchorPointY = overflowYTop > overflowYBottom ? 'top' : 'bottom'
      }
    } else if (anchorPointY === 'bottom') {
      top = anchorRect.bottom - contentHeight / 2
      if (autoPositionY)
        overflowY = top + contentHeight - windowSize.height
    }

  } else if (contentPointY === 'bottom') {

    if (anchorPointY === 'top')
      top = anchorRect.top - contentHeight
    else if (anchorPointY === 'center')
      top = anchorRect.top - contentHeight + anchorRect.height / 2
    else if (anchorPointY === 'bottom')
      top = anchorRect.bottom - contentHeight
    if (autoPositionY)
      overflowY = -top

  }

  if (!noRecalculate) {
    if (autoPositionX && overflowX > 0) {
      const result = getPositionOptions({
        ...params,
        anchorPointX: newAnchorPointX || MAPPING_POINTS[anchorPointX],
        contentPointX: newAnchorPointX || MAPPING_POINTS[contentPointX],
        noRecalculate: true
      })
      if (result.overflowX < overflowX) {
        left = result.left
        overflowX = result.overflowX
        contentPointX = result.contentPointX
        anchorPointX = result.anchorPointX
      }
    }
    if (autoPositionY && overflowY > 0) {
      const newParams = {
        ...params,
        anchorPointY: newAnchorPointY || MAPPING_POINTS[anchorPointY],
        contentPointY: newAnchorPointY || MAPPING_POINTS[contentPointY],
        noRecalculate: true
      }
      const result = getPositionOptions(newParams)
      if (result.overflowY < overflowY) {
        top = result.top
        overflowY = result.overflowY
        contentPointY = result.contentPointY
        anchorPointY = result.anchorPointY
      }
    }
  }

  left = Math.round(left)
  top = Math.round(top)

  return {
    left,
    top,
    overflowX,
    overflowY,
    contentPointX,
    contentPointY,
    anchorPointX,
    anchorPointY
  }
}

/**
 * Если нужно оборачиваем children в <span>
 * @param  {ReactElement} children
 * @return {ReactElement}
 */
function wrapChildren(children) {
  let shouldWrap = Children.count(children) > 1
  if (!shouldWrap)
    Children.forEach(children, (child) => {
      shouldWrap = typeof child === 'string'
    })
  if (shouldWrap)
    return <span>{children}</span>
  return children
}

/**
 * Оверлей, который добавляется к body
 * Есть возможность прицепить оверлей, как fixed, так и absolute
 * При скролле body, documentElement или window, ресайзе window, перестраивается позиция элемента
 */

@zIndexStack(DROPDOWN_ZINDEX)
@windowEvents('scroll', 'resize')
export default class FixedOverlay extends PureComponent {

  static propTypes = {
    /**
     * Флаг управления показом оверлея
     */
    isOpened: PropTypes.bool.isRequired,
    /**
     * Точка прицепления для achor X
     */
    anchorPointX: PropTypes.oneOf(POINTS_X).isRequired,
    /**
     * Точка прицепления для achor Y
     */
    anchorPointY: PropTypes.oneOf(POINTS_Y).isRequired,
    /**
     * Точка прицепления для overlay X
     */
    contentPointX: PropTypes.oneOf(POINTS_X).isRequired,
    /**
     * Точка прицепления для overlay Y
     */
    contentPointY: PropTypes.oneOf(POINTS_Y).isRequired,
    /**
     * Автоматическое позиционирование, если контент по оси X выходи за пределы scroll-контейнера
     */
    autoPositionX: PropTypes.bool,
    /**
     * Автоматическое позиционирование, если контент по оси Y выходи за пределы scroll-контейнера
     */
    autoPositionY: PropTypes.bool,
    /**
     * Элемент вокруг которого показываем overlay
     */
    anchor: PropTypes.node.isRequired,
    /**
     * Инстанс компонент контента
     * Получает автоматически на вход следующие props:
     * - isVisible: true/false
     * при изменении это props, content должен показаться, opacity должен смениться
     * если isVisible=true, а потом стал false, колбеки анимации должны отмениться
     * - pointX: точка присоединения overlay к anchor, в зависимости от этой опции на тултипе можно рисоваться стрелочка по разному
     * - pointY: точка присоединения overlay к anchor, в зависимости от этой опции на тултипе можно рисоваться стрелочка по разному
     * - onBecomeVisible - колбек, который должен вызваться, когда контент стал видимым
     * - onBecomeInvisible - колбек, который должен вызваться, когда контент стал невидимым
     * - hide - функция, которая должна вызываться, если контент нужно закрыть
     * - anchorWidth: ширина anchor
     * - anchorHeight: высота anchor
     */
    content: PropTypes.node.isRequired,
    /**
     * Функция, которая вызывается при маунтинге/анмаунтинге контейнера для контента
     */
    contentWrapperRef: PropTypes.func,
    /**
     * Колбек, который дергается, когда контент закрыт
     */
    onContentClose: PropTypes.func,
    /**
     * Колбек, который дергается, когда контент открыт
     */
    onContentOpen: PropTypes.func,
    /**
     * Функция для получения размеров окно
     * Нужна для подсчета того, что элемента выходит за пределы окна, нужна исключительно для iframe
     */
    getWindowSize: PropTypes.func,
    /**
     * Функция для подсчета границ и размеров элемента
     * Нужна исключительно внутри iframe
     */
    getElementRect: PropTypes.func,
    /**
     * Функция для получения Y скролла на странице
     * Нужна исключительно внутри iframe
     */
    getYScroll: PropTypes.func,
    /**
     * Обновлять при ресайзе
     */
    cachePositionOptions: PropTypes.bool,
    /**
     * Скрывать элемент при скролле
     */
    closeOnScroll: PropTypes.bool
  };

  static defaultProps = {
    getWindowSize() {
      return {
        width: window.innerWidth,
        height: window.innerHeight
      }
    },
    getElementRect: originalGetBoundingClientRect,
    getYScroll: originalGetYScroll,
    cachePositionOptions: false,
    closeOnScroll: false
  };

  constructor(props) {
    super(props)
    this.events = new EventEmitter
    /**
     * Идентификатор транзакции открытия/закрытия контента (чтобы правильно резолвить Promise)
     * @type {Number}
     */
    this.transactionIndex = 0
    /**
     * Текущий статус показа hiding/showing
     */
  }

  componentWillUnmount() {
    this.cleanUp()
  }

  componentWillReceiveProps({isOpened, anchorPointX, anchorPointY, contentPointX, contentPointY, content}) {
    if (isOpened !== undefined && isOpened !== this.props.isOpened)
      if (isOpened)
        this.show()
      else
        this.hide()

    else if (isOpened &&
      (this.props.anchorPointX !== anchorPointX ||
        this.props.anchorPointY !== anchorPointY ||
        this.props.contentPointX !== contentPointX ||
        this.props.contentPointY !== contentPointY ||
        this.props.content !== content))
      this.show()
  }

  componentDidMount() {
    this.anchorNode = findDOMNode(this)
    if (!this.anchorNode)
      throw new Error('Anchor node for FixedOverlay does not found')
    this.anchorNodeObserver = new MutationObserver(debounce(this.updatePosition))
    this.anchorNodeObserver.observe(this.anchorNode, { subtree: true, childList: true, attributes: true, characterData: true })
    // this.bodyNodeObserver = new MutationObserver(debounce(this.onBodyMutation))
    // this.bodyNodeObserver.observe(document.body, { subtree: true, childList: true })
    if (this.props.isOpened)
      this.show()
  }

  cleanUp() {
    this.unmountPortal()
    if (this.anchorNodeObserver) {
      this.anchorNodeObserver.disconnect()
      this.anchorNodeObserver = null
    }
    // if (this.bodyNodeObserver) {
    //   this.bodyNodeObserver.disconnect()
    //   this.bodyNodeObserver = null
    // }
  }

  onBodyMutation = () => {
    if (!this.anchorNode)
      return
    if (!document.body.contains(this.anchorNode))
      this.cleanUp()
  }

  /**
   * Вызывается когда контент показан
   */
  onContentBecomeVisible = () => {
    this.events.emit('contentVisible')
  };

  /**
   * Вызывается когда контент стал невидимым
   */
  onContentBecomeInvisible = () => {
    this.events.emit('contentInvisible')
  };

  updatePosition = () => {
    if (!this.contentContainerNode || !this.portal || !this.isOpened)
      return
    const {
      content,
      anchorPointX,
      anchorPointY,
      contentPointX,
      contentPointY,
      autoPositionX,
      autoPositionY,
      getWindowSize,
      getElementRect,
      getYScroll,
      cachePositionOptions
    } = this.props
    // TODO получать от клиента
    this.scrollY = getYScroll()
    const anchorRect = getElementRect(this.anchorNode)
    const options = getPositionOptions(Object.assign({
      anchorRect,
      anchorPointX,
      anchorPointY,
      contentPointX,
      contentPointY,
      autoPositionX: !this.cachedOptions && autoPositionX,
      autoPositionY: !this.cachedOptions && autoPositionY,
      contentHeight: this.contentNode.offsetHeight,
      contentWidth: this.contentNode.offsetWidth,
      windowSize: getWindowSize()
    }, this.cachedOptions))

    if (cachePositionOptions)
      this.cachedOptions = pick(options, 'anchorPointX', 'anchorPointY', 'contentPointX', 'contentPointY')

    this.portal.updateContentProps({
      content,
      isVisible: true,
      pointX: options.contentPointX,
      pointY: options.contentPointY,
      anchorWidth: this.anchorNode.offsetWidth,
      anchorHeight: this.anchorNode.offsetHeight
    })
    Object.assign(this.contentContainerNode.style, {
      left: options.left + 'px',
      top: options.top + this.scrollY + 'px'
    })
  };

  mountPortal() {
    if (this.portal)
      return Promise.resolve(this.portal)
    return new Promise((resolve) => {
      const element = <ContentElementWrapper
        ref={resolve}
        contentProps={{
          isVisible: false,
          onBecomeVisible: this.onContentBecomeVisible,
          onBecomeInvisible: this.onContentBecomeInvisible,
          content: this.props.content,
          hide: this.hide
        }}
      />
      renderSubtreeIntoContainer(this, element, this.getContentContainerNode())
    }).then((portal) => {
      this.portal = portal
      this.contentNode = findDOMNode(portal)
      this.subscribeListeners()
      return portal
    })
  }

  unmountPortal() {
    if (this.portal) {
      unmountComponentAtNode(this.getContentContainerNode())
      this.removeContentContainerNode()
      this.unsubscribeListeners()
      this.portal = null
      if (this.contentNodeObserver) {
        this.contentNodeObserver.disconnect()
        this.contentNodeObserver = null
      }
    }
  }

  onScroll = () => {
    if (this.props.closeOnScroll)
      this.hide(true)
    else
      this.updatePosition()
  };

  subscribeListeners() {
    if (this.subscribedWinListeners)
      return
    this.props.windowEvents.on('resize', this.onScroll)
    this.props.windowEvents.on('scroll', this.onScroll)
    this.subscribedWinListeners = true
  }

  unsubscribeListeners() {
    if (!this.subscribedWinListeners)
      return
    this.props.windowEvents.removeListener('resize', this.onScroll)
    this.props.windowEvents.removeListener('scroll', this.onScroll)
    this.subscribedWinListeners = false
  }

  /**
   * Показать оверлей
   */
  show() {
    this.isOpened = true
    const transactionIndex = ++this.transactionIndex
    return this.mountPortal().then(() => {
      if (transactionIndex < this.transactionIndex)
        return Promise.reject()
      return new Promise((resolve) => {
        const handler = () => {
          if (transactionIndex === this.transactionIndex)
            resolve()
          if (transactionIndex <= this.transactionIndex)
            this.events.removeListener('contentVisible', handler)
          // if (transactionIndex < this.transactionIndex)
          //   reject()
        }
        this.events.removeAllListeners('contentVisible')
        this.events.on('contentVisible', handler)
        this.updatePosition()
      })
    }).then(() => {
      if (!this.contentNodeObserver) {
        this.contentNodeObserver = new MutationObserver(debounce(this.updatePosition))
        this.contentNodeObserver.observe(this.contentNode, { subtree: true, childList: true, attributes: true, characterData: true })
      }
      if (this.props.onContentOpen)
        this.props.onContentOpen()
    })
  }

  /**
   * Скрыть оверлей
   */
  hide = (force) => {
    this.isOpened = false
    if (!this.portal)
      return Promise.resolve()
    return new Promise((resolve) => {
      if (force) {
        resolve()
        return
      }
      const transactionIndex = ++this.transactionIndex
      const handler = () => {
        if (transactionIndex === this.transactionIndex)
          resolve()
        if (transactionIndex <= this.transactionIndex)
          this.events.removeListener('contentInvisible', handler)
        // if (transactionIndex < this.transactionIndex)
        //   reject()
      }
      this.events.removeAllListeners('contentInvisible')
      this.events.on('contentInvisible', handler)
      this.portal.updateContentProps({ isVisible: false })
    }).then(() => {
      this.unmountPortal()
      if (this.props.onContentClose)
        this.props.onContentClose()
      this.cachedOptions = null
    })
  };

  getContentContainerNode() {
    if (!this.contentContainerNode) {
      this.contentContainerNode = document.createElement('div')
      Object.assign(this.contentContainerNode.style, {
        position: 'absolute',
        zIndex: this.props.zIndex
      })
      document.body.appendChild(this.contentContainerNode)
      if (this.props.contentWrapperRef)
        this.props.contentWrapperRef(this.contentContainerNode)
    }
    return this.contentContainerNode
  }

  removeContentContainerNode() {
    if (this.contentContainerNode) {
      document.body.removeChild(this.contentContainerNode)
      this.contentContainerNode = null
      if (this.props.contentWrapperRef)
        this.props.contentWrapperRef(this.contentContainerNode)
    }
  }

  render() {
    return wrapChildren(this.props.anchor)
  }

}
