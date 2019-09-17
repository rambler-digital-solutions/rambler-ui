import React, {PureComponent, cloneElement} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import OnClickOutside from '../OnClickOutside'
import VisibilityAnimation from '../VisibilityAnimation'
import {FixedOverlay} from '../Overlay'
import {injectSheet} from '../theme'
import {POINTS_Y} from '../constants/overlay'
import {isolateMixin, fontSmoothingMixin} from '../utils/mixins'

const containerNodeStyle = {'pointer-events': 'none'}

@injectSheet(
  theme => ({
    content: {
      extend: [isolateMixin, fontSmoothingMixin],
      display: 'inline-block',
      fontFamily: theme.fontFamily,
      opacity: '0.01',
      position: 'relative',
      transitionDuration: `${theme.tooltip.animationDuration}ms`,
      transitionProperty: 'opacity, top, left',
      pointerEvents: 'none'
    },
    arrow: {
      content: '""',
      position: 'absolute',
      borderStyle: 'solid',
      borderColor: 'transparent'
    },
    body: {
      fontSize: theme.tooltip.fontSize,
      color: theme.tooltip.colors.default.text,
      padding: '8px 12px',
      boxSizing: 'border-box',
      lineHeight: 1.4,
      borderRadius: theme.tooltip.borderRadius,
      maxWidth: 320
    },
    isVisible: {
      opacity: '1 !important',
      '&$ytop$yabottom': {
        top: '6px !important'
      },
      '&$ybottom$yatop': {
        top: '-6px !important'
      },
      '&$xleft$xaright': {
        left: '6px !important'
      },
      '&$xright$xaleft': {
        left: '-6px !important'
      }
    },
    ytop: {
      '&$yabottom': {
        '& $arrow': {
          bottom: '100%',
          left: '50%',
          borderWidth: 5,
          transform: 'translate(-5px, 3px)'
        },
        '&$xleft': {
          top: 13,
          left: -13
        },
        '&$xright': {
          top: 13,
          right: -13
        },
        '&$xcenter': {
          top: 13
        }
      }
    },
    ybottom: {
      '&$yatop': {
        '& $arrow': {
          top: '100%',
          left: '50%',
          borderWidth: 5,
          transform: 'translate(-5px, -3px)'
        },
        '&$xleft': {
          top: -13,
          left: -13
        },
        '&$xright': {
          top: -13,
          right: -13
        },
        '&$xcenter': {
          top: -13
        }
      }
    },
    xleft: {
      '&$xaright': {
        '& $arrow': {
          bottom: '50%',
          left: '0',
          borderWidth: 5,
          transform: 'translate(-7px, 5px)'
        },
        '&$ytop': {
          top: -3,
          left: 13
        },
        '&$ybottom': {
          bottom: -3,
          left: 13
        },
        '&$ycenter': {
          left: 13
        }
      }
    },
    xright: {
      '&$xaleft': {
        '& $arrow': {
          top: '50%',
          left: '100%',
          borderWidth: 5,
          transform: 'translate(-3px, -5px)'
        },
        '&$ytop': {
          top: -3,
          left: -13
        },
        '&$ybottom': {
          bottom: -3,
          left: -13
        },
        '&$ycenter': {
          left: -13
        }
      }
    },
    xcenter: {},
    ycenter: {},
    // anchor
    xacenter: {},
    yacenter: {},
    xaleft: {},
    xaright: {},
    yatop: {},
    yabottom: {},
    ...['default', 'error', 'warning', 'success'].reduce(
      (styles, type) => ({
        ...styles,
        [type]: {
          '& $body': {background: theme.tooltip.colors[type].background},
          '&$ytop$yabottom $arrow': {
            borderBottomColor: theme.tooltip.colors[type].background
          },
          '&$ybottom$yatop $arrow': {
            borderTopColor: theme.tooltip.colors[type].background
          },
          '&$xleft$xaright $arrow': {
            borderRightColor: theme.tooltip.colors[type].background
          },
          '&$xright$xaleft $arrow': {
            borderLeftColor: theme.tooltip.colors[type].background
          }
        }
      }),
      {}
    )
  }),
  {name: 'TooltipContent'}
)
class TooltipContent extends PureComponent {
  static propTypes = {
    style: PropTypes.object,
    bodyClassName: PropTypes.string,
    isVisible: PropTypes.bool,
    onBecomeVisible: PropTypes.func,
    onClickOutside: PropTypes.func,
    onBecomeInvisible: PropTypes.func,
    pointY: PropTypes.oneOf(POINTS_Y),
    children: PropTypes.node
  }

  static defaultProps = {
    isVisible: false
  }

  render() {
    const {
      isVisible,
      children,
      className,
      bodyClassName,
      style,
      pointY,
      pointX,
      anchorPointY,
      anchorPointX,
      anchorWidth,
      anchorHeight,
      theme,
      classes,
      status,
      onClickOutside,
      onBecomeVisible,
      onBecomeInvisible
    } = this.props
    const arrowStyle = {}

    if (anchorWidth)
      if (anchorPointX === 'left' && pointX === 'left') {
        arrowStyle.left = anchorWidth / 2 + 13 + 'px'
        arrowStyle.right = 'auto'
      } else if (anchorPointX === 'right' && pointX === 'right') {
        arrowStyle.left = 'auto'
        arrowStyle.right = anchorWidth / 2 + 3 + 'px'
      }

    if (anchorHeight)
      if (anchorPointY === 'top' && pointY === 'top') {
        if (anchorPointX === 'left')
          arrowStyle.top = anchorHeight / 2 + 3 + 'px'
        if (anchorPointX === 'right')
          arrowStyle.top = anchorHeight / 2 - 7 + 'px'
        arrowStyle.bottom = 'auto'
      } else if (anchorPointY === 'bottom' && pointY === 'bottom') {
        arrowStyle.top = 'auto'
        if (anchorPointX === 'left')
          arrowStyle.bottom = anchorHeight / 2 - 7 + 'px'
        if (anchorPointX === 'right')
          arrowStyle.bottom = anchorHeight / 2 + 3 + 'px'
      }

    return (
      <OnClickOutside handler={onClickOutside}>
        <VisibilityAnimation
          isVisible={isVisible}
          activeClassName={classes.isVisible}
          animationDuration={theme.tooltip.animationDuration}
          onVisible={onBecomeVisible}
          onInvisible={onBecomeInvisible}>
          {({isVisible}) => (
            <div
              style={{padding: '3px'}}
              className={classnames(
                className,
                classes.content,
                classes['x' + pointX],
                classes['y' + pointY],
                classes['xa' + anchorPointX],
                classes['ya' + anchorPointY],
                classes[status],
                isVisible && classes.isVisible
              )}>
              <div className={classes.arrow} style={arrowStyle} />
              <div
                style={style}
                className={classnames(bodyClassName, classes.body)}>
                {children}
              </div>
            </div>
          )}
        </VisibilityAnimation>
      </OnClickOutside>
    )
  }
}

@injectSheet(
  () => ({
    anchor: {
      display: 'inline-block'
    }
  }),
  {name: 'Tooltip'}
)
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
     * Статус тултипа
     */
    status: PropTypes.oneOf(['default', 'success', 'error', 'warning']),
    /**
     * Флаг показа тултипа.
     * Если вы не указываете его, тултип будет показываться при hover
     */
    isOpened: PropTypes.bool,
    /**
     * Позиция тултипа
     * top - сверху элемента, bottom - снизу элемента
     */
    position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    /**
     * Автоматическое позиционирование, если tooltip не помещается в указанной позиции на экране
     */
    autoPosition: PropTypes.bool,
    /**
     * Закрывать при клике вне тултипа
     */
    closeOnClickOutside: PropTypes.bool,
    /**
     * Скрывать при скролле страницы
     */
    closeOnScroll: PropTypes.bool
  }

  static defaultProps = {
    position: 'top',
    closeOnClickOutside: false,
    closeOnScroll: true,
    autoPosition: true,
    status: 'default'
  }

  state = {
    isOpened: false
  }

  constructor(props) {
    super(props)
    if (this.props.isOpened) {
      this.clearDelayTimeout()
      this.state = {
        isOpened: true
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.isOpened !== undefined &&
      nextProps.isOpened !== this.props.isOpened
    )
      if (nextProps.isOpened) this.show()
      else this.hide()
  }

  // componentWillMount() {
  //   if (this.props.isOpened) this.show()
  // }

  onMouseEnter = event => {
    event.stopPropagation()
    this.show()
  }

  onMouseLeave = () => {
    this.hide()
  }

  clearDelayTimeout() {
    if (this.delayTimeout) {
      clearTimeout(this.delayTimeout)
      this.delayTimeout = null
    }
  }

  show() {
    if (this.state.isOpened) return
    this.clearDelayTimeout()
    this.setState({isOpened: true})
  }

  hide() {
    if (!this.state.isOpened) return
    this.clearDelayTimeout()
    if (!this.props.delay) this.setState({isOpened: false})
    else
      this.delayTimeout = setTimeout(() => {
        this.setState({isOpened: false})
      }, this.props.delay)
  }

  onContentClose = () => {
    if (!this.state.isOpened) return
    this.clearDelayTimeout()
    this.setState({isOpened: false})
  }

  onClickOutside = () => {
    if (!this.props.closeOnClickOutside) return
    this.clearDelayTimeout()
    this.setState({isOpened: false})
  }

  renderAnchor() {
    const {className, style, children, classes} = this.props
    const anchor = (
      <span style={style} className={classnames(className, classes.anchor)}>
        {children}
      </span>
    )
    if (this.props.isOpened !== undefined) return anchor
    return cloneElement(anchor, {
      onMouseEnter: this.onMouseEnter,
      onTouchStart: this.onMouseEnter,
      onMouseLeave: this.onMouseLeave
    })
  }

  render() {
    if (!this.props.content) return this.renderAnchor()
    const {
      contentClassName,
      contentStyle,
      content,
      position,
      closeOnScroll,
      status
    } = this.props
    return (
      <FixedOverlay
        isOpened={this.state.isOpened}
        anchor={this.renderAnchor()}
        content={
          <TooltipContent
            onClickOutside={this.onClickOutside}
            bodyClassName={contentClassName}
            status={status}
            style={contentStyle}>
            {content}
          </TooltipContent>
        }
        autoPositionY={this.props.autoPosition}
        autoPositionX={this.props.autoPosition}
        anchorPointY={
          position === 'top'
            ? 'top'
            : position === 'bottom'
              ? 'bottom'
              : 'center'
        }
        contentPointY={
          position === 'top'
            ? 'bottom'
            : position === 'bottom'
              ? 'top'
              : 'center'
        }
        anchorPointX={
          position === 'left'
            ? 'left'
            : position === 'right'
              ? 'right'
              : 'center'
        }
        contentPointX={
          position === 'left'
            ? 'right'
            : position === 'right'
              ? 'left'
              : 'center'
        }
        cachePositionOptions={false}
        closeOnScroll={this.props.isOpened === undefined && closeOnScroll}
        onContentClose={this.onContentClose}
        containerNodeStyle={containerNodeStyle}
      />
    )
  }
}
