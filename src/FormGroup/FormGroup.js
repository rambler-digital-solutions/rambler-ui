/**
 * Компонент FormGroup
 */

import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import omit from 'lodash/omit'
import { injectSheet } from '../theme'

@injectSheet(() => ({
  normal: {
    marginBottom: '15px'
  },
  inline: {
    marginBottom: '15px'
  },
  label: {
    display: 'inline-block',
    marginBottom: '5px',
    width: '100%'
  },
  inner: {
    position: 'relative'
  },
  '@media (min-width: 768px)': {
    inline: {
      marginBottom: '30px'
    },
    label: {
      marginBottom: 0,
      width: '172px',
      lineHeight: '44px'
    },
    inner: {
      display: 'inline-block',
      verticalAlign: 'top',
      marginLeft: '172px',
      width: '440px'
    },
    'label + inner': {
      marginLeft: 0
    }
  }
}))

export default class FormGroup extends Component {
  static propTypes = {
    /**
     * типа какой стиль
     */
    inline: PropTypes.bool,
    /**
     * label прост стринга
     */
    label: PropTypes.string,
    /**
     * for htmlFor in label
     */
    fieldId: PropTypes.string,
    /**
     * Children node
     */
    children: PropTypes.node.isRequired,
    /**
     * className FormGroup
     */
    className: PropTypes.node,
  }

  render() {
    const {
      label,
      inline,
      fieldId,
      children,
      className,
      sheet: { classes: css }
    } = omit(this.props, 'theme')

    const rootClass = inline ? 'inline' : 'normal'
    const rootClassName = classnames(css[rootClass], className)
    const labelClassName = classnames(css.label)
    const innerClassName = classnames(css.inner)

    return (
      <section className={rootClassName}>
        {label && (
          <label htmlFor={fieldId} className={labelClassName}>
            {label}
          </label>
        )}
        <div className={innerClassName}>
          {children}
        </div>
      </section>
    )
  }
}
