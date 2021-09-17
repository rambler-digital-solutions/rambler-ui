import React, {PureComponent, cloneElement} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import ClearIcon from '../icons/forms/ClearIcon'
import VisibilityAnimation from '../VisibilityAnimation'
import OnClickOutside from '../OnClickOutside'
import renderToLayer from '../hoc/render-to-layer'
import zIndexStack from '../hoc/z-index-stack'
import {SNACKBAR_ZINDEX} from '../constants/z-indexes'
import {withStyles} from '../theme'
import compose from '../utils/compose'
import {isolateMixin, middleMixin, ifDesktop} from '../utils/mixins'

const styles = theme => ({
  snackbar: {
    extend: [isolateMixin, middleMixin],
    fontFamily: theme.fontFamily,
    position: 'fixed',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: theme.snackbar.sizes.medium.padding,
    width: '100%',
    lineHeight: 1.15,
    color: theme.snackbar.colors.text,
    fontSize: theme.snackbar.fontSize,
    fontWeight: theme.snackbar.fontWeight,
    opacity: 0,
    transitionDuration: theme.snackbar.animationDuration,
    transitionProperty: 'top, bottom, opacity',
    ...ifDesktop({
      width: 'auto',
      minWidth: 350,
      maxWidth: 750,
      borderRadius: theme.snackbar.borderRadius
    })
  },
  top: {
    top: -10,
    ...ifDesktop({
      top: 0
    }),
    '&$isVisible': {
      top: 0,
      ...ifDesktop({
        top: 10
      })
    }
  },
  bottom: {
    bottom: -10,
    ...ifDesktop({
      bottom: 0
    }),
    '&$isVisible': {
      bottom: 0,
      ...ifDesktop({
        bottom: 10
      })
    }
  },
  isVisible: {
    opacity: 1
  },
  left: {
    left: 0,
    ...ifDesktop({
      left: 10
    })
  },
  center: {
    left: '50%',
    transform: 'translateX(-50%)'
  },
  right: {
    right: 0,
    ...ifDesktop({
      right: 10
    })
  },
  main: {
    backgroundColor: theme.snackbar.colors.background.main
  },
  primary: {
    backgroundColor: theme.snackbar.colors.background.primary
  },
  success: {
    backgroundColor: theme.snackbar.colors.background.success
  },
  danger: {
    backgroundColor: theme.snackbar.colors.background.danger
  },
  icon: {
    extend: middleMixin,
    marginRight: 15
  },
  content: {
    flexGrow: 1,
    textAlign: 'left'
  },
  button: {
    boxSizing: 'border-box',
    outline: 'none',
    flexShrink: 0,
    border: 0,
    borderRadius: theme.snackbar.borderRadius,
    height: 20,
    lineHeight: 20 + 'px',
    marginLeft: 15,
    padding: '0 10px',
    backgroundColor: 'transparent',
    color: theme.snackbar.colors.actionButton,
    fontSize: theme.snackbar.fontSize,
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 1,
    cursor: 'pointer',
    transitionDuration: '.2s',
    transitionProperty: 'background-color, border',
    '&:hover:not(:active)': {
      backgroundColor: 'rgba(0, 0, 0, 0.05)'
    },
    '&:focus:not(:active)': {
      border: '1px solid'
    },
    '&:active': {
      backgroundColor: 'rgba(0, 0, 0, 0.1)'
    }
  },
  close: {
    composes: '$button',
    extend: middleMixin,
    borderRadius: '50%',
    width: 20,
    padding: 0,
    lineHeight: 0
  },
  small: {
    padding: theme.snackbar.sizes.small.padding
  }
})

