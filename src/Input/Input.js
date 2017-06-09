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
    borderRadius: 0,
    outline: 0,
    width: '100%',
    background: '#fff',
    fontWeight: 400,
    appearance: 'none',
    lineHeight: 'normal',
    borderTop: theme.field.border,
    borderLeft: theme.field.border,
    borderRight: theme.field.border,
    borderBottom: theme.field.borderBottom || theme.field.border,
    padding: theme.input.padding,
    fontSize: theme.field.fontSize,
    opacity: theme.input.opacity || 1,
    transition: 'border-color 0.3s ease',
    '&::-ms-reveal': {
      display: 'none'
    },
    '&:focus': {
      borderBottom: theme.field.focusBorderBottom,
      paddingBottom: theme.input.focusPaddingBottom
    },
    '&:disabled': {
      backgroundColor: '#eee',
      borderColor: '#eee',
      cursor: 'default'
    }
  },
  medium: {
    height: theme.input.height || theme.sizes.medium.height
  },
  small: {
    height: theme.input.height || theme.sizes.small.height
  },
  success: {
    '&$input': {
      borderBottom: theme.field.successBorderBottom,
      paddingBottom: theme.input.focusPaddingBottom,
      opacity: 1
    }
  },
  error: {
    '&$input': {
      borderBottom: theme.field.errorBorderBottom,
      paddingBottom: theme.input.focusPaddingBottom,
      opacity: 1
    }
  },
  warning: {
    '&$input': {
      borderBottom: theme.field.warningBorderBottom,
      paddingBottom: theme.input.focusPaddingBottom,
      opacity: 1
    }
  },
  filled: {
    '&$input': {
      borderBottom: theme.field.filledBorderBottom,
      paddingBottom: theme.input.focusPaddingBottom,
      opacity: 1
    }
  },
  withLeftIcon: {
    paddingLeft: theme.field.withIconPadding
  },
  withRightIcon: {
    paddingRight: theme.field.withIconPadding
  },
  withEye: {
    paddingRight: theme.field.withIconPadding,
    '&$withRightIcon': {
      paddingRight: theme.field.withIconsPadding
    },
    '& ~ $iconRight': {
      right: theme.field.withIconPadding
    }
  },
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
    height: theme.sizes.medium.icon,
    width: theme.sizes.medium.icon,
    backgroundSize: 'contain',
    cursor: 'pointer',
    background: 'none'
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
    status: PropTypes.oneOf(['error', 'warning', 'success', 'filled', null]),
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

  onChangeHelper = e => {
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
      color: status && theme.field.filledIconColor
    })

    return (
      <div style={style} className={css.root}>
        {iconLeft &&
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
        {iconRight &&
          <div className={css.iconRight}>
            {iconRight}
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
