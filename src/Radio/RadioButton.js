/**
 * Компонент radioButton
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import omit from 'lodash/omit'
import EventEmitter from 'events'
import uuid from '../utils/uuid'
import { injectSheet } from '../theme'
import { isolateMixin } from '../style/mixins'
import { RADIO_INPUT_CONTEXT } from '../constants/context'

function isSimpleType(value) {
  const type = typeof value
  return type === 'string' || type === 'number' || type === 'boolean' || value === null || value === 'undefined'
}

@injectSheet(theme => ({
  root: {
    ...isolateMixin,
    fontFamily: theme.fontFamily,
    fontSize: theme.radio.fontSize,
    display: 'flex',
    width: '100%',
    cursor: 'pointer',
    position: 'relative',
    color: theme.radio.colors.default.text,
    '&:not(:last-child)': {
      marginBottom: theme.radio.marginBottom
    },
    '& input': {
      fontFamily: theme.fontFamily,
      position: 'absolute',
      opacity: '0',
      appearance: 'none',
      pointerEvents: 'none'
    },
    '& input:checked + $radio, & input:focus + $radio': {
      borderColor: theme.radio.colors.checked.dotBorder
    },
    '& input:active + $radio': {
      background: theme.radio.colors.active.dotBackground
    }
  },
  label: {
    display: 'inline-block',
    verticalAlign: 'middle',
    lineHeight: 1.43
  },
  radio: {
    '&:hover': {
      borderColor: theme.radio.colors.hover.dotBorder
    },
    flex: `0 0 ${theme.radio.radioSize}px`,
    display: 'inline-block',
    verticalAlign: 'middle',
    position: 'relative',
    boxSizing: 'border-box',
    background: theme.radio.colors.default.dotBackground,
    border: `1px solid ${theme.radio.colors.default.dotBorder}`,
    borderRadius: '50%',
    width: theme.radio.radioSize,
    height: theme.radio.radioSize,
    marginRight: theme.radio.labelMargin,
    marginTop: 1,
    textAlign: 'center',
    transition: `all ${theme.radio.animationDuration}ms`,
    '& svg': {
      position: 'absolute',
      top: '50%',
      left: '50%',
      fill: theme.radio.colors.default.dot,
      transition: `all ${theme.radio.animationDuration}ms`,
      transform: 'scale(0.5, 0.5)',
      opacity: 0,
      width: theme.radio.dotSize,
      height: theme.radio.dotSize,
      marginTop: -theme.radio.dotSize / 2,
      marginLeft: -theme.radio.dotSize / 2
    }
  },
  isLabelLeft: {
    margin: 0,
    position: 'absolute',
    right: 0,
    top: 0
  },
  isDisabled: {
    pointerEvents: 'none',
    color: theme.radio.colors.disabled.text,
    '& $radio': {
      borderColor: theme.radio.colors.disabled.dotBorder + '!important',
      '& svg': {
        fill: theme.radio.colors.disabled.dot
      }
    }
  },
  isChecked: {
    '& $radio svg': {
      opacity: 1,
      transform: 'scale(1, 1)'
    }
  }
}))
class RadioButton extends Component {

  static propTypes = {
    /**
    * Выбранное значение radioButton
    */
    value: PropTypes.any.isRequired,
    /**
     * Если true, radioButoon задизэйблен
     */
    disabled: PropTypes.bool,
    /**
     * Css-класс root-компонента(radioButton)
     */
    className: PropTypes.string,
    /**
     * Css-класс span-radio
     */
    radioClassName: PropTypes.string,
    /**
     * Css-класс span-label
     */
    labelClassName: PropTypes.string,
    /**
    * Переопределение стандартных стилей компонента radioButton
    */
    style: PropTypes.object,
    /**
     * Переопределение стандартных стилей label
     */
    labelStyle: PropTypes.object,
    /**
     * Позиция label - либо слева, либо справа
     */
    labelPosition: PropTypes.oneOf(['left', 'right'])
  }

  static defaultProps = {
    labelPosition: 'right',
    value: null,
    disabled: false,
    style: {},
    labelStyle: {}
  }

  static contextTypes = {
    [RADIO_INPUT_CONTEXT]: PropTypes.shape({
      getValue: PropTypes.func,
      getName: PropTypes.func,
      events: PropTypes.instanceOf(EventEmitter)
    })
  }

  get isChecked() {
    return this.inputValue === this.context[RADIO_INPUT_CONTEXT].getValue()
  }

  componentWillMount() {
    this.setInputValue(this.props.value)
    this.context[RADIO_INPUT_CONTEXT].events.on('updateValue', this.onUpdateValue)
  }

  componentWillUnmount() {
    this.context[RADIO_INPUT_CONTEXT].events.removeListener('updateValue', this.onUpdateValue)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value)
      this.setInputValue(nextProps.value)
  }

  componentDidMount() {
    this.refs.radio.checked = this.isChecked
  }

  componentDidUpdate() {
    this.refs.radio.checked = this.isChecked
  }

  setInputValue(value) {
    this.inputValue = value
    this.stringValue = isSimpleType(value) ? String(value) : uuid()
  }

  onUpdateValue = () => {
    this.forceUpdate()
  }

  onChange = (e) => {
    this.context[RADIO_INPUT_CONTEXT].events.emit('newValue', e, this.props.value)
    // оставляем для обратной совместимости
    if (this.props.onChange)
      this.props.onChange(e, this.inputValue)
  }

  render() {
    const {
      children,
      labelPosition,
      disabled,
      className,
      radioClassName,
      labelClassName,
      style,
      labelStyle,
      sheet: { classes: css },
      onFocus,
      onBlur,
      ...other
    } = omit(this.props, 'theme', 'value', 'onChange')

    const isLabelLeft = labelPosition === 'left'

    const rootClassName = classnames(css.root, className, {
      [css.isDisabled]: disabled,
      [css.isChecked]: this.isChecked
    })

    const resultRadioClassName = classnames(css.radio, radioClassName, {
      [css.isLabelLeft]: isLabelLeft
    })

    const resultLabelClassName = classnames(css.label, labelClassName)

    const labelElem = <span className={resultLabelClassName} style={labelStyle}>{children}</span>

    return (
      <label className={rootClassName} style={style} {...other}>
        { isLabelLeft === true &&
          labelElem
        }
        <input
          type="radio"
          ref="radio"
          name={this.context[RADIO_INPUT_CONTEXT].getName()}
          value={this.stringValue}
          disabled={disabled}
          onChange={this.onChange}
          onFocus={onFocus}
          onBlur={onBlur} />
        <span className={resultRadioClassName}>
          <svg viewBox="0 0 10 10">
            <circle cx="5" cy="5" r="5" />
          </svg>
        </span>
        { isLabelLeft === false && labelElem }
      </label>
    )

  }

}

RadioButton.displayName = 'ruiRadioButton'
export default RadioButton
