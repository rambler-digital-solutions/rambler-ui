/**
 * Компонент Input
 */
import React, { Component, cloneElement } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import omit from 'lodash/omit'
import { injectSheet } from '../theme'
import { fontStyleMixin, isolateMixin, borderMixin } from '../style/mixins'
import { Eye } from '../icons/forms'

@injectSheet(theme => ({
  input: {
    ...isolateMixin,
    ...fontStyleMixin(theme.font),
    boxSizing: 'border-box',
    display: 'block',
    outline: 0,
    width: '100%',
    fontWeight: 400,
    fontSize: theme.field.fontSize,
    appearance: 'none',
    lineHeight: 'normal',
    paddingLeft: theme.input.hrPadding,
    paddingRight: theme.input.hrPadding,
    background: 'transparent',
    transition: `border-color ${theme.field.animationDuration}ms ease`,
    borderColor: 'transparent',
    borderStyle: 'solid',
    borderWidth: '0 0 2px 0',
    borderRadius: theme.field.borderRadius,
    '&::-ms-reveal, &::-ms-clear': {
      display: 'none'
    },
    '&:focus': {
      borderColor: theme.field.colors.focus.border
    },
    '&:disabled': {
      backgroundColor: theme.field.colors.disabled.background,
      borderColor: theme.field.colors.disabled.border,
      color: theme.field.colors.disabled.color,
      cursor: 'not-allowed'
    },
    '&$filled[type="password"]': {
      fontFamily: 'monospace'
    }
  },
  ...['medium', 'small'].reduce((result, size) => ({
    ...result,
    [size]: {
      '& $input': {
        height: theme.field.sizes[size].height,
        fontSize: theme.field.sizes[size].fontSize
      },
      '& $eye': {
        height: theme.field.sizes[size].eyeIcon,
        width: theme.field.sizes[size].eyeIcon,
        lineHeight: theme.field.sizes[size].eyeIcon + 'px'
      },
      '&$withLeftIcon $input': {
        paddingLeft: theme.field.sizes[size].withIconPadding
      },
      '&$withRightIcon $input': {
        paddingRight: theme.field.sizes[size].withIconPadding
      },
      '&$withEye $input': {
        paddingRight: theme.field.sizes[size].withIconPadding
      },
      '&$withEye$withRightIcon $input': {
        paddingRight: theme.field.sizes[size].withIconsPadding
      },
      '&$withEye $iconRight': {
        right: theme.field.sizes[size].withIconPadding
      },
      '& $iconLeft': {
        left: theme.field.sizes[size].iconMargin
      },
      '& $iconRight': {
        right: theme.field.sizes[size].iconMargin
      }
    }
  }), {}),
  success: {
    '& $input': {
      borderColor: theme.colors.success
    }
  },
  error: {
    '& $input': {
      borderColor: theme.colors.danger
    }
  },
  warning: {
    '& $input': {
      borderColor: theme.colors.warn
    }
  },
  root: {
    ...isolateMixin,
    ...borderMixin(theme.field.colors.default.outline),
    borderRadius: theme.field.borderRadius,
    position: 'relative',
    background: theme.field.colors.default.background,
    boxSizing: 'border-box'
  },
  icon: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: 0,
    marginTop: -1
  },
  eye: {
    extend: 'icon',
    right: theme.input.eyeMargin,
    border: 0,
    outline: 0,
    padding: 1,
    cursor: 'pointer'
  },
  withLeftIcon: {},
  withRightIcon: {},
  withEye: {},
  iconLeft: {},
  iconRight: {},
  filled: {}
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
     * Класс контейнера
     */
    className: PropTypes.string,
    /**
     * Класс элемента input
     */
    inputClassName: PropTypes.string,
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
      style,
      disabled,
      inputStyle,
      inputClassName,
      name,
      size,
      placeholder,
      iconLeft,
      iconRight,
      status,
      sheet: { classes: css },
      theme,
      inputRef,
      value,
      ...other
    } = omit(this.props, ['onChange'])

    const { type } = this.state
    const trueType = this.props.type

    const resultClassName = classnames(className, css.root, css[size], css[status], {
      [css.withLeftIcon]: !!iconLeft,
      [css.withRightIcon]: !!iconRight,
      [css.withEye]: trueType === 'password'
    })

    const resultIconLeft = iconLeft && cloneElement(iconLeft, {
      color: disabled ? theme.field.colors.disabled.text : (iconLeft.props.color || theme.field.colors.default.text),
      size: iconLeft.props.size || theme.field.sizes[size].icon,
      className: classnames(iconLeft.props.className, css.icon, css.iconLeft)
    })

    const resultIconRight = iconRight && cloneElement(iconRight, {
      color: disabled ? theme.field.colors.disabled.text : (iconRight.props.color || theme.field.colors.default.text),
      size: iconRight.props.size || theme.field.sizes[size].icon,
      className: classnames(iconRight.props.className, css.icon, css.iconRight)
    })

    return (
      <div style={style} className={resultClassName}>
        {resultIconLeft}
        <input
          ref={input => {
            this.input = input
            if (inputRef)
              inputRef(input)
          }}
          className={classnames(css.input, inputClassName, value !== '' && value != null && css.filled)}
          disabled={disabled}
          style={inputStyle}
          name={name}
          onChange={this.onChangeHelper}
          tabIndex='0'
          placeholder={placeholder}
          value={value}
          {...other}
        />
        {resultIconRight}
        {trueType === 'password' &&
          <Eye
            className={css.eye}
            onClick={this.inputTypeHelper}
            size={theme.field.sizes[size].eyeIcon}
            color={type === 'password' ? theme.field.eyeIcon.colors.default : theme.field.eyeIcon.colors.active} />
        }
      </div>
    )
  }
}
