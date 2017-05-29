/**
 * Компонент InputStatus
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { injectSheet } from '../theme'
import { fontStyleMixin } from '../style/mixins'

@injectSheet(theme => ({
  success: {
    '& $message': {
      color: ' #28bc00'
    }
  },
  warning: {
    '& $message': {
      color: '#f4c914'
    }
  },
  error: {
    '& $message': {
      color: '#ff564e'
    }
  },
  message: {
    ...fontStyleMixin(theme.font),
    marginTop: '7px',
    textAlign: 'left'
  }
}))

export default class InputStatus extends Component {
  static propTypes = {
    /**
     * Отображает текст статуса компонента input.
     * Тип предупреждения.
     */
    type: PropTypes.oneOf([
      'error',
      'warning',
      'success'
    ]),
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
    className: PropTypes.string
  }

  render() {
    const {
      type,
      message,
      children,
      className,
      sheet: { classes: css }
    } = this.props

    const rootClassName = classnames(css[type])
    const messageClassName = classnames(css.message, className)

    return (
      <div className={message && rootClassName}>
        <div>
          {children}
        </div>
        {message && (
          <div className={messageClassName}>
            {message}
          </div>
        )}
      </div>
    )
  }
}
