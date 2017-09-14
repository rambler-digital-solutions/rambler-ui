/**
 * Компонент табов
 */
import React, { Component, cloneElement } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import omit from 'lodash/omit'
import { injectSheet } from '../theme'
import { isolateMixin, bottomBorderMixin } from '../style/mixins'

@injectSheet(theme => {
  const {tabs} = theme
  const {colors} = tabs

  return {
    tabs: {
      ...isolateMixin,
      display: 'inline-flex',
      fontFamily: theme.fontFamily,
      paddingLeft: tabs.sidePadding,
      paddingRight: tabs.sidePadding,
      ...bottomBorderMixin(colors.default.outline)
    },
    item: {
      '&&': {
        flex: 'none',
        marginLeft: tabs.betweenMargin,
        '&:first-child': {
          marginLeft: 0
        }
      }

    },
    isDisabled: {
      cursor: 'not-allowed'
    }
  }
})
export default class Tabs extends Component {

  static propTypes = {
    /**
     * Класс контейнера
     */
    className: PropTypes.string,
    /**
     * CSS-стили корневого элемента
     */
    style: PropTypes.object,
    /**
     * Опции переключателя, обязаны быть компонентами типа `<Tab />`
     */
    children: PropTypes.node,
    /**
     * Размер компонента
     */
    size: PropTypes.oneOf(['small', 'medium']),
    /**
     * Перевод табов в состояние disabled
     */
    disabled: PropTypes.bool
  };

  static defaultProps = {
    size: 'small',
    disabled: false
  };

  render() {
    const {
      children,
      size,
      disabled,
      className,
      sheet: { classes: css },
      ...other
    } = omit(this.props, 'theme')

    const tabs = React.Children.map(children, (child) => {
      if (!child.type || child.type.displayName !== 'ruiTab')
        throw new Error('Child component should be instance of <Tab />')

      return cloneElement(child, {
        className: css.item,
        key: child.props.children,
        size,
        disabled
      })
    })

    return (
      <div { ...other } className={ classnames(className, css.tabs, disabled && css.isDisabled) }>
        { tabs }
      </div>
    )
  }
}
