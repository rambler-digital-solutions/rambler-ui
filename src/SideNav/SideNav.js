/**
 * Компонент боковой навигации
 */
import React, { Component, PropTypes } from 'react'
// import classnames from 'classnames'
// import omit from 'lodash/omit'
import { injectSheet } from '../theme'
import { isolateMixin } from '../style/mixins'

@injectSheet(() => ({
  navigation: {
    ...isolateMixin,
    display: 'block',
    '&, & *': {
      transitionDuration: '.2s',
      transitionProperty: 'background, opacity, border, box-shadow'
    }
  }
}))
export default class SideNav extends Component {

  static propTypes = {
    /**
     * Класс контейнера
     */
    className: PropTypes.string,
    /**
     * CSS-стили навигации
     */
    style: PropTypes.object,
    /**
     * Элементы навигации, обязаны быть компонентами типа `<SideNavItem/>`
     */
    children: PropTypes.node,
    /**
     * Размер компонента:
     * `small` - только иконки
     * `medium` - иконки с текстом
     */
    size: PropTypes.oneOf(['small', 'medium']),
    /**
     * Выбранное значение навигации
     */
    value: PropTypes.any,
    /**
     * Функция, вызывающая при изменении значения `function (event: object, newValue: any) {}`
     */
    onChange: PropTypes.func
  }

  static defaultProps = {
    size: 'medium'
  }

  render() {
    const { children } = this.props

    return (
      <div>{children}</div>
    )
  }

}
