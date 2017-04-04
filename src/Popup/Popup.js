/**
 * Компонент попапа
 * Скетч: * https://zpl.io/ZTWunL
 */

import React, { Component, PropTypes, cloneElement } from 'react'
import pure from 'recompose/pure'
import { injectSheet } from '../theme'
import { fontStyleMixin, isolateMixin } from '../style/mixins'

@pure
@injectSheet((theme) => ({
  popup: {
    ...isolateMixin,
    ...fontStyleMixin(theme.font)
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
     * Контент для попапа
     */
    children: PropTypes.node,
    /**
     * Заголовок
     */
    title: PropTypes.node,
    /**
     * Затемняющий слой под попапом
     */
    overlay: PropTypes.bool,
    /**
     * Контролирует видимость попапа
     */
    open: PropTypes.bool,
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
    closeOnOverlayClick: PropTypes.bool,
    /**
     * Коллбек вызывающийся после закрытия попапа
     */
    onClose: PropTypes.func
  };

  static defaultProps = {
    overlay: false,
    open: false,
    showClose: false,
    closeOnEsc: false,
    closeOnOverlayClick: false
  };

  render() {
    const { children } = this.props

    return <div>{children}</div>
  }

}

export function providePopup(Target) {
  return class extends Component {
    state = {
      open: false
    }

    closePopup() {
      this.popup = null

      this.setState({
        open: false
      })
    }

    openPopup(popup) {
      this.popup = popup

      this.setState({
        open: true
      })

      return {
        close: this.closePopup
      }
    }

    render() {
      const { open } = this.state

      const popup = open && cloneElement(this.popup, { open })

      return (
        <div>
          {popup}
          <Target {...this.props} openPopup={this.openPopup} />
        </div>
      )
    }
  }
}
