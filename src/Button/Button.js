import React, { Component, PropTypes, cloneElement, isValidElement } from 'react'
import classnames from 'classnames'
import range from 'lodash/range'

import css from './Button.css'
export default class Button extends Component {

  static propTypes = {
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
     * Вид отображения кнопки
     */
    theme: PropTypes.oneOf(['blue', 'white', 'lightBlue']),
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
     * Элемент, который прозрачно накладывается на кнопку (Например <input type="file" />)
     */
    overlay: PropTypes.element,
    /**
     * Отключаем кнопку/ссылку
     */
    disabled: PropTypes.bool,
    /**
     * Отображать кнопку как display: block
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
    size: 'medium',
    theme: 'blue',
    buttonType: 'button',
    block: false
  };

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
      const className = classnames(initialProps.className, css.Button__icon)
      const resultProps = { ...iconProps, ...initialProps, className }
      return cloneElement(icon, resultProps)
    }
  }

  renderLoader() {
    return <div className={css.Button__loader} key='loader'>
      {range(3).map(i => (<div className={css.Button__loaderDot} key={i}></div>))}
    </div>
  }

  render() {
    const {
      icon,
      children,
      size,
      theme,
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

    const resultStyle = { width, ...style }
    const themeClass = css['Button--theme-' + theme]
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
