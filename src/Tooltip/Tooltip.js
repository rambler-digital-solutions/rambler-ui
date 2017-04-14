import React, { PropTypes, PureComponent, cloneElement } from 'react'
import classnames from 'classnames'
import { FixedOverlay } from '../Overlay'
import { injectSheet } from '../theme'
import { POINTS_Y } from '../constants/overlay'
import { isolateMixin, fontStyleMixin } from '../style/mixins'

@injectSheet((theme) => ({
  content: {
    ...isolateMixin,
    ...fontStyleMixin(theme.font),
    opacity: '0',
    pointerEvents: 'none',
    position: 'relative',
    transition: `all ${theme.tooltip.animationDuration}ms`
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
    opacity: '1 !important',
    top: '0px'
  },
  'pointY-bottom': {
    paddingBottom: 10,
    '&:not($isVisible)': { top: -10 }
  },
  'pointY-top': {
    paddingTop: 10,
    '&:not($isVisible)': { top: 10 }
  }
}))
class TooltipContent extends PureComponent {

  static propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
    isVisible: PropTypes.bool.isRequired,
    onBecomeVisible: PropTypes.func,
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
    if (this.props.isVisible !== nextProps.isVisible)
      if (nextProps.isVisible)
        this.show()
      else
        this.hide()
  }

  clearAnimationTimeout() {
    if (this.animationTimeout) {
      clearTimeout(this.animationTimeout)
      this.animationTimeout = null
    }
  }

  hide() {
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
  }

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
  };

  render() {
    const { children, className, style, pointY } = this.props
    const { isVisible } = this.state
    return (
      <div
        className={ classnames(isVisible && this.css.isVisible, this.css.content, this.css['pointY-' + pointY]) }>
        <div style={ style } className={ classnames(className, this.css.body) }>
          { children }
        </div>
      </div>
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
    isShown: PropTypes.bool
  };

  static defaultProps = {
    delay: 0
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
    this.clearDelayTimeout()
    this.setState({ isShown: true })
  }

  hide() {
    this.clearDelayTimeout()
    if (!this.props.delay)
      this.setState({ isShown: false })
    else
      this.delayTimeout = setTimeout(() => {
        this.setState({ isShown: false })
      }, this.props.delay)
  }

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
    const {contentClassName, contentStyle, content} = this.props
    return (
      <FixedOverlay
        isShown={this.state.isShown}
        anchor={this.renderAnchor()}
        content={<TooltipContent className={ contentClassName } style={ contentStyle }>{ content }</TooltipContent>}
        autoPositionY={true}
        anchorPointY="top"
        contentPointY="bottom"
        anchorPointX="center"
        contentPointX="center"
      />
    )
  }

}
