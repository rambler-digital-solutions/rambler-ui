import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import EventEmitter from 'eventemitter3'
import {Scrollbar} from 'react-scrollbars-custom'
import {ESCAPE, UP, DOWN, TAB} from '../constants/keys'
import {withStyles} from '../theme'
import {getBoundingClientRect} from '../utils/DOM'
import {isolateMixin} from '../utils/mixins'
import {MenuContext} from './context'

const emptyArr = []

const styles = theme => ({
  menu: {
    extend: isolateMixin,
    fontFamily: theme.fontFamily,
    boxSizing: 'border-box',
    padding: 0,
    borderRadius: theme.menu.borderRadius
  },
  scrollbar: {
    position: 'relative',
    width: '100%',
    height: '100%',
    borderRadius: theme.menu.borderRadius,
    transform: 'translate3d(0, 0, 0)'
  },
  scrollbarInner: {
    position: 'relative',
    height: '100%'
  },
  content: {
    display: 'block'
  },
  scrollbarTrack: {
    width: '6px !important',
    right: `${theme.menu.scrollMargin}px !important`,
    top: `${Math.max(
      theme.menu.scrollMargin,
      theme.menu.borderRadius - 5
    )}px !important`,
    height: `calc(100% - ${2 *
      Math.max(
        theme.menu.scrollMargin,
        theme.menu.borderRadius - 5
      )}px) !important`,
    borderRadius: `${theme.menu.borderRadius}px !important`,
    backgroundColor: 'transparent !important'
  },
  scrollbarThumb: {
    width: '6px !important',
    borderRadius: `${theme.menu.borderRadius}px !important`,
    backgroundColor: `${theme.menu.colors.default.thumb} !important`
  }
})

