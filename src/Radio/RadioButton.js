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
import { isolateMixin, focusSourceMixin } from '../style/mixins'
import { RADIO_INPUT_CONTEXT } from '../constants/context'
import '../utils/focus-source'

function isSimpleType(value) {
  const type = typeof value
  return type === 'string' || type === 'number' || type === 'boolean' || value === null || value === undefined
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
    userSelect: 'none',
    '&:not(:last-child)': {
      marginBottom: theme.radio.marginBottom
    }
  },
  isDisabled: {
    pointerEvents: 'none',
    color: theme.radio.colors.disabled.text,
    cursor: 'not-allowed'
  },
  real: {
    fontFamily: theme.fontFamily,
    position: 'absolute',
    opacity: '0',
    appearance: 'none',
    pointerEvents: 'none'
  },
  fake: {
    flex: 'none',
    display: 'inline-block',
    verticalAlign: 'middle',
    position: 'relative',
    boxSizing: 'border-box',
    borderRadius: '50%',
    width: theme.radio.radioSize,
    height: theme.radio.radioSize,
    border: '1px solid',
    borderColor: theme.radio.colors.default.dotBorder,
    background: theme.radio.colors.default.dotBackground,
    marginTop: 3,
    transitionDuration: theme.radio.animationDuration,
    transitionProperty: 'border-color, background-color, color',
    '&:after': {
      boxSizing: 'border-box',
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      margin: 'auto',
      width: 5,
      height: 5,
      transform: 'scale(0.5, 0.5)',
      opacity: 0,
      transitionDuration: 'inherit',
      transitionProperty: 'opacity, transform, background-color',
      background: 'currentColor',
      borderRadius: '50%'
    },
    '$isChecked &:after': {
      transform: 'scale(1, 1)',
      opacity: 1
    },
    '$isEnabled:hover &': {
      borderColor: theme.radio.colors.hover.dotBorder,
      color: theme.radio.colors.hover.dot
    },
    ...focusSourceMixin('other', '$real:focus + &', {
      borderColor: theme.radio.colors.focus.dotBorder
    }),
    '$isEnabled:active &': {
      borderColor: theme.radio.colors.active.dotBorder,
      background: theme.radio.colors.active.dotBackground,
      color: theme.radio.colors.active.dot
    },
    '$isDisabled &': {
      borderColor: theme.radio.colors.disabled.dotBorder,
      color: theme.radio.colors.disabled.dot
    },
    '$labelright &': {
      marginRight: theme.radio.labelMargin
    },
    '$labelleft &': {
      marginLeft: theme.radio.labelMargin
    }
  },
  label: {
    display: 'inline-block',
    verticalAlign: 'middle',
    lineHeight: theme.radio.lineHeight + 'px',
    '$labelleft &': {
      order: -1,
      marginRight: 'auto'
    }
  },
  isChecked: {},
  isEnabled: {},
  labelleft: {},
  labelright: {}
}), {name: 'RadioButton'})
class RadioButton extends Component {

  static propTypes = {
    /**
    * Выбранное значение radioButton
    */
    value: PropTypes.any.isRequired,
    /**
     * Если true, RadioButton задизэйблен
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
    this.input.checked = this.isChecked
  }

  componentDidUpdate() {
    this.input.checked = this.isChecked
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
      classes: css,
      onFocus,
      onBlur,
      ...other
    } = omit(this.props, 'theme', 'value', 'onChange')

    const rootClassName = classnames(
      className,
      css.root,
      css[`label${labelPosition}`],
      disabled ? css.isDisabled : css.isEnabled,
      this.isChecked && css.isChecked
    )

    return (
      <label className={rootClassName} style={ style } {...other}>
        <input
          className={ css.real }
          type="radio"
          ref={(input) => { this.input = input }}
          name={ this.context[RADIO_INPUT_CONTEXT].getName() }
          value={ this.stringValue }
          disabled={ disabled }
          onChange={ this.onChange }
          onFocus={ onFocus }
          onBlur={ onBlur }
        />
        <span className={ classnames(radioClassName, css.fake) } />
        <span className={ classnames(labelClassName, css.label) } style={ labelStyle }>
          { children }
        </span>
      </label>
    )
  }
}

RadioButton.displayName = 'ruiRadioButton'
export default RadioButton
