import React, { PureComponent, Children, cloneElement } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { ESCAPE, UP, DOWN, TAB } from '../constants/keys'
import { injectSheet } from '../theme'
import { fontStyleMixin, isolateMixin } from '../style/mixins'

@injectSheet(theme => ({
  menu: {
    ...isolateMixin,
    ...fontStyleMixin(theme.font),
    boxSizing: 'border-box',
    padding: '8px 0',
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
     * Автофокус первого/выбранного элемента
     */
    autoFocus: PropTypes.bool,
    /**
     * Фокус элемента по индексу
     */
    focusedIndex: PropTypes.number,
    /**
     * Максимальная высота компонента
     */
    maxHeight: PropTypes.number,
    /**
     * Выбранное значение, по-умолчанию считается, что это примитив
     */
    value: PropTypes.any,
    /**
     * Проверка равенства значений, задается, если значением является объект
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
    onEscKeyDown: PropTypes.func
  };

  static defaultProps = {
    multiple: false,
    autoFocus: false,
    maxHeight: null,
    focusedIndex: null,
    value: null,
    valuesEquality: (a, b) => a === b,
    onChange: () => {},
    onEscKeyDown: () => {}
  };

  value = null

  constructor(props) {
    super(props)

    this.state = {
      value: props.multiple ? [] : null,
      focusedIndex: null
    }
  }

  get css() {
    return this.props.sheet.classes
  }

  componentWillMount() {
    this.setValue(this.props.value)
  }

  componentDidMount() {
    if (this.props.autoFocus || this.props.focusedIndex !== null)
      this.setFocusIndex(this.props.focusedIndex || this.getLastSelectedIndex())
  }

  componentWillReceiveProps({ value, focusedIndex }) {
    this.setValue(value)

    if (focusedIndex !== this.props.focusedIndex)
      this.setFocusIndex(focusedIndex)
  }

  setValue(value) {
    if (this.props.valuesEquality(value, this.value))
      return

    this.value = value

    this.setState({
      value
    })
  }

  getLastSelectedIndex() {
    const { value } = this.state

    const {
      multiple,
      children,
      valuesEquality
    } = this.props

    const lastSelectedValue = multiple ? value[value.length - 1] : value
    let lastSelectedIndex = null

    Children.forEach(children, (child, index) => {
      if (child.props && valuesEquality(child.props.value, lastSelectedValue))
        lastSelectedIndex = index
    })

    return lastSelectedIndex
  }

  decrementFocusIndex() {
    const { focusedIndex } = this.state
    const nextIndex = focusedIndex === null ? -1 : focusedIndex - 1

    this.setFocusIndex(nextIndex)
  }

  incrementFocusIndex() {
    const { focusedIndex } = this.state
    const nextIndex = focusedIndex === null ? 0 : focusedIndex + 1

    this.setFocusIndex(nextIndex)
  }

  setFocusIndex(index) {
    const length = this.props.children.length
    const normalizedIndex = index === null ? index : (index + length) % length

    this.setState({
      focusedIndex: normalizedIndex
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

  keyDown = event => {
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

  render() {
    const {
      value,
      focusedIndex
    } = this.state

    const {
      style,
      className,
      multiple,
      maxHeight,
      children,
      valuesEquality
    } = this.props

    const items = Children.map(children, (child, index) => {
      if (!child.type || child.type.displayName !== 'ruiMenuItem')
        throw new Error('Child component should be instance of <MenuItem />')

      const childValue = child.props.value

      return cloneElement(child, {
        key: childValue,
        isFocused: index === focusedIndex,
        isSelected: multiple ?
          value.reduce((prev, val) => valuesEquality(val, childValue) || prev, false) :
          valuesEquality(childValue, value),
        onFocus: () => this.setFocusIndex(index),
        onSelect: () => this.changeValue(childValue)
      })
    })

    return (
      <div
        style={Object.assign({}, style, { maxHeight })}
        className={classnames(this.css.menu, className)}
        onKeyDown={this.keyDown}>
        {items}
      </div>
    )
  }

}
