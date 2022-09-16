import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {withStyles} from '../theme'
import {ifDesktopWindow, ifMobile, isolateMixin} from '../utils/mixins'

const styles = theme => ({
  root: {
    extend: isolateMixin,
    fontFamily: theme.fontFamily,
    fontSize: theme.formGroup.fontSize,
    lineHeight: theme.formGroup.lineHeight + 'px',
    ...ifMobile({
      fontSize: theme.formGroup.mobile.fontSize,
      lineHeight: theme.formGroup.mobile.lineHeight + 'px'
    })
  },
  normal: {
    marginBottom: theme.formGroup.mobile.marginBottom
  },
  inline: {
    marginBottom: 15
  },
  label: {
    width: '100%',
    display: 'inline-block',
    marginBottom: theme.formGroup.label.marginBottom,
    fontWeight: theme.formGroup.label.fontWeight,
    letterSpacing: theme.formGroup.label.letterSpacing,
    ...ifMobile({
      fontWeight: theme.formGroup.label.mobile.fontWeight
    })
  },
  inner: {
    position: 'relative'
  },
  small: {},
  medium: {},
  ...ifDesktopWindow({
    normal: {
      '& $label': {
        width: '100%'
      },
      marginBottom: theme.formGroup.marginBottom
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
})

class FormGroup extends Component {
  static propTypes = {
    /**
     * Задаём стиль FormGroup - в строчку или колонку (label + input).
     * В теме чемпа не используется
     */
    inline: PropTypes.bool,
    /**
     * Указываем label для FormGroup
     */
    label: PropTypes.node,
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
     * Children - может быть FieldStatus или Input.
     */
    children: PropTypes.node.isRequired,
    /**
     * Style - объект со стилями
     */
    style: PropTypes.object
  }

  static defaultProps = {
    size: 'medium'
  }

  render() {
    const {
      label,
      inline,
      fieldId,
      className,
      children,
      size,
      classes,
      ...props
    } = this.props

    const rootClass = inline === true ? 'inline' : 'normal'
    const rootClassName = classnames(
      classes[size],
      classes[rootClass],
      classes.root,
      className
    )

    const labelClassName = classes.label
    const innerClassName = classes.inner

    return (
      <section className={rootClassName} {...props}>
        {label && (
          <label htmlFor={fieldId} className={labelClassName}>
            {label}
          </label>
        )}
        <div className={innerClassName}>{children}</div>
      </section>
    )
  }
}

export default withStyles(styles, {name: 'FormGroup'})(FormGroup)
