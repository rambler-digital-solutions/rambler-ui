import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import pure from 'recompose/pure'
import ClearIcon from '../icons/forms/ClearIcon'
import renderToLayer from '../hoc/render-to-layer'
import zIndexStack from '../hoc/z-index-stack'
import { SNACKBAR_ZINDEX } from '../constants/z-indexes'
import { injectSheet } from '../theme'
import { fontStyleMixin, isolateMixin, middleMixin, ifDesktop } from '../style/mixins'

@pure
@zIndexStack(SNACKBAR_ZINDEX)
@renderToLayer
@injectSheet((theme) => ({
  snackbar: {
    ...isolateMixin,
    ...fontStyleMixin(theme.font),
    position: 'fixed',
    bottom: -10,
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: theme.snackbar.padding,
    width: '100%',
    height: theme.snackbar.height,
    color: theme.snackbar.color,
    fontSize: theme.snackbar.font.size,
    opacity: 0,
    transitionDuration: theme.snackbar.animationDuration,
    transitionProperty: 'bottom, opacity',
    ...ifDesktop({
      bottom: 0,
      width: 'auto',
      minWidth: 350,
      maxWidth: 750,
      borderRadius: theme.snackbar.borderRadius
    })
  },
  isVisible: {
    bottom: 0,
    opacity: 1,
    ...ifDesktop({
      bottom: 10
    })
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
    backgroundColor: theme.snackbar.background.main
  },
  primary: {
    backgroundColor: theme.snackbar.background.primary
  },
  success: {
    backgroundColor: theme.snackbar.background.success
  },
  danger: {
    backgroundColor: theme.snackbar.background.danger
  },
  icon: {
    ...middleMixin,
    marginRight: 15
  },
  content: {
    flexGrow: 1,
    textAlign: 'left',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  button: {
    boxSizing: 'border-box',
    outline: 'none',
    border: 0,
    borderRadius: theme.snackbar.borderRadius,
    height: 20,
    marginLeft: 15,
    padding: '0 10px',
    backgroundColor: 'transparent',
    color: theme.snackbar.color,
    fontSize: theme.snackbar.font.size,
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
    extend: 'button',
    ...middleMixin,
    borderRadius: '50%',
    width: 20,
    padding: 0
  }
}))
export default class Snackbar extends Component {

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
     * Коллбек вызывающийся при нажатии на кнопку действия (автоматически проставляется, если используется `@provideSnackbar`)
     */
    onAction: PropTypes.func,
    /**
     * Коллбек вызывающийся при всех вариантах закрытия (автоматически проставляется, если используется `@provideSnackbar`)
     */
    onRequestClose: PropTypes.func
  };

  static defaultProps = {
    type: 'main',
    isOpened: false,
    positionX: 'center',
    showClose: false,
    closeOnClickOutside: false,
    autoCloseDuration: 4000,
    onAction: () => {},
    onRequestClose: () => {}
  };

  status = null

  state = {
    isVisible: false
  }

  get css() {
    return this.props.sheet.classes
  }

  componentDidMount() {
    if (this.props.isOpened)
      this.delayTimeout = setTimeout(this.show, 60)
  }

  componentWillReceiveProps({ isOpened }) {
    if (isOpened !== this.props.isOpened) {
      clearTimeout(this.delayTimeout)

      if (isOpened)
        this.delayTimeout = setTimeout(this.show, 60)
      else
        this.hide()
    }
  }

  componentWillUnmount() {
    clearTimeout(this.delayTimeout)
    clearTimeout(this.autoCloseTimeout)
    clearTimeout(this.animationTimeout)
  }

  show = () => {
    if (this.status === 'showing') return
    this.status = 'showing'
    clearTimeout(this.animationTimeout)

    this.setState({
      isVisible: true
    })

    if (this.props.autoCloseDuration)
      this.autoCloseTimeout = setTimeout(() => {
        this.props.onRequestClose()
      }, this.props.autoCloseDuration)

    if (this.props.closeOnClickOutside)
      document.addEventListener('click', this.handleClickOutside)

    this.animationTimeout = setTimeout(() => {
      this.status = null
      if (this.props.onOpen) this.props.onOpen()
    }, this.props.theme.tooltip.animationDuration)
  }

  hide = () => {
    if (this.status === 'hiding') return
    this.status = 'hiding'
    clearTimeout(this.animationTimeout)

    this.setState({
      isVisible: false
    })

    if (this.props.closeOnClickOutside)
      document.removeEventListener('click', this.handleClickOutside)

    this.animationTimeout = setTimeout(() => {
      this.status = null
      clearTimeout(this.autoCloseTimeout)
      if (this.props.onClose) this.props.onClose()
    }, this.props.theme.tooltip.animationDuration)
  }

  handleClickOutside = event => {
    if (!this.snackbar.contains(event.target)) {
      event.stopPropagation()
      this.props.onRequestClose()
    }
  }

  render() {
    const { isVisible } = this.state

    const {
      children,
      className,
      positionX,
      type,
      style,
      theme,
      icon,
      showClose,
      actionButton,
      onAction,
      onRequestClose
    } = this.props

    const css = this.css

    return (
      <div
        ref={el => { this.snackbar = el }}
        style={style}
        className={classnames(css.snackbar, css[positionX], css[type], isVisible && css.isVisible, className)}>
        {icon &&
          <div className={css.icon}>
            {icon}
          </div>
        }
        <div className={css.content}>
          {children}
        </div>
        {actionButton &&
          <button type="button" className={css.button} onClick={onAction}>
            {actionButton}
          </button>
        }
        {showClose &&
          <button type="button" className={css.close} onClick={onRequestClose}>
            <ClearIcon size={10} color={theme.snackbar.color} />
          </button>
        }
      </div>
    )
  }

}
