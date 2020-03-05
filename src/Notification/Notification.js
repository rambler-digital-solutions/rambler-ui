import React, {PureComponent} from 'react'
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
  notification: {
    extend: isolateMixin,
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
  marginAtClose: {
    marginRight: 25
  },
  title: {
    extend: middleMixin,
    fontSize: theme.notification.titleSize,
    fontWeight: 500,
    marginBottom: 10
  },
  icon: {
    extend: middleMixin,
    display: 'inline-block',
    borderRadius: '50%',
    marginRight: 10,
    width: 39,
    height: 39,
    backgroundColor: theme.notification.colors.iconBackground,
    textAlign: 'center'
  },
  body: {
    lineHeight: theme.notification.lineHeight
  },
  actionButton: {
    extend: middleMixin,
    boxSizing: 'border-box',
    outline: 'none',
    border: 0,
    margin: 0,
    marginTop: 10,
    padding: 0,
    height: 20,
    backgroundColor: 'transparent',
    color: theme.notification.actionButton.colors.default,
    fontSize: theme.notification.actionButton.fontSize,
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
    position: 'absolute',
    top: 15,
    right: 15,
    boxSizing: 'border-box',
    outline: 'none',
    border: 0,
    borderRadius: '50%',
    height: 15,
    width: 15,
    lineHeight: 0,
    padding: 0,
    backgroundColor: 'transparent',
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
    },
    '& ~ $title, & ~ $body': {
      marginRight: 25
    }
  }
})

class Notification extends PureComponent {
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
    title: PropTypes.node,
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
  }

  static defaultProps = {
    isOpened: false,
    positionX: 'right',
    showClose: true,
    closeOnClickOutside: false,
    onAction: () => {},
    onRequestClose: () => {}
  }

  onClickOutside = () => {
    if (this.state.isVisible) this.props.onRequestClose()
  }

  renderContent = componentRef => {
    const {
      isOpened,
      className,
      positionX,
      style,
      theme,
      classes,
      icon,
      title,
      body,
      showClose,
      actionButton,
      onAction,
      onRequestClose,
      onClose
    } = this.props

    return (
      <VisibilityAnimation
        isVisible={isOpened}
        animationDuration={theme.notification.animationDuration}
        onInvisible={onClose}>
        {({isVisible}) => (
          <div
            ref={componentRef}
            style={style}
            className={classnames(
              classes.notification,
              classes[positionX],
              isVisible && classes.isVisible,
              className
            )}>
            {showClose && (
              <button
                type="button"
                className={classes.close}
                onClick={onRequestClose}>
                <ClearIcon size={9} color={theme.notification.colors.close} />
              </button>
            )}
            {title && (
              <div className={classes.title}>
                {icon && <div className={classes.icon}>{icon}</div>}
                {title}
              </div>
            )}
            <div className={classes.body}>{body}</div>
            {actionButton && (
              <button
                type="button"
                className={classes.actionButton}
                onClick={onAction}>
                {actionButton}
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
  withStyles(styles, {name: 'Notification'})
)(Notification)
