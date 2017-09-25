import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import omit from 'lodash/omit'
import { injectSheet } from '../theme'
import { isolateMixin } from '../style/mixins'

const setThemeForSelector = (colors) => ({
  background: colors.background,
  borderColor: colors.border,
  color: colors.tick
})

@injectSheet((theme) => {
  const checkboxTheme = theme.checkbox
  const {regular, awesome} = checkboxTheme.types
  return {
    checkbox: {
      ...isolateMixin,
      fontFamily: theme.fontFamily,
      fontSize: checkboxTheme.fontSize,
      position: 'relative',
      display: 'inline-block',
      verticalAlign: 'top',
      lineHeight: checkboxTheme.size + 'px',
      cursor: 'pointer',
      userSelect: 'none',
      transition: `color ${checkboxTheme.animationDuration}ms`
    },
    isDisabled: {
      cursor: 'not-allowed',
      pointerEvents: 'none'
    },
    regular: {
      color: regular.colors.default.text,
      '&$isDisabled': {
        color: regular.colors.disabled.text
      },
      '& $fake': setThemeForSelector(regular.colors.default),
      '&$isEnabled:hover $fake': setThemeForSelector(regular.colors.hover),
      '&$isEnabled:active $fake': setThemeForSelector(regular.colors.active),
      '&$isDisabled $fake': setThemeForSelector(regular.colors.disabled),
      '&$isChecked $fake': setThemeForSelector(regular.colors.checked),
      '& $real:focus ~ $fake': setThemeForSelector(regular.colors.focus)
    },
    awesome: {
      color: awesome.colors.default.text,
      '&$isDisabled': {
        color: awesome.colors.disabled.text
      },
      '& $fake': setThemeForSelector(awesome.colors.default),
      '&$isEnabled:hover $fake': setThemeForSelector(awesome.colors.hover),
      '&&$isChecked $fake, &&$indeterminate $fake': setThemeForSelector(awesome.colors.checked),
      '&$isEnabled$isChecked:hover $fake, &$isEnabled$indeterminate:hover $fake': setThemeForSelector(awesome.colors.checkedHover),
      '&$isDisabled $fake': setThemeForSelector(awesome.colors.disabled),
      '&$isDisabled$isChecked $fake': setThemeForSelector(awesome.colors.checkedDisabled)
    },
    fake: {
      display: 'block',
      boxSizing: 'border-box',
      position: 'absolute',
      top: 3,
      width: checkboxTheme.size,
      height: checkboxTheme.size,
      borderRadius: checkboxTheme.borderRadius,
      borderStyle: 'solid',
      borderWidth: 1,
      transitionDuration: checkboxTheme.animationDuration,
      transitionProperty: 'border-color, background-color, color',
      '&:before, &:after': {
        position: 'absolute',
        content: '""',
        opacity: 0,
        transitionDuration: checkboxTheme.animationDuration
      },
      '&:before': {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        background: 'currentColor',
        height: 2,
        margin: 'auto 2px',
        transform: 'scaleX(0.4)',
        transitionProperty: 'transform, opacity'
      },
      '$indeterminate &:before': {
        opacity: 1,
        transform: 'scaleX(1)'
      },
      '&:after': {
        top: 2,
        left: 2,
        width: 9,
        height: 4,
        border: 'solid currentColor',
        borderWidth: '0 0 3px 3px',
        transform: 'rotate(-45deg) scale(0.65)',
        transformOrigin: 'left top',
        transitionProperty: 'top, opacity'
      },
      '$isChecked &:after': {
        top: 7,
        opacity: 1
      },
      '$iconright &': {
        right: 0
      },
      '$iconleft &': {
        left: 0
      }
    },
    real: {
      position: 'absolute',
      opacity: 0,
      appearance: 'none',
      pointerEvents: 'none'
    },
    label: {
      fontSize: checkboxTheme.fontSize,
      fontWeight: 'normal',
      display: 'inline-block',
      lineHeight: 1.54,
      position: 'relative',
      '$iconright &': {
        paddingRight: checkboxTheme.size + checkboxTheme.labelMargin
      },
      '$iconleft &': {
        paddingLeft: checkboxTheme.size + checkboxTheme.labelMargin
      }
    },
    isEnabled: {},
    isChecked: {},
    indeterminate: {},
    iconright: {},
    iconleft: {}
  }
})
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
     * Состояние indeterminate
     */
    indeterminate: PropTypes.bool,
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
    labelClassName: PropTypes.string,
    /**
     * Разновидность инпута
     */
    variation: PropTypes.oneOf(['regular', 'awesome'])
  };

  static defaultProps = {
    iconPosition: 'left',
    disabled: false,
    checked: false,
    indeterminate: false,
    name: '',
    variation: 'regular'
  }

  onChange = (event) => {
    if (this.props.onCheck)
      this.props.onCheck(event, this.input.checked)
  };

  componentDidMount() {
    this.input.indeterminate = this.props.indeterminate
  }

  componentDidUpdate() {
    this.input.indeterminate = this.props.indeterminate
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
      children,
      variation,
      checked,
      indeterminate,
      sheet: { classes: css },
      ...other
    } = omit(this.props, 'onCheck', 'theme')

    const resultClassName = classnames(
      className,
      css.checkbox,
      css[variation],
      css[`icon${iconPosition}`],
      disabled ? css.isDisabled : css.isEnabled,
      indeterminate ? css.indeterminate : checked && css.isChecked
    )

    return (
      <label className={resultClassName} style={style}>
        <input
          {...other}
          ref={input => { this.input = input }}
          checked={ checked }
          name={ name }
          type="checkbox"
          className={ css.real }
          disabled={ disabled }
          onChange={ this.onChange }
        />
        <span className={classnames(css.fake, checkboxClassName)} style={ checkboxStyle } />
        <span className={classnames(css.label, labelClassName)} style={ labelStyle }>
          { children }
        </span>
      </label>
    )
  }
}
