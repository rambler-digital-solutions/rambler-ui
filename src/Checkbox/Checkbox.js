import React, { Component, PropTypes, createElement } from 'react'
import css from './Checkbox.css'
import TickIcon from '../icons/forms/TickIcon'
import classnames from 'classnames'

export default class Checkbox extends Component {

  static propTypes = {
    /**
     * Имя чекбокса
     */
    name: PropTypes.string,
    /**
     * Отключение чекбокса
     */
    disabled: PropTypes.bool,
    /**
     * CSS-класс контейнера
     */
    className: PropTypes.string,
    /**
     * Стили контейнера
     */
    style: PropTypes.object,
    /**
     * C какой стороны показывать иконку
     */
    iconPosition: PropTypes.oneOf(['left', 'right']),
    /**
     * Поставить галочку изначально
     */
    checked: PropTypes.bool,
    /**
     * Колбек отрабатывающий при изменении checkbox'a
     * `onCheck(event, checked)`
     * Принимает параметры: DOM-события и флаг включения/отключения чекбокса
     */
    onCheck: PropTypes.func,
    /**
     * Стиль чекбокса (квадрат с иконкой)
     */
    checkboxStyle: PropTypes.object,
    /**
     * Класс чекбокса (квадрат с иконкой)
     */
    checkboxClassName: PropTypes.string,
    /**
     * Стиль лейбла
     */
    labelStyle: PropTypes.object,
    /**
     * Класс лейбла
     */
    labelClassName: PropTypes.string
  };

  static defaultProps = {
    iconPosition: 'left',
    disabled: false,
    name: ''
  }

  state = {
    checked: false,
    focused: false
  };

  onChange = (event) => {
    const checked = this.refs.input.checked
    this.setState({ checked })
    if (this.props.onCheck)
      this.props.onCheck(event, checked)
  };

  onFocus = () => {
    this.setFocused(true)
  };

  onBlur = () => {
    this.setFocused(false)
  };

  componentWillMount() {
    this.setChecked(this.props.checked)
  }

  componentWillReceiveProps(nextProps) {
    this.setChecked(nextProps.checked)
  }

  setChecked(checked) {
    this.checked = checked
    this.setState({ checked })
  }

  setFocused(focused) {
    this.focused = focused
    this.setState({ focused })
  }

  render() {

    const {
      name,
      style,
      disabled,
      iconPosition,
      className,
      checkboxClassName,
      checkboxStyle,
      labelClassName,
      labelStyle
    } = this.props
    const { checked = false, focused } = this.state
    const stateClasses = {
      [css['is-focused']]: focused,
      [css['is-checked']]: checked,
      [css['is-disabled']]: disabled
    }
    const resultClassName = classnames(css.Checkbox, className, css[`Checkbox--icon${iconPosition}`], stateClasses)
    return (
      <div className={resultClassName} style={style}>
        <input
          ref="input"
          checked={checked}
          name={name}
          type="checkbox"
          className={css.Checkbox__real}
          disabled={disabled}
          onChange={this.onChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur} />
        <span className={classnames(css.Checkbox__fake, css.checkboxClassName)} style={checkboxStyle}>
          <TickIcon className={css.Checkbox__icon} size={12} />
        </span>
        <span className={classnames(css.Checkbox__label, css.labelClassName)} style={labelStyle}>
          { this.props.children }
        </span>
      </div>
    )

  }
}
