/**
 * Элемент компонента боковой навигации
 */
import React, {Component, cloneElement, isValidElement} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {injectSheet} from '../theme'
import {isolateMixin} from '../utils/mixins'

@injectSheet(
  theme => ({
    sideNavItem: {
      extend: isolateMixin,
      fontFamily: theme.fontFamily,
      display: 'flex',
      alignItems: 'center',
      userSelect: 'none',
      whiteSpace: 'nowrap',
      cursor: 'pointer',
      position: 'relative',
      textDecoration: 'none',
      fontSize: theme.sideNav.fontSize,
      height: theme.sideNav.height,
      color: theme.sideNav.colors.default.text,
      transition: 'color .2s',

      'a&:visited': {
        color: theme.sideNav.colors.default.text
      },
      '&&$isSelected, &&:hover': {
        color: theme.sideNav.colors.selected.text
      }
    },
    icon: {
      flex: 'none',
      display: 'inline-block',
      width: '1em',
      height: '1em',
      fontSize: theme.sideNav.iconSize
    },
    isSelected: {
      cursor: 'default'
    },
    medium: {
      '& $icon': {
        marginRight: theme.sideNav.iconRightMargin
      }
    }
  }),
  {name: 'SideNavItem'}
)
class SideNavItem extends Component {
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
    icon: PropTypes.node.isRequired,
    /**
     * Размер компонента (автоматически проставляется компонентом `<SideNav />`)
     */
    size: PropTypes.oneOf(['small', 'medium']),
    /**
     * Значение, соответствующее этому элементу
     */
    value: PropTypes.any,
    /**
     * Выбран ли элемент (автоматически проставляется компонентом `<SideNav />`)
     */
    isSelected: PropTypes.bool,
    /**
     * Если указан href, то элемент будет ссылкой
     */
    href: PropTypes.string,
    /**
     * Атрибут target для ссылки, если указан атрибут href
     */
    target: PropTypes.string,
    /**
     * Элемент, который содержит контент, например `<Link />` в случае с `react-router`.
     * Если используется `<NavLink />` с `activeClassName`,
     * нужно в `container` передавать фабрику, которая получает `activeClassName` в аргументах
     */
    container: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    /**
     * Колбек нажатия на элемент (автоматически проставляется компонентом `<SideNav />`)
     */
    onPress: PropTypes.func
  }

  onClick = event => {
    const {value, onClick, onPress} = this.props

    if (onPress) onPress(event, value)

    if (onClick) onClick(event)
  }

  renderIcon(icon) {
    if (icon) {
      const {classes} = this.props
      return cloneElement(icon, {
        color: 'currentColor',
        size: null,
        ...icon.props,
        className: classnames(icon.props.className, classes.icon)
      })
    }
  }

  render() {
    const {
      className,
      children,
      icon,
      size,
      isSelected,
      href,
      container,
      classes,
      theme, // eslint-disable-line no-unused-vars
      onPress, // eslint-disable-line no-unused-vars
      value, // eslint-disable-line no-unused-vars
      ...other
    } = this.props

    const mediumSize = size === 'medium'

    const resultClassName = classnames(
      classes.sideNavItem,
      mediumSize && classes.medium,
      isSelected && classes.isSelected,
      className
    )

    const resultContainer = isValidElement(container) ? (
      container
    ) : typeof container === 'function' ? (
      container({activeClassName: classes.isSelected})
    ) : href ? (
      <a href={href} />
    ) : (
      <div />
    )

    const resultProps = {
      ...other,
      className: resultClassName,
      onClick: this.onClick
    }

    return cloneElement(
      resultContainer,
      resultProps,
      this.renderIcon(icon),
      mediumSize && children
    )
  }
}

SideNavItem.displayName = 'ruiSideNavItem'

export default SideNavItem
