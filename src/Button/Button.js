/**
 * Компонент кнопки
 * Скетч: https://app.zeplin.io/project.html#pid=5788d29d450aa06b5691c466&sid=5788d41ba2e261bb69d6c68e
 */

import React, { Component, PropTypes, cloneElement, isValidElement } from 'react'
import classnames from 'classnames'
import range from 'lodash/range'
import { injectSheet } from '../theme'
import { fontStyleMixin, middleMixin, borderMixin } from '../style/mixins'

const styleButtonMixin = (type, options) => ({
  [`&--type-${type}`]: {
    extend: borderMixin(options.defaultBorder),
    color: `${options.defaultText} !important`,
    background: options.defaultBg,
    '&:focus:not(:active)': {
      background: `${options.focusBg} !important`,
      '&:before': {
        extend: borderMixin(options.focusBorder),
        top: -options.focusOffset,
        bottom: -options.focusOffset,
        left: -options.focusOffset,
        right: -options.focusOffset
      }
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
      color: `${options.disabledText} !important`,
      background: options.disabledBg
    }
  },
  [`&--type-${type} &__loaderDot`]: {
    background: options.loadingDot
  }
})

@injectSheet(theme => ({
  '@keyframes ruiAnimateDot': {
    '20%': { transform: 'scale(1)' },
    '40%': { transform: 'scale(1) translate3d(0, 5px, 0)' },
    '100%': { transform: 'scale(1)  translate3d(0, 0, 0)' }
  },
  isLoading: {},
  Button: {
    ...fontStyleMixin(theme.font),
    isolate: true,
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
    '&, *': { transition: 'all .2s' },
    '&$isLoading, &[disabled]': { pointerEvents: 'none' },
    '&$isLoading &__content': { opacity: 0 },
    '&:focus:before': {
      content: '""',
      display: 'block',
      position: 'absolute'
    },
    '&--block': {
      display: 'block',
      width: '100%'
    },
    '&--size-medium &__content': { height: '45px' },
    '&--size-small &__content': { height: '35px' },
    '&__content': {
      ...middleMixin,
      padding: '0 20px',
      whiteSpace: 'nowrap',
      overflowX: 'hidden',
      textOverflow: 'ellipsis'
    },
    '&__loader': {
      ...middleMixin,
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
      width: '100%',
      textAlign: 'center'
    },
    '&__loaderDot': {
      display: 'inline-block',
      verticalAlign: 'middle',
      height: 5,
      width: 5,
      position: 'relative',
      top: -2,
      borderRadius: '100%',
      transition: 'transform .6s ease-out',
      transform: 'translate3d(0, 0, 0)',
      animation: 'ruiAnimateDot .6s ease-out',
      animationFillMode: 'forwards',
      animationIterationCount: 'infinite',
      '&:nth-child(1)': { animationDelay: '0s' },
      '&:nth-child(2)': { animationDelay: '.08s', margin: '0 5px' },
      '&:nth-child(3)': { animationDelay: '.16s' }
    },
    '&__overlay': {
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
    '&__icon': {
      display: 'inline-block',
      marginRight: 10
    },
    ...styleButtonMixin('primary', {
      defaultBg: '#315efb',
      defaultBorder: '#315efb',
      defaultText: '#fff',
      hoverBorder: '#3059DD',
      hoverBg: '#3059DD',
      activeBorder: '#2A4FC5',
      activeBg: '#2A4FC5',
      focusBorder: '#3264fb',
      focusBg: '#1660e0',
      loadingBorder: '#315efb',
      loadingDot: '#fff',
      disabledBorder: '#315efb',
      disabledBg: '#315efb',
      disabledText: 'rgba(255, 255, 255, .4)',
      focusOffset: '3px'
    }),
    ...styleButtonMixin('secondary', {
      defaultBg: '#eaefff',
      defaultBorder: '#eaefff',
      defaultText: '#315efb',
      hoverBorder: 'transparent',
      hoverBg: 'rgba(49, 94, 251, .2)',
      activeBorder: 'transparent',
      activeBg: 'rgba(49, 94, 251, .3)',
      focusBorder: '#649dff',
      focusBg: '#eaefff',
      loadingBorder: '#eaefff',
      loadingDot: '#315efb',
      disabledBorder: '#eaefff',
      disabledBg: '#eaefff',
      disabledText: 'rgba(49, 94, 251, .4)',
      focusOffset: '0px'
    }),
    ...styleButtonMixin('outline', {
      defaultBg: '#fff',
      defaultBorder: '#ccc',
      defaultText: '#262626',
      hoverBorder: '#262626',
      hoverBg: '#fff',
      activeBorder: '#ccc',
      activeBg: '#eee',
      focusBorder: '#315efb',
      focusBg: '#fff',
      loadingBorder: '#ccc',
      loadingDot: '#315efb',
      disabledBorder: '#eee',
      disabledBg: '#eee',
      disabledText: 'rgba(38, 38, 38, .4)',
      focusOffset: '0px'
    })
  }
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
    theme: 'blue',
    buttonType: 'button',
    block: false
  };

  get css() {
    const { sheet: { classes: css } } = this.props
    return css
  }

  mapThemeToColor(theme) {
    return ({
      blue: 'light',
      white: 'light',
      'light-blue': 'light'
    })[theme]
  }

  renderIcon(icon) {
    if (icon) {
      const iconProps = {
        size: this.props.size,
        color: this.mapThemeToColor(this.props.theme)
      }
      const initialProps = icon.props || {}
      const className = classnames(initialProps.className, this.css.Button__icon)
      const resultProps = { ...iconProps, ...initialProps, className }
      return cloneElement(icon, resultProps)
    }
  }

  renderLoader() {
    const css = this.css
    return <div className={css.Button__loader} key='loader'>
      {range(3).map(i => (<div className={css.Button__loaderDot} key={i}></div>))}
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
    } = this.props
    const css = this.css

    const resultStyle = {
      width,
      ...style
    }
    const themeClass = css['Button--type-' + type]
    const sizeClass = css['Button--size-' + size]
    const resultClassName = classnames(
      css.Button,
      themeClass,
      sizeClass,
      className,
      {
        [css['is-loading']]: loading,
        [css['Button--block']]: block
      })

    const resultChildren = [
      <div className={css.Button__content}>
        { this.renderIcon(icon) }
        { children }
        { overlay && cloneElement(overlay, {className: css.Button__overlay}) }
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
