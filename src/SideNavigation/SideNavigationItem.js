/**
 * Элемент компонента боковой навигации
 */
import React, { Component, PropTypes } from 'react'
// import classnames from 'classnames'
// import omit from 'lodash/omit'
import { injectSheet } from '../theme'
import { fontStyleMixin, isolateMixin } from '../style/mixins'

@injectSheet(theme => ({
  navigationItem: {
    ...isolateMixin,
    ...fontStyleMixin(theme.font),
    fontSize: theme.toggle.font.size,
    display: 'block',
    textAlign: 'left',
    userSelect: 'none',
    whiteSpace: 'nowrap',
    cursor: 'inherit',
    color: 'inherit'
  }
}))
export default class SideNavigationItem extends Component {

  static propTypes = {
    /**
     * Css-класс компонента
     */
    className: PropTypes.string,
    /**
     * Стили перелючателя
     */
    style: PropTypes.object,
    /**
     * Контент
     */
    children: PropTypes.node,
    /**
     * Иконка
     */
    icon: PropTypes.node,
    /**
     * Размер компонента (автоматически проставляется компонентом `<SideNavigation/>`)
     */
    size: PropTypes.oneOf(['small', 'medium']),
    /**
     * Значение, соответствующее этому элементу
     */
    value: PropTypes.any.isRequired,
    /**
     * Выбран ли элемент (автоматически проставляется компонентом `<SideNavigation/>`)
     */
    isSelected: PropTypes.bool
  }

  render() {
    const { children } = this.props

    return (
      <div>{children}</div>
    )
  }

}
