/**
 * Компонент Input
 */
import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import omit from 'lodash/omit'
import { injectSheet } from '../theme'
import { fontStyleMixin, isolateMixin } from '../style/mixins'
import { Eye } from '../icons/forms'

function paddingLeftHelper(iconLeft) {
  if (iconLeft === undefined) return 0
  if (iconLeft === 'object') return 35
}

function paddingRightHelper(iconRight, inputType) {
  if (iconRight === 'object' && inputType === 'text') return 45
  if (iconRight === undefined && inputType === 'text') return 13
  if (iconRight === 'object' && inputType === 'password') return 65
  if (iconRight === undefined && inputType === 'password') return 45
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
    fontSize: '1rem',
    fontWeight: 400,
    appearance: 'none',
    ...theme.input,
    transition: 'border-color 0.3s ease'
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
    opacity: 0.75,
    filter: 'grayscale(100%)',
    transition: 'opacity 0.3s ease, filter 0.3s ease',
    backgroundColor: '#fff'
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
    transition: 'opacity 0.3s ease, filter 0.3s ease',
    backgroundColor: '#fff'
  },
  svg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '18px',
    height: '18px'
  },
  iconLeft: theme.iconLeft,
  iconRight: theme.iconRight,
  iconRightWithoutPass: theme.iconRightWithoutPass,
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
    borderBottom: '2px solid #000',
    opacity: 1
  }
}))

export default class TextInput extends Component {

  static propTypes = {
    /**
    *  Значение введённое в поле, возвращается в callback onChange.
    // *  Если нужно задать значение по умолчанию, то использовать defaultValue
    */
    value: PropTypes.any,
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
    * Валидация input'a - border снизу
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
    onChange: PropTypes.func,
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
    onKeyUp: PropTypes.number,
    /**
     * Callback onKeyDown
     */
    onKeyDown: PropTypes.number,
    /**
     *  icon слева
     */
    iconLeft: PropTypes.node,
    /**
     *  icon справа
     */
    iconRight: PropTypes.node
  }

  state = {}

  static defaultProps = {
    placeholder: '',
    type: 'text'
  }

  componentDidMount() {
    const { value, type } = this.props
    this.input.value = (typeof value === 'string' && !!value && type === 'text') ? value : ''
    this.setState({ type, trueType: type})
  }

  onChangeValue = value => {
    this.setState({value})
  }

  inputTypeHelper = () => {
    this.input.type = this.state.type === 'password' ? 'text' : 'password'
    this.setState({ type: this.input.type })
  }

  render() {
    const {
      className,
      disabled,
      inputStyle,
      name,
      onChange,
      onBlur,
      onFocus,
      onKeyUp,
      onKeyDown,
      style,
      placeholder,
      iconLeft,
      iconRight,
      status,
      sheet: { classes: css },
      ...other
    } = omit(this.props, ['theme', 'value'])

    const { type } = this.state
    const rootClassName = classnames(css.root)
    const resultClassName = classnames(css.normal, css[status], className)

    const resultIconRight = (iconRight && this.state.trueType === 'password') ?
                              <div className={css.iconRight}>{iconRight}</div> :
                                (iconRight && this.state.trueType === 'text') ?
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
            paddingRight: paddingRightHelper(typeof iconRight, type),
            ...inputStyle
          }}
          name={name}
          tabIndex='0'
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={ e => {
            if (onChange)
              onChange(e.target, e.target.value)
            this.onChangeValue(e.target.value)
          }}
          onKeyUp={onKeyUp}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          {...other} />
          { resultIconRight }
          { this.state.trueType === 'password' &&
            <button className={css[type]} onClick={this.inputTypeHelper}>
              <Eye className={css.svg} />
            </button>
          }
      </div>
    )
  }
}
