/**
 * Компонент FormGroup
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { injectSheet } from '../theme'
import { ifDesktopSize, isolateMixin } from '../utils/mixins'

@injectSheet(theme => ({
  root: {
    ...isolateMixin,
    fontFamily: theme.fontFamily,
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
    display: 'inline-block',
    marginBottom: 10
  },
  inner: {
    position: 'relative'
  },
  ...ifDesktopSize({
    normal: {
      '& $label': {
        width: '100%'
      },
      marginBottom: 30
    },
    inline: {
      marginBottom: 30,
      display: 'flex',
      alignItems: 'flex-start',
      '& $label': {
        marginLeft: 0,
        marginBottom: 0,
        maxWidth: 172,
        lineHeight: 1
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
    },
    small: {
      '&$inline $label': {
        paddingTop: 12
      }
    },
    medium: {
      '&$inline $label': {
        paddingTop: 15
      }
    }
  })
}), {name: 'FormGroup'})
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
     * Размер
     */
    size: PropTypes.oneOf(['small', 'medium']),
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
  };

  static defaultProps = {
    size: 'medium'
  };

  render() {
    const {
      label,
      inline,
      fieldId,
      className,
      children,
      style,
      size,
      classes: css
    } = this.props

    const rootClass = inline === true ? 'inline' : 'normal'
    const rootClassName = classnames(css[size], css[rootClass], css.root, className)
    const labelClassName = css.label
    const innerClassName = css.inner

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
