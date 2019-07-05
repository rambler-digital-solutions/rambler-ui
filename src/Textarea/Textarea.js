/**
 * Компонент Textarea
 */
import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import Input from '../Input'

export default class Textarea extends PureComponent {
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
     * Задает нижнюю границу определенного цвета, например, для обозначения статуса валидации
     */
    status: PropTypes.oneOf(['error', 'warning', 'success', null]),
    /**
     * Разновидность textarea
     */
    variation: PropTypes.oneOf(['regular', 'awesome', 'promo']),
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
    onChange: PropTypes.func
  }

  static defaultProps = {
    variation: 'awesome'
  }

  render() {
    const {textareaStyle, textareaClassName, ...other} = this.props
    return (
      <Input
        inputStyle={textareaStyle}
        inputClassName={textareaClassName}
        tag="textarea"
        {...other}
      />
    )
  }
}
