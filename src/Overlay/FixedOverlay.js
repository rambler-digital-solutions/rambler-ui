import {
  unstable_renderSubtreeIntoContainer as renderSubtreeIntoContainer, // eslint-disable-line camelcase
  unmountComponentAtNode,
  findDOMNode
} from 'react-dom'
import React, { Children, PureComponent, Component, PropTypes, cloneElement } from 'react'
import EventEmitter from 'events'
import debounce from 'lodash/debounce'
import zIndexStack from '../hoc/z-index-stack'
import windowEvents from '../hoc/window-events'
import { DROPDOWN_ZINDEX } from '../constants/z-indexes'
import { getBoundingClientRect, MutationObserver } from '../utils/DOM'

/**
 * Правила переноса контента, если он выходит за пределы видимости
 */
const mappingPoints = {
  right: 'left',
  left: 'right',
  center: 'center',
  bottom: 'top',
  top: 'bottom'
}

// 1. Рендерим анкор
// 2. После маунта анкора, если нужно показать контент, маунтим контент в отдельный контейнер
// 3. После маунтинга, проверяем позицию и выставляем нужную позицию контенту + пробрасываем в компонент контента нужные props
// 4. После проброса нужных свойств, ждем событие обновления внутри контента
// 5. После события скролла, обновляем позицию div (left/top)

class ContentElementWrapper extends Component {

  static propTypes = {
    /**
     * React-элемент с контентом
     */
    content: PropTypes.node,
    /**
     * Свойства контента
     */
    contentProps: PropTypes.object
  };

  constructor(props) {
    super(props)
    this.state = props
    this.contentProps = props.contentProps || {}
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
    const { content, contentProps = {} } = this.state
    return cloneElement(content, contentProps)
  }

}

/**
 * Получить scrollY
 * @return {Number}
 */
