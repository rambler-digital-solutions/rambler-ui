/**
 * Компонент Input
 */
import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import omit from 'lodash/omit'
import { injectSheet } from '../theme'
import { fontStyleMixin, isolateMixin } from '../style/mixins'

@injectSheet(theme => ({
  normal: {
    ...isolateMixin,
    ...fontStyleMixin(theme.font),
    boxSizing: 'border-box',
    display: 'block',
    border: '1px solid #e8e8e8',
    borderRadius: 0,
    outline: 0,
    padding: '11px 14px',
    width: '100%',
    height: '44px',
    background: 'var(--mainBackground);.!!!!!!!',
    fontFamily: 'var(--fontFamily),',
    fontSize: '1rem',
    fontWeight: 400,
    appearance: 'none',
    transition: 'border-color 0.1s ease',
    '&::placeholder': {
      color: '#aebbc9'
    },
    '&::-ms-reveal': {
      display: 'none'
    },
    '&:disabled': {
      background: 'color(var(--mainBackground) shade(3%))!!!!!!',
      cursor: 'default'
    },
    '&:focus': {
      borderBottom: '2px solid var(--primaryForeground);!!!!!!!!!!',
      paddingBottom: '10px'
    }
  }
}))

export default class Input extends Component {

  static propTypes = {
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
    // /**
    //  * Объект со стилями для error
    //  */
    // errorStyle: PropTypes.object,
    // /**
    //  * Текст ошибки
    //  */
    // errorText: PropTypes.node,
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
     *  Значение введённое в поле
     */
    value: PropTypes.any,
    /**
     *  Значение placeholder для input
     */
    placeholder: PropTypes.string
  }

  componentDidMount() {
    if (typeof this.props.defaultValue === 'string' && !!this.props.defaultValue)
      this.refs.input.value = this.props.defaultValue
  }
  onChange = event => {
    console.log(event.target.value)
  }

  render() {
    const {
      className,
      // defaultValue,
      disabled,
      // fullWidth,
      inputStyle,
      name,
      onBlur,
      // onChange,
      onFocus,
      onKeyUp,
      onKeyDown,
      style,
      type = 'text',
      // value,
      placeholder,
      sheet: { classes: css }
    } = omit(this.props, 'theme')

    // const fullWidthInput = !!fullWidth
    const resultClassName = classnames(css.normal, className)
    return (
      <div style={style}>
        <input
          ref='input'
          className={resultClassName}
          disabled={disabled}
          style={inputStyle}
          name={name}
          onBlur={onBlur}
          onChange={this.onChange}
          onFocus={onFocus}
          onKeyUp={onKeyUp}
          onKeyDown={onKeyDown}
          type={type || 'text'}
          tabIndex='0'
          placeholder={placeholder || ''} />
      </div>
    )
  }
}