class Snackbar extends PureComponent {
  static propTypes = {
    /**
     * Css-класс
     */
    className: PropTypes.string,
    /**
     * Inline-стили
     */
    style: PropTypes.object,
    /**
     * Контент снэкбара
     */
    children: PropTypes.node.isRequired,
    /**
     * Контролирует видимость снэкбара
     */
    isOpened: PropTypes.bool,
    /**
     * Тип цвета снэкбара
     */
    type: PropTypes.oneOf(['main', 'primary', 'success', 'danger']),
    /**
     * Иконка
     */
    icon: PropTypes.node,
    /**
     * Кнопка действия
     */
    actionButton: PropTypes.string,
    /**
     * Позиция по оси X
     */
    positionX: PropTypes.oneOf(['left', 'center', 'right']),
    /**
     * Позиция по оси Y
     */
    positionY: PropTypes.oneOf(['top', 'bottom']),
    /**
     * Кнопка закрытия
     */
    showClose: PropTypes.bool,
    /**
     * Закрытие по клику вне
     */
    closeOnClickOutside: PropTypes.bool,
    /**
     * Таймаут авто-закрытия
     */
    autoCloseDuration: PropTypes.number,
    /**
     * Коллбек вызывающийся при нажатии на кнопку действия
     */
    onAction: PropTypes.func,
    /**
     * Коллбек вызывающийся при всех вариантах закрытия (автоматически проставляется, если используется `@provideSnackbar`)
     */
    onRequestClose: PropTypes.func,
    /**
     * Коллбек вызывающийся после закрытия
     */
    onClose: PropTypes.func,
    /**
     * Высота снэкбара
     */
    size: PropTypes.oneOf(['small', 'medium'])
  }

  static defaultProps = {
    type: 'main',
    isOpened: false,
    positionX: 'center',
    positionY: 'bottom',
    showClose: false,
    closeOnClickOutside: false,
    autoCloseDuration: 4000,
    onAction: () => {},
    onRequestClose: () => {},
    size: 'medium'
  }

  componentWillUnmount() {
    this.onWillInvisible()
  }

  onWillVisible = () => {
    if (this.props.autoCloseDuration)
      this.autoCloseTimeout = setTimeout(() => {
        this.props.onRequestClose()
      }, this.props.autoCloseDuration)
  }

  onWillInvisible = () => {
    clearTimeout(this.autoCloseTimeout)
  }

  onClickOutside = () => {
    if (this.props.isOpened) this.props.onRequestClose()
  }

  renderContent = componentRef => {
    const {
      isOpened,
      children,
      className,
      positionX,
      positionY,
      type,
      style,
      theme,
      icon,
      showClose,
      actionButton,
      onAction,
      onRequestClose,
      onClose,
      size,
      classes
    } = this.props

    return (
      <VisibilityAnimation
        isVisible={isOpened}
        animationDuration={theme.snackbar.animationDuration}
        onWillVisible={this.onWillVisible}
        onWillInvisible={this.onWillInvisible}
        onInvisible={onClose}>
        {({isVisible}) => (
          <div
            ref={componentRef}
            style={style}
            className={classnames(
              classes.snackbar,
              classes[positionX],
              classes[positionY],
              classes[type],
              size === 'small' && classes.small,
              isVisible && classes.isVisible,
              className
            )}>
            {icon && (
              <div className={classes.icon}>
                {cloneElement(icon, {
                  color: icon.props.color || theme.snackbar.colors.text
                })}
              </div>
            )}
            <div className={classes.content}>{children}</div>
            {actionButton && (
              <button
                type="button"
                className={classes.button}
                onClick={onAction}>
                {actionButton}
              </button>
            )}
            {showClose && (
              <button
                type="button"
                className={classes.close}
                onClick={onRequestClose}>
                <ClearIcon size={10} color={theme.snackbar.colors.text} />
              </button>
            )}
          </div>
        )}
      </VisibilityAnimation>
    )
  }

  render() {
    const {closeOnClickOutside} = this.props

    if (closeOnClickOutside)
      return (
        <OnClickOutside handler={this.onClickOutside}>
          {componentRef => this.renderContent(componentRef)}
        </OnClickOutside>
      )

    return this.renderContent()
  }
}

export default compose(
  zIndexStack(SNACKBAR_ZINDEX),
  renderToLayer,
  withStyles(styles, {name: 'Snackbar'})
)(Snackbar)
