/**
 * Компонент кнопки
 * Скетч: https://app.zeplin.io/project.html#pid=5788d29d450aa06b5691c466&sid=5788d41ba2e261bb69d6c68e
 */

import React, { Component, cloneElement, isValidElement } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import omit from 'lodash/omit'
import pickBy from 'lodash/pickBy'
import merge from 'lodash/merge'
import pure from 'recompose/pure'
import Spinner from '../Spinner'
import { injectSheet } from '../theme'
import { middleMixin, isolateMixin, uppercaseMixin, fontSmoothingMixin, ifMobile } from '../style/mixins'

function getIconColor(colorsConfig, isDisabled) {
  return isDisabled && colorsConfig.disabled.icon || colorsConfig.default.icon
}

@pure
@injectSheet((theme) => {
  const css = {
    button: {
      ...isolateMixin,
      ...uppercaseMixin,
      fontFamily: theme.button.fontFamily,
      textAlign: 'center',
      cursor: 'pointer',
      boxSizing: 'border-box',
      textDecoration: 'none !important',
      outline: 'none !important',
      position: 'relative',
      display: 'inline-block',
      border: 'none',
      userSelect: 'none',
      borderRadius: theme.button.borderRadius,
      '&, & *': { transition: 'background-color .2s, border .2s, box-shadow .2s' },
      '&:before, &:after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        pointerEvents: 'none',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        border: '1px solid transparent',
        transition: 'all .2s',
        borderRadius: theme.button.borderRadius
      },
      '&[disabled]': { pointerEvents: 'none' },
      '&::-moz-focus-inner': {
        border: 'none !important',
        outline: 'none !important'
      }
    },
    isRounded: {
      '&$button, &:before, &:after': {
        borderRadius: '9999px !important'
      }
    },
    isLoading: {
      pointerEvents: 'none',
      opacity: 0
    },
    content: {
      ...middleMixin,
      ...fontSmoothingMixin,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      fontWeight: 500
    },
    block: {
      display: 'block',
      width: '100%'
    },
    'size-medium': {
      fontSize: theme.button.sizes.medium.fontSize,
      ...ifMobile({
        fontSize: theme.button.mobile.sizes.medium.fontSize
      }),
      '& $content': {
        height: theme.button.sizes.medium.height,
        lineHeight: theme.button.sizes.medium.height + 'px',
        padding: '0 23px'
      }
    },
    'size-small': {
      fontSize: theme.button.sizes.small.fontSize,
      ...ifMobile({
        fontSize: theme.button.mobile.sizes.small.fontSize
      }),
      '& $content': {
        height: theme.button.sizes.small.height,
        lineHeight: theme.button.sizes.small.height + 'px',
        padding: '0 23px'
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
      display: 'inline-block',
      marginTop: -2
    },
    'iconPosition-right': {
      '& $icon': {
        marginLeft: 8
      }
    },
    'iconPosition-left': {
      '& $icon': {
        marginRight: 8
      }
    }
  }

  merge(css, ['primary', 'secondary', 'outline', 'flat', 'danger'].reduce((result, type) => {
    const conf = theme.button.types[type]
    const offset = conf.outlineOffset || 0

    const setThemeForSelector = (colors, outlineOffset) => pickBy({
      background: colors.background,
      color: colors.text,
      '&:before': colors.border && {
        borderColor: colors.border
      },
      '&:after': colors.outline && pickBy({
        left: -outlineOffset,
        right: -outlineOffset,
        top: -outlineOffset,
        bottom: -outlineOffset,
        borderColor: colors.outline,
        borderRadius: theme.button.borderRadius + outlineOffset / 1.5
      })
    })
    return {
      ...result,
      [`type-${type}`]: {
        '&:hover': setThemeForSelector(conf.colors.hover, offset),
        '&:active': setThemeForSelector(conf.colors.active, offset),
        '&:focus': setThemeForSelector(conf.colors.focus, offset),
        '&[disabled]': setThemeForSelector(conf.colors.disabled, offset),
        ...setThemeForSelector(conf.colors.default, offset)
      }
    }
  }, {}))
  return css
})
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
        size: theme.button.sizes[size].icon,
        color: getIconColor(theme.button.types[type].colors, disabled)
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
      loading && <Spinner color={theme.button.types[type].colors.default.loader} />
    )
  }
}
