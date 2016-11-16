/**
 * Компонент InputStatus
 */
import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import omit from 'lodash/omit'
import { injectSheet } from '../theme'
// import { fontStyleMixin, isolateMixin, middleMixin} from '../style/mixins'

@injectSheet(() => ({
  success: {
    '& $field': {
      '&:after': {
        backgroundColor: '#28bc00'
      }
    },
    '& $message': {
      color: ' #28bc00;'
    }
  },
  warning: {
    '& $field': {
      '&:after': {
        backgroundColor: '#f4c914'
      }
    },
    '& $message': {
      color: '#f4c914'
    }
  },
  error: {
    '& $field': {
      '&:after': {
        backgroundColor: '#ff564e'
      }
    },
    '& $message': {
      color: '#ff564e'
    }
  },
  field: {
    position: 'relative',
    '&:after': {
      content: '""',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: '2px'
    }
  },
  message: {
    marginTop: '7px'
  }
}))

export default class InputStatus extends Component {
  static propTypes = {
    /**
     * Тип предупреждения
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
     * Тот самый input
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
    } = omit(this.props, 'theme')

    const rootClassName = classnames(css[type])
    const fieldClassName = classnames(css.field)
    const messageClassName = classnames(css.message, className)

    return (
      <div className={message && rootClassName}>
        <div className={fieldClassName}>
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
