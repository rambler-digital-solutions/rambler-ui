/**
 * Компонент FormGroup
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { injectSheet } from '../theme'
import { ifDesktop, fontStyleMixin, isolateMixin } from '../style/mixins'

@injectSheet((theme) => ({
  root: {
    ...isolateMixin,
    ...fontStyleMixin(theme.font),
    fontSize: theme.formGroup.fontSize
  },
  normal: {
    marginBottom: 15
  },
  inline: {
    marginBottom: 15
  },
  label: {
    width: '100%',
    display: 'inline-block'
  },
  inner: {
    position: 'relative'
  },
  ...ifDesktop({
    normal: {
      '& $label': {
        width: '100%',
        marginBottom: 10
      },
      marginBottom: 30
    },
    inline: {
      marginBottom: 30,
      display: 'flex',
      '& $label': {
        marginLeft: 0,
        maxWidth: 172,
        lineHeight: '44px'
      },
      '& $inner': {
        flex: 1,
        width: 'auto'
      }
    },
    label: {},
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
    const rootClassName = classnames(css[rootClass], css.root, className)
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
