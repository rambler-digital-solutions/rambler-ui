import React, {Component} from 'react'
import PropTypes from 'prop-types'
import EventEmitter from 'events'
import { 
  COMPLEX_SEARCH_SUGGEST_ITEM_CONTEXT 
} from '../constants/context'

export default function provideSearch(Search) {
  return class extends Component {
    constructor(props) {
      super(props)

      this.state = {
        isDropdownOpened: false,
        sourceType: 'global',
        value: this.props.value
      }

      this.events = new EventEmitter
      this.events.setMaxListeners(0)

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
    };

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
      if (component)
        this.suggestItems[id] = component
      else
        delete this.suggestItems[id]
    }
  
    onRemoveSuggestItemClick = (value) => {
      this.props.onRemoveItem(value)
    }
  
    onSuggestItemClick = (value) => {
      this.props.onClickItem(value)
    }
  
    onSuggestItemHover = (value) => {
      this.props.onHoverItem(value)
    }

    setHighlightedId = (id) => {
      this.highlightedSuggestItemId = id
      this.events.emit('highlight', this.highlightedSuggestItemId)
    }

    initializeSortedSuggestItems() {
      if (!this.suggestNode) {
        this.sortedSuggestItems = []
      } else {
        const items = this.suggestNode.querySelectorAll('[data-suggest-item-id]')
        this.sortedSuggestItems = Array.prototype.slice.call(items).map((node) =>
          node.getAttribute('data-suggest-item-id')
        )
      }
    }

    onKeyDown = (e) => {
      if (!this.inputNode) // на всякий случай проверяем не пришло ли событие после анмаунта компонента
        return
      this.initializeSortedSuggestItems()
      const index = this.highlightedSuggestItemId ? this.sortedSuggestItems.indexOf(this.highlightedSuggestItemId) : null
      const len = this.sortedSuggestItems.length
      let nextId
      switch (e.key) {
      case 'ArrowDown':
        if (len > 0) {
          e.preventDefault()
          nextId = this.sortedSuggestItems[index + 1 >= len || index === null ? 0 : index + 1]
          this.setHighlightedId(nextId)
          this.props.onSelectItem(this.suggestItems[nextId].props.value)
        }
        break
  
      case 'ArrowUp':
        if (len > 0) {
          e.preventDefault()
          nextId = this.sortedSuggestItems[index - 1 < 0 || index === null ? len - 1 : index - 1]
          this.setHighlightedId(nextId)
          this.props.onSelectItem(this.suggestItems[nextId].props.value)
        }
        break
  
      case 'Enter':
        e.preventDefault()
        this.props.onPressEnter(this.state.value)
        break
  
      case 'Escape':
        e.preventDefault()
        this.closeDropdown()
        break
      }
    }
  
    // onSearchInput = (e) => {
    //   const value = e.target.value
    //   this.setHighlightedId(null)
    //   this.setState({value})
    //   this.openDropdown()
    //   this.props.onSearch(value, {globalSearch: this.state.sourceType})
    // }

    setNode = name => node => {
      this[`${name}Node`] = node
    }

    render() {
      return <Search
        {...this.props}
        value={this.state.value}
        setNode={this.setNode}
        onKeyDown={this.onKeyDown}
        // onSearchInput={this.onSearch}
      />
    }
  }
}