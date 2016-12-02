/**
 * Компонент Input
 */
import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import omit from 'lodash/omit'
import { injectSheet } from '../theme'
import { fontStyleMixin, isolateMixin, placeholderMixin } from '../style/mixins'
import { Eye } from '../icons/forms'

function paddingLeftHelper(typeofIconLeft) {
  if (typeofIconLeft === 'undefined') return 13
  if (typeofIconLeft === 'object') return 30
}

function paddingRightHelper(typeofIconRight, inputType, trueType) {
  if (typeofIconRight === 'object' && inputType === 'text' && trueType === 'password') return 65
  if (typeofIconRight === 'object' && inputType === 'text' && trueType === 'text') return 35
  if (typeofIconRight === 'undefined' && inputType === 'text' && trueType === 'text') return 13
  if (typeofIconRight === 'undefined' && inputType === 'text' && trueType === 'password') return 40
  if (typeofIconRight === 'object' && inputType === 'password') return 65
  if (typeofIconRight === 'undefined' && inputType === 'password') return 35
}

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
    ...placeholderMixin({color: '#aebbc9'}),
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
    top: theme.inputEye.top,
    right: '15px',
    border: 0,
    outline: 0,
    height: '18px',
    width: '18px',
    backgroundSize: 'contain',
    cursor: 'pointer',
    color: 'gray',
    backgroundColor: '#fff',
    '& $eye': {
      fill: '#aebbc9'
    }
  },
  text: {
    position: 'absolute',
    top: theme.inputEye.top,
    right: '15px',
    border: 0,
    outline: 0,
    height: '18px',
    width: '18px',
    backgroundSize: 'contain',
    cursor: 'pointer',
    backgroundColor: '#fff',
    '& $eye': {
      fill: theme.inputEye.fill
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
    borderBottom: '2px solid #28bc00 !important',
    paddingBottom: '1px'
  },
  error: {
    borderBottom: '2px solid #ff564e !important',
    paddingBottom: '1px'
  },
  warning: {
    borderBottom: '2px solid #f4c914 !important',
    paddingBottom: '1px'
  },
  filled: {
    '& > input': {
      borderBottom: '2px solid #000'
    },
    '& $iconLeft': {
      '& > svg': {
        fill: '#ff4800'
      }
    },
    '& $normal': {
      opacity: 1
    }
  },
  iconLeft: {
    position: 'absolute',
    left: 0,
    top: theme.icon.top
  },
  iconRight: {
    position: 'absolute',
    right: '40px',
    top: theme.icon.top
  },
  iconRightWithoutPass: {
    position: 'absolute',
    right: 0,
    top: theme.icon.top
  }
}))

export default class TextInput extends Component {
  constructor(props) {
    super(props)
    const { type } = this.props
    this.state = {
      type,
      trueType: type
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
    type: PropTypes.oneOf(['text', 'password']),
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
      'filled'
    ]),
    /**
     * Класс компонента
     */
    className: PropTypes.string,
    /**
     * По умолчанию элемент input растягивается на всю ширину родительского контейнера.
     * Т.е. задавать ширину через родительский контейнер, объект style.
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
  }

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

    const { type, trueType } = this.state
    const rootClassName = classnames(css.root, {[css.filled]: status === 'filled'})
    const resultClassName = classnames(css.normal, css[status], className)

    const resultIconRight = (iconRight && trueType === 'password') ?
                              <div className={css.iconRight}>{iconRight}</div> :
                                (iconRight && trueType === 'text') ?
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
          style={{
            paddingLeft: paddingLeftHelper(typeof iconLeft),
            paddingRight: paddingRightHelper(typeof iconRight, type, trueType),
            ...inputStyle
          }}
          name={name}
          onChange={this.onChangeHelper}
          tabIndex='0'
          placeholder={placeholder}
          {...other}
        />
          { resultIconRight }
          { this.state.trueType === 'password' &&
            <button type='button' className={css[type]} onClick={this.inputTypeHelper}>
              <Eye className={css.eye} />
            </button>
          }
      </div>
    )
  }
}
