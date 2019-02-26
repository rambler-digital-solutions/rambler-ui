/**
 * Компонент InputStatus
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {injectSheet} from '../theme'
import {isolateMixin, ifMobile} from '../utils/mixins'

@injectSheet(
  theme => ({
    success: {
      '& $message': {
        color: theme.colors.success
      }
    },
    warning: {
      '& $message': {
        color: theme.colors.warn
      }
    },
    error: {
      '& $message': {
        color: theme.colors.danger
      }
    },
    message: {
      extend: isolateMixin,
      fontFamily: theme.fontFamily,
      marginTop: 10,
      fontSize: theme.inputStatus.sizes.fontSize,
      lineHeight: theme.inputStatus.sizes.fontSize + 2 + 'px',
      textAlign: 'left',
      ...ifMobile({
        fontSize: theme.inputStatus.sizes.mobile.fontSize
      })
    }
  }),
  {name: 'InputStatus'}
)
export default class InputStatus extends Component {
  static propTypes = {
    /**
     * Отображает текст статуса компонента input.
     * Тип предупреждения.
     */
    type: PropTypes.oneOf(['error', 'warning', 'success']),
    /**
     * Мессадж который будет отображаться как статус
     */
    message: PropTypes.node,
    /**
     * Элемент Input относительно которого будет отражаться InputStatus
     */
    children: PropTypes.node.isRequired,
    /**
     * className
     */
    className: PropTypes.string,
    /**
     * containerRef используется в качестве ref корневого дива
     */
    containerRef: PropTypes.func
  }

  render() {
    const {
      type,
      theme, // eslint-disable-line no-unused-vars
      classes,
      message,
      children,
      className,
      containerRef,
      ...otherProps
    } = this.props
    const rootClassName = classnames(message && classes[type])
    const messageClassName = classnames(classes.message, className)

    return (
      <div className={rootClassName} {...otherProps} ref={containerRef}>
        {children}
        {message && <div className={messageClassName}>{message}</div>}
      </div>
    )
  }
}
