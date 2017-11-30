import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import pure from 'recompose/pure'
import IconButton from '../IconButton'
import ClearIcon from '../icons/forms/ClearIcon'
import ChevronRightIcon from '../icons/forms/ChevronRightIcon'
import VisibilityAnimation from '../VisibilityAnimation'
import OnClickOutside from '../events/OnClickOutside'
import renderToLayer from '../hoc/render-to-layer'
import zIndexStack from '../hoc/z-index-stack'
import { SNACKBAR_ZINDEX } from '../constants/z-indexes'
import { injectSheet } from '../theme'
import { isolateMixin, middleMixin, ifDesktop } from '../style/mixins'

@pure
@zIndexStack(SNACKBAR_ZINDEX)
@renderToLayer
@injectSheet(theme => ({
  notification: {
    ...isolateMixin,
    fontFamily: theme.fontFamily,
    position: 'fixed',
    left: 15,
    right: 15,
    bottom: 5,
    boxSizing: 'border-box',
    boxShadow: theme.notification.boxShadow,
    padding: theme.notification.padding,
    backgroundColor: theme.notification.colors.background,
    color: theme.notification.colors.text,
    fontSize: theme.notification.fontSize,
    opacity: 0,
    transitionDuration: theme.notification.animationDuration,
    transitionProperty: 'bottom, opacity',
    ...ifDesktop({
      width: 335,
      borderRadius: theme.notification.borderRadius
    })
  },
  ...ifDesktop({
    left: {
      right: 'auto'
    },
    right: {
      left: 'auto',
      right: 15
    }
  }),
  isVisible: {
    bottom: 15,
    opacity: 1
  },
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
    backgroundColor: theme.notification.colors.iconBackground,
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
    color: theme.notification.actionButton.colors.default,
    fontSize: theme.notification.actionButton.fontSize,
    fontWeight: 500,
    cursor: 'pointer',
    transitionDuration: theme.notification.animationDuration,
    transitionProperty: 'color',
    '&:hover:not(:active)': {
      color: theme.notification.actionButton.colors.hover
    },
    '&:active': {
      color: theme.notification.actionButton.colors.active
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
    positionX: PropTypes.oneOf(['left', 'right']),
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

  get css() {
    return this.props.classes
  }

  onClickOutside = () => {
    if (this.state.isVisible)
      this.props.onRequestClose()
  }

  render() {
    const {
      isOpened,
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
      onRequestClose,
      closeOnClickOutside,
      onClose
    } = this.props

    const css = this.css

    const content = (
      <VisibilityAnimation
        isVisible={isOpened}
        activeClassName={css.isVisible}
        animationDuration={theme.notification.animationDuration}
        onInvisible={onClose}>
        <div
          style={style}
          className={classnames(css.notification, css[positionX], className)}>
          {showClose &&
            <IconButton
              type="flat"
              buttonType="button"
              size="small"
              className={css.close}
              onClick={onRequestClose}>
              <ClearIcon color={theme.notification.colors.close} />
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
              <ChevronRightIcon size={9} color={theme.notification.actionButton.colors.default} />
            </button>
          }
        </div>
      </VisibilityAnimation>
    )

    if (closeOnClickOutside)
      return (
        <OnClickOutside handler={this.onClickOutside}>
          {content}
        </OnClickOutside>
      )

    return content
  }

}
