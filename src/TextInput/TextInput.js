/**
 * Компонент Input
 */
import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import omit from 'lodash/omit'
import { injectSheet } from '../theme'
import { fontStyleMixin, isolateMixin } from '../style/mixins'
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
    fontSize: '1rem',
    fontWeight: 400,
    appearance: 'none',
    ...theme.input,
    transition: 'border-color 0.3s ease',
    '&:placeholder': {
      color: '#aebbc9',
      padding: '6px 45px 6px 35px'
    },
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
  icon: {
    position: 'absolute',
    top: '5px',
    left: 0
  }
}))

export default class TextInput extends Component {

  static propTypes = {
    /**
    *  Значение введённое в поле, возвращается в callback onChange.
    *  Если нужно задать значение по умолчанию, то использовать defaultValue
    */
    value: PropTypes.any,
    /**
    * Значение input по умолчанию
    */
    defaultValue: PropTypes.string,
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
     *  icon в основном для чемпа, по умолчанию вставляется слева.
     */
    icon: PropTypes.node,
    /**
     *  icons сделать слева и справа
     */
    iconPos: PropTypes.string,
    /**
     *  Стили для icon
     */
    styleIcon: PropTypes.object
  }

  state = {}

  static defaultProps = {
    placeholder: '',
    defaultValue: '',
    type: 'text'
  }

  componentDidMount() {
    this.input.value = (typeof this.props.defaultValue === 'string' &&
                        !!this.props.defaultValue && this.props.type === 'text') ?
                          this.props.defaultValue : ''

    const { type } = this.props
    this.setState({ type, trueType: type})
  }

  onChangeValue = value => {
    console.log('1: ', value)
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
      styleIcon,
      placeholder,
      icon,
      sheet: { classes: css },
      ...other
    } = omit(this.props, 'theme')

    const { type } = this.state
    const resultClassName = classnames(css.normal, className)

    return (
      <div style={style} className={css.root}>
        { icon &&
          <div className={css.icon} style={styleIcon}>
            {icon}
          </div>
        }
        <input
          ref={input => (this.input = input)}
          className={resultClassName}
          disabled={disabled}
          style={inputStyle}
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
          // required для border-bottom в champTheme
          required
          {...other} />
          { this.state.trueType === 'password' &&
            <button className={css[type]} onClick={this.inputTypeHelper}>
              <Eye className={css.svg} />
            </button>
          }
      </div>
    )

  }

}
