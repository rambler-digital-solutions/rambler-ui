/**
 * Элемент компонента боковой навигации
 */
import React, { Component, cloneElement, isValidElement } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import omit from 'lodash/omit'
import { injectSheet } from '../theme'
import { fontStyleMixin, isolateMixin, middleMixin } from '../style/mixins'

@injectSheet(theme => ({
  sideNavItem: {
    ...middleMixin,
    ...isolateMixin,
    ...fontStyleMixin(theme.font),
    display: 'block',
    textAlign: 'left',
    userSelect: 'none',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    color: 'inherit !important',
    position: 'relative',
    textDecoration: 'none',
    fontSize: theme.sideNav.font.size,
    height: theme.sideNav.height,
    margin: `${theme.sideNav.betweenMargin}px ${theme.sideNav.sideMargin}px`
  },
  icon: {
    display: 'inline-block'
  },
  isSelected: {
    fontWeight: 500,
    cursor: 'default'
  },
  medium: {
    '& $icon': {
      marginRight: 10
    },
    '&$isSelected:after': {
      position: 'absolute',
      left: -theme.sideNav.sideMargin,
      top: 0,
      bottom: 0,
      display: 'block',
      width: 2,
      backgroundColor: theme.sideNav.selectedBorderColor,
      content: '""',
      pointerEvents: 'none'
    }
  }
}))
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
     * Элемент, который содержит контент, например `<Link />` в случае с `react-router`
     */
    container: PropTypes.element,
    /**
     * Колбек нажатия на элемент (автоматически проставляется компонентом `<SideNav />`)
     */
    onPress: PropTypes.func
  }

  onClick = (event) => {
    const { value, onClick, onPress } = this.props

    if (onPress)
      onPress(event, value)


    if (onClick)
      onClick(event)

  };

  renderIcon(icon) {
    if (icon) {
      const {
        isSelected,
        theme,
        sheet: { classes: css }
      } = this.props

      const iconProps = {
        color: isSelected ? theme.sideNav.selectedIconColor : theme.sideNav.iconColor
      }

      const initialProps = icon.props || {}
      const className = classnames(initialProps.className, css.icon)
      const resultProps = { ...iconProps, ...initialProps, className }

      return cloneElement(icon, resultProps)
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
      sheet: { classes: css },
      ...other
    } = omit(this.props, 'theme', 'onPress')

    const mediumSize = size === 'medium'

    const resultClassName = classnames(
      css.sideNavItem,
      {
        [css.medium]: mediumSize,
        [css.isSelected]: isSelected && !container
      },
      className
    )

    const resultContainer = isValidElement(container) ?
      container :
      href ? <a href={href} /> : <div />

    const resultProps = {
      ...other,
      className: resultClassName,
      onClick: this.onClick,
      ...container && {
        activeClassName: css.isSelected
      }
    }

    const resultChildren = [
      this.renderIcon(icon),
      mediumSize && children
    ]

    return cloneElement(resultContainer, resultProps, ...resultChildren)
  }

}

SideNavItem.displayName = 'ruiSideNavItem'

export default SideNavItem
