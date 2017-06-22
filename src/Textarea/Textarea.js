/**
 * Компонент Textarea
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import pure from 'recompose/pure'
import Input from '../Input'

@pure
export default class Textarea extends Component {

  static propTypes = {
    /**
     *  Значение поля
     */
    value: PropTypes.any.isRequired,
    /**
     *  Значение placeholder
     */
    placeholder: PropTypes.string,
    /**
     * Отключаем элемент
     */
    disabled: PropTypes.bool,
    /**
     * Имя элемента
     */
    name: PropTypes.string,
    /**
     * Задает нижнюю границу определенного цвета, например, для обозначения статуса валидации
     */
    status: PropTypes.oneOf([
      'error',
      'warning',
      'success',
      null
    ]),
    /**
     * Класс контейнера
     */
    className: PropTypes.string,
    /**
     * Стили для контейнера
     */
    style: PropTypes.object,
    /**
     * Класс для textarea
     */
    textareaClassName: PropTypes.string,
    /**
     * Стили для textarea
     */
    textareaStyle: PropTypes.object,
    /**
     * Обработик изменения значения поля, возвращает event и текущее value
     */
    onChange: PropTypes.func.isRequired,
    /**
     * Обработчик потери фокуса
     */
    onBlur: PropTypes.func,
    /**
     * Обработчик фокуса
     */
    onFocus: PropTypes.func,
    /**
     * Обрабочик отжатия клавиши
     */
    onKeyUp: PropTypes.func,
    /**
     * Обработчик нажания клавиши
     */
    onKeyDown: PropTypes.func
  };

  render() {
    const {
      textareaStyle,
      textareaClassName,
      ...other
    } = this.props
    return <Input inputStyle={textareaStyle} inputClassName={textareaClassName} tag="textarea" {...other} />
  }
}
