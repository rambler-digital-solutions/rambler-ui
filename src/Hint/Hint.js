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
    hintMobile: {
      position: 'relative',
      width: '100%'
    },
    message: {
      position: 'absolute',
      width: '100%',
      padding: 20,
      fontSize: 14
    },
    arrow: {
      position: 'absolute',
      borderStyle: 'solid',
      borderColor: 'transparent',
      bottom: '100%',
      left: '48.5%',
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
      '& $icon': {
        top: 15
      }
    },
    bottom: {
      top: 19,
      '& $icon': {
        bottom: 19
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
    onBecomeInvisible: PropTypes.func,
    device: PropTypes.string
  }

  static defaultProps = {
    isVisible: false,
    device: 'desktop'
  }

  render() {
    const {
      isVisible,
      className,
      style,
      icon,
      children,
      pointX,
      pointY,
      theme,
      classes,
      onMouseEnter,
      onMouseLeave,
      onBecomeVisible,
      onBecomeInvisible,
      device
    } = this.props

    if (device === 'mobile')
      return (
        <VisibilityAnimation
          isVisible={isVisible}
          animationDuration={theme.hint.animationDuration}
          onVisible={onBecomeVisible}
          onInvisible={onBecomeInvisible}>
          {({isVisible}) => {
            if (this.msg && isVisible) {
              const de = document.documentElement
              const overlay = this.msg.parentNode.parentNode
              const ovrCoords = overlay.getBoundingClientRect()
              if (ovrCoords.left < 0) {
                this.msg.style.left =
                  Math.abs(parseInt(overlay.style.left)) + 'px'
              } else if (ovrCoords.left + ovrCoords.width > de.clientWidth) {
                const right = ovrCoords.right - de.clientWidth
                this.msg.style.right = right + 'px'
              }
            }
            return (
              <div
                className={classnames(classes.hintMobile, className)}
                style={{
                  ...style
                }}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}>
                <div className={classes.arrow} />
                <div
                  ref={el => (this.msg = el)}
                  className={classnames(
                    classes.hint,
                    isVisible && classes.isVisible,
                    classes.message
                  )}>
                  {children}
                </div>
              </div>
            )
          }}
        </VisibilityAnimation>
      )

    const iconProps = icon.props || {}

    const anchor = cloneElement(icon, {
      className: classnames(classes.icon, iconProps.className),
      color: iconProps.color || theme.hint.colors.icon
    })

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
              classes[pointX],
              classes[pointY],
              isVisible && classes.isVisible,
              className
            )}
            style={style}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
            {anchor}
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
    icon: <QuestionIcon size={15} color="#315efb" />
  }

  constructor(props) {
    super(props)

    this.state = {
      isOpened: props.isOpened || false
    }
  }

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

    const isNativeSelectAllowed = ios || android

    if (isNativeSelectAllowed) {
      const anchor = cloneElement(icon, {
        style,
        className: classnames(classes.icon, className),
        color: this.state.isOpened ? icon.props.color : theme.hint.colors.icon,
        size: 19,
        onMouseEnter: this.show,
        onTouchStart: this.show,
        onMouseLeave: this.hide
      })

      return (
        <FixedOverlay
          isOpened={this.state.isOpened}
          anchor={anchor}
          content={
            <HintContent
              device="mobile"
              className={contentClassName}
              style={contentStyle}
              icon={icon}
              onMouseEnter={this.show}
              onMouseLeave={this.hide}>
              {children}
            </HintContent>
          }
          autoPositionX={false}
          autoPositionY={false}
          anchorPointX="center"
          contentPointX="center"
          anchorPointY="bottom"
          contentPointY="top"
          cachePositionOptions={false}
          closeOnScroll={closeOnScroll}
          onContentClose={this.hide}
          containerNodeStyle={{
            width: '100%',
            maxWidth: '480px',
            marginTop: '10px'
          }}
        />
      )
    }

    const pointX = positionX === 'left' ? 'right' : 'left'

    const anchor = cloneElement(icon, {
      style,
      className: classnames(classes.icon, className),
      color: theme.hint.colors.icon,
      onMouseEnter: this.show,
      onTouchStart: this.show,
      onMouseLeave: this.hide
    })

    return (
      <FixedOverlay
        isOpened={this.state.isOpened}
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
        autoPositionX={true}
        autoPositionY={true}
        anchorPointX={pointX}
        contentPointX={pointX}
        anchorPointY="top"
        contentPointY="top"
        cachePositionOptions={false}
        closeOnScroll={closeOnScroll}
        onContentClose={this.hide}
      />
    )
  }
}
