/**
 * Компонент Textarea
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import omit from 'lodash/omit'
import pure from 'recompose/pure'
import { injectSheet } from '../theme'
import { fontStyleMixin, isolateMixin } from '../style/mixins'

@pure
@injectSheet(theme => ({
  textarea: {
    ...isolateMixin,
    ...fontStyleMixin(theme.font),
    boxSizing: 'border-box',
    display: 'block',
    borderRadius: theme.field.borderRadius,
    outline: 0,
    width: '100%',
    background: theme.field.colors.default.background,
    fontWeight: 400,
    appearance: 'none',
    lineHeight: 'normal',
    maxWidth: '100%',
    border: `1px solid ${theme.field.colors.default.border}`,
    fontSize: theme.field.fontSize,
    transition: `border-color ${theme.field.animationDuration}ms ease`,
    '&::-ms-reveal': {
      display: 'none'
    },
    '&:focus': {
      borderBottom: `2px solid ${theme.field.colors.focus.border}`
    },
    '&:disabled': {
      backgroundColor: theme.field.colors.disabled.background,
      borderColor: theme.field.colors.disabled.border,
      color: theme.field.colors.disabled.color,
      cursor: 'not-allowed'
    }
  },
  small: {
    height: theme.textarea.sizes.small.height,
    padding: theme.textarea.sizes.small.padding,
    '&:focus': {
      paddingBottom: theme.textarea.sizes.small.focusPaddingBottom
    },
    '&$success': {
      paddingBottom: theme.textarea.sizes.small.focusPaddingBottom
    },
    '&$warning': {
      paddingBottom: theme.textarea.sizes.small.focusPaddingBottom
    },
    '&$error': {
      paddingBottom: theme.textarea.sizes.small.focusPaddingBottom
    }
  },
  medium: {
    height: theme.textarea.sizes.medium.height,
    padding: theme.textarea.sizes.medium.padding,
    '&:focus': {
      paddingBottom: theme.textarea.sizes.medium.focusPaddingBottom
    },
    '&$success': {
      paddingBottom: theme.textarea.sizes.medium.focusPaddingBottom
    },
    '&$warning': {
      paddingBottom: theme.textarea.sizes.medium.focusPaddingBottom
    },
    '&$error': {
      paddingBottom: theme.textarea.sizes.medium.focusPaddingBottom
    }
  },
  success: {
    '&$textarea': {
      borderBottom: `2px solid ${theme.field.colors.success.border}`
    }
  },
  error: {
    '&$textarea': {
      borderBottom: `2px solid ${theme.field.colors.error.border}`
    }
  },
  warning: {
    '&$textarea': {
      borderBottom: `2px solid ${theme.field.colors.warn.border}`
    }
  },
  root: {
    position: 'relative'
  }
}))
export default class Textarea extends Component {

  static propTypes = {
    /**
     *  Значение поля
     */
    value: PropTypes.any.isRequired,
    /**
     *  Значение placeholder
     */
    placeholder: PropTypes.string,
    /**
     * Отключаем элемент
     */
    disabled: PropTypes.bool,
    /**
     * Имя элемента
     */
    name: PropTypes.string,
    /**
     * Задает нижнюю границу определенного цвета, например, для обозначения статуса валидации
     */
    status: PropTypes.oneOf([
      'error',
      'warning',
      'success',
      null
    ]),
    /**
     * Размер елемента
     */
    size: PropTypes.oneOf(['small', 'medium']),
    /**
     * Класс компонента
     */
    className: PropTypes.string,
    /**
     * Переопределение стилей
     */
    style: PropTypes.object,
    /**
     * Обработик изменения значения поля, возвращает event и текущее value
     */
    onChange: PropTypes.func.isRequired,
    /**
     * Обработчик потери фокуса
     */
    onBlur: PropTypes.func,
    /**
     * Обработчик фокуса
     */
    onFocus: PropTypes.func,
    /**
     * Обрабочик отжатия клавиши
     */
    onKeyUp: PropTypes.func,
    /**
     * Обработчик нажания клавиши
     */
    onKeyDown: PropTypes.func
  };

  static defaultProps = {
    status: null,
    size: 'medium'
  };

  onChange = event => {
    if (this.props.onChange)
      this.props.onChange(event, event.target.value)
  }

  render() {
    const {
      className,
      name,
      disabled,
      style,
      placeholder,
      size,
      status,
      iconLeft,
      iconRight,
      sheet: { classes: css },
      ...other
    } = omit(this.props, ['theme', 'onChange'])

    const resultClassName = classnames(css.textarea, css[size], css[status], {
      [css.withLeftIcon]: !!iconLeft,
      [css.withRightIcon]: !!iconRight
    }, className)

    return (
      <div className={css.root}>
        <textarea
          name={name}
          disabled={disabled}
          placeholder={placeholder}
          className={resultClassName}
          style={style}
          onChange={this.onChange}
          tabIndex='0'
          {...other}
        />
      </div>
    )
  }
}
