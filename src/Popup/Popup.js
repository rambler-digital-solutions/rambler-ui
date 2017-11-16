/**
 * Компонент попапа
 * Скетч: * https://zpl.io/ZTWunL
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import pure from 'recompose/pure'
import IconButton from '../IconButton'
import ClearIcon from '../icons/forms/ClearIcon'
import VisibilityAnimation from '../VisibilityAnimation'
import renderToLayer from '../hoc/render-to-layer'
import zIndexStack from '../hoc/z-index-stack'
import OnClickOutside from '../events/OnClickOutside'
import { ESCAPE } from '../constants/keys'
import { POPUP_ZINDEX } from '../constants/z-indexes'
import { injectSheet } from '../theme'
import { isolateMixin, middleMixin, ifDesktop } from '../style/mixins'

@pure
@zIndexStack(POPUP_ZINDEX)
@renderToLayer
@injectSheet(theme => ({
  backdrop: {
    ...isolateMixin,
    ...middleMixin,
    fontFamily: theme.fontFamily,
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: theme.popup.colors.backdrop,
    textAlign: 'center',
    overflowY: 'auto',
    overflowX: 'hidden',
    marginTop: -10,
    opacity: 0,
    transitionDuration: theme.popup.animationDuration,
    transitionProperty: 'margin-top, opacity'
  },
  isVisible: {
    marginTop: 0,
    opacity: 1
  },
  popup: {
    position: 'relative',
    display: 'inline-block',
    boxSizing: 'border-box',
    borderRadius: theme.popup.borderRadius,
    boxShadow: theme.popup.boxShadow,
    padding: '25px 30px 30px',
    color: theme.popup.colors.text,
    minWidth: 300,
    maxWidth: 'calc(100% - 20px)',
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: theme.popup.colors.background,
    fontSize: theme.popup.font.textSize,
    textAlign: 'left',
    ...ifDesktop({
      minWidth: 350,
      maxWidth: 'auto'
    })
  },
  title: {
    marginBottom: 20,
    paddingRight: 25,
    fontSize: theme.popup.font.titleSize,
    fontWeight: 500,
    lineHeight: 1.34
  },
  close: {
    position: 'absolute !important',
    top: 18,
    right: 23
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 30,
    '& > *': {
      flexGrow: 1,
      width: '50%'
    },
    '& > * + *': {
      marginLeft: 10,
      ...ifDesktop({
        marginLeft: 20
      })
    }
  }
}))
export default class Popup extends Component {

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
     * Css-класс для фонового слоя
     */
    backdropClassName: PropTypes.string,
    /**
     * Inline-стили для фонового слоя
     */
    backdropStyle: PropTypes.object,
    /**
     * Контент для попапа
     */
    children: PropTypes.node,
    /**
     * Заголовок
     */
    title: PropTypes.node,
    /**
     * Контролирует видимость попапа
     */
    isOpened: PropTypes.bool,
    /**
     * Кнопка успешного действия (если она одна, то будет расятнута на все ширину)
     */
    okButton: PropTypes.node,
    /**
     * Кнопка отмены
     */
    cancelButton: PropTypes.node,
    /**
     * Кнопка закрытия попапа
     */
    showClose: PropTypes.bool,
    /**
     * Закрытие попапа кнопкой esc
     */
    closeOnEsc: PropTypes.bool,
    /**
     * Закрытие попапа по клику вне него
     */
    closeOnClickOutside: PropTypes.bool,
    /**
     * Коллбек вызывающийся после открытия попапа
     */
    onOpen: PropTypes.func,
    /**
     * Коллбек вызывающийся при нажатии на крестик (автоматически проставляется, если используется `@providePopup`)
     */
    onRequestClose: PropTypes.func,
    /**
     * Коллбек вызывающийся после закрытия попапа
     */
    onClose: PropTypes.func
  };

  static defaultProps = {
    isOpened: false,
    showClose: true,
    closeOnEsc: true,
    closeOnClickOutside: true,
    onOpen: () => {},
    onRequestClose: () => {},
    onClose: () => {}
  };

  get css() {
    return this.props.sheet.classes
  }

  componentWillUnmount() {
    this.onWillInvisible()
  }

  onWillVisible = () => {
    if (this.props.closeOnEsc)
      window.addEventListener('keydown', this.onKeyDown)
  }

  onWillInvisible = () => {
    if (this.props.closeOnEsc)
      window.removeEventListener('keydown', this.onKeyDown)
  }

  onKeyDown = (event) => {
    if (event.keyCode === ESCAPE) this.props.onRequestClose()
  }

  renderContent() {
    const {
      children,
      className,
      style,
      title,
      showClose,
      okButton,
      cancelButton,
      onRequestClose,
      theme,
      closeOnClickOutside
    } = this.props

    const content = (
      <div
        style={style}
        className={classnames(this.css.popup, className)}>
        {showClose &&
          <IconButton
            type="flat"
            buttonType="button"
            size="small"
            className={this.css.close}
            onClick={onRequestClose}>
            <ClearIcon color={theme.popup.closeColor} />
          </IconButton>
        }
        {title &&
          <header className={this.css.title}>
            {title}
          </header>
        }
        {children}
        {(okButton || cancelButton) &&
          <footer className={this.css.buttons}>
            {okButton}
            {cancelButton}
          </footer>
        }
      </div>
    )

    if (closeOnClickOutside)
      return (
        <OnClickOutside handler={onRequestClose}>
          {content}
        </OnClickOutside>
      )

    return content
  }

  render() {
    const {
      isOpened,
      backdropClassName,
      backdropStyle,
      theme,
      onOpen,
      onClose
    } = this.props

    return (
      <VisibilityAnimation
        isVisible={isOpened}
        activeClassName={this.css.isVisible}
        animationDuration={theme.popup.animationDuration}
        onWillVisible={this.onWillVisible}
        onVisible={onOpen}
        onWillInvisible={this.onWillInvisible}
        onInvisible={onClose}>
        <div
          ref={(el) => { this.backdrop = el }}
          style={backdropStyle}
          className={classnames(this.css.backdrop, backdropClassName)}>
          {this.renderContent()}
        </div>
      </VisibilityAnimation>
    )
  }

}
