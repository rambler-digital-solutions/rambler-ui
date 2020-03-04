import React, {PureComponent, isValidElement, cloneElement} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {ENTER} from '../constants/keys'
import {injectSheet} from '../theme'
import {isolateMixin} from '../utils/mixins'
import uuid from '../utils/uuid'
import {MenuContext} from './Menu'

@injectSheet(
  theme => ({
    root: {
      extend: isolateMixin,
      fontFamily: theme.fontFamily,
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      paddingLeft: theme.menu.padding,
      paddingRight: theme.menu.padding,
      outline: 0,
      fontSize: theme.menu.fontSize,
      lineHeight: theme.menu.lineHeight + 'px'
    },
    ...['medium', 'small'].reduce(
      (result, size) => ({
        ...result,
        [size]: {
          minHeight: theme.menu.sizes[size].height,
          paddingTop:
            (theme.menu.sizes[size].height - theme.menu.lineHeight) / 2,
          paddingBottom:
            (theme.menu.sizes[size].height - theme.menu.lineHeight) / 2
        }
      }),
      {}
    ),
    isEnabled: {
      color: theme.menu.colors.default.text,
      backgroundColor: theme.menu.colors.default.background,
      cursor: 'pointer',
      '&:hover': {
        color: theme.menu.colors.hover.text,
        backgroundColor: theme.menu.colors.hover.background
      },
      '&:focus': {
        color: theme.menu.colors.focus.text,
        background: theme.menu.colors.focus.background
      },
      '&:active': {
        color: theme.menu.colors.active.text,
        background: theme.menu.colors.active.background
      }
    },
    isSelected: {
      color: theme.menu.colors.selected.text
    },
    isDisabled: {
      color: theme.menu.colors.disabled.text,
      background: theme.menu.colors.disabled.background,
      cursor: 'not-allowed'
    }
  }),
  {name: 'MenuItem'}
)
class MenuItem extends PureComponent {
  static propTypes = {
    /**
     * Дополнительный CSS-класс
     */
    className: PropTypes.string,
    /**
     * Значение опции, по-умолчанию считается, что это примитив
     */
    value: PropTypes.any,
    /**
     * Отключение опции
     */
    disabled: PropTypes.bool,
    /**
     * Контент опции
     */
    children: PropTypes.node.isRequired,
    /**
     * Элемент, который содержит контент, например `<Link />` в случае с `react-router`.
     * Если используется `<NavLink />` с `activeClassName`,
     * нужно в `container` передавать фабрику, которая получает `activeClassName` в аргументах
     */
    container: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
  }

  static contextType = MenuContext

  id = uuid()

  get item() {
    return this.context.getItemRef(this.id)
  }

  componentDidMount() {
    this.context.events.on('onPropsChange', this.handlePropsChange)
    this.context.events.emit('onItemMount', this.id, this)
    if (this.context.isItemFocused(this.id)) this.item.focus()
  }

  componentDidUpdate() {
    if (this.context.isItemFocused(this.id)) this.item.focus()
  }

  componentWillUnmount() {
    this.context.events.removeListener('onPropsChange', this.handlePropsChange)
    this.context.events.emit('onItemUnmount', this.id)
  }

  handlePropsChange = () => {
    const {props, context} = this
    if (
      (props.hasOwnProperty('value') &&
        context.isValueSelected(props.value) !== this.isSelected) ||
      context.isItemFocused(this.id) !== this.isFocused ||
      context.isMenuDisabled() !== this.disabled ||
      context.getMenuSize() !== this.size
    )
      this.forceUpdate()
  }

  handleFocus = () => {
    this.context.events.emit('onItemFocus', this.id)
  }

  handleSelect = () => {
    const {props} = this
    if (props.hasOwnProperty('value'))
      this.context.events.emit('onItemSelect', props.value)
  }

  handlePressKey = event => {
    if (event.keyCode === ENTER) {
      event.stopPropagation()
      this.item.focus()
      this.handleSelect()
    }
  }

  render() {
    const {
      container,
      className,
      value,
      disabled,
      classes,
      children,
      theme, // eslint-disable-line no-unused-vars
      ...other
    } = this.props
    this.isSelected =
      this.props.hasOwnProperty('value') && this.context.isValueSelected(value)
    this.isFocused = this.context.isItemFocused(this.id)
    this.disabled = this.context.isMenuDisabled()
    this.size = this.context.getMenuSize()
    const isItemDisabled = !!disabled || this.disabled

    let element
    if (container && isValidElement(container)) element = container
    else if (typeof container === 'function')
      element = container({activeClassName: classes.isSelected})

    const props = {
      ...other,
      className: classnames(
        className,
        classes.root,
        this.size && classes[this.size],
        isItemDisabled ? classes.isDisabled : classes.isEnabled,
        this.isSelected && classes.isSelected
      ),
      tabIndex: isItemDisabled ? null : 0,
      onFocus: isItemDisabled ? null : this.handleFocus,
      onClick: isItemDisabled ? null : this.handleSelect,
      onKeyDown: isItemDisabled ? null : this.handlePressKey,
      'data-menu-item-id': this.id
    }

    return element ? (
      cloneElement(element, props, children)
    ) : (
      <div {...props}>{children}</div>
    )
  }
}

MenuItem.displayName = 'ruiMenuItem'

export default MenuItem
