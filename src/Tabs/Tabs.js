/**
 * Компонент табов
 */
import React, { Component, cloneElement } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { injectSheet } from '../theme'
import { isolateMixin, topBorderMixin, bottomBorderMixin } from '../utils/mixins'

@injectSheet((theme) => ({
  tabs: {
    extend: [
      isolateMixin,
      bottomBorderMixin(theme.tabs.colors.default.outline)
    ],
    display: 'inline-flex',
    fontFamily: theme.fontFamily,
    paddingLeft: theme.tabs.sidePadding,
    paddingRight: theme.tabs.sidePadding
  },
  item: {
    '&&': {
      flex: 'none'
    },
    '&:nth-child(1n+2)': {
      marginLeft: theme.tabs.betweenMargin
    }
  },
  isDisabled: {
    cursor: 'not-allowed'
  },
  isBottom: {
    extend: [
      topBorderMixin(theme.tabs.colors.default.outline)
    ]
  }
}), {name: 'Tabs'})
export default class Tabs extends Component {

  static propTypes = {
    /**
     * Выбранное значение табов
     */
    value: PropTypes.any,
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
     * Позиционирование табов
     */
    position: PropTypes.oneOf(['top', 'bottom']),
    /**
     * Перевод табов в состояние disabled
     */
    disabled: PropTypes.bool,
    /**
     * Функция, вызывающая при изменении значения `function (event: object, newValue: any) {}`
     */
    onChange: PropTypes.func
  };

  static defaultProps = {
    size: 'small',
    position: 'top',
    disabled: false
  };

  static childContextTypes = {
    position: PropTypes.string
  };

  constructor(props) {
    super(props)
    this.state = {
      value: props.value
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setValue(nextProps.value)
  }

  getChildContext() {
    return {
      position: this.props.position
    }
  }

  setValue(value) {
    if (value === this.state.value) return
    this.setState({ value })
  }

  handleValueChange = (event, value) => {
    this.setValue(value)
    if (!this.props.onChange) return
    this.props.onChange(event, value)
  }

  render() {
    const {
      children,
      size,
      position,
      disabled,
      className,
      classes,
      theme, // eslint-disable-line no-unused-vars
      onChange, // eslint-disable-line no-unused-vars
      value, // eslint-disable-line no-unused-vars
      ...other
    } = this.props
    let i = 0
    const tabs = React.Children.map(children, (child) => {
      if (!child.type || child.type.displayName !== 'ruiTabsItem')
        throw new Error('Child component should be instance of <Tab />')
      const {className, value} = child.props
      const hasValue = 'value' in child.props
      return cloneElement(child, {
        className: classnames(className, classes.item),
        key: child.key !== undefined ? child.key : (typeof value === 'string' || typeof value === 'number') ? value : i++,
        isSelected: hasValue && child.props.value === this.state.value,
        onPress: hasValue && !disabled ? this.handleValueChange : null,
        size,
        disabled,
        position
      })
    })

    const isBottomPosition = position === 'bottom'

    return (
      <div
        { ...other }
        className={ classnames(
          className,
          classes.tabs,
          disabled && classes.isDisabled,
          isBottomPosition && classes.isBottom
        ) }
      >
        { tabs }
      </div>
    )
  }
}
