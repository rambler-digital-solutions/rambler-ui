/**
 * Компонент FormGroup
 */

import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import omit from 'lodash/omit'
import { injectSheet } from '../theme'
import { ifDesktop } from '../style/mixins'

@injectSheet(() => ({
  normal: {
    marginBottom: '15px',
    '& $label': {}
  },
  inline: {
    marginBottom: '15px'
  },
  label: {
    width: '100%',
    display: 'inline-block',
    marginBottom: '5px'
  },
  inner: {
    position: 'relative'
  },
  ...ifDesktop({
    normal: {
      '& $label': {
        width: '100%'
      },
      marginBottom: '30px'
    },
    inline: {
      marginBottom: '30px',
      '& $label': {},
      '& $inner': {}
    },
    label: {
      marginBottom: 0,
      width: '172px',
      lineHeight: '44px'
    },
    inner: {
      display: 'inline-block',
      verticalAlign: 'top',
      width: '440px',
      marginLeft: 0
    }
  })
}))

export default class FormGroup extends Component {
  static propTypes = {
    /**
     * Задаём стиль FormGroup - в строчку или колонку (label + input)
     */
    inline: PropTypes.bool,
    /**
     * Указываем label для FormGroup
     */
    label: PropTypes.string,
    /**
    * Имя класса - className для FormGroup
    */
    className: PropTypes.string,
    /**
     * Значение для htmlFor in label
     */
    fieldId: PropTypes.string,
    /**
     * Children - может быть InputStatus или TextInput.
     */
    children: PropTypes.node.isRequired
  }

  render() {
    const {
      label,
      inline,
      fieldId,
      className,
      children,
      sheet: { classes: css }
    } = omit(this.props, 'theme')

    const rootClass = inline === true ? 'inline' : 'normal'
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
