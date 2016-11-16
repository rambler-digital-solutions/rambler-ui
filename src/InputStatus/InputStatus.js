import React, { Component, PropTypes } from 'react'

import classnames from 'classnames'
import omit from 'lodash/omit'
import { injectSheet } from '../theme'
import { fontStyleMixin, isolateMixin, middleMixin} from '../style/mixins'

@injectSheet(() => ({
  'success, warning, error': {
    '& field': {
      position: 'relative',
      '&::after': {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: '2px',
        content: ''
      }
    }
  },
  message: {
    marginTop: '7px'
  },
  success: {
    '& field::after': {
      backgroundColor: 'var(--successForeground)!!!!'
    },
    '& message': {
      color: 'var(--successForeground);!!!!'
    }
  },
  warning: {
    '& field::after': {
      backgroundColor: 'var(--warningForeground);!!!!!'
    },
    '& message': {
      color: 'var(--warningForeground);!!!!'
    }
  },
  error: {
    '& field::after': {
      backgroundColor: ' var(--failureForeground);!!!!!'
    },
    '& message': {
      color: 'var(--failureForeground);!!!!'
    }
  }
}))

export default class InputStatus extends Component {
  static propTypes = {
    type: PropTypes.oneOf([
      'error',
      'warning',
      'success'
    ]),
    message: PropTypes.node,
    children: PropTypes.node.isRequired
  }

  render() {
    const {
      type,
      message,
      children,
      sheet: { classes: css }
    } = omit(this.props, 'theme')

    const rootClassName = classnames(css[type])
    const fieldClassName = classnames(css.field)
    const messageClassName = classnames(css[type])

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
