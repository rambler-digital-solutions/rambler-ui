/**
 * Компонент Stepper
 */
import React, { Component, cloneElement } from 'react'
import PropTypes from 'prop-types'

class Stepper extends Component {
  static propTypes = {
    /**
     * Значение степпера
     */
    value: PropTypes.any.isRequired,
    /**
     * Колбэк на изменение значения степпера
     */
    onChange: PropTypes.func.isRequired
  }

  render() {
    const {children, value: currentValue} = this.props
    const steps = React.Children.map(children, (child, i) => {
      if (!child.type || child.type.displayName !== 'ruiStep')
        throw new Error('Child component should be instance of <Step />')
      const value = child.props.value
      return cloneElement(child, {
        ...child.props,
        currentValue,
        key: child.key !== undefined ? child.key : (typeof value === 'string' || typeof value === 'number') ? value : i++
      })
    })
    return <div>{steps}</div>
  }
}

Stepper.displayName = 'ruiStepper'

export default Stepper
