import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import pure from 'recompose/pure'
import IconButton from '../IconButton'
import ClearIcon from '../icons/forms/ClearIcon'
import ChevronRightIcon from '../icons/forms/ChevronRightIcon'
import renderToLayer from '../hoc/render-to-layer'
import zIndexStack from '../hoc/z-index-stack'
import { SNACKBAR_ZINDEX } from '../constants/z-indexes'
import { injectSheet } from '../theme'
import { fontStyleMixin, isolateMixin, middleMixin, ifDesktop } from '../style/mixins'

@pure
@zIndexStack(SNACKBAR_ZINDEX)
@renderToLayer
@injectSheet((theme) => ({
  notification: {
    ...isolateMixin,
    ...fontStyleMixin(theme.font),
    position: 'fixed',
    left: 15,
    right: 15,
    bottom: 5,
    boxSizing: 'border-box',
    boxShadow: theme.notification.boxShadow,
    padding: theme.notification.padding,
    backgroundColor: theme.notification.background,
    color: theme.notification.color,
    fontSize: theme.notification.font.size,
    opacity: 0,
    transitionDuration: theme.notification.animationDuration,
    transitionProperty: 'bottom, opacity',
    ...ifDesktop({
      width: 335,
      borderRadius: theme.notification.borderRadius
    })
  },
  isVisible: {
    bottom: 15,
    opacity: 1
  },
  ...ifDesktop({
    left: {
      right: 'auto'
    },
    center: {
      left: '50%',
      right: 'auto',
      transform: 'translateX(-50%)'
    },
    right: {
      left: 'auto',
      right: 15
    }
  }),
  title: {
    ...middleMixin,
    fontSize: theme.notification.titleSize,
    fontWeight: 500
  },
  icon: {
    ...middleMixin,
    display: 'inline-block',
    borderRadius: '50%',
    marginRight: 10,
    width: 39,
    height: 39,
    backgroundColor: '#eef2f4',
    textAlign: 'center'
  },
  body: {
    marginTop: 10
  },
  actionButton: {
    ...middleMixin,
    boxSizing: 'border-box',
    outline: 'none',
    border: 0,
    margin: 0,
    marginTop: 12,
    padding: 0,
    height: 20,
    backgroundColor: 'transparent',
    color: theme.button.types.primary.defaultBg,
    fontSize: theme.notification.font.size,
    fontWeight: 500,
    cursor: 'pointer',
    transitionDuration: theme.notification.animationDuration,
    transitionProperty: 'color',
    '&:hover:not(:active)': {
      color: theme.button.types.primary.hoverBg
    },
    '&:focus:not(:active)': {
      color: theme.button.types.primary.focusBg
    },
    '&:active': {
      color: theme.button.types.primary.activeBg
    },
    '& svg': {
      marginLeft: 7
    }
  },
  close: {
    position: 'absolute !important',
    top: 13,
    right: 13
  }
}))
export default class Notification extends Component {

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
     * Контролирует видимость уведомления
     */
    isOpened: PropTypes.bool,
    /**
     * Иконка
     */
    icon: PropTypes.node,
    /**
     * Тайтл
     */
    title: PropTypes.node.isRequired,
    /**
     * Сообщение
     */
    body: PropTypes.node.isRequired,
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
     * Коллбек вызывающийся при нажатии на кнопку действия
     */
    onAction: PropTypes.func,
    /**
     * Коллбек вызывающийся при всех вариантах закрытия (автоматически проставляется, если используется `@provideNotification`)
     */
    onRequestClose: PropTypes.func
  };

  static defaultProps = {
    isOpened: false,
    positionX: 'right',
    showClose: true,
    closeOnClickOutside: false,
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
    clearTimeout(this.animationTimeout)
  }

  show = () => {
    if (this.status === 'showing') return
    this.status = 'showing'
    clearTimeout(this.animationTimeout)

    this.setState({
      isVisible: true
    })

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
      if (this.props.onClose) this.props.onClose()
    }, this.props.theme.tooltip.animationDuration)
  }

  handleClickOutside = event => {
    if (!this.notification.contains(event.target)) {
      event.stopPropagation()
      this.props.onRequestClose()
    }
  }

  render() {
    const { isVisible } = this.state

    const {
      className,
      positionX,
      style,
      theme,
      icon,
      title,
      body,
      showClose,
      actionButton,
      onAction,
      onRequestClose
    } = this.props

    const css = this.css

    return (
      <div
        ref={el => { this.notification = el }}
        style={style}
        className={classnames(css.notification, css[positionX], isVisible && css.isVisible, className)}>
        {showClose &&
          <IconButton
            type="flat"
            buttonType="button"
            size="small"
            className={css.close}
            onClick={onRequestClose}>
            <ClearIcon color={theme.notification.closeColor} />
          </IconButton>
        }
        <div className={css.title}>
          {icon &&
            <div className={css.icon}>
              {icon}
            </div>
          }
          {title}
        </div>
        <div className={css.body}>
          {body}
        </div>
        {actionButton &&
          <button type="button" className={css.actionButton} onClick={onAction}>
            {actionButton}
            <ChevronRightIcon size={9} color={theme.button.types.primary.defaultBg} />
          </button>
        }
      </div>
    )
  }

}
