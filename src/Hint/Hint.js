import React, {PureComponent, cloneElement} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import QuestionIcon from '../icons/forms/QuestionIcon'
import VisibilityAnimation from '../VisibilityAnimation'
import {FixedOverlay} from '../Overlay'
import {POINTS_X, POINTS_Y} from '../constants/overlay'
import {injectSheet} from '../theme'
import {isolateMixin} from '../utils/mixins'
import {ios, android} from '../utils/browser'

const isMobileBehavior = ios || android

@injectSheet(
  theme => ({
    hint: {
      extend: isolateMixin,
      fontFamily: theme.fontFamily,
      position: 'relative',
      color: theme.hint.colors.text,
      borderRadius: theme.hint.borderRadius,
      boxSizing: 'border-box',
      boxShadow: theme.hint.boxShadow,
      paddingTop: 15,
      paddingBottom: 15,
      width: 265,
      backgroundColor: theme.hint.colors.background,
      fontSize: theme.hint.fontSize,
      lineHeight: 1.54,
      opacity: 0.01,
      transitionDuration: `${theme.hint.animationDuration}ms`,
      transitionProperty: 'opacity'
    },
    mobile: {
      width: '100%',
      maxWidth: 480,
      padding: 20,
      fontSize: 14
    },
    arrow: {
      position: 'absolute',
      borderStyle: 'solid',
      borderColor: 'transparent',
      borderWidth: 5,
      borderBottomColor: theme.hint.colors.background,
      zIndex: 100
    },
    isVisible: {
      opacity: 1
    },
    icon: {
      position: 'absolute'
    },
    left: {
      left: -15,
      paddingLeft: 45,
      paddingRight: 15,
      '& $icon': {
        left: 15
      }
    },
    right: {
      left: 15,
      paddingLeft: 15,
      paddingRight: 45,
      '& $icon': {
        right: 15
      }
    },
    top: {
      top: -15,
      '&$mobile': {
        top: 10
      },
      '& $icon': {
        top: 15
      },
      '& $arrow': {
        bottom: '100%'
      }
    },
    bottom: {
      top: 19,
      '&$mobile': {
        top: -10
      },
      '& $icon': {
        bottom: 19
      },
      '& $arrow': {
        top: '100%',
        transform: 'rotate(180deg)'
      }
    }
  }),
  {name: 'HintContent'}
)
class HintContent extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    icon: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
    isVisible: PropTypes.bool,
    pointX: PropTypes.oneOf(POINTS_X),
    pointY: PropTypes.oneOf(POINTS_Y),
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onBecomeVisible: PropTypes.func,
    onBecomeInvisible: PropTypes.func
  }

  static defaultProps = {
    isVisible: false
  }

  cachedPosition = {}

  get position() {
    const {clientWidth} = document.body
    const {anchorLeft = 0, anchorWidth = 0} = this.props
    const key = `${anchorLeft}-${anchorWidth}-${clientWidth}`
    if (key === this.cachedPosition.key) return this.cachedPosition
    const anchorCenterLeft = anchorLeft + anchorWidth / 2
    let contentLeft
    let arrowLeft
    if (clientWidth < 480 || anchorCenterLeft < 240) {
      contentLeft = 0
      arrowLeft = anchorCenterLeft - 5
    } else if (anchorCenterLeft > clientWidth - 240) {
      contentLeft = clientWidth - 480
      arrowLeft = anchorCenterLeft - 5 + 480 - clientWidth
    } else {
      contentLeft = anchorCenterLeft - 240
      arrowLeft = 240 - 5
    }
    this.cachedPosition = {
      key,
      arrowLeft,
      contentLeft
    }
    return this.cachedPosition
  }

  renderIcon() {
    const {icon, classes, theme} = this.props
    if (isMobileBehavior)
      return (
        <div
          className={classes.arrow}
          style={{left: this.position.arrowLeft}}
        />
      )
    const iconProps = icon.props || {}
    return cloneElement(icon, {
      className: classnames(classes.icon, iconProps.className),
      color: iconProps.color || theme.hint.icon.colors.active
    })
  }

  render() {
    const {
      isVisible,
      className,
      style,
      children,
      pointX,
      pointY,
      theme,
      classes,
      onMouseEnter,
      onMouseLeave,
      onBecomeVisible,
      onBecomeInvisible
    } = this.props

    let contentStyle

    if (isMobileBehavior)
      contentStyle = {
        left: this.position.contentLeft
      }

    return (
      <VisibilityAnimation
        isVisible={isVisible}
        animationDuration={theme.hint.animationDuration}
        onVisible={onBecomeVisible}
        onInvisible={onBecomeInvisible}>
        {({isVisible}) => (
          <div
            className={classnames(
              classes.hint,
              classes[isMobileBehavior ? 'mobile' : pointX],
              classes[pointY],
              isVisible && classes.isVisible,
              className
            )}
            style={{...contentStyle, ...style}}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
            {this.renderIcon()}
            {children}
          </div>
        )}
      </VisibilityAnimation>
    )
  }
}

