import React, { Component, PropTypes, cloneElement, isValidElement } from 'react'
import { create as createFragment } from 'react/lib/ReactFragment'
import classnames from 'classnames'
import { range } from 'lodash'

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
    theme: PropTypes.oneOf(['blue', 'white', 'light-blue']),
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
    buttonType: PropTypes.string,
    /**
     * Отключаем кнопку/ссылку
     */
    disabled: PropTypes.bool
  };

  static defaultProps = {
    size: 'medium',
    theme: 'blue',
    buttonType: 'button'
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
      const resultProps = { ...iconProps, ...(icon.props || {}) }
      const resultIcon = cloneElement(icon, resultProps)
      return <span className={ css.Button__icon }>
        { resultIcon }
      </span>
    }
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
      ...other
    } = this.props
    let contentButton
    const buttonClass = 'Button--theme-' + theme
    const resultClassName = classnames({
      [css[buttonClass + '-disabled']]: disabled,
      [css[buttonClass + '-loading-wrapper']]: loading,
      [css[buttonClass]]: true,
      [css['button--size-' + size]]: true,
      [css.button]: true
    })
    if (loading)
      contentButton = (<div>
        {children}
        <span className={css['Button--theme-' + theme + '-loading']}>
          {range(3).map(i => (<span className={css['Button--theme-' + theme + '-loading-dot']} key={i}></span>))}
        </span>
      </div>)
    else contentButton = children

    const content = createFragment({
      icon: this.renderIcon(icon),
      content: contentButton
    })
    const buttonProps = { ...other, className: resultClassName }
    if (buttonType === 'file') return (
        <label { ...buttonProps }>
          {content}
          <input type="file" id="file" size="1" style={{display: 'none'}}/>
        </label>
    )

    return isValidElement(container) ?
      cloneElement(container, buttonProps, content) :
      href ?
      <div>
        <a href={ href } { ...buttonProps }>
          {content}
        </a>
      </div> :
      <button type={ buttonType } { ...buttonProps } >
        { content }
      </button>
  }
}
