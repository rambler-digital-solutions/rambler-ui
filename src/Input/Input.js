/**
 * Компонент Input
 */
import React, { Component, PropTypes } from 'react'

class Input extends Component {

  static propTypes = {
    /**
     * Подумать зачем нужны и нужны ли?
     */
    children: PropTypes.node,
    /**
     * Класс компонента
     */
    className: PropTypes.string,
    /**
     * Значение input по умолчанию
     */
    defaultValue: PropTypes.any,
    /**
     * Дизэйбл если true
     */
    disabled: PropTypes.bool,
    /**
     * Объект со стилями для error
     */
    errorStyle: PropTypes.object,
    /**
     * Текст ошибки
     */
    errorText: PropTypes.node,
    /**
     * Расположение label = left или rigth
     */
    labelFloat: PropTypes.oneOf(['left', 'right']),
    /**
     * true занимать всю ширину родитесльского элемента
     */
    fullWidth: PropTypes.bool,
    /**
     * Переопределение стандартных стилей input
     */
    inputStyle: PropTypes.object,
    /**
     * Имя элемента
     */
    name: PropTypes.string,
    /**
     * Callback onBlur
     */
    onBlur: PropTypes.func,
    /**
     * Callback onChange
     */
    onChange: PropTypes.func,
    /**
     * Callback onChange
     */
    onFocus: PropTypes.func,
    /**
     * Callback onKeyUp
     */
    onKeyUp: PropTypes.number,
    /**
     * Callback onKeyDown
     */
    onKeyDown: PropTypes.number,
    /**
     * Переопределение стилей контейнера для input
     */
    style: PropTypes.object,
    /**
     * Тип поля
     */
    type: PropTypes.string,
    /**
     * underline стили, хз надо или нет.
     */
    underlineDisabledStyle: PropTypes.object,
    /**
     * То же самое для состояния focus
     */
    underlineFocusStyle: PropTypes.object,
    /**
     * Переопределение underline
     */
    underlineStyle: PropTypes.object,
    /**
     *  Значение введённое в поле
     */
    value: PropTypes.any
  }

  render() {
    return (
      <div>
        <label>
          <span>Какой-то текст</span>
          <input type='text' />
        </label>
      </div>
    )
  }
}

export default Input