@injectSheet(
  () => ({
    icon: {
      display: 'inline-block'
    }
  }),
  {name: 'Hint'}
)
export default class Hint extends PureComponent {
  static propTypes = {
    /**
     * Класс якоря
     */
    className: PropTypes.string,
    /**
     * Стили якоря (Иконки)
     */
    style: PropTypes.object,
    /**
     * Иконка, по-умолчанию `<QuestionIcon />`
     */
    icon: PropTypes.node.isRequired,
    /**
     * Класс контента подсказки
     */
    contentClassName: PropTypes.string,
    /**
     * Стили контента посказки
     */
    contentStyle: PropTypes.object,
    /**
     * Контент для подсказки
     */
    children: PropTypes.node.isRequired,
    /**
     * Флаг показа подсказки. Если ничего не указано, подсказка будет показываться при hover
     */
    isOpened: PropTypes.bool,
    /**
     * Позиция тултипа по оси X: left - слева от якоря, right - справа
     */
    positionX: PropTypes.oneOf(['left', 'right']),
    /**
     * Скрывать при скролле страницы
     */
    closeOnScroll: PropTypes.bool
  }

  static defaultProps = {
    positionX: 'right',
    closeOnScroll: true,
    icon: <QuestionIcon size={15} />
  }

  state = {
    isOpened: this.props.isOpened || false
  }

  containerStyle = isMobileBehavior ? {left: 0, right: 0} : null

  componentWillReceiveProps({isOpened}) {
    if (isOpened !== undefined && isOpened !== this.props.isOpened)
      if (isOpened) this.show()
      else this.hide()
  }

  show = () => {
    if (this.state.isOpened) clearTimeout(this.hideTimeout)
    else
      this.setState({
        isOpened: true
      })
  }

  hide = () => {
    if (!this.state.isOpened) return
    clearTimeout(this.hideTimeout)
    this.hideTimeout = setTimeout(() => {
      this.setState({
        isOpened: false
      })
    }, 60)
  }

  render() {
    const {
      className,
      style,
      contentClassName,
      contentStyle,
      icon,
      children,
      positionX,
      theme,
      classes,
      closeOnScroll
    } = this.props

    const {isOpened} = this.state
    const pointX = positionX === 'left' ? 'right' : 'left'
    const color =
      icon.props.color ||
      (isOpened
        ? theme.hint.icon.colors.active
        : theme.hint.icon.colors.default)

    const anchor = cloneElement(icon, {
      color,
      style,
      className: classnames(classes.icon, className),
      onMouseEnter: this.show,
      onTouchStart: this.show,
      onMouseLeave: this.hide
    })

    return (
      <FixedOverlay
        isOpened={isOpened}
        anchor={anchor}
        content={
          <HintContent
            className={contentClassName}
            style={contentStyle}
            icon={icon}
            onMouseEnter={this.show}
            onMouseLeave={this.hide}>
            {children}
          </HintContent>
        }
        autoPositionX={!isMobileBehavior}
        autoPositionY={true}
        anchorPointX={isMobileBehavior ? 'center' : pointX}
        contentPointX={isMobileBehavior ? 'center' : pointX}
        anchorPointY={isMobileBehavior ? 'bottom' : 'top'}
        contentPointY="top"
        cachePositionOptions={false}
        closeOnScroll={closeOnScroll}
        onContentClose={this.hide}
        containerNodeStyle={this.containerStyle}
      />
    )
  }
}
