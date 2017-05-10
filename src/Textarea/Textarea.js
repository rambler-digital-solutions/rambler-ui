/**
 * Компонент Textarea
 */
import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import omit from 'lodash/omit'
import pure from 'recompose/pure'
import { injectSheet } from '../theme'
import { fontStyleMixin, isolateMixin, placeholderMixin } from '../style/mixins'

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
    ...theme.textarea,
    transition: 'border-color 0.3s ease',
    ...placeholderMixin({color: theme.inputRequiredProps.baseColor}),
    '&::-ms-reveal': {
      display: 'none'
    },
    '&:disabled': {
      backgroundColor: '#eee',
      borderColor: '#eee',
      cursor: 'default'
    }
  },
  success: {
    borderBottom: theme.inputRequiredProps.successBorderBottom.borderBottom,
    paddingBottom: 12
  },
  error: {
    borderBottom: theme.inputRequiredProps.errorBorderBottom.borderBottom,
    paddingBottom: 12
  },
  warning: {
    borderBottom: theme.inputRequiredProps.warningBorderBottom.borderBottom,
    paddingBottom: 12
  },
  withLeftIcon: {
    paddingLeft: 40
  },
  withRightIcon: {
    paddingRight: 40
  },
  root: {
    position: 'relative'
  },
  iconLeft: {
    position: 'absolute',
    top: 12,
    left: 12
  },
  iconRight: {
    position: 'absolute',
    top: 12,
    right: 12
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
    status: null
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
      status,
      iconLeft,
      iconRight,
      sheet: { classes: css },
      ...other
    } = omit(this.props, ['theme', 'onChange'])

    const resultClassName = classnames(
      css.textarea,
      css[status],
      {
        [css.withLeftIcon]: !!iconLeft,
        [css.withRightIcon]: !!iconRight
      },
      className
    )

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
