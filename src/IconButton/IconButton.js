/**
 * Компонент кнопки-иконки
 * Скетч: https://zpl.io/ZTWunL
 */

import React, { Component, cloneElement, isValidElement } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import omit from 'lodash/omit'
import pickBy from 'lodash/pickBy'
import pure from 'recompose/pure'
import merge from 'lodash/merge'
import { injectSheet } from '../theme'
import { middleMixin, isolateMixin, borderMixin } from '../style/mixins'

@pure
@injectSheet((theme) => {
  const css = {
    button: {
      ...isolateMixin,
      textAlign: 'center',
      cursor: 'pointer',
      boxSizing: 'border-box',
      borderRadius: theme.iconButton.borderRadius,
      lineHeight: 1,
      outline: 'none',
      position: 'relative',
      display: 'inline-block',
      border: 'none',
      userSelect: 'none',
      '&, & *': {
        transition: 'background-color .2s, border .2s, box-shadow .2s'
      },
      '&:before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        pointerEvents: 'none',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        border: '1px solid transparent',
        transition: 'all .2s'
      },
      '&[disabled]': {
        pointerEvents: 'none'
      }
    },
    content: {
      ...middleMixin
    },
    'size-medium': {
      '& $content': {
        width: theme.iconButton.sizes.medium.size,
        height: theme.iconButton.sizes.medium.size
      }
    },
    'size-small': {
      '& $content': {
        width: theme.iconButton.sizes.small.size,
        height: theme.iconButton.sizes.small.size
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
    }
  }

  merge(css, ['primary', 'secondary', 'outline', 'flat', 'danger'].reduce((result, type) => {
    const conf = theme.button.types[type]
    const offset = conf.outlineOffset || 0

    const setThemeForSelector = (colors, outlineOffset) => pickBy({
      background: colors.background,
      color: colors.text,
      ...colors.border && borderMixin(colors.border),
      '&:before': colors.outline && {
        left: -outlineOffset,
        right: -outlineOffset,
        top: -outlineOffset,
        bottom: -outlineOffset,
        borderColor: colors.outline
      }
    })

    return merge(result, {
      [`type-${type}`]: {
        ...setThemeForSelector(conf.colors.default, offset),
        '&:hover': setThemeForSelector(conf.colors.hover, offset),
        '&:active': setThemeForSelector(conf.colors.active, offset),
        '&:focus': setThemeForSelector(conf.colors.focus, offset),
        '&[disabled]': setThemeForSelector(conf.colors.disabled, offset)
      }
    })
  }, {}))

  return css
})
export default class IconButton extends Component {

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
     * Тип кнопки
     */
    buttonType: PropTypes.string
  };

  static defaultProps = {
    type: 'primary',
    size: 'medium',
    buttonType: 'button'
  };

  get css() {
    const { sheet: { classes: css } } = this.props
    return css
  }

  renderIcon(icon) {
    if (icon) {
      const { theme, size, type, disabled } = this.props
      const iconProps = {
        size: theme.iconButton.sizes[size].icon,
        color: theme.button.types[type].colors[disabled ? 'disabled' : 'default'].text
      }
      const initialProps = icon.props || {}
      const className = classnames(initialProps.className, this.css.icon)
      const resultProps = { ...iconProps, ...initialProps, className }
      return cloneElement(icon, resultProps)
    }
  }

  render() {
    const {
      children,
      size,
      type,
      href,
      container,
      buttonType,
      disabled,
      className,
      overlay,
      width,
      style = {},
      ...other
    } = omit(this.props, 'sheet', 'theme')

    const css = this.css
    const iconEl = this.renderIcon(children)

    const resultStyle = {
      width,
      ...style
    }

    const resultClassName = classnames(
      css.button,
      css[`type-${type}`],
      css[`size-${size}`],
      className
    )

    const resultChildren = [
      <div className={css.content}>
        { iconEl }
        { overlay && cloneElement(overlay, {className: css.overlay}) }
      </div>
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
