/**
 * Компонент Stepper
 */
import React, { Component, cloneElement } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import defaults from 'lodash/defaults'
import { isolateMixin, ifDesktopSize } from '../style/mixins'
import { injectSheet } from '../theme'

@injectSheet(theme => ({
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
    ...ifDesktopSize({
      flexDirection: 'row',
      alignItems: 'center',
    })
  },
  separator: {
    height: '40px',
    width: '1px',
    marginLeft: '8px',
    backgroundColor: '#ccc',
    flex: '1 1 auto',
    ...ifDesktopSize({
      height: '1px',
      backgroundColor: theme.stepper.separator.backgroundColor,
      flex: '1'
    })
  }
}), {name: 'Stepper'})
class Stepper extends Component {
  static propTypes = {
    /**
     * Текущий индекс выбранного Step
     */
    value: PropTypes.any.isRequired,
    /**
     * Колбэк на изменение выбраного Step. Принимает event и index
     */
    onChange: PropTypes.func.isRequired,
    /**
     * Css класс root-компонента
     */
    className: PropTypes.string,
    /**
     *  Объект css стилей root-компонента
     */
    style: PropTypes.object
  }

  static defaultProps = {
    style: {}
  }

  separator = key => {
    const {classes: css} = this.props
    return <span className={css.separator} key={key}/>
  }

  onChange = (e, index) => {
    if (this.props.value === index)
      return
    this.props.onChange(e, index)
  }

  render() {
    const {
      children,
      value: currentValue,
      className,
      classes: css,
      style
    } = this.props
    const steps = React.Children.toArray(children).reduce((acc, child, index, children) => {
      if (index > 0 && index < children.length)
        acc.push(this.separator(index + 0.5))
      if (!child.type || child.type.displayName !== 'ruiStep')
        throw new Error('Child component should be instance of <Step />')
      const active = index === currentValue
      const completed = index < currentValue
      const disabled = index > currentValue
      const defaultProps = {...child.props}
      const extendedProps = {
        active,
        completed,
        disabled,
        value: index,
        key: child.key !== undefined ? child.key : index,
        onClick: this.onChange
      }
      acc.push(cloneElement(child, defaults(defaultProps, extendedProps)))
      return acc
    }, [])
    return (
      <div className={classnames(className, css.stepper)} style={style}>
        {steps}
      </div>
    )
  }
}

Stepper.displayName = 'ruiStepper'

export default Stepper
