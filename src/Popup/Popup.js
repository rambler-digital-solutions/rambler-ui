/**
 * Компонент попапа
 * Скетч: * https://zpl.io/ZTWunL
 */

import React, { Component, PropTypes } from 'react'
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
     * Кнопка успешного действия
     */
    okButton: PropTypes.node,
    /**
     * Кнопка отмены
     */
    cancelButton: PropTypes.node,
    /**
     * Кнопка закрытия окна
     */
    showClose: PropTypes.bool
  };

  static defaultProps = {
    showClose: false
  };

  render() {
    const { children } = this.props

    return <div>{children}</div>
  }

}

export function providePopup(Target) {
  return class extends Component {
    openPopup() {

    }

    render() {
      return <Target {...this.props} openPopup={this.openPopup} />
    }
  }
}
