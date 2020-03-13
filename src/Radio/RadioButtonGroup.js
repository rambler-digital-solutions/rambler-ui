import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import EventEmitter from 'eventemitter3'
import uuid from '../utils/uuid'
import {withStyles} from '../theme'
import {isolateMixin} from '../utils/mixins'
import {RadioButtonContext} from './context'

const styles = theme => ({
  radioButtonGroup: {
    extend: isolateMixin,
    fontFamily: theme.fontFamily
  }
})

class RadioButtonGroup extends PureComponent {
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
    value: PropTypes.any,
    /**
     * Позиция label - либо слева, либо справа
     */
    labelPosition: PropTypes.oneOf(['left', 'right'])
  }

  static defaultProps = {
    name: null,
    onChange: () => {}
  }

  value = this.props.value

  getRadioInputName = () => {
    this.resultRadioInputName =
      this.resultRadioInputName || this.props.name || `RadioGroup-${uuid()}`
    return this.resultRadioInputName
  }

  get contextValue() {
    if (!this.radioInputEvents) this.createRadioInputEvents()
    return {
      events: this.radioInputEvents,
      getName: this.getRadioInputName,
      getValue: () => this.value
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.value !== prevProps.value) {
      this.value = this.props.value
      if (this.radioInputEvents)
        this.radioInputEvents.emit('updateValue', this.value)
    }
  }

  componentWillUnmount() {
    if (this.radioInputEvents) this.radioInputEvents.removeAllListeners()
  }

  createRadioInputEvents() {
    this.radioInputEvents = new EventEmitter()
    this.radioInputEvents.on('newValue', this.onNewValue)
  }

  onNewValue = (event, value) => {
    if (this.props.onChange) this.props.onChange(event, value)
  }

  render() {
    const {
      className,
      classes,
      children,
      theme, // eslint-disable-line no-unused-vars
      onChange, // eslint-disable-line no-unused-vars
      value, // eslint-disable-line no-unused-vars
      labelPosition, // eslint-disable-line no-unused-vars
      ...otherRootProps
    } = this.props

    const resultClassName = classnames(classes.radioButtonGroup, className)

    return (
      <RadioButtonContext.Provider value={this.contextValue}>
        <div className={resultClassName} {...otherRootProps}>
          {children}
        </div>
      </RadioButtonContext.Provider>
    )
  }
}

export default withStyles(styles, {name: 'RadioButtonGroup'})(RadioButtonGroup)
