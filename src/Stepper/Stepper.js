/**
 * Компонент Stepper
 */
import React, { Component, cloneElement } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import defaults from 'lodash/defaults'
import { isolateMixin, ifDesktopSize } from '../style/mixins'
import { injectSheet } from '../theme'

@injectSheet(() => ({
  stepper: {
    extend: isolateMixin,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '35px',
    width: '290px', //
    backgroundImage: `repeating-linear-gradient(
                        90deg,
                        transparent,
                        transparent 9px, rgba(129, 129, 129, 0.2) 9px,
                        transparent 10px,
                        transparent 290px
                      )`,
    backgroundSize: '290px auto',
    ...ifDesktopSize({
      flexDirection: 'row',
      width: '100%',
      backgroundImage: `repeating-linear-gradient(
                          transparent,
                          transparent 9px,
                          rgba(129, 129, 129, 0.2) 9px,
                          transparent 10px,
                          transparent 19px
                        )`,
      backgroundSize: 'auto 19px'
    })
  }
}))
class Stepper extends Component {
  static propTypes = {
    /**
     * Текущий индекс выбранного Step
     */
    value: PropTypes.any.isRequired,
    /**
     * Колбэк на изменение выбраного Step. Прокидывает event и index
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

  onChange = (e, index) => {
    this.props.onChange(e, index)
  }

  static defaultProps = {
    style: {}
  }

  render() {
    const {
      children,
      value: currentValue,
      className,
      classes: css,
      style
    } = this.props
    const steps = React.Children.map(children, (child, index) => {
      if (!child.type || child.type.displayName !== 'ruiStep')
        throw new Error('Child component should be instance of <Step />')
      const active = index === currentValue
      const completed = index < currentValue
      const disabled = index > currentValue
      const defaultProps = {
        ...child.props,
        key: child.key !== undefined ? child.key : index++
      }
      const extendedProps = {
        active,
        completed,
        disabled,
        index,
        onClick: e => {
          if (disabled || active)
            return
          this.onChange(e, index)
        }
      }
      return cloneElement(child, defaults(defaultProps, extendedProps))
    })
    return (
      <div className={classnames(className, css.stepper)} style={style}>
        {steps}
      </div>
    )
  }
}

Stepper.displayName = 'ruiStepper'

export default Stepper
