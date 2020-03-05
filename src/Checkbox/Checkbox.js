import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TickIcon from './TickIcon'
import TickIconSmall from './TickIconSmall'
import {isolateMixin, focusSourceMixin} from '../utils/mixins'
import {withStyles} from '../theme'
import '../utils/focus-source'

const setThemeForSelector = colors => ({
  background: colors.background,
  borderColor: colors.border,
  color: colors.tick
})

const tickStyle = {
  fill: null,
  width: null,
  height: null
}

const styles = theme => {
  const checkboxTheme = theme.checkbox
  const {regular, awesome} = checkboxTheme.types
  return {
    checkbox: {
      extend: isolateMixin,
      fontFamily: theme.fontFamily,
      fontSize: checkboxTheme.fontSize,
      position: 'relative',
      display: 'inline-block',
      verticalAlign: 'top',
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
      ...focusSourceMixin(
        'other',
        '& $real:focus ~ $fake',
        setThemeForSelector(regular.colors.focus)
      )
    },
    awesome: {
      color: awesome.colors.default.text,
      '&$isDisabled': {
        color: awesome.colors.disabled.text
      },
      '& $fake': setThemeForSelector(awesome.colors.default),
      '&$isEnabled:hover $fake': setThemeForSelector(awesome.colors.hover),
      '&$isEnabled$isChecked $fake, &&$indeterminate $fake': setThemeForSelector(
        awesome.colors.checked
      ),
      '&$isEnabled$isChecked:hover $fake, &$isEnabled$indeterminate:hover $fake': setThemeForSelector(
        awesome.colors.checkedHover
      ),
      '&$isDisabled $fake': setThemeForSelector(awesome.colors.disabled)
    },
    fake: {
      display: 'block',
      boxSizing: 'border-box',
      position: 'absolute',
      borderRadius: checkboxTheme.borderRadius,
      borderStyle: 'solid',
      borderWidth: 1,
      lineHeight: 0,
      transitionDuration: checkboxTheme.animationDuration,
      transitionProperty: 'border-color, background-color, color',
      '&:before': {
        position: 'absolute',
        content: '""',
        opacity: 0,
        top: 0,
        right: 0,
        bottom: 0.5,
        left: 0,
        background: 'currentColor',
        height: 2,
        margin: 'auto 2px',
        borderRadius: 1,
        transform: 'scaleX(0.4)',
        transitionDuration: checkboxTheme.animationDuration,
        transitionProperty: 'transform, opacity'
      },
      '$indeterminate &:before': {
        opacity: 1,
        transform: 'scaleX(1)'
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
      display: 'inline-block'
    },
    tick: {
      position: 'absolute',
      fill: 'currentColor',
      opacity: 0,
      transitionDuration: checkboxTheme.animationDuration,
      transitionProperty: 'transform, opacity',
      '$isChecked &': {
        opacity: 1
      }
    },
    isEnabled: {},
    isChecked: {},
    indeterminate: {},
    iconright: {},
    iconleft: {},
    ...['medium', 'small'].reduce(
      (result, size) => ({
        ...result,
        [size]: {
          '&$checkbox': {
            lineHeight: checkboxTheme.sizes[size].size + 'px'
          },
          '& $fake': {
            top:
              size === 'small'
                ? Math.round(
                  (checkboxTheme.sizes[size].lineHeight -
                      checkboxTheme.sizes[size].size) /
                      2
                )
                : Math.round(
                  (checkboxTheme.sizes[size].lineHeight -
                      checkboxTheme.sizes[size].size) /
                      2
                ) - 1,
            width: checkboxTheme.sizes[size].size,
            height: checkboxTheme.sizes[size].size
          },
          '& $tick': {
            top:
              Math.round(
                (checkboxTheme.sizes[size].size -
                  checkboxTheme.sizes[size].tickSize) /
                  2
              ) - 1,
            left:
              Math.round(
                (checkboxTheme.sizes[size].size -
                  checkboxTheme.sizes[size].tickSize) /
                  2
              ) - 1,
            width: checkboxTheme.sizes[size].tickSize,
            height: checkboxTheme.sizes[size].tickSize,
            transform:
              size === 'small'
                ? `translateY(-${checkboxTheme.sizes[size].tickSize * 0.3}px)`
                : `translateY(-${checkboxTheme.sizes[size].tickSize * 0.5}px)`,
            '$isChecked&': {
              transform: 'translateY(0)'
            }
          },
          '& $label': {
            lineHeight: checkboxTheme.sizes[size].lineHeight + 'px',
            '$iconright&': {
              paddingRight:
                checkboxTheme.sizes[size].size +
                checkboxTheme.sizes[size].labelMargin
            },
            '$iconleft&': {
              paddingLeft:
                checkboxTheme.sizes[size].size +
                checkboxTheme.sizes[size].labelMargin
            }
          }
        }
      }),
      {}
    )
  }
}

class Checkbox extends PureComponent {
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
    variation: PropTypes.oneOf(['regular', 'awesome']),
    /**
     * Размер чекбокса
     */
    size: PropTypes.oneOf(['small', 'medium'])
  }

  static defaultProps = {
    iconPosition: 'left',
    disabled: false,
    checked: false,
    indeterminate: false,
    name: '',
    variation: 'regular',
    size: 'medium'
  }

  onChange = event => {
    if (this.props.onCheck) this.props.onCheck(event, this.input.checked)
  }

  componentDidMount() {
    if (this.input) this.input.indeterminate = this.props.indeterminate
  }

  componentDidUpdate() {
    if (this.input) this.input.indeterminate = this.props.indeterminate
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
      size,
      checked,
      indeterminate,
      classes,
      onCheck, // eslint-disable-line no-unused-vars
      theme, // eslint-disable-line no-unused-vars
      ...other
    } = this.props

    const resultClassName = classnames(
      className,
      classes.checkbox,
      classes[variation],
      classes[size],
      classes[`icon${iconPosition}`],
      disabled ? classes.isDisabled : classes.isEnabled,
      indeterminate ? classes.indeterminate : checked && classes.isChecked
    )

    return (
      <label className={resultClassName} style={style}>
        <input
          {...other}
          ref={input => {
            this.input = input
          }}
          checked={checked}
          name={name}
          type="checkbox"
          className={classes.real}
          disabled={disabled}
          onChange={this.onChange}
        />
        <span
          className={classnames(classes.fake, checkboxClassName)}
          style={checkboxStyle}>
          {size === 'small' ? (
            <TickIconSmall className={classes.tick} style={tickStyle} />
          ) : (
            <TickIcon className={classes.tick} style={tickStyle} />
          )}
        </span>
        <span
          className={classnames(classes.label, labelClassName)}
          style={labelStyle}>
          {children}
        </span>
      </label>
    )
  }
}

export default withStyles(styles, {name: 'Checkbox'})(Checkbox)
