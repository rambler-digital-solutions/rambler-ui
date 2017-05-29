/**
 * Компонент кнопки
 * Скетч: https://app.zeplin.io/project.html#pid=5788d29d450aa06b5691c466&sid=5788d41ba2e261bb69d6c68e
 */

import React, { Component, cloneElement, isValidElement } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import omit from 'lodash/omit'
import pure from 'recompose/pure'
import Spinner from '../Spinner'
import { injectSheet } from '../theme'
import { fontStyleMixin, middleMixin, isolateMixin } from '../style/mixins'

@pure
@injectSheet((theme) => ({
  button: {
    ...isolateMixin,
    ...fontStyleMixin(theme.font),
    textAlign: 'center',
    cursor: 'pointer',
    boxSizing: 'border-box',
    fontSize: theme.button.font.size,
    lineHeight: 1,
    textTransform: 'uppercase',
    textDecoration: 'none',
    fontWeight: theme.button.font.weight,
    letterSpacing: 1,
    outline: 'none',
    position: 'relative',
    display: 'inline-block',
    border: 'none',
    userSelect: 'none',
    '&, & *': { transition: 'background-color .2s, border .2s, box-shadow .2s' },
    '&:focus:before': {
      content: '""',
      display: 'block',
      position: 'absolute'
    },
    '&[disabled]': { pointerEvents: 'none' }
  },
  isRounded: {
    '&$button, &$button:focus:before': {
      borderRadius: '9999px !important'
    }
  },
  isLoading: {
    pointerEvents: 'none',
    opacity: 0
  },
  content: {
    ...middleMixin,
    padding: '0 20px',
    whiteSpace: 'nowrap',
    overflowX: 'hidden',
    textOverflow: 'ellipsis'
  },
  block: {
    display: 'block',
    width: '100%'
  },
  'size-medium': {
    '& $content': {
      height: theme.sizes.medium.height
    },
    '& $icon': {
      position: 'relative',
      top: -1
    }
  },
  'size-small': {
    '& $content': {
      height: theme.sizes.small.height
    }
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    opacity: 0,
    width: '100%',
    cursor: 'pointer'
  },
  icon: {
    display: 'inline-block'
  },
  'iconPosition-right': {
    '& $icon': {
      marginLeft: 10
    }
  },
  'iconPosition-left': {
    '& $icon': {
      marginRight: 10
    }
  },
  ...theme.button.buttonMixin('primary', {
    defaultBg: theme.button.types.primary.defaultBg,
    defaultBorder: theme.button.types.primary.defaultBorder,
    textColor: theme.button.types.primary.textColor,
    disabledTextColor: theme.button.types.primary.disabledTextColor,
    hoverBorder: theme.button.types.primary.hoverBorder,
    hoverBg: theme.button.types.primary.hoverBg,
    activeBorder: theme.button.types.primary.activeBorder,
    activeBg: theme.button.types.primary.activeBg,
    focusBorder: theme.button.types.primary.focusBorder,
    focusBg: theme.button.types.primary.focusBg,
    loadingBorder: theme.button.types.primary.loadingBorder,
    disabledBorder: theme.button.types.primary.disabledBorder,
    disabledBg: theme.button.types.primary.disabledBg,
    focusOffset: theme.button.types.primary.focusOffset,
    borderRadius: theme.button.types.primary.borderRadius
  }),
  ...theme.button.buttonMixin('secondary', {
    defaultBg: theme.button.types.secondary.defaultBg,
    defaultBorder: theme.button.types.secondary.defaultBorder,
    textColor: theme.button.types.secondary.textColor,
    disabledTextColor: theme.button.types.secondary.disabledTextColor,
    hoverBorder: theme.button.types.secondary.hoverBorder,
    hoverBg: theme.button.types.secondary.hoverBg,
    activeBorder: theme.button.types.secondary.activeBorder,
    activeBg: theme.button.types.secondary.activeBg,
    focusBorder: theme.button.types.secondary.focusBorder,
    focusBg: theme.button.types.secondary.focusBg,
    loadingBorder: theme.button.types.secondary.loadingBorder,
    disabledBorder: theme.button.types.secondary.disabledBorder,
    disabledBg: theme.button.types.secondary.disabledBg,
    focusOffset: theme.button.types.secondary.focusOffset,
    activeTextColor: theme.button.types.secondary.activeTextColor,
    borderRadius: theme.button.types.secondary.borderRadius
  }),
  ...theme.button.buttonMixin('outline', {
    defaultBg: theme.button.types.outline.defaultBg,
    defaultBorder: theme.button.types.outline.defaultBorder,
    textColor: theme.button.types.outline.textColor,
    disabledTextColor: theme.button.types.outline.disabledTextColor,
    hoverBorder: theme.button.types.outline.hoverBorder,
    hoverBg: theme.button.types.outline.hoverBg,
    activeBorder: theme.button.types.outline.activeBorder,
    activeBg: theme.button.types.outline.activeBg,
    focusBorder: theme.button.types.outline.focusBorder,
    focusBg: theme.button.types.outline.focusBg,
    loadingBorder: theme.button.types.outline.loadingBorder,
    disabledBorder: theme.button.types.outline.disabledBorder,
    disabledBg: theme.button.types.outline.disabledBg,
    focusOffset: theme.button.types.outline.focusOffset,
    activeTextColor: theme.button.types.outline.activeTextColor
  }),
  ...theme.button.buttonMixin('flat', {
    defaultBg: theme.button.types.flat.defaultBg,
    defaultBorder: theme.button.types.flat.defaultBorder,
    textColor: theme.button.types.flat.textColor,
    disabledTextColor: theme.button.types.flat.disabledTextColor,
    hoverBorder: theme.button.types.flat.hoverBorder,
    hoverBg: theme.button.types.flat.hoverBg,
    activeBorder: theme.button.types.flat.activeBorder,
    activeBg: theme.button.types.flat.activeBg,
    focusBorder: theme.button.types.flat.focusBorder,
    focusBg: theme.button.types.flat.focusBg,
    loadingBorder: theme.button.types.flat.loadingBorder,
    disabledBorder: theme.button.types.flat.disabledBorder,
    disabledBg: theme.button.types.flat.disabledBg,
    focusOffset: theme.button.types.flat.focusOffset,
    activeTextColor: theme.button.types.flat.activeTextColor
  }),
  ...theme.button.buttonMixin('danger', {
    defaultBg: theme.button.types.danger.defaultBg,
    defaultBorder: theme.button.types.danger.defaultBorder,
    textColor: theme.button.types.danger.textColor,
    disabledTextColor: theme.button.types.danger.disabledTextColor,
    hoverBorder: theme.button.types.danger.hoverBorder,
    hoverBg: theme.button.types.danger.hoverBg,
    activeBorder: theme.button.types.danger.activeBorder,
    activeBg: theme.button.types.danger.activeBg,
    focusBorder: theme.button.types.danger.focusBorder,
    focusBg: theme.button.types.danger.focusBg,
    loadingBorder: theme.button.types.danger.loadingBorder,
    disabledBorder: theme.button.types.danger.disabledBorder,
    disabledBg: theme.button.types.danger.disabledBg,
    focusOffset: theme.button.types.danger.focusOffset,
    borderRadius: theme.button.types.danger.borderRadius
  })
}))
export default class Button extends Component {

