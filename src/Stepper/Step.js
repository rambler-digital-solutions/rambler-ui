/**
 * Компонент Step
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TickIcon from '../icons/forms/TickIcon'

class Step extends Component {
  static propTypes = {
    /**
     * Значение индекса шага
     */
    value: PropTypes.number.isRequired,
    /**
     * Колбэк который возвращает выбраную иконку
     */
    icon: PropTypes.func
  }

  static defaultProps = {
    icon: (value, currentValue) => (value < currentValue && <TickIcon />)
  }

  renderIcon = () => {
    const {icon, value, currentValue} = this.props
    return icon(value, currentValue)
  }

  render() {

    return <div>Step - {this.props.value} {this.renderIcon()}</div>
  }
}

Step.displayName = 'ruiStep'

export default Step
