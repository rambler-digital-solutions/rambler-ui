/**
 * Компонент Input
 */
import React, { Component, createElement, cloneElement } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import omit from 'lodash/omit'
import { injectSheet } from '../theme'
import { isolateMixin, borderMixin, bottomBorderMixin, placeholderMixin } from '../style/mixins'
import Tooltip from '../Tooltip'
import { Eye } from '../icons/forms'

@injectSheet(theme => ({
  input: {
    ...isolateMixin,
    fontFamily: theme.fontFamily,
    boxSizing: 'border-box',
    display: 'block',
    padding: 0,
    outline: 0,
    width: '100%',
    fontWeight: 400,
    fontSize: theme.field.fontSize,
    appearance: 'none',
    lineHeight: 'normal',
    background: theme.field.colors.default.background,
    transition: `border-color ${theme.field.animationDuration}ms ease`,
    border: 0,
    boxShadow: 'none',
    borderRadius: theme.field.borderRadius,
    'textarea&': {
      resize: 'vertical',
      height: '100%',
      paddingTop: theme.input.padding,
      paddingBottom: theme.input.padding
    },
    '&::-ms-reveal, &::-ms-clear': {
      display: 'none'
    },
    '&:disabled': {
      background: theme.field.colors.disabled.background,
      color: theme.field.colors.disabled.text,
      cursor: 'not-allowed'
    },
    '&$filled[type="password"]': {
      fontFamily: 'monospace'
    },
    ...placeholderMixin('&', {
      color: theme.field.colors.default.placeholder
    }),
    ...placeholderMixin('&:disabled', {
      color: theme.field.colors.disabled.placeholder
    })
  },
  outline: {
    '&': borderMixin(theme.field.colors.default.outline),
    '&:hover': borderMixin(theme.field.colors.hover.outline),
    '&$disabled': borderMixin(theme.field.colors.disabled.outline)
  },
  borderColor: {
    '& $input:focus': {
      borderColor: theme.field.colors.focus.border + '!important'
    },
    '$success& $input:enabled': {
      borderColor: theme.colors.success + '!important'
    },
    '$error& $input:enabled': {
      borderColor: theme.colors.danger + '!important'
    },
    '$warning& $input:enabled': {
      borderColor: theme.colors.warn + '!important'
    }
  },
  bottomBorder: {
    '& $input': {
      paddingTop: 2,
      border: 'solid transparent',
      borderWidth: '0 0 2px'
    }
  },
  regular: {
    composes: ['$outline', '$borderColor'],
    '& $input': {
      paddingLeft: theme.input.padding - 1,
      paddingRight: theme.input.padding - 1,
      border: '1px solid transparent'
    }

  },
  awesome: {
    composes: ['$outline', '$borderColor', '$bottomBorder'],
    '& $input': {
      paddingLeft: theme.input.padding,
      paddingRight: theme.input.padding
    }
  },
  promo: {
    composes: ['$borderColor', '$bottomBorder'],
    '&': bottomBorderMixin(theme.field.colors.default.outline),
    '&$disabled': bottomBorderMixin(theme.field.colors.disabled.outline)
  },
  ...['medium', 'small'].reduce((result, size) => ({
    ...result,
    [size]: {
      '& $input': {
        fontSize: theme.field.sizes[size].fontSize
      },
      '& input$input': {
        height: theme.field.sizes[size].height,
        lineHeight: 'normal'
      },
      '& $eye': {
        height: theme.field.sizes[size].eyeIcon,
        width: theme.field.sizes[size].eyeIcon,
        lineHeight: theme.field.sizes[size].eyeIcon + 'px'
      },
      '&$withLeftIcon$regular $input': {
        paddingLeft: theme.field.sizes[size].withIconPadding - 1
      },
      '&$withLeftIcon$awesome $input': {
        paddingLeft: theme.field.sizes[size].withIconPadding
      },
      '&$withLeftIcon$promo $input': {
        paddingLeft: theme.field.sizes[size].withIconPadding - theme.input.padding
      },
      '&$withRightIcon$regular $input, &$withEye$regular $input': {
        paddingRight: theme.field.sizes[size].withIconPadding - 1
      },
      '&$withEye$withRightIcon$regular $input': {
        paddingRight: theme.field.sizes[size].withIconsPadding - 1
      },
      '&$withRightIcon$awesome $input, &$withEye$awesome $input': {
        paddingRight: theme.field.sizes[size].withIconPadding
      },
      '&$withEye$withRightIcon$awesome $input': {
        paddingRight: theme.field.sizes[size].withIconsPadding
      },
      '&$withRightIcon$promo $input, &$withEye$promo $input': {
        paddingRight: theme.field.sizes[size].withIconPadding - theme.input.padding
      },
      '&$withEye$withRightIcon$promo $input': {
        paddingRight: theme.field.sizes[size].withIconsPadding - theme.input.padding
      },
      '&$withEye$regular $iconRight, &$withEye$awesome $iconRight': {
        right: theme.field.sizes[size].withIconPadding
      },
      '&$withEye$promo $iconRight': {
        right: theme.field.sizes[size].withIconPadding - theme.input.padding
      },
      '&$regular $iconLeft, &$awesome $iconLeft': {
        left: theme.field.sizes[size].iconMargin
      },
      '&$promo $iconLeft': {
        left: 0
      },
      '&$regular $iconRight, &$awesome $iconRight': {
        right: theme.field.sizes[size].iconMargin
      },
      '&$promo $iconRight': {
        right: 0
      }
    }
  }), {}),

  root: {
    ...isolateMixin,
    borderRadius: theme.field.borderRadius,
    position: 'relative',
    background: theme.field.colors.default.background,
    boxSizing: 'border-box',
    fontFamily: theme.fontFamily,
    transition: `box-shadow ${theme.field.animationDuration}ms ease`
  },
  icon: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: 0,
    pointerEvents: 'none'
  },
  eye: {
    extend: 'icon',
    border: 0,
    outline: 0,
    cursor: 'pointer',
    '$regular &, $awesome &': {
      right: theme.input.eyeMargin
    },
    '$promo &': {
      right: 0
    }
  },
  withLeftIcon: {},
  withRightIcon: {},
  withEye: {},
  iconLeft: {},
  iconRight: {},
  filled: {},
  disabled: {},
  success: {},
  error: {},
  warning: {}
}))

