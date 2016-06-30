import { Component, PropTypes, cloneElement } from 'react'
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
    onClick: PropTypes.func
  };

  static defaultProps = {
    size: 'medium',
    theme: 'blue'
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

      return <span className={css.Button__icon}>
        { cloneElement(icon, { ...iconProps, ...(icon.props || {}) }) }
      </span>
    }
  }

  render() {
    const { className, icon, children, size, theme, href, ...other } = this.props
    const content = [this.renderIcon(icon), children]
    const resultClassName = classnames(
      className,
      css.Button,
      css['Button_theme_' + theme],
      css['Button_size_' + size]
    )

    if (href)
      return <a href={href} className={ resultClassName } { ...other } >{ content }</a>
    return <button type="button" className={ resultClassName } { ...other } >{ content }</button>
  }

}