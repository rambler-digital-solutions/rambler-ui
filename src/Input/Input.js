/**
 * Компонент Input
 */
import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import omit from 'lodash/omit'
import { injectSheet } from '../theme'
import { fontStyleMixin, isolateMixin, placeholderMixin } from '../style/mixins'
import { Eye } from '../icons/forms'

@injectSheet(theme => ({
  normal: {
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
    ...theme.input,
    transition: 'border-color 0.3s ease',
    ...placeholderMixin({color: theme.inputRequiredProps.baseColor}),
    '&::-ms-reveal': {
      display: 'none'
    },
    '&:disabled': {
      backgroundColor: '#eee',
      borderColor: '#eee',
      cursor: 'default'
    }
  },
  root: {
    position: 'relative'
  },
  password: {
    position: 'absolute',
    top: theme.inputRequiredProps.inputEye.top,
    right: theme.inputRequiredProps.inputEye.right,
    border: 0,
    outline: 0,
    height: '20px',
    width: '20px',
    backgroundSize: 'contain',
    cursor: 'pointer',
    color: 'gray',
    backgroundColor: '#fff',
    '& $eye': {
      fill: theme.inputRequiredProps.inputBaseColor.color
    }
  },
  text: {
    position: 'absolute',
    top: theme.inputRequiredProps.inputEye.top,
    right: theme.inputRequiredProps.inputEye.right,
    border: 0,
    outline: 0,
    height: '20px',
    width: '20px',
    backgroundSize: 'contain',
    cursor: 'pointer',
    backgroundColor: '#fff',
    '& $eye': {
      fill: theme.inputRequiredProps.inputEye.fill
    }
  },
  eye: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '18px',
    height: '18px'
  },
  success: {
    '& > input': {
      borderBottom: theme.inputRequiredProps.successBorderBottom.borderBottom,
      paddingBottom: '1px',
    },
    '& $iconLeft > svg': {
      fill: theme.inputRequiredProps.icon.fill
    },
    '& $normal': {
      opacity: 1
    }
  },
  error: {
    '& > input': {
      borderBottom: theme.inputRequiredProps.errorBorderBottom.borderBottom,
      paddingBottom: '1px',
    },
    '& $iconLeft > svg': {
      fill: theme.inputRequiredProps.icon.fill
    },
    '& $normal': {
      opacity: 1
    }
  },
  warning: {
    '& > input': {
      borderBottom: theme.inputRequiredProps.warningBorderBottom.borderBottom,
      paddingBottom: '1px',
    },
    '& $iconLeft > svg': {
      fill: theme.inputRequiredProps.icon.fill
    },
    '& $normal': {
      opacity: 1
    }
  },
  filled: {
    '& > input': {
      borderBottom: '1px solid #000'
    },
    '& $iconLeft > svg': {
      fill: theme.inputRequiredProps.icon.fill
    },
    '& $normal': {
      opacity: 1
    }
  },
  iconLeft: {
    position: 'absolute',
    left: theme.inputRequiredProps.icon.left,
    top: theme.inputRequiredProps.icon.top
  },
  iconRight: {
    position: 'absolute',
    right: theme.inputRequiredProps.icon.right,
    top: theme.inputRequiredProps.icon.top
  },
  iconRightWithoutPass: {
    position: 'absolute',
    right: theme.inputRequiredProps.inputIconRightWithoutPass.right,
    top: theme.inputRequiredProps.icon.top
  },
  inputIconLeft: theme.inputRequiredProps.inputPaddingLeft,
  inputOneIconRight: theme.inputRequiredProps.inputOneIconRight,
  inputTwoIconRight: theme.inputRequiredProps.inputTwoIconRight
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
    * Имя элемента
    */
    name: PropTypes.string,
    /**
    * Валидация input'a - border снизу. 'filled' - для чемпа. Остальные - дефолтные
    */
    status: PropTypes.oneOf([
      'error',
      'warning',
      'success',
      'filled',
      null
    ]),
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
    status: null
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
      style,
      placeholder,
      iconLeft,
      iconRight,
      status,
      sheet: { classes: css },
      ...other
    } = omit(this.props, ['theme', 'onChange'])

    const { type } = this.state
    const trueType = this.props.type
    const rootClassName = classnames(css.root, {[css.filled]: status === 'filled'}, css[status])
    const resultClassName = classnames(css.normal, {
      [css.inputIconLeft]: !!iconLeft,
      [css.inputTwoIconRight]: !!iconRight && trueType === 'password',
      [css.inputOneIconRight]: !!iconRight || trueType === 'password'
    }, className)

    const resultIconRight = (iconRight && trueType === 'password') ?
                              <div className={css.iconRight}>{iconRight}</div> :
                                (iconRight && trueType !== 'password') ?
                                  <div className={css.iconRightWithoutPass}>{iconRight}</div> :
                                    null
    return (
      <div style={style} className={rootClassName}>
        { iconLeft &&
          <div className={css.iconLeft}>
            {iconLeft}
          </div>
        }
        <input
          ref={input => (this.input = input)}
          className={resultClassName}
          disabled={disabled}
          style={inputStyle}
          name={name}
          onChange={this.onChangeHelper}
          tabIndex='0'
          placeholder={placeholder}
          {...other}
        />
          { resultIconRight }
          { trueType === 'password' &&
            <button type='button' tabIndex="-1" className={css[type]} onClick={this.inputTypeHelper} >
              <Eye className={css.eye} />
            </button>
          }
      </div>
    )
  }
}
