import React, { PureComponent, Children, cloneElement } from 'react'
import { findDOMNode } from 'react-dom'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import omit from 'lodash/omit'
import { ESCAPE, UP, DOWN, TAB } from '../constants/keys'
import { injectSheet } from '../theme'
import { getBoundingClientRect } from '../utils/DOM'
import { isolateMixin } from '../style/mixins'

const emptyArr = []

@injectSheet(theme => ({
  menu: {
    ...isolateMixin,
    fontFamily: theme.fontFamily,
    boxSizing: 'border-box',
    padding: 0,
    overflowY: 'auto'
  }
}))
export default class Menu extends PureComponent {

  static propTypes = {
    /**
     * Дополнительный CSS-класс поля
     */
    className: PropTypes.string,
    /**
     * Inline-стили поля
     */
    style: PropTypes.object,
    /**
     * Множественный выбор
     */
    multiple: PropTypes.bool,
    /**
     * Опции не активны
     */
    disabled: PropTypes.bool,
    /**
     * Автофокус первого/выбранного элемента
     */
    autoFocus: PropTypes.bool,
    /**
     * Максимальная высота компонента
     */
    maxHeight: PropTypes.number,
    /**
     * Выбранное значение, по-умолчанию считается, что это примитив
     */
    value: PropTypes.any,
    /**
     * Проверка равенства значений, задается, если
     * значением является объект. Ожидается, что возвращает `Boolean`
     */
    valuesEquality: PropTypes.func,
    /**
     * Опции поля, обязаны быть компонентами типа `<MenuItem />`
     */
    children: PropTypes.node,
    /**
     * Коллбек, вызывающийся при изменении состояния
     */
    onChange: PropTypes.func,
    /**
     * Коллбек, вызывающийся при клике на `Escape`
     */
    onEscKeyDown: PropTypes.func,
    /**
     * Размер опций
     */
    size: PropTypes.oneOf(['small', 'medium'])
  };

  static defaultProps = {
    multiple: false,
    disabled: false,
    autoFocus: false,
    maxHeight: null,
    value: null,
    valuesEquality: (a, b) => a === b,
    onChange: () => {},
    onEscKeyDown: () => {},
    size: 'medium'
  };

  constructor(props) {
    super(props)

    const nextValue = props.value || (props.multiple ? [] : null)
    const selectedIndex = this.getLastSelectedIndex(props)
    const nextFocusIndex = props.autoFocus ? (selectedIndex > -1 ? selectedIndex : 0) : -1

    this.state = {
      value: nextValue,
      focusIndex: nextFocusIndex
    }

    this.value = nextValue
  }

  get css() {
    return this.props.sheet.classes
  }

  componentDidMount() {
    this.scrollToLastSelected()
  }

  componentWillReceiveProps(nextProps) {
    this.setValue(nextProps.value)

    const lastSelectedIndex = this.getLastSelectedIndex(nextProps)
    const selectedIndex = lastSelectedIndex > -1 ? lastSelectedIndex : this.state.selectedIndex

    const nextFocusIndex = nextProps.autoFocus ? (selectedIndex > -1 ? selectedIndex : 0) : -1

    if (nextFocusIndex !== this.state.focusIndex)
      this.setFocusIndex(nextFocusIndex)
  }

  scrollToLastSelected() {
    if (this.selectedItem) {
      const menuRect = getBoundingClientRect(this.menu)
      const itemRect = getBoundingClientRect(findDOMNode(this.selectedItem))

      this.menu.scrollTop += itemRect.top - menuRect.top - (menuRect.height / 2)
    }
  }

  setValue(value) {
    if (this.props.multiple) {
      const currValue = Array.isArray(this.value) ? this.value : emptyArr
      const nextValue = Array.isArray(value) ? value : emptyArr
      if (nextValue.length === currValue.length && nextValue.every((item, index) => this.props.valuesEquality(item, currValue[index])))
        return
    } else {
      if (this.props.valuesEquality(value, this.value))
        return
    }

    this.value = value

    this.setState({
      value
    })
  }

  getLastSelectedIndex(props) {
    const {
      value,
      multiple,
      children,
      valuesEquality
    } = props

    const lastSelectedValue = multiple ? value[value.length - 1] : value
    let lastSelectedIndex = -1

    Children.forEach(children, (child, index) => {
      if (child.props && valuesEquality(child.props.value, lastSelectedValue))
        lastSelectedIndex = index
    })

    return lastSelectedIndex
  }

  decrementFocusIndex() {
    const { focusIndex } = this.state
    const nextFocusIndex = focusIndex === 0 ? 0 : focusIndex - 1

    this.setFocusIndex(nextFocusIndex)
  }

  incrementFocusIndex() {
    const { focusIndex } = this.state
    const maxIndex = this.props.children.length
    const nextFocusIndex = focusIndex === maxIndex ? maxIndex : focusIndex + 1

    this.setFocusIndex(nextFocusIndex)
  }

  setFocusIndex(nextFocusIndex) {
    this.setState({
      focusIndex: nextFocusIndex
    })
  }

  changeValue(value) {
    const currentValue = this.state.value
    const nextValue = !this.props.multiple ?
      value :
      (currentValue.indexOf(value) > -1 ?
        currentValue.filter(v => v !== value) :
        currentValue.concat(value))

    this.setValue(nextValue)
    this.props.onChange(nextValue)
  }

  keyDown = (event) => {
    const key = event.keyCode
    const shift = event.shiftKey

    if (key === ESCAPE) {
      this.props.onEscKeyDown(event)
    } else if (key === UP || (key === TAB && shift)) {
      event.preventDefault()
      this.decrementFocusIndex()
    } else if (key === DOWN || (key === TAB && !shift)) {
      event.preventDefault()
      this.incrementFocusIndex()
    }
  }

  getMenuProps() {
    return omit(this.props, [
      'autoFocus',
      'value',
      'sheet',
      'theme',
      'onChange',
      'onEscKeyDown',
    ])
  }

  render() {
    const {
      value,
      focusIndex
    } = this.state

    const {
      className,
      style,
      multiple,
      maxHeight,
      valuesEquality,
      children,
      disabled,
      size,
      ...other
    } = this.getMenuProps()

    const items = Children.map(children, (child, index) => {
      if (!child.type || child.type.displayName !== 'ruiMenuItem')
        throw new Error('Child component should be instance of <MenuItem />')

      const childValue = child.props.value

      const isSelected = multiple ?
        value.reduce((prev, val) => valuesEquality(val, childValue) || prev, false) :
        valuesEquality(childValue, value)

      return cloneElement(child, {
        isSelected,
        disabled: disabled || child.props.disabled,
        size,
        isFocused: index === focusIndex,
        key: childValue,
        onFocus: () => this.setFocusIndex(index),
        onSelect: () => this.changeValue(childValue),
        ref: isSelected ? (item) => { this.selectedItem = item } : null
      })
    })

    return (
      <div
        {...other}
        ref={(el) => { this.menu = el }}
        style={{ ...style, maxHeight }}
        className={classnames(this.css.menu, className)}
        onKeyDown={this.keyDown}>
        {items}
      </div>
    )
  }

}
