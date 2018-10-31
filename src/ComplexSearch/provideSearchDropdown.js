import React, {Component, Children} from 'react'
import PropTypes from 'prop-types'
import EventEmitter from 'eventemitter3'
import SuggestDropdown from './SuggestDropdown'
import OnClickOutside from '../OnClickOutside'
import {COMPLEX_SEARCH_SUGGEST_ITEM_CONTEXT} from '../constants/context'

export default function provideSearchDropdown(Search) {
  return class extends Component {
    static defaultProps = {
      value: '',
      placeholder: '',
      division: null,
      appendToBody: true,
      autoPositionY: false,
      searchButton: null,
      searchButtonStyle: {},
      searchButtonClassName: '',
      inputProps: {},
      searchButtonProps: {},
      sourceButtonsProps: () => ({}),
      sourceType: false,
      onSearch() {},
      onFocus() {},
      onBlur() {},
      onSelectItem() {},
      onClickItem() {},
      onRemoveItem() {},
      onHoverItem() {},
      onSubmit() {},
      onPressEnter() {}
    }

    static childContextTypes = {
      [COMPLEX_SEARCH_SUGGEST_ITEM_CONTEXT]: PropTypes.shape({
        /**
         * Функция регистрации SuggestItem (при добавлении этого компонента в DOM)
         */
        registerSuggestItem: PropTypes.func,
        /**
         * Колбек удаления SuggestItem
         */
        onRemoveSuggestItemClick: PropTypes.func,
        /**
         * Колбек клика по SuggestItem
         */
        onSuggestItemClick: PropTypes.func,
        /**
         * Колбек наведения на SuggstItem
         */
        onSuggestItemHover: PropTypes.func,
        /**
         * Функция для подсветки SuggestItem
         */
        setHighlightedId: PropTypes.func,
        /**
         * Шина событий
         */
        events: PropTypes.instanceOf(EventEmitter)
      })
    }

    constructor(props) {
      super(props)

      this.state = {
        isDropdownOpened: false
      }

      this.events = new EventEmitter()

      /**
       * Упорядоченный массив с зарегестрированными компонентами SuggestItem
       * @type {Array}
       */
      this.sortedSuggestItems = []
      /**
       * Объект с сохраненными suggestItems
       */
      this.suggestItems = {}
      /**
       * Текущий подсвеченный элемент
       */
      this.highlightedSuggestItemId = null
    }

    componentWillUnmount() {
      this.events.removeAllListeners()
    }

    getChildContext() {
      return {
        [COMPLEX_SEARCH_SUGGEST_ITEM_CONTEXT]: {
          events: this.events,
          registerSuggestItem: this.registerSuggestItem,
          onRemoveSuggestItemClick: this.onRemoveSuggestItemClick,
          onSuggestItemClick: this.onSuggestItemClick,
          onSuggestItemHover: this.onSuggestItemHover,
          setHighlightedId: this.setHighlightedId
        }
      }
    }

    registerSuggestItem = (id, component) => {
      if (component) this.suggestItems[id] = component
      else delete this.suggestItems[id]
    }

    onRemoveSuggestItemClick = value => {
      this.props.onRemoveItem(value)
    }

    onSuggestItemClick = value => {
      this.props.onClickItem(value)
    }

    onSuggestItemHover = value => {
      this.props.onHoverItem(value)
    }

    setHighlightedId = id => {
      this.highlightedSuggestItemId = id
      this.events.emit('highlight', this.highlightedSuggestItemId)
    }

    initializeSortedSuggestItems() {
      if (!this.suggestNode) {
        this.sortedSuggestItems = []
      } else {
        const items = this.suggestNode.querySelectorAll(
          '[data-suggest-item-id]'
        )
        this.sortedSuggestItems = Array.prototype.slice
          .call(items)
          .map(node => node.getAttribute('data-suggest-item-id'))
      }
    }

    openDropdown() {
      this.setState({isDropdownOpened: true})
    }

    closeDropdown() {
      this.setState({isDropdownOpened: false})
    }

    onFocus = () => {
      this.openDropdown()
      this.props.onFocus()
    }

    onSearch = (e, options = {}) => {
      this.props.onSearch(e, options)
      this.setHighlightedId(null)
      this.openDropdown()
    }

    clearForm = e => {
      this.setHighlightedId(null)
      this.closeDropdown()
      this.props.clearForm(e)
    }

    onKeyDown = e => {
      if (!this.inputNode)
        // на всякий случай проверяем не пришло ли событие после анмаунта компонента
        return
      this.initializeSortedSuggestItems()
      const index = this.highlightedSuggestItemId
        ? this.sortedSuggestItems.indexOf(this.highlightedSuggestItemId)
        : null
      const len = this.sortedSuggestItems.length
      let nextId
      switch (e.key) {
      case 'ArrowDown':
        if (len > 0) {
          e.preventDefault()
          nextId = this.sortedSuggestItems[
            index + 1 >= len || index === null ? 0 : index + 1
          ]
          this.setHighlightedId(nextId)
          this.props.onSelectItem(this.suggestItems[nextId].props.value)
        }
        break

      case 'ArrowUp':
        if (len > 0) {
          e.preventDefault()
          nextId = this.sortedSuggestItems[
            index - 1 < 0 || index === null ? len - 1 : index - 1
          ]
          this.setHighlightedId(nextId)
          this.props.onSelectItem(this.suggestItems[nextId].props.value)
        }
        break
      case 'Escape':
        e.preventDefault()
        this.closeDropdown()
        break
      }

      this.props.onKeyDown(e)
    }

    setNode = name => node => {
      this[`${name}Node`] = node
      this.props.setNode && this.props.setNode(name)(node)
    }

    isNodeNotInComponent(node) {
      if (!this.props.appendToBody) return !this.rootNode.contains(node)
      return (
        (!this.suggestNode ||
          (this.suggestNode !== node && !this.suggestNode.contains(node))) &&
        (this.rootNode !== node && !this.rootNode.contains(node))
      )
    }

    onClickOutside = e => {
      if (this.rootNode && e.target && this.isNodeNotInComponent(e.target))
        this.closeDropdown()
    }

    onBlur = e => {
      // // на всякий случай проверяем, находится у нас еще компонент в DOM, т.к. React может прислать blur после анмаунта компонента
      if (
        this.rootNode &&
        e.relatedTarget &&
        this.isNodeNotInComponent(e.relatedTarget)
      )
        this.closeDropdown()

      this.props.onBlur()
    }

    renderDropdown = anchor => {
      const {
        children,
        appendToBody,
        autoPositionY,
        dropdownStyle,
        dropdownClassName
      } = this.props

      return (
        <SuggestDropdown
          isOpened={this.state.isDropdownOpened && Children.count(children) > 0}
          anchor={anchor}
          className={dropdownClassName}
          appendToBody={appendToBody}
          autoPositionY={autoPositionY}
          style={dropdownStyle}>
          <div ref={this.setNode('suggest')}>{children}</div>
        </SuggestDropdown>
      )
    }

    render() {
      const {isDropdownOpened} = this.state

      return (
        <OnClickOutside handler={this.onClickOutside}>
          <Search
            {...this.props}
            isDropdownOpened={isDropdownOpened}
            renderDropdown={this.renderDropdown}
            clearForm={this.clearForm}
            setNode={this.setNode}
            onBlur={this.onBlur}
            onFocus={this.onFocus}
            onKeyDown={this.onKeyDown}
            onSearch={this.props.onSearch}
            setHighlightedId={this.setHighlightedId}
          />
        </OnClickOutside>
      )
    }
  }
}
