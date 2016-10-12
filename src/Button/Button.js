/**
 * Компонент кнопки
 * Скетч: https://app.zeplin.io/project.html#pid=5788d29d450aa06b5691c466&sid=5788d41ba2e261bb69d6c68e
 */

import React, { Component, PropTypes, cloneElement, isValidElement } from 'react'
import classnames from 'classnames'
import range from 'lodash/range'
import omit from 'lodash/omit'
import { injectSheet } from '../theme'
import { fontStyleMixin, middleMixin, borderMixin, isolateMixin } from '../style/mixins'

const styleButtonMixin = (type, options) => ({
  [`type-${type}`]: {
    extend: borderMixin(options.defaultBorder),
    color: `${options.textColor} !important`,
    background: options.defaultBg,
    '&:focus:not(:active)': {
      background: `${options.focusBg} !important`
    },
    '&:focus:not(:active):before': {
      extend: borderMixin(options.focusBorder),
      top: -options.focusOffset,
      bottom: -options.focusOffset,
      left: -options.focusOffset,
      right: -options.focusOffset
    },
    '&:hover:not(:active)': {
      extend: borderMixin(options.hoverBorder),
      background: `${options.hoverBg} !important`
    },
    '&:active': {
      extend: borderMixin(options.activeBorder),
      background: options.activeBg
    },
    '&[disabled]': {
      extend: borderMixin(options.disabledBorder),
      color: `${options.disabledTextColor} !important`,
      background: options.disabledBg
    },
    '& $loaderDot': { background: options.textColor }
  }
})

@injectSheet((theme) => ({
  '@keyframes ruiAnimateDot': {
    '20%': { transform: 'scale(1)' },
    '40%': { transform: 'scale(1) translate3d(0, 5px, 0)' },
    '100%': { transform: 'scale(1)  translate3d(0, 0, 0)' }
  },
  button: {
    ...isolateMixin,
    ...fontStyleMixin(theme.font),
    textAlign: 'center',
    cursor: 'pointer',
    boxSizing: 'border-box',
    fontSize: 12,
    lineHeight: 1,
    textTransform: 'uppercase',
    textDecoration: 'none',
    fontWeight: 400,
    letterSpacing: 1,
    outline: 'none',
    position: 'relative',
    display: 'inline-block',
    border: 'none',
    userSelect: 'none',
    '&, & *': { transition: 'all .2s' },
    '&:focus:before': {
      content: '""',
      display: 'block',
      position: 'absolute'
    },
    '&[disabled]': { pointerEvents: 'none' }
  },
  isLoading: {
    pointerEvents: 'none',
    '& $content': { opacity: 0 }
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
      height: theme.buttons.sizes.medium.height
    }
  },
  'size-small': {
    '& $content': {
      height: theme.buttons.sizes.small.height
    }
  },
  loader: {
    ...middleMixin,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    width: '100%',
    textAlign: 'center'
  },
  loaderDot: {
    display: 'inline-block',
    verticalAlign: 'middle',
    height: 5,
    width: 5,
    position: 'relative',
    top: -2,
    borderRadius: '50%',
    transition: 'transform .6s ease-out',
    transform: 'translate3d(0, 0, 0)',
    animation: 'ruiAnimateDot .6s ease-out',
    animationFillMode: 'forwards',
    animationIterationCount: 'infinite',
    '&:nth-child(1)': { animationDelay: '0s' },
    '&:nth-child(2)': { animationDelay: '.08s', margin: '0 5px' },
    '&:nth-child(3)': { animationDelay: '.16s' }
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
    display: 'inline-block',
    marginRight: 10
  },
  ...styleButtonMixin('primary', {
    defaultBg: theme.buttons.types.primary.defaultBg,
    defaultBorder: theme.buttons.types.primary.defaultBorder,
    textColor: theme.buttons.types.primary.textColor,
    disabledTextColor: theme.buttons.types.primary.disabledTextColor,
    hoverBorder: theme.buttons.types.primary.hoverBorder,
    hoverBg: theme.buttons.types.primary.hoverBg,
    activeBorder: theme.buttons.types.primary.activeBorder,
    activeBg: theme.buttons.types.primary.activeBg,
    focusBorder: theme.buttons.types.primary.focusBorder,
    focusBg: theme.buttons.types.primary.focusBg,
    loadingBorder: theme.buttons.types.primary.loadingBorder,
    disabledBorder: theme.buttons.types.primary.disabledBorder,
    disabledBg: theme.buttons.types.primary.disabledBg,
    focusOffset: theme.buttons.types.primary.focusOffset
  }),
  ...styleButtonMixin('secondary', {
    defaultBg: theme.buttons.types.secondary.defaultBg,
    defaultBorder: theme.buttons.types.secondary.defaultBorder,
    textColor: theme.buttons.types.secondary.textColor,
    disabledTextColor: theme.buttons.types.secondary.disabledTextColor,
    hoverBorder: theme.buttons.types.secondary.hoverBorder,
    hoverBg: theme.buttons.types.secondary.hoverBg,
    activeBorder: theme.buttons.types.secondary.activeBorder,
    activeBg: theme.buttons.types.secondary.activeBg,
    focusBorder: theme.buttons.types.secondary.focusBorder,
    focusBg: theme.buttons.types.secondary.focusBg,
    loadingBorder: theme.buttons.types.secondary.loadingBorder,
    disabledBorder: theme.buttons.types.secondary.disabledBorder,
    disabledBg: theme.buttons.types.secondary.disabledBg,
    focusOffset: theme.buttons.types.secondary.focusOffset
  }),
  ...styleButtonMixin('outline', {
    defaultBg: theme.buttons.types.outline.defaultBg,
    defaultBorder: theme.buttons.types.outline.defaultBorder,
    textColor: theme.buttons.types.outline.textColor,
    disabledTextColor: theme.buttons.types.outline.disabledTextColor,
    hoverBorder: theme.buttons.types.outline.hoverBorder,
    hoverBg: theme.buttons.types.outline.hoverBg,
    activeBorder: theme.buttons.types.outline.activeBorder,
    activeBg: theme.buttons.types.outline.activeBg,
    focusBorder: theme.buttons.types.outline.focusBorder,
    focusBg: theme.buttons.types.outline.focusBg,
    loadingBorder: theme.buttons.types.outline.loadingBorder,
    disabledBorder: theme.buttons.types.outline.disabledBorder,
    disabledBg: theme.buttons.types.outline.disabledBg,
    focusOffset: theme.buttons.types.outline.focusOffset
  })
}))
export default class Button extends Component {

