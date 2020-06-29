import React, {PureComponent, Children, cloneElement} from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import {isolateMixin, ifDesktopWindow} from '../utils/mixins'
import {withStyles} from '../theme'

const styles = {
  stepper: {
    extend: isolateMixin,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'start',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '35px',
    width: '100%',
    position: 'relative',
    ...ifDesktopWindow({
      flexDirection: 'row',
      alignItems: 'center'
    })
  }
}

class Stepper extends PureComponent {
  static propTypes = {
    /**
     * Текущий индекс выбранного Step
     */
    value: PropTypes.number.isRequired,
    /**
     * Колбэк на изменение выбраного Step, `function (event: object, newValue: number) {}`
     */
    onChange: PropTypes.func.isRequired,
    /**
     * Css класс root-компонента
     */
    className: PropTypes.string,
    /**
     *  Объект css стилей root-компонента
     */
    style: PropTypes.object,
    /**
     *  Элементы переключателя, обязаны быть компонентами типа <Step />
     */
    children: PropTypes.node
  }

  static defaultProps = {
    style: {}
  }

  onChange = (e, index) => {
    if (this.props.value === index) return
    this.props.onChange(e, index)
  }

  render() {
    const {
      children,
      value: currentValue,
      className,
      classes,
      theme, // eslint-disable-line no-unused-vars
      onChange, // eslint-disable-line no-unused-vars
      ...other
    } = this.props
    const steps = Children.toArray(children).reduce((acc, child, index) => {
      if (!child.type || child.type.displayName !== 'ruiStep')
        throw new Error('Child component should be instance of <Step />')
      const active = index === currentValue
      const completed = index < currentValue
      const disabled = index > currentValue
      const props = {...child.props}
      const extendedProps = {
        active,
        completed,
        disabled,
        value: index,
        key: child.key !== undefined ? child.key : index,
        onClick: this.onChange
      }
      Object.keys(extendedProps).forEach(key => {
        if (!props.hasOwnProperty(key)) props[key] = extendedProps[key]
      })
      acc.push(cloneElement(child, props))
      return acc
    }, [])
    return (
      <div {...other} className={classnames(className, classes.stepper)}>
        {steps}
      </div>
    )
  }
}

export default withStyles(styles, {name: 'Stepper'})(Stepper)