  static propTypes = {
    /**
     * Тип стиля кнопки
     */
    type: PropTypes.oneOf(['primary', 'secondary', 'outline', 'flat', 'danger']),
    /**
     * Если указан href, то кнопка будет ссылкой
     */
    href: PropTypes.string,
    /**
     * Атрибут target для ссылки, если указан атрибут href
     */
    target: PropTypes.string,
    /**
     * Css-класс
     */
    className: PropTypes.string,
    /**
     * Inline-стили
     */
    style: PropTypes.object,
    /**
     * Контент для кнопки
     */
    children: PropTypes.node,
    /**
     * Иконка для кнопки
     */
    icon: PropTypes.node,
    /**
     * Позиция иконки: слева/справа
     */
    iconPosition: PropTypes.oneOf(['left', 'right']),
    /**
     * Размер кнопки
     */
    size: PropTypes.oneOf(['small', 'medium']),
    /**
     * Обработчик клика
     */
    onClick: PropTypes.func,
    /**
     * Элемент, который содержит контент, например `<Link />`
     * в случае с `react-router`
     */
    container: PropTypes.element,
    /**
     * Элемент, который прозрачно накладывается на кнопку (Например `<input type="file" />`)
     */
    overlay: PropTypes.element,
    /**
     * Отключаем кнопку/ссылку
     */
    disabled: PropTypes.bool,
    /**
     * Отображать кнопку как блочный элемент
     */
    block: PropTypes.bool,
    /**
     * Тип кнопки
     */
    buttonType: PropTypes.string,
    /**
     * Ширина кнопки
     */
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /**
     * Показывать индикатор загрузки
     */
    loading: PropTypes.bool,
    /**
     * Закругленная кнопка
     */
    rounded: PropTypes.bool
  };

  static defaultProps = {
    type: 'primary',
    size: 'medium',
    buttonType: 'button',
    iconPosition: 'left',
    block: false
  };

  get css() {
    const { sheet: { classes: css } } = this.props
    return css
  }

  renderIcon(icon) {
    if (icon) {
      const { theme, size, type, disabled } = this.props
      const iconProps = {
        size: theme.sizes[size].icon,
        color: theme.button.types[type][disabled ? 'disabledTextColor' : 'iconColor']
      }
      const initialProps = icon.props || {}
      const className = classnames(initialProps.className, this.css.icon)
      const resultProps = { ...iconProps, ...initialProps, className }
      return cloneElement(icon, resultProps)
    }
  }

  render() {
    const {
      icon,
      children,
      size,
      type,
      href,
      container,
      buttonType,
      disabled,
      loading,
      block,
      className,
      overlay,
      width,
      iconPosition,
      rounded,
      style = {},
      theme,
      ...other
    } = omit(this.props, 'sheet')
    const css = this.css
    const iconLeft = iconPosition === 'left'
    const iconEl = this.renderIcon(icon)

    const resultStyle = {
      width,
      ...style
    }
    const resultClassName = classnames(
      css.button,
      rounded && css.isRounded,
      css[`type-${type}`],
      css[`size-${size}`],
      css[`iconPosition-${iconPosition}`],
      className,
      {
        [css.block]: block
      })

    const resultChildren = (
      <div className={classnames(css.content, loading && css.isLoading)}>
        { iconLeft && iconEl }
        { children }
        { !iconLeft && iconEl }
        { overlay && cloneElement(overlay, {className: css.overlay}) }
      </div>
    )

    const resultProps = {
      ...other,
      style: resultStyle,
      className: resultClassName,
      disabled: disabled ? 'disabled' : null
    }

    const resultContainer = isValidElement(container) ?
      container : href ?
      <a href={ href } /> : overlay ?
      <div /> : <button type={ buttonType } />

    return cloneElement(
      resultContainer,
      resultProps,
      resultChildren,
      loading && <Spinner color={theme.button.types[type].loaderColor} />
    )
  }
}
