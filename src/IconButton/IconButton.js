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
import { isolateMixin } from '../style/mixins'

@pure
@injectSheet((theme) => {
  const css = {
    button: {
      ...isolateMixin,
      cursor: 'pointer',
      boxSizing: 'border-box',
      borderRadius: theme.iconButton.borderRadius,
      outline: 'none',
      position: 'relative',
      display: 'inline-block',
      border: 'none !important',
      userSelect: 'none',
      verticalAlign: 'middle',
      '&, & *': {
        transition: 'background-color .2s, border .2s, box-shadow .2s'
      },
      '&:before, &:after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        pointerEvents: 'none',
        borderRadius: theme.iconButton.borderRadius,
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
      width: `${theme.iconButton.iconPercentSize}% !important`,
      height: `${theme.iconButton.iconPercentSize}% !important`,
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)'
    },
    content: {
      position: 'relative'
    }
  }

  merge(css, ['primary', 'secondary', 'outline', 'flat', 'danger'].reduce((result, type) => {
    const conf = theme.button.types[type]
    const offset = conf.outlineOffset || 0

    const setThemeForSelector = (colors, outlineOffset) => pickBy({
      background: colors.background,
      '& $icon': {
        fill: colors.text + '!important'
      },
      '&:before': colors.border && {
        borderColor: colors.border
      },
      '&:after': colors.outline && pickBy({
        left: -outlineOffset,
        right: -outlineOffset,
        top: -outlineOffset,
        bottom: -outlineOffset,
        borderColor: colors.outline
      })
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
     * Размер кнопки - small/medium или размер в пикселях
     */
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['small', 'medium'])]),
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

  get size() {
    if (typeof this.props.size === 'number')
      return this.props.size
    return this.props.theme.iconButton.sizes[this.props.size]
  }

  renderIcon(icon) {
    if (icon) {
      const { theme, type, disabled } = this.props
      const iconProps = {
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
    } = omit(this.props, 'sheet', 'theme', 'size')

    const css = this.css
    const iconEl = this.renderIcon(children)
    const size = this.size

    const resultStyle = {
      width,
      ...style
    }

    const resultClassName = classnames(
      css.button,
      css[`type-${type}`],
      className
    )

    const resultChildren = [
      <div className={css.content} style={{width: size, height: size}}>
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
