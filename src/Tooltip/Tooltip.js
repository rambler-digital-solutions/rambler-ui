import React, { PureComponent, cloneElement } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import OnClickOutside from '../events/OnClickOutside'
import VisibilityAnimation from '../VisibilityAnimation'
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
    transitionDuration: `${theme.tooltip.animationDuration}ms`,
    transitionProperty: 'opacity, top',
    pointerEvents: 'none'
  },
  body: {
    background: theme.tooltip.colors.background,
    fontSize: theme.tooltip.fontSize,
    color: theme.tooltip.colors.text,
    padding: '8px 12px',
    boxSizing: 'border-box',
    borderRadius: theme.tooltip.borderRadius
  },
  isVisible: {
    opacity: '1 !important',
    '&$top': {
      top: 3
    },
    '&$bottom': {
      top: -3
    }
  },
  top: {
    top: 10
  },
  bottom: {
    top: -10
  }
}))
class TooltipContent extends PureComponent {

  static propTypes = {
    style: PropTypes.object,
    bodyClassName: PropTypes.string,
    isVisible: PropTypes.bool.isRequired,
    onBecomeVisible: PropTypes.func,
    onClickOutside: PropTypes.func,
    onBecomeInvisible: PropTypes.func,
    pointY: PropTypes.oneOf(POINTS_Y),
    children: PropTypes.node
  };

  get css() {
    return this.props.sheet.classes
  }

  render() {
    const {
      isVisible,
      children,
      className,
      bodyClassName,
      style,
      pointY,
      theme,
      onClickOutside,
      onBecomeVisible,
      onBecomeInvisible
    } = this.props
    return (
      <OnClickOutside handler={onClickOutside}>
        <VisibilityAnimation
          isVisible={isVisible}
          activeClassName={this.css.isVisible}
          animationDuration={theme.tooltip.animationDuration}
          onVisible={onBecomeVisible}
          onInvisible={onBecomeInvisible}>
          <div
            style={{paddingTop: '3px', paddingBottom: '3px'}}
            className={ classnames(className, this.css.content, this.css[pointY]) }>
            <div style={ style } className={ classnames(bodyClassName, this.css.body) }>
              { children }
            </div>
          </div>
        </VisibilityAnimation>
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
    isOpened: PropTypes.bool,
    /**
     * Позиция тултипа по оси Y
     * top - сверху элемента, bottom - снизу элемента
     */
    positionY: PropTypes.oneOf(['top', 'bottom']),
    /**
     * Закрывать при клике вне тултипа
     */
    closeOnClickOutside: PropTypes.bool,
    /**
     * Скрывать при скролле страницы
     */
    closeOnScroll: PropTypes.bool
  };

  static defaultProps = {
    delay: 0,
    positionY: 'top',
    closeOnClickOutside: false,
    closeOnScroll: true
  };

  state = {
    isOpened: false
  };

  get css() {
    return this.props.sheet.classes
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isOpened !== undefined && nextProps.isOpened !== this.props.isOpened)
      if (nextProps.isOpened)
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
    if (this.state.isOpened)
      return
    this.clearDelayTimeout()
    this.setState({ isOpened: true })
  }

  hide() {
    if (!this.state.isOpened)
      return
    this.clearDelayTimeout()
    if (!this.props.delay)
      this.setState({ isOpened: false })
    else
      this.delayTimeout = setTimeout(() => {
        this.setState({ isOpened: false })
      }, this.props.delay)
  }

  onClickOutside = () => {
    if (!this.props.closeOnClickOutside)
      return
    this.clearDelayTimeout()
    this.setState({ isOpened: false })
  };

  renderAnchor() {
    const { className, style, children } = this.props
    const anchor = <span style={ style } className={classnames(className, this.css.anchor)}>{ children }</span>
    if (this.props.isOpened !== undefined)
      return anchor
    return cloneElement(anchor, {
      onMouseEnter: this.onMouseEnter,
      onMouseLeave: this.onMouseLeave
    })
  }

  render() {
    if (!this.props.content)
      return this.renderAnchor()
    const {contentClassName, contentStyle, content, positionY, closeOnScroll} = this.props
    return (
      <FixedOverlay
        isOpened={this.state.isOpened}
        anchor={this.renderAnchor()}
        content={<TooltipContent
          onClickOutside={this.onClickOutside}
          bodyClassName={contentClassName}
          style={ contentStyle }>{ content }
        </TooltipContent>}
        autoPositionY={true}
        anchorPointY={positionY === 'top' ? 'top' : 'bottom'}
        contentPointY={positionY === 'top' ? 'bottom' : 'top'}
        anchorPointX="center"
        contentPointX="center"
        cachePositionOptions={false}
        closeOnScroll={closeOnScroll}
      />
    )
  }

}
