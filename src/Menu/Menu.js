import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import EventEmitter from 'events'
import omit from 'lodash/omit'
import { ESCAPE, UP, DOWN, TAB } from '../constants/keys'
import { injectSheet } from '../theme'
import { getBoundingClientRect } from '../utils/DOM'
import { isolateMixin, beautyScroll } from '../style/mixins'
import { MENU_ITEM_CONTEXT } from '../constants/context'

const emptyArr = []

@injectSheet(theme => ({
  menu: {
    ...isolateMixin,
    fontFamily: theme.fontFamily,
    boxSizing: 'border-box',
    padding: 0,
    overflowY: 'auto',
    ...beautyScroll('&')
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
     * Выбранное значение, по-умолчанию считается, что это примитив. В случае множественного выбора - массив выбранных значений.
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
  }

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
  }

  static childContextTypes = {
    [MENU_ITEM_CONTEXT]: PropTypes.shape({
      /**
       * Проверка, выбрано ли значение (args: value)
       */
      isValueSelected: PropTypes.func,
      /**
       * Опции не активны
       */
      disabled: PropTypes.bool,
      /**
       * Размер опции
       */
      size: PropTypes.oneOf(['small', 'medium']),
      /**
       * Шина событий
       * onPropsChange - изменение значений props в Menu, влияющих на отображение опций
       * onItemSelect - клик по MenuItem (args: value)
       * onItemFocus - фокус на MenuItem (args: id)
       * onItemUpdate - добавление и обновление MenuItem (args: id, ref, isSelected)
       * onItemUnmount - удаление MenuItem (args: id)
       */
      events: PropTypes.instanceOf(EventEmitter)
    })
  }

  constructor(props) {
    super(props)
    const value = props.value || (props.multiple ? [] : null)
    this.state = {
      value
    }
    this.focusIndex = -1
    this.value = value
  }

  get css() {
    return this.props.sheet.classes
  }

  getChildContext() {
    if (!this.events)
      this.createEvents()

    return {
      [MENU_ITEM_CONTEXT]: {
        isValueSelected: this.isValueSelected,
        disabled: this.props.disabled,
        size: this.props.size,
        events: this.events
      }
    }
  }

  addItem = (key, ref, isSelected) => {
    if (!this.items[key])
      this.itemsKeys.push(key)
    this.items[key] = {
      ref,
      isSelected
    }
  }

  removeItem = (key) => {
    this.itemsKeys.filter(item => item !== key)
    delete this.items[key]
  }

  createEvents() {
    this.events = new EventEmitter()
    this.events.setMaxListeners(0)
    this.events.on('onItemSelect', this.handleOptionSelect)
    this.events.on('onItemFocus', this.handleOptionFocus)
    this.events.on('onItemUpdate', this.addItem)
    this.events.on('onItemUnmount', this.removeItem)
  }

  componentDidMount() {
    this.scrollToLastSelected()
    if (this.props.autoFocus)
      this.setAutoFocus()
  }

  componentWillReceiveProps(nextProps) {
    this.setValue(nextProps.value)
  }

  componentDidUpdate(prevProps, prevState) {
    const {props, state} = this
    if (props.disabled !== prevProps.disabled || props.size !== prevProps.size || state.value !== prevState.value)
      this.events.emit('onPropsChange')

    if (this.props.autoFocus && !prevProps.autoFocus)
      this.setAutoFocus()
  }

  componentWillUnmount() {
    if (this.events)
      this.events.removeAllListeners()
  }

  isValueSelected = (value) => {
    const {props} = this
    if (props.multiple) {
      const selected = Array.isArray(this.value) ? this.value : emptyArr
      return selected.some(item => props.valuesEquality(item, value))
    } else {
      return props.valuesEquality(this.value, value)
    }
  }

  scrollToLastSelected() {
    const lastSelectedIndex = this.getLastSelectedIndex()
    if (lastSelectedIndex === -1) return
    const item = this.items[this.itemsKeys[lastSelectedIndex]]
    if (!item) return
    const menuRect = getBoundingClientRect(this.menu)
    const itemRect = getBoundingClientRect(item.ref)
    this.menu.scrollTop += itemRect.top - menuRect.top - (menuRect.height / 2)
  }

  setAutoFocus() {
    const lastSelectedIndex = this.getLastSelectedIndex()
    const newIndex = lastSelectedIndex > -1 ? lastSelectedIndex : 0
    this.setFocusByIndex(newIndex)
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
    this.setState({value})
  }

  handleOptionFocus = (key) => {
    const index = this.itemsKeys.indexOf(key)
    if (index === -1) return
    this.focusIndex = index
  }

  getLastSelectedIndex() {
    return this.itemsKeys.reduceRight((result, key, index) => (
      result === -1 && this.items[key].isSelected ? index : result
    ), -1)
  }

  decrementFocusIndex() {
    const maxIndex = this.itemsKeys.length - 1
    this.setFocusByIndex(this.focusIndex <= 0 ? maxIndex : this.focusIndex - 1)
  }

  incrementFocusIndex() {
    const maxIndex = this.itemsKeys.length - 1
    this.setFocusByIndex(this.focusIndex >= maxIndex ? 0 : this.focusIndex + 1)
  }

  setFocusByIndex(focusIndex) {
    const key = this.itemsKeys[focusIndex]
    if (!key) return
    const element = this.items[key]
    if (element)
      element.ref.focus()
  }

  handleOptionSelect = (value) => {
    const currentValue = this.state.value
    const nextValue = !this.props.multiple
      ? value
      : currentValue.indexOf(value) > -1
        ? currentValue.filter(v => v !== value)
        : currentValue.concat(value)

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

  saveMenuRef = (ref) => {
    this.menu = ref
  }

  getMenuProps() {
    return omit(this.props, [
      'autoFocus',
      'value',
      'sheet',
      'theme',
      'onChange',
      'onEscKeyDown',
      'multiple',
      'valuesEquality',
      'disabled',
      'size'
    ])
  }

  render() {
    const {
      className,
      style,
      maxHeight,
      children,
      ...other
    } = this.getMenuProps()

    this.itemsKeys = []
    this.items = []

    return (
      <div
        {...other}
        ref={this.saveMenuRef}
        style={{ maxHeight, ...style }}
        className={classnames(this.css.menu, className)}
        onKeyDown={this.keyDown}
      >
        {children}
      </div>
    )
  }

}
