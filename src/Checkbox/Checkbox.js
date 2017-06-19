import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import omit from 'lodash/omit'
import omitBy from 'lodash/omitBy'
import TickIcon from '../icons/forms/TickIcon'
import { injectSheet } from '../theme'
import { fontStyleMixin, isolateMixin, middleMixin } from '../style/mixins'

@injectSheet((theme) => {

  const setThemeForSelector = (colors) => omitBy({
    color: colors.color,
    '& $fake': omitBy({
      background: colors.background,
      borderColor: colors.border
    }),
    '& $tick': omitBy({
      fill: colors.tick
    })
  })

  return {
    checkbox: {
      ...isolateMixin,
      ...fontStyleMixin(theme.font),
      fontSize: theme.checkbox.fontSize,
      overflow: 'hidden',
      position: 'relative',
      display: 'inline-block',
      verticalAlign: 'top',
      '&, & *': {
        transition: 'all .2s'
      },
      '&:hover': setThemeForSelector(theme.checkbox.colors.hover),
      '&:active': setThemeForSelector(theme.checkbox.colors.active),
      '&$isChecked': setThemeForSelector(theme.checkbox.colors.checked),
      '&$isFocused': setThemeForSelector(theme.checkbox.colors.focused),
      '&$isDisabled': setThemeForSelector(theme.checkbox.colors.disabled)
    },
    fake: {
      ...middleMixin,
      position: 'absolute',
      boxSizing: 'border-box',
      display: 'inline-block',
      width: theme.checkbox.size,
      height: theme.checkbox.size,
      lineHeight: theme.checkbox.size + 'px',
      borderStyle: 'solid',
      borderWidth: 1,
      borderRadius: theme.checkbox.borderRadius,
      ...setThemeForSelector(theme.checkbox.colors.default)
    },
    real: {
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
    label: {
      cursor: 'pointer',
      fontSize: 13,
      lineHeight: '15px',
      fontWeight: 'normal'
    },
    tick: {
      ...isolateMixin,
      position: 'relative',
      left: 1,
      top: -4,
      opacity: 0
    },
    iconright: {
      '& $fake': {
        right: 0
      },
      '& $label': {
        marginRight: theme.checkbox.size + theme.checkbox.iconMargin
      }
    },
    iconleft: {
      '& $fake': {
        left: 0
      },
      '& $label': {
        marginLeft: theme.checkbox.size + theme.checkbox.iconMargin
      }
    },
    isChecked: {
      '& $tick': {
        top: 2,
        opacity: 1
      }
    },
    isFocused: {},
    isDisabled: {
      pointerEvents: 'none'
    }
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
    const checked = this.input.checked
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
      children,
      theme,
      sheet: { classes: css },
      ...other
    } = omit(this.props, 'onCheck')
    const { checked = false, focused } = this.state
    const stateClasses = {
      [css.isFocused]: focused,
      [css.isChecked]: checked,
      [css.isDisabled]: disabled
    }
    const resultClassName = classnames(css.checkbox, css[`icon${iconPosition}`], className, stateClasses)
    const tickColor = disabled ? theme.checkbox.colors.disabled.tick : theme.checkbox.colors.default.tick
    return (
      <div className={resultClassName} style={style}>
        <input
          {...other}
          ref={input => { this.input = input }}
          checked={ checked }
          name={ name }
          type="checkbox"
          className={ css.real }
          disabled={ disabled }
          onChange={ this.onChange }
          onFocus={ this.onFocus }
          onBlur={ this.onBlur } />
        <span className={classnames(css.fake, checkboxClassName)} style={ checkboxStyle }>
          <TickIcon className={ css.icon } size={ theme.tick.size } color={ tickColor } />
        </span>
        <span className={classnames(css.label, labelClassName)} style={ labelStyle }>
          { children }
        </span>
      </div>
    )

  }
}
