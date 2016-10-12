import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import TickIcon from '../icons/forms/TickIcon'
import { injectSheet } from '../theme'
import { fontStyleMixin } from '../style/mixins'

@injectSheet(theme => ({
  Checkbox: {
    ...fontStyleMixin(theme.font),
    isolate: true,
    oveflow: 'hidden',
    position: 'relative',
    display: 'inline-block',
    verticalAlign: 'top',
    '&__fake': {
      boxSizing: 'border-box',
      display: 'inline-block',
      width: 15,
      height: 15,
      border: '1px solid #ddd'
    },
    '&__real': {
      position: 'absolute',
      opacity: 0,
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
      width: '100%',
      height: '100%',
      cursor: 'pointer',
      zIndex: 1
    },
    '&__label': {
      float: 'right',
      cursor: 'pointer',
      fontSize: 13,
      lineHeight: '15px',
      fontWeight: 'normal'
    },
    '&__icon': {
      position: 'relative',
      left: 1,
      top: -4,
      opacity: 0
    },
    '&--iconright &__fake': {
      float: 'right',
      marginLeft: 10
    },
    '&--iconleft &__fake': {
      float: 'left',
      marginRight: 10
    },
    '&, & *': {
      transition: 'all .2s'
    },
    '&:hover &__fake': {
      borderColor: '#262626'
    },
    '&:active &__fake': {
      borderColor: '#315efb'
    },
    '&.is-checked &__icon': {
      top: -1,
      opacity: 1
    },
    '&.is-disabled': {
      pointerEvents: 'none'
    },
    '&.is-disabled &__fake': {
      background: '#eee',
      borderColor: '#eee',
      fill: '#ddd'
    },
    '&.is-disabled &__label': {
      color: 'rgba(38, 38, 38, 0.4)'
    },
    '&.is-focused &__fake': {
      borderColor: '#315efb'
    },
    '&.is-checked &__fake': {
      fill: '#315efb',
      borderColor: '#315efb'
    },
    '&:not(.is-checked):active &__fake': {
      background: '#eee',
      borderColor: '#ccc'
    }
  }
}))
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
      labelStyle,
      sheet: { classes: css }
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
        <span className={classnames(css.Checkbox__fake, checkboxClassName)} style={checkboxStyle}>
          <TickIcon className={css.Checkbox__icon} size={12} />
        </span>
        <span className={classnames(css.Checkbox__label, labelClassName)} style={labelStyle}>
          { this.props.children }
        </span>
      </div>
    )

  }
}