class Menu extends PureComponent {
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
     * Дополнительный CSS-класс элемента
     */
    itemClassName: PropTypes.string,
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
     * Опции поля
     */
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element)
    ]),
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
    size: PropTypes.oneOf(['small', 'medium']),
    /**
     * Коллбэк для передачи ссылки на ноду элемента кнопки
     */
    nodeRef: PropTypes.func,
    /**
     * Коллбэк для передачи ссылки на инстанс скролла
     */
    scrollRef: PropTypes.func
  }

  static defaultProps = {
    multiple: false,
    disabled: false,
    autoFocus: false,
    maxHeight: null,
    valuesEquality: (a, b) => a === b,
    onChange: () => {},
    onEscKeyDown: () => {},
    size: 'medium'
  }

  value = this.props.multiple
    ? Array.isArray(this.props.value)
      ? this.props.value
      : emptyArr
    : this.props.value

  state = {
    value: this.value
  }

  focusIndex = -1
  itemsKeys = []
  itemsRefs = {}
  registeredItems = {}

  get contextValue() {
    if (!this.events) this.createEvents()

    return {
      isValueSelected: this.isValueSelected,
      isItemFocused: this.isItemFocused,
      isMenuDisabled: this.isMenuDisabled,
      getMenuSize: this.getMenuSize,
      getItemRef: this.getItemRef,
      events: this.events,
      className: this.props.itemClassName
    }
  }

  updateItemsKeys() {
    const nodes = this.menu.querySelectorAll('[data-menu-item-id]')
    const refs = {}
    this.itemsKeys = Array.prototype.slice.call(nodes).map(node => {
      const key = node.getAttribute('data-menu-item-id')
      refs[key] = node
      return key
    })
    this.itemsRefs = refs
  }

  addItem = (key, ref) => {
    this.registeredItems[key] = ref
  }

  removeItem = key => {
    delete this.registeredItems[key]
  }

  createEvents() {
    this.events = new EventEmitter()
    this.events.on('onItemSelect', this.handleOptionSelect)
    this.events.on('onItemFocus', this.handleOptionFocus)
    this.events.on('onItemMount', this.addItem)
    this.events.on('onItemUnmount', this.removeItem)
  }

  componentDidMount() {
    this.updateItemsKeys()
    this.scrollToLastSelected()
    if (this.props.autoFocus) this.setAutoFocus()
  }

  componentDidUpdate(prevProps, prevState) {
    const {props} = this
    this.updateItemsKeys()
    this.setValue(props.value)
    if (
      props.disabled !== prevProps.disabled ||
      props.size !== prevProps.size ||
      props.value !== prevState.value
    )
      this.events.emit('onPropsChange')
    if (props.autoFocus && !prevProps.autoFocus) this.setAutoFocus()
  }

  componentWillUnmount() {
    if (this.events) this.events.removeAllListeners()
  }

  isValueSelected = value => {
    const {props} = this
    if (props.multiple) {
      const selected = Array.isArray(this.value) ? this.value : emptyArr
      return selected.some(item => props.valuesEquality(item, value))
    } else {
      return props.valuesEquality(this.value, value)
    }
  }

  isItemFocused = key => {
    const index = this.itemsKeys.indexOf(key)
    return index > -1 ? index === this.focusIndex : false
  }

  isMenuDisabled = () => this.props.disabled

  getMenuSize = () => this.props.size

  getItemRef = key => this.itemsRefs[key]

  scrollToLastSelected() {
    const lastSelectedIndex = this.getLastSelectedIndex()
    if (lastSelectedIndex === -1) return
    const item = this.itemsRefs[this.itemsKeys[lastSelectedIndex]]
    if (!item) return
    const menuRect = getBoundingClientRect(this.menu)
    const itemRect = getBoundingClientRect(item)
    this.menu.scrollTop += itemRect.top - menuRect.top - menuRect.height / 2
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
      if (
        nextValue.length === currValue.length &&
        nextValue.every((item, index) =>
          this.props.valuesEquality(item, currValue[index])
        )
      )
        return
    } else {
      if (this.props.valuesEquality(value, this.value)) return
    }
    this.value = value
    this.setState({value})
  }

  handleOptionFocus = key => {
    const index = this.itemsKeys.indexOf(key)
    if (index === -1) return
    this.setFocusByIndex(index)
  }

  getLastSelectedIndex() {
    return this.itemsKeys.reduceRight(
      (result, key, index) =>
        result === -1 && this.registeredItems[key].isSelected ? index : result,
      -1
    )
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
    if (focusIndex === this.focusIndex) return
    this.focusIndex = focusIndex
    this.events.emit('onPropsChange')
  }

  handleOptionSelect = value => {
    const {props} = this
    let nextValue
    if (props.multiple) {
      const currValue = Array.isArray(this.value) ? this.value : emptyArr
      const withoutValue = currValue.filter(
        v => !props.valuesEquality(v, value)
      )
      nextValue =
        withoutValue.length === currValue.length
          ? currValue.concat(value)
          : withoutValue
    } else {
      nextValue = value
    }
    this.setValue(nextValue)
    props.onChange(nextValue)
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

  handleBlur = () => {
    this.focusIndex = -1
  }

  saveMenuRef = ref => {
    this.menu = ref
    if (this.props.nodeRef) this.props.nodeRef(ref)
  }

  getMenuProps() {
    /* eslint-disable no-unused-vars */
    const {
      autoFocus,
      value,
      theme,
      onChange,
      onEscKeyDown,
      multiple,
      valuesEquality,
      disabled,
      size,
      itemClassName,
      nodeRef,
      ...props
    } = this.props
    /* eslint-enable no-unused-vars */
    return props
  }

  render() {
    const {
      className,
      style,
      maxHeight,
      children,
      classes,
      scrollRef,
      ...other
    } = this.getMenuProps()

    return (
      <MenuContext.Provider value={this.contextValue}>
        <Scrollbar
          {...other}
          ref={scrollRef}
          elementRef={this.saveMenuRef}
          style={{maxHeight, ...style}}
          onKeyDown={this.keyDown}
          onBlur={this.handleBlur}
          translateContentSizeYToHolder
          removeTracksWhenNotUsed
          renderer={({elementRef, ...props}) => (
            <div
              {...props}
              ref={elementRef}
              className={classnames(classes.menu, className)}
            />
          )}
          contentProps={{
            renderer: ({elementRef, style, ...props}) => (
              <div
                {...props}
                ref={elementRef}
                className={classes.content}
                style={{...style, display: null}}
              />
            )
          }}
          wrapperProps={{
            renderer: ({elementRef, style, ...props}) => (
              <div
                {...props}
                ref={elementRef}
                className={classes.scrollbar}
                style={{...style, position: null, width: null}}
              />
            )
          }}
          scrollerProps={{
            renderer: ({elementRef, style, ...props}) => (
              <div
                {...props}
                ref={elementRef}
                className={classes.scrollbarInner}
                style={{...style, position: null}}
              />
            )
          }}
          trackYProps={{
            renderer: ({elementRef, ...props}) => (
              <div
                {...props}
                ref={elementRef}
                className={classes.scrollbarTrack}
              />
            )
          }}
          thumbYProps={{
            renderer: ({elementRef, ...props}) => (
              <div
                {...props}
                ref={elementRef}
                className={classes.scrollbarThumb}
              />
            )
          }}>
          {children}
        </Scrollbar>
      </MenuContext.Provider>
    )
  }
}

export default withStyles(styles, {name: 'Menu'})(Menu)
