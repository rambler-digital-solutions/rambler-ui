import React, { PropTypes, PureComponent, cloneElement } from 'react'
import classnames from 'classnames'
import OnClickOutside from '../events/OnClickOutside'
import { FixedOverlay } from '../Overlay'
import { injectSheet } from '../theme'
import { POINTS_Y } from '../constants/overlay'
import { isolateMixin, fontStyleMixin } from '../style/mixins'

@injectSheet((theme) => ({
  content: {
    ...isolateMixin,
    ...fontStyleMixin(theme.font),
    opacity: '0.01',
    position: 'relative',
    pointerEvents: 'none',
    transitionDuration: `${theme.tooltip.animationDuration}ms`,
    transitionProperty: 'opacity, top'
  },
  body: {
    background: 'rgba(0, 0, 0, .8)',
    fontSize: 13,
    color: '#fff',
    padding: '8px 12px',
    boxSizing: 'border-box',
    borderRadius: 3
  },
  isVisible: {
    opacity: '1 !important'
  }
}))
class TooltipContent extends PureComponent {

  static propTypes = {
    style: PropTypes.object,
    bodyClassName: PropTypes.string,
    isVisible: PropTypes.bool.isRequired,
    onBecomeVisible: PropTypes.func,
    onOutsideClick: PropTypes.func,
    onBecomeInvisible: PropTypes.func,
    pointY: PropTypes.oneOf(POINTS_Y),
    children: PropTypes.node
  };

  get css() {
    return this.props.sheet.classes
  }

  // hiding/showing
  status = null;
  state = {};

  componentWillReceiveProps(nextProps) {
    if (this.props.isVisible !== nextProps.isVisible) {
      const isVisible = nextProps.isVisible
      // Делаем задержку, т.к. стили добавляются позже
      this.clearDelayTimeout()
      if (isVisible)
        this.delayTimeout = setTimeout(this.show, 60)
      else
        this.hide()
    }
  }

  componentWillUnmount() {
    this.clearAnimationTimeout()
    this.clearDelayTimeout()
  }

  clearDelayTimeout() {
    if (this.delayTimeout) {
      clearTimeout(this.delayTimeout)
      this.delayTimeout = null
    }
  }

  clearAnimationTimeout() {
    if (this.animationTimeout) {
      clearTimeout(this.animationTimeout)
      this.animationTimeout = null
    }
  }

  hide = () => {
    if (this.status === 'hiding')
      return
    this.status = 'hiding'
    this.clearAnimationTimeout()
    this.setState({ isVisible: false })
    this.animationTimeout = setTimeout(
      () => {
        this.status = null
        this.props.onBecomeInvisible()
      },
      this.props.theme.tooltip.animationDuration
    )
  };

  show = () => {
    if (this.status === 'showing')
      return
    this.status = 'showing'
    this.clearAnimationTimeout()
    this.setState({ isVisible: true })
    this.animationTimeout = setTimeout(
      () => {
        this.status = null
        this.props.onBecomeVisible()
      },
      this.props.theme.tooltip.animationDuration
    )
  }; // нужна задержка для начала анимации

  render() {
    const { children, className, bodyClassName, style, pointY, onOutsideClick } = this.props
    const { isVisible } = this.state
    let top
    if (isVisible)
      top = pointY === 'top' ? '3px' : '-3px'
    else if (pointY)
      top = pointY === 'top' ? '10px' : '-10px'
    return (
      <OnClickOutside handler={onOutsideClick}>
        <div
          style={{top, pointerEvents: 'none', paddingTop: '3px', paddingBottom: '3px'}}
          className={ classnames(className, isVisible && this.css.isVisible, this.css.content) }>
          <div style={ style } className={ classnames(bodyClassName, this.css.body) }>
            { children }
          </div>
        </div>
      </OnClickOutside>
    )
  }

}


@injectSheet(() => ({
  anchor: {
    display: 'inline-block'
  }
}))
export default class Tooltip extends PureComponent {

  static propTypes = {
    /**
     * Контент тултипа
     */
    content: PropTypes.node,
    /**
     * Элемент вокруг тултипа
     */
    children: PropTypes.node.isRequired,
    /**
     * Css класс обертки тултипа
     */
    className: PropTypes.string,
    /**
     * Стили обертки тултипа
     */
    style: PropTypes.object,
    /**
     * Css класс контента тултипа
     */
    contentClassName: PropTypes.string,
    /**
     * Стили контента тултипа
     */
    contentStyle: PropTypes.object,
    /**
     * Сколько мс должен провисеть тултип, прежде чем исчезнуть
     */
    delay: PropTypes.number,
    /**
     * Флаг показа тултипа
     * Если вы не указываете его, тултип будет показываться при hover
     */
    isShown: PropTypes.bool,
    /**
     * Позиция тултипа по оси Y
     * top - сверху элемента, bottom - снизу элемента
     */
    positionY: PropTypes.oneOf(['top', 'bottom']),
    /**
     * Закрывать при клике вне тултипа
     */
    closeOnOutsideClick: PropTypes.bool,
    /**
     * Скрывать при скролле страницы
     */
    hideOnScroll: PropTypes.bool
  };

  static defaultProps = {
    delay: 0,
    positionY: 'top',
    closeOnOutsideClick: false,
    hideOnScroll: true
  };

  state = {
    isShown: false
  };

  get css() {
    return this.props.sheet.classes
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isShown !== undefined && nextProps.isShown !== this.props.isShown)
      if (nextProps.isShown)
        this.show()
      else
        this.hide()
  }

  onMouseEnter = () => {
    this.show()
  };

  onMouseLeave = () => {
    this.hide()
  };

  clearDelayTimeout() {
    if (this.delayTimeout) {
      clearTimeout(this.delayTimeout)
      this.delayTimeout = null
    }
  }

  show() {
    if (this.state.isShown)
      return
    this.clearDelayTimeout()
    this.setState({ isShown: true })
  }

  hide() {
    if (!this.state.isShown)
      return
    this.clearDelayTimeout()
    if (!this.props.delay)
      this.setState({ isShown: false })
    else
      this.delayTimeout = setTimeout(() => {
        this.setState({ isShown: false })
      }, this.props.delay)
  }

  onOutsideClick = () => {
    if (!this.props.closeOnOutsideClick)
      return
    this.clearDelayTimeout()
    this.setState({ isShown: false })
  };

  renderAnchor() {
    const { className, style, children } = this.props
    const anchor = <span style={ style } className={classnames(className, this.css.anchor)}>{ children }</span>
    if (this.props.isShown !== undefined)
      return anchor
    return cloneElement(anchor, {
      onMouseEnter: this.onMouseEnter,
      onMouseLeave: this.onMouseLeave
    })
  }

  render() {
    if (!this.props.content)
      return this.renderAnchor()
    const {contentClassName, contentStyle, content, positionY, hideOnScroll} = this.props
    return (
      <FixedOverlay
        isShown={this.state.isShown}
        anchor={this.renderAnchor()}
        content={<TooltipContent
          onOutsideClick={this.onOutsideClick}
          bodyClassName={contentClassName}
          style={ contentStyle }>{ content }
        </TooltipContent>}
        autoPositionY={true}
        anchorPointY={positionY === 'top' ? 'top' : 'bottom'}
        contentPointY={positionY === 'top' ? 'bottom' : 'top'}
        anchorPointX="center"
        contentPointX="center"
        cachePositionOptions={false}
        hideOnScroll={hideOnScroll}
      />
    )
  }

}