function getYScroll() {
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
    anchorPointX,
    anchorPointY,
    autoPositionX,
    autoPositionY,
    noRecalculate
  } = params

  let {
    contentPointX,
    contentPointY
  } = params

  const winHeight = window.innerHeight
  const winWidth = window.innerWidth

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
      overflowX = left + contentWidth - winWidth

  } else if (contentPointX === 'center') {

    if (anchorPointX === 'left') {
      left = anchorRect.left - contentWidth / 2
      if (autoPositionX)
        overflowX = -left
    } else if (anchorPointX === 'center') {
      left = anchorRect.left + anchorRect.width / 2 - contentWidth / 2
      if (autoPositionX) {
        const overflowXLeft = -left
        const overflowXRight = left + contentWidth - winWidth
        overflowX = Math.max(overflowXLeft, overflowXRight)
        newAnchorPointX = overflowXLeft > overflowXRight ? 'left' : 'right'
      }
    } else if (anchorPointX === 'right') {
      left = anchorRect.right - contentWidth / 2
      if (autoPositionX)
        overflowX = left + contentWidth / 2 - winWidth
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
    if (autoPositionX)
      overflowY = top + contentHeight - winHeight

  } else if (contentPointY === 'center') {

    if (anchorPointY === 'top') {
      top = anchorRect.top - contentHeight / 2
      if (autoPositionY)
        overflowY = -top
    } else if (anchorPointY === 'center') {
      top = anchorRect.top - contentHeight / 2 + anchorRect.height / 2
      if (autoPositionY) {
        const overflowYTop = -top
        const overflowYBottom = top + contentHeight - winHeight
        overflowY = Math.max(overflowYTop, overflowYBottom)
        newAnchorPointY = overflowYTop > overflowYBottom ? 'top' : 'bottom'
      }
    } else if (anchorPointY === 'bottom') {
      top = anchorRect.bottom - contentHeight / 2
      if (autoPositionY)
        overflowY = top + contentHeight - winHeight
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
        anchorPointX: newAnchorPointX || mappingPoints[anchorPointX],
        contentPointX: newAnchorPointX || mappingPoints[contentPointX],
        noRecalculate: true
      })
      if (result.overflowX < overflowX) {
        left = result.left
        overflowX = result.overflowX
        contentPointX = result.contentPointX
      }
    }
    if (autoPositionY && overflowY > 0) {
      const newParams = {
        ...params,
        anchorPointY: newAnchorPointY || mappingPoints[anchorPointY],
        contentPointY: newAnchorPointY || mappingPoints[contentPointY],
        noRecalculate: true
      }
      const result = getPositionOptions(newParams)
      if (result.overflowY < overflowY) {
        top = result.top
        overflowY = result.overflowY
        contentPointY = result.contentPointY
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
    contentPointY
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
@windowEvents
export default class FixedOverlay extends PureComponent {

  static propTypes = {
    /**
     * Класс контейнера
     */
    className: PropTypes.string,
    /**
     * Стиль контейнера
     */
    style: PropTypes.object,
    /**
     * Флаг управления показом оверлея
     */
    isShown: PropTypes.bool.isRequired,
    /**
     * Точка прицепления для achor X
     */
    anchorPointX: PropTypes.oneOf(['left', 'right', 'center']).isRequired,
    /**
     * Точка прицепления для achor Y
     */
    anchorPointY: PropTypes.oneOf(['top', 'bottom', 'center']).isRequired,
    /**
     * Точка прицепления для overlay X
     */
    contentPointX: PropTypes.oneOf(['left', 'right', 'center']).isRequired,
    /**
     * Точка прицепления для overlay Y
     */
    contentPointY: PropTypes.oneOf(['top', 'bottom', 'center']).isRequired,
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
    anchor: PropTypes.node,
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
     * - anchorWidth: ширина anchor
     * - anchorHeight: высота anchor
     */
    content: PropTypes.node,
    /**
     * Колбек, который дергается, когда контент открыт
     */
    onContentHide: PropTypes.func,
    /**
     * Колбек, который дергается, когда контент закрыт
     */
    onContentShow: PropTypes.func
  };

  constructor(props) {
    super(props)
    this.events = new EventEmitter
    /**
     * Идентификатор транзакции открытия/закрытия контента (чтобы правильно резолвить Promise)
     * @type {Number}
     */
    this.transactionIndex = 0
  }

  componentWillUnmount() {
    this.unmountPortal()
    if (this.anchorNodeObserver)
      this.anchorNodeObserver.disconnect()
  }

  componentWillReceiveProps({isShown, anchorPointX, anchorPointY, contentPointX, contentPointY}) {
    if (isShown !== undefined && isShown !== this.props.isShown)
      if (isShown)
        this.show()
      else
        this.hide()

    else if (isShown &&
      (this.props.anchorPointX !== anchorPointX ||
        this.props.anchorPointY !== anchorPointY ||
        this.props.contentPointX !== contentPointX ||
        this.props.contentPointY !== contentPointY))
      this.show()
  }

  componentDidMount() {
    this.anchorNode = findDOMNode(this)
    if (!this.anchorNode)
      throw new Error('Anchor node for FixedOverlay does not found')
    this.anchorNodeObserver = new MutationObserver(this.updatePosition)
    this.anchorNodeObserver.observe({ subtree: true, childList: true, attributes: true })
    if (this.props.isShown)
      this.show()
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

  updatePosition = debounce(() => {
    if (!this.contentContainerNode || !this.portal)
      return
    const {
      anchorPointX,
      anchorPointY,
      contentPointX,
      contentPointY,
      autoPositionX,
      autoPositionY
    } = this.props
    this.scrollY = getYScroll()
    const anchorRect = getBoundingClientRect(this.anchorNode)
    const options = getPositionOptions({
      anchorRect,
      anchorPointX,
      anchorPointY,
      contentPointX,
      contentPointY,
      autoPositionX,
      autoPositionY,
      contentHeight: this.contentNode.offsetHeight,
      contentWidth: this.contentNode.offsetWidth
    })
    this.portal.updateContentProps({
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
  });

  mountPortal() {
    if (this.portal)
      return Promise.resolve(this.portal)
    return new Promise((resolve) => {
      const element = <ContentElementWrapper
        ref={resolve}
        content={this.props.content}
        contentProps={{
          isVisible: false,
          onBecomeVisible: this.onContentBecomeVisible,
          onBecomeInvisible: this.onContentBecomeInvisible
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

  subscribeListeners() {
    if (this.subscribedWinListeners)
      return
    this.props.winEvents.on('resize', this.updatePosition)
    this.props.winEvents.on('scroll', this.updatePosition)
    this.subscribedWinListeners = true
  }

  unsubscribeListeners() {
    if (!this.subscribedWinListeners)
      return
    this.props.winEvents.removeListener('resize', this.updatePosition)
    this.props.winEvents.removeListener('scroll', this.updatePosition)
    this.subscribedWinListeners = false
  }

  /**
   * Показать оверлей
   */
  show() {
    const transactionIndex = ++this.transactionIndex
    return this.mountPortal().then(() => {
      if (transactionIndex < this.transactionIndex)
        return Promise.reject()
      this.updatePosition()
      return new Promise((resolve, reject) => {
        const handler = () => {
          if (transactionIndex === this.transactionIndex)
            resolve()
          if (transactionIndex <= this.transactionIndex)
            this.events.removeListener('contentVisible', handler)
          if (transactionIndex < this.transactionIndex)
            reject()
        }
        this.events.on('contentVisible', handler)
      })
    }).then(() => {
      if (!this.contentNodeObserver) {
        this.contentNodeObserver = new MutationObserver(this.updatePosition)
        this.contentNodeObserver.observe({ subtree: true, childList: true, attributes: true })
      }
      if (this.props.onContentShow)
        this.props.onContentShow()
    })
  }

  /**
   * Скрыть оверлей
   */
  hide() {
    if (!this.portal)
      return Promise.resolve()
    const transactionIndex = ++this.transactionIndex
    this.portal.updateContentProps({ isVisible: false })
    return new Promise((resolve, reject) => {
      const handler = () => {
        if (transactionIndex === this.transactionIndex)
          resolve()
        if (transactionIndex <= this.transactionIndex)
          this.events.removeListener('contentInvisible', handler)
        if (transactionIndex < this.transactionIndex)
          reject()
      }
      this.events.on('contentInvisible', handler)
    }).then(() => {
      this.unmountPortal()
      if (this.props.onContentHide)
        this.props.onContentHide()
    })
  }

  getContentContainerNode() {
    if (!this.contentContainerNode) {
      this.contentContainerNode = document.createElement('div')
      Object.assign(this.contentContainerNode.style, {
        position: 'absolute',
        zIndex: this.props.zIndex
      })
      document.body.appendChild(this.contentContainerNode)
    }
    return this.contentContainerNode
  }

  removeContentContainerNode() {
    if (this.contentContainerNode) {
      document.body.removeChild(this.contentContainerNode)
      this.contentContainerNode = null
    }
  }

  render() {
    return wrapChildren(this.props.anchor)
  }

}
