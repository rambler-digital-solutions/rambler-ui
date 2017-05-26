/**
 * Компонент Textarea
 */
import React, { Component, PropTypes } from 'react'
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
    borderRadius: 0,
    outline: 0,
    width: '100%',
    background: '#fff',
    fontWeight: 400,
    appearance: 'none',
    lineHeight: 'normal',
    maxWidth: '100%',
    border: theme.field.border,
    fontSize: theme.field.fontSize,
    transition: 'border-color 0.3s ease',
    '&::-ms-reveal': {
      display: 'none'
    },
    '&:focus': {
      borderBottom: theme.field.focusBorderBottom
    },
    '&:disabled': {
      backgroundColor: '#eee',
      borderColor: '#eee',
      cursor: 'default'
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
    borderBottom: theme.field.successBorderBottom
  },
  error: {
    borderBottom: theme.field.errorBorderBottom
  },
  warning: {
    borderBottom: theme.field.warningBorderBottom
  },
  withLeftIcon: {
    paddingLeft: theme.field.withIconPadding
  },
  withRightIcon: {
    paddingRight: theme.field.withIconPadding
  },
  root: {
    position: 'relative'
  },
  iconLeft: {
    position: 'absolute',
    top: 12,
    left: theme.field.iconMargin
  },
  iconRight: {
    position: 'absolute',
    top: 12,
    right: theme.field.iconMargin
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
    onKeyDown: PropTypes.func,
    /**
     * Иконка слева
     */
    iconLeft: PropTypes.node,
    /**
     * Иконка справа
     */
    iconRight: PropTypes.node
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
        {iconLeft &&
          <div className={css.iconLeft}>
            {iconLeft}
          </div>
        }
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
        {iconRight &&
          <div className={css.iconRight}>
            {iconRight}
          </div>
        }
      </div>
    )
  }
}
