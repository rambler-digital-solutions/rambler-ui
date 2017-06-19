/**
 * Компонент Input
 */
import React, { Component, cloneElement } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import omit from 'lodash/omit'
import { injectSheet } from '../theme'
import { fontStyleMixin, isolateMixin } from '../style/mixins'
import { Eye } from '../icons/forms'

@injectSheet(theme => ({
  input: {
    ...isolateMixin,
    ...fontStyleMixin(theme.font),
    boxSizing: 'border-box',
    display: 'block',
    borderRadius: theme.field.borderRadius,
    outline: 0,
    width: '100%',
    background: theme.field.colors.default.background,
    fontWeight: 400,
    fontSize: theme.field.fontSize,
    appearance: 'none',
    lineHeight: 'normal',
    border: `1px solid ${theme.field.colors.default.border}`,
    padding: theme.input.padding,
    transition: `border-color ${theme.field.animationDuration}ms ease`,
    '&::-ms-reveal': {
      display: 'none'
    },
    '&:focus': {
      borderBottom: `2px solid ${theme.field.colors.focus.border}`,
      paddingBottom: 1
    },
    '&:disabled': {
      backgroundColor: theme.field.colors.disabled.background,
      borderColor: theme.field.colors.disabled.border,
      color: theme.field.colors.disabled.color,
      cursor: 'not-allowed'
    }
  },
  ...['medium', 'small'].reduce((result, size) => ({
    ...result,
    [size]: {
      height: theme.field.sizes[size].height,
      fontSize: theme.field.sizes[size].fontSize,
      '& $eye': {
        height: theme.field.sizes[size].eyeIcon,
        width: theme.field.sizes[size].eyeIcon,
        lineHeight: theme.field.sizes[size].eyeIcon + 'px'
      },
      '&$withLeftIcon': {
        paddingLeft: theme.field.sizes[size].withIconPadding
      },
      '&$withRightIcon': {
        paddingRight: theme.field.sizes[size].withIconPadding
      },
      '&$withEye': {
        paddingRight: theme.field.sizes[size].withIconPadding,
        '&$withRightIcon': {
          paddingRight: theme.field.sizes[size].withIconsPadding
        },
        '& ~ $iconRight': {
          right: theme.field.sizes[size].withIconPadding
        }
      }
    }
  }), {}),
  success: {
    '&$input': {
      borderBottom: `2px solid ${theme.field.colors.success.border}`,
      paddingBottom: 1
    }
  },
  error: {
    '&$input': {
      borderBottom: `2px solid ${theme.field.colors.error.border}`,
      paddingBottom: 1
    }
  },
  warning: {
    '&$input': {
      borderBottom: `2px solid ${theme.field.colors.warn.border}`,
      paddingBottom: 1
    }
  },
  withLeftIcon: {},
  withRightIcon: {},
  withEye: {},
  root: {
    position: 'relative'
  },
  icon: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: 0
  },
  eye: {
    extend: 'icon',
    right: theme.input.eyeMargin,
    border: 0,
    outline: 0,
    padding: 1,
    cursor: 'pointer'
  },
  iconLeft: {
    extend: 'icon',
    left: theme.field.iconMargin
  },
  iconRight: {
    extend: 'icon',
    right: theme.field.iconMargin
  }
}))

export default class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: this.props.type
    }
  }

  static propTypes = {
    /**
    *  Значение введённое в поле, возвращается в callback onChange.
    *  Можно задать дефолтное значение.
    */
    value: PropTypes.any.isRequired,
    /**
    *  Значение placeholder для input
    */
    placeholder: PropTypes.string,
    /**
    * Задизэйблить input true или false
    */
    disabled: PropTypes.bool,
    /**
    * Тип поля (на данный момент, cо временем добавим другие типы полей).
    */
    type: PropTypes.oneOf(['text', 'password', 'email', 'tel']),
    /**
     * Размер инпута
     */
    size: PropTypes.oneOf(['small', 'medium']),
    /**
     * Имя элемента
     */
    name: PropTypes.string,
    /**
     * Валидация input'a - border снизу
     */
    status: PropTypes.oneOf(['error', 'warning', 'success', null]),
    /**
     * Класс компонента
     */
    className: PropTypes.string,
    /**
     * По умолчанию элемент input растягивается на всю ширину родительского контейнера.
     * Т.е. задавать ширину через родительский контейнер - объект style.
     * Сюда не стоит передавать какое-либо значение.
     */
    fullWidth: PropTypes.any,
    /**
     * Переопределение стандартных стилей input
     */
    inputStyle: PropTypes.object,
    /**
    * Переопределение стилей контейнера для input
    */
    style: PropTypes.object,
    /**
    * Callback onChange возвращает event и event.target.value
    */
    onChange: PropTypes.func.isRequired,
    /**
     * Callback onBlur
     */
    onBlur: PropTypes.func,
    /**
     * Callback onFocus
     */
    onFocus: PropTypes.func,
    /**
     * Callback onKeyUp
     */
    onKeyUp: PropTypes.func,
    /**
     * Callback onKeyDown
     */
    onKeyDown: PropTypes.func,
    /**
     *  icon слева
     */
    iconLeft: PropTypes.node,
    /**
     *  icon справа
     */
    iconRight: PropTypes.node
  };

  static defaultProps = {
    status: null,
    size: 'medium'
  };

  inputTypeHelper = () => {
    this.input.type = this.state.type === 'password' ? 'text' : 'password'
    this.setState({ type: this.input.type })
  }

  onChangeHelper = (e) => {
    if (this.props.onChange) this.props.onChange(e, e.target.value)
  }

  render() {
    const {
      className,
      disabled,
      inputStyle,
      name,
      size,
      style,
      placeholder,
      iconLeft,
      iconRight,
      status,
      sheet: { classes: css },
      theme,
      inputRef,
      ...other
    } = omit(this.props, ['onChange'])

    const { type } = this.state
    const trueType = this.props.type

    const resultClassName = classnames(css.input, css[size], css[status], {
      [css.withLeftIcon]: !!iconLeft,
      [css.withRightIcon]: !!iconRight,
      [css.withEye]: trueType === 'password'
    }, className)

    const resultIconLeft = iconLeft && cloneElement(iconLeft, {
      color: disabled ? theme.field.colors.disabled.text : (iconLeft.props.color || theme.field.colors.default.text)
    })

    const resultIconRight = iconRight && cloneElement(iconRight, {
      color: disabled ? theme.field.colors.disabled.text : (iconRight.props.color || theme.field.colors.default.text)
    })

    return (
      <div style={style} className={css.root}>
        {resultIconLeft &&
          <div className={css.iconLeft}>
            {resultIconLeft}
          </div>
        }
        <input
          ref={input => {
            this.input = input
            if (inputRef)
              inputRef(input)
          }}
          className={resultClassName}
          disabled={disabled}
          style={inputStyle}
          name={name}
          onChange={this.onChangeHelper}
          tabIndex='0'
          placeholder={placeholder}
          {...other}
        />
        {resultIconRight &&
          <div className={css.iconRight}>
            {resultIconRight}
          </div>
        }
        {trueType === 'password' &&
          <button type='button' tabIndex="-1" className={css.eye} onClick={this.inputTypeHelper} >
            <Eye
              size={18}
              color={type === 'password' ? theme.field.color : theme.field.activeIconColor} />
          </button>
        }
      </div>
    )
  }
}
