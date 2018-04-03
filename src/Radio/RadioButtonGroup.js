/**
 * Компонент radioButtonGroup
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import EventEmitter from 'events'
import uuid from '../utils/uuid'
import { injectSheet } from '../theme'
import { isolateMixin } from '../utils/mixins'
import { RADIO_INPUT_CONTEXT } from '../constants/context'

@injectSheet(theme => ({
  radioButtonGroup: {
    ...isolateMixin,
    fontFamily: theme.fontFamily
  }
}), {name: 'RadioButtonGroup'})
export default class RadioButtonGroup extends Component {

  static propTypes = {
    /**
    * Имя, которое будет применяться ко всей группе radio.
    * Генерируется автоматически, если не указано
    */
    name: PropTypes.string,
    /**
     * Дочерние узлы - radio
     */
    children: PropTypes.node,
    /**
     * Css - класс компонента
     */
    className: PropTypes.string,
    /**
    * Добавление стандартных стилей для группы
    */
    style: PropTypes.object,
    /**
     * Обязательный колбэк, который вызывается при нажатии на input и меняет state root-компонента.
     */
    onChange: PropTypes.func.isRequired,
    /**
     * Значение, выбранного в данный момент radio
     */
    value: PropTypes.any
  };

  static childContextTypes = {
    [RADIO_INPUT_CONTEXT]: PropTypes.shape({
      /**
       * Получить текущее значение
       */
      getValue: PropTypes.func,
      /**
       * Получить атрибут name для input
       */
      getName: PropTypes.func,
      /**
       * Шина событий
       * @newValue - событие установки нового значения, кидают компоненты RadioButton
       * @updateValue - событие изменения значения, кидает компонент RadioButtonGroup
       */
      events: PropTypes.instanceOf(EventEmitter)
    })
  };

  static defaultProps = {
    name: null,
    onChange: () => {}
  };

  getRadioInputName = () => {
    this.resultRadioInputName = this.resultRadioInputName || this.props.name || `RadioGroup-${uuid()}`
    return this.resultRadioInputName
  }

  getChildContext() {
    if (!this.radioInputEvents)
      this.createRadioInputEvents()
    return {
      [RADIO_INPUT_CONTEXT]: {
        events: this.radioInputEvents,
        getName: this.getRadioInputName,
        getValue: () => this.value
      }
    }
  }

  componentWillMount() {
    this.value = this.props.value
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.value = nextProps.value
      if (this.radioInputEvents)
        this.radioInputEvents.emit('updateValue', this.value)
    }
  }

  componentWillUnmount() {
    if (this.radioInputEvents)
      this.radioInputEvents.removeAllListeners()
  }

  createRadioInputEvents() {
    this.radioInputEvents = new EventEmitter()
    this.radioInputEvents.setMaxListeners(0)
    this.radioInputEvents.on('newValue', this.onNewValue)
  }

  onNewValue = (event, value) => {
    if (this.props.onChange)
      this.props.onChange(event, value)
  }

  render() {
    const {
      className,
      classes: css,
      children,
      theme, // eslint-disable-line no-unused-vars
      onChange, // eslint-disable-line no-unused-vars
      value, // eslint-disable-line no-unused-vars
      labelPosition, // eslint-disable-line no-unused-vars
      ...otherRootProps
    } = this.props

    const resultClassName = classnames(css.radioButtonGroup, className)

    return (
      <div className={resultClassName} {...otherRootProps}>
        {children}
      </div>
    )

  }

}
