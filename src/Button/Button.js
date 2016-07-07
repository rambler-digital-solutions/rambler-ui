import React, { Component, PropTypes, cloneElement, isValidElement } from 'react'
import { create as createFragment } from 'react/lib/ReactFragment'
import classnames from 'classnames'

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
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /**
     * Вид отображения кнопки
     */
    theme: PropTypes.oneOf(['blue', 'dark', 'red']),
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
     * Атрибут `type` на кнопке
     */
    buttonType: PropTypes.string
  };

  static defaultProps = {
    size: 'medium',
    theme: 'blue',
    buttonType: 'button'
  };

  mapThemeToIconColor(theme) {
    return ({
      blue: 'light',
      dark: 'light',
      red: 'light'
    })[theme]
  }

  renderIcon(icon) {
    if (icon) {
      const iconProps = {
        size: this.props.size,
        color: this.mapThemeToIconColor(this.props.theme)
      }
      const resultProps = { ...iconProps, ...(icon.props || {}) }
      const resultIcon = cloneElement(icon, resultProps)
      return <span className={ css.Button__icon }>
        { resultIcon }
      </span>
    }
  }

  render() {
    const {
      className,
      icon,
      children,
      size,
      theme,
      href,
      container,
      buttonType,
      ...other
    } = this.props
    const resultClassName = classnames(
      className,
      css.Button,
      css['Button--theme-' + theme],
      css['Button--size-' + size]
    )

    const content = createFragment({
      icon: this.renderIcon(icon),
      content: <span className={css.Button__content}>{ children }</span>
    })
    const buttonProps = { ...other, className: resultClassName }

    return isValidElement(container) ?
      cloneElement(container, buttonProps, content) :
      href ?
      <a href={ href } { ...buttonProps } >{ content }</a> :
      <button type={ buttonType } { ...buttonProps } >{ content }</button>
  }

}