export default class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: this.props.type
    }
  }

  static propTypes = {
    /**
    *  Значение введённое в поле, возвращается в callback onChange.
    *  Можно задать дефолтное значение.
    */
    value: PropTypes.any.isRequired,
    /**
    *  Значение placeholder для input
    */
    placeholder: PropTypes.string,
    /**
    * Задизэйблить input true или false
    */
    disabled: PropTypes.bool,
    /**
    * Тип поля (на данный момент, cо временем добавим другие типы полей).
    */
    type: PropTypes.oneOf([
      'email',
      'number',
      'password',
      'tel',
      'text',
      'url'
    ]),
    /**
     * Размер инпута
     */
    size: PropTypes.oneOf(['small', 'medium']),
    /**
     * Разновидность инпута
     */
    variation: PropTypes.oneOf(['regular', 'awesome', 'promo']),
    /**
     * Имя элемента
     */
    name: PropTypes.string,
    /**
     * Валидация input'a
     */
    status: PropTypes.oneOf(['error', 'warning', 'success', null]),
    /**
     * Класс контейнера
     */
    className: PropTypes.string,
    /**
     * Класс элемента input
     */
    inputClassName: PropTypes.string,
    /**
     * По умолчанию элемент input растягивается на всю ширину родительского контейнера.
     * Т.е. задавать ширину через родительский контейнер - объект style.
     * Сюда не стоит передавать какое-либо значение.
     */
    fullWidth: PropTypes.any,
    /**
     * Переопределение стандартных стилей input
     */
    inputStyle: PropTypes.object,
    /**
    * Переопределение стилей контейнера для input
    */
    style: PropTypes.object,
    /**
    * Callback onChange возвращает event и event.target.value
    */
    onChange: PropTypes.func.isRequired,
    /**
     * Callback onBlur
     */
    onBlur: PropTypes.func,
    /**
     * Callback onFocus
     */
    onFocus: PropTypes.func,
    /**
     * Callback onKeyUp
     */
    onKeyUp: PropTypes.func,
    /**
     * Callback onKeyDown
     */
    onKeyDown: PropTypes.func,
    /**
     *  icon слева
     */
    iconLeft: PropTypes.node,
    /**
     *  icon справа
     */
    iconRight: PropTypes.node,
    /**
     * Текст подсказки для кнопки смены статуса типа password, ожидается `String`
     * или функция возвращающая `String`: currentType => 'Показать пароль'
     */
    passwordIconTooltip: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func
    ])
  };

  static defaultProps = {
    status: null,
    size: 'medium',
    variation: 'awesome'
  };

  inputTypeHelper = () => {
    this.input.type = this.state.type === 'password' ? 'text' : 'password'
    this.setState({ type: this.input.type })
  }

  onChangeHelper = (e) => {
    if (this.props.onChange) this.props.onChange(e, e.target.value)
  }

  renderPasswordIcon() {
    const { type } = this.state

    const {
      type: trueType,
      size,
      theme,
      sheet: { classes: css },
      passwordIconTooltip
    } = this.props

    if (trueType !== 'password')
      return null

    const icon = (
      <Eye
        onClick={this.inputTypeHelper}
        size={theme.field.sizes[size].eyeIcon}
        color={type === 'password' ? theme.field.eyeIcon.colors.default : theme.field.eyeIcon.colors.active} />
    )

    if (passwordIconTooltip) {
      const content = typeof passwordIconTooltip === 'function' ?
        passwordIconTooltip(type) :
        passwordIconTooltip

      return (
        <Tooltip className={css.eye} content={content}>
          {icon}
        </Tooltip>
      )
    }

    return (
      <div className={css.eye}>
        {icon}
      </div>
    )
  }

  render() {
    const {
      tag = 'input',
      className,
      style,
      disabled,
      inputStyle,
      inputClassName,
      name,
      size,
      variation,
      placeholder,
      iconLeft,
      iconRight,
      status,
      sheet: { classes: css },
      theme,
      inputRef,
      value,
      ...other
    } = omit(this.props, ['onChange', 'passwordIconTooltip'])

    const trueType = this.props.type
    const resultClassName = classnames(className, css.root, css[variation], css[status], disabled && css.disabled, css[size], {
      [css.withLeftIcon]: !!iconLeft,
      [css.withRightIcon]: !!iconRight,
      [css.withEye]: trueType === 'password'
    })

    const resultIconLeft = iconLeft && cloneElement(iconLeft, {
      color: disabled ? theme.field.colors.disabled.text : (iconLeft.props.color || theme.field.colors.default.text),
      size: iconLeft.props.size || theme.field.sizes[size].icon,
      className: classnames(iconLeft.props.className, css.icon, css.iconLeft)
    })

    const resultIconRight = iconRight && cloneElement(iconRight, {
      color: disabled ? theme.field.colors.disabled.text : (iconRight.props.color || theme.field.colors.default.text),
      size: iconRight.props.size || theme.field.sizes[size].icon,
      className: classnames(iconRight.props.className, css.icon, css.iconRight)
    })

    const inputElement = createElement(tag, {
      name,
      value,
      disabled,
      ref: input => {
        this.input = input
        if (inputRef)
          inputRef(input)
      },
      className: classnames(css.input, inputClassName, value !== '' && value != null && css.filled),
      style: inputStyle,
      onChange: this.onChangeHelper,
      tabIndex: '0',
      placeholder,
      ...other
    })

    return (
      <div style={style} className={resultClassName}>
        {resultIconLeft}
        {inputElement}
        {resultIconRight}
        {this.renderPasswordIcon()}
      </div>
    )
  }
}
