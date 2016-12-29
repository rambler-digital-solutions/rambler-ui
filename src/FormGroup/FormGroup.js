/**
 * Компонент FormGroup
 */

import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
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
      display: 'flex',
      '& $label': {},
      '& $inner': {}
    },
    label: {
      marginBottom: 0,
      width: '172px',
      lineHeight: '44px',
      marginLeft: 0
    },
    inner: {
      display: 'inline-block',
      verticalAlign: 'top',
      width: '100%',
      marginLeft: 0
    }
  })
}))

export default class FormGroup extends Component {
  static propTypes = {
    /**
     * Задаём стиль FormGroup - в строчку или колонку (label + input).
     * В теме чемпа не используется
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
     * Children - может быть InputStatus или Input.
     */
    children: PropTypes.node.isRequired,
    /**
     * Style - объект со стилями
     */
    style: PropTypes.object
  }

  render() {
    const {
      label,
      inline,
      fieldId,
      className,
      children,
      style,
      sheet: { classes: css }
    } = this.props

    const rootClass = inline === true ? 'inline' : 'normal'
    const rootClassName = classnames(css[rootClass], className)
    const labelClassName = classnames(css.label)
    const innerClassName = classnames(css.inner)

    return (
      <section className={rootClassName} style={style}>
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