  static propTypes = {
    /**
     * Тип стиля кнопки
     */
    type: PropTypes.oneOf(['primary', 'secondary', 'outline']),
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
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  };

  static defaultProps = {
    type: 'primary',
    size: 'medium',
    buttonType: 'button',
    block: false
  };

  get css() {
    const { sheet: { classes: css } } = this.props
    return css
  }

  renderIcon(icon) {
    if (icon) {
      const { theme, size, type } = this.props
      const iconProps = {
        size: theme.buttons.sizes[size].icon,
        color: theme.buttons.types[type].textColor
      }
      const initialProps = icon.props || {}
      const className = classnames(initialProps.className, this.css.icon)
      const resultProps = { ...iconProps, ...initialProps, className }
      return cloneElement(icon, resultProps)
    }
  }

  renderLoader() {
    const css = this.css
    return <div className={ css.loader } key='loader'>
      {range(3).map(i => (<div className={ css.loaderDot } key={i}></div>))}
    </div>
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
      style = {},
      ...other
    } = omit(this.props, 'sheet', 'theme')
    const css = this.css

    const resultStyle = {
      width,
      ...style
    }
    const typeClass = css[`type-${type}`]
    const sizeClass = css[`size-${size}`]
    const resultClassName = classnames(
      css.button,
      typeClass,
      sizeClass,
      className,
      {
        [css.isLoading]: loading,
        [css.block]: block
      })

    const resultChildren = [
      <div className={css.content}>
        { this.renderIcon(icon) }
        { children }
        { overlay && cloneElement(overlay, {className: css.overlay}) }
      </div>,
      loading && this.renderLoader()
    ]

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

    return cloneElement(resultContainer, resultProps, ...resultChildren)
  }
}
