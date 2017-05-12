import React, { Component, PropTypes } from 'react'
import {
  unmountComponentAtNode,
  unstable_renderSubtreeIntoContainer as renderSubtreeIntoContainer // eslint-disable-line camelcase
} from 'react-dom'
import classnames from 'classnames'
import pure from 'recompose/pure'
import ClearIcon from '../icons/forms/ClearIcon'
import zIndexStack from '../hoc/z-index-stack'
import { SNACKBAR_ZINDEX } from '../constants/z-indexes'
import { injectSheet } from '../theme'
import { fontStyleMixin, isolateMixin, middleMixin, ifDesktop } from '../style/mixins'

@pure
@zIndexStack(SNACKBAR_ZINDEX)
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
    height: theme.sizes.medium.height,
    color: theme.snackbar.color,
    fontSize: theme.snackbar.font.size,
    opacity: 0,
    transitionDuration: theme.snackbar.animationDuration,
    transitionProperty: 'bottom, opacity',
    ...ifDesktop({
      width: 'auto',
      minWidth: 350,
      maxWidth: 750,
      borderRadius: theme.snackbar.borderRadius
    })
  },
  visible: {
    bottom: 0,
    opacity: 1
  },
  left: {
    left: 0
  },
  center: {
    left: '50%',
    transform: 'translateX(-50%)'
  },
  right: {
    right: 0
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
    onRequestClose: PropTypes.func,
    /**
     * Коллбек вызывающийся при монтировании/размонтировании контейнера
     */
    containerRef: PropTypes.func
  };

  static defaultProps = {
    type: 'main',
    isOpened: false,
    positionX: 'center',
    showClose: false,
    closeOnClickOutside: false,
    autoCloseDuration: 4000,
    onAction: () => {},
    onRequestClose: () => {},
    containerRef: () => {}
  };

  status = null

  state = {
    visible: false
  }

  get css() {
    return this.props.sheet.classes
  }

  componentDidMount() {
    if (this.props.isOpened) this.show()
  }

  componentDidUpdate(prevProps, prevState) {
    const { isOpened } = this.props

    if (isOpened !== prevProps.isOpened)
      if (isOpened)
        this.show()
      else
        this.hide()

    else if (isOpened || this.state.visible !== prevState.visible)
      this.renderPortal()
  }

  componentWillUnmount() {
    clearTimeout(this.delayTimeout)
    clearTimeout(this.autoCloseTimeout)
    clearTimeout(this.animationTimeout)
    this.unrenderPortal()
  }

  show = () => {
    this.renderPortal()
    if (this.status === 'showing') return
    this.status = 'showing'
    clearTimeout(this.animationTimeout)

    if (this.state.visible === false) {
      this.delayTimeout = setTimeout(() => {
        this.setState({
          visible: true
        })
      }, 60)

      if (this.props.autoCloseDuration)
        this.autoCloseTimeout = setTimeout(() => {
          this.props.onRequestClose()
        }, this.props.autoCloseDuration)
    }

    this.animationTimeout = setTimeout(() => {
      this.status = null
    }, this.props.theme.tooltip.animationDuration)
  }

  hide = () => {
    if (this.status === 'hiding') return
    this.status = 'hiding'
    clearTimeout(this.animationTimeout)

    this.setState({
      visible: false
    })

    this.animationTimeout = setTimeout(() => {
      this.status = null
      clearTimeout(this.delayTimeout)
      clearTimeout(this.autoCloseTimeout)
      this.unrenderPortal()
    }, this.props.theme.tooltip.animationDuration)
  }

  renderPortal() {
    if (!this.node) {
      this.node = document.createElement('div')
      this.node.style.position = 'absolute'
      this.node.style.zIndex = this.props.zIndex
      document.body.appendChild(this.node)
      this.props.containerRef(this.node)

      if (this.props.closeOnClickOutside)
        document.addEventListener('click', this.handleClickOutside)
    }

    renderSubtreeIntoContainer(
      this,
      this.renderSnackbar(),
      this.node
    )
  }

  unrenderPortal() {
    if (this.node) {
      unmountComponentAtNode(this.node)
      document.body.removeChild(this.node)
      this.node = null
      this.props.containerRef()

      if (this.props.closeOnClickOutside)
        document.removeEventListener('click', this.handleClickOutside)
    }
  }

  handleClickOutside = event => {
    if (!this.snackbar.contains(event.target)) {
      event.stopPropagation()
      this.props.onRequestClose()
    }
  }

  renderSnackbar() {
    const { visible } = this.state

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
        className={classnames(css.snackbar, css[positionX], css[type], visible && css.visible, className)}>
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

  render() {
    return null
  }

}
