import React, { Children } from 'react'
import * as PropTypes from 'prop-types'
import classnames from 'classnames'
import omit from 'lodash/omit'
import EventEmitter from 'events'
import { injectSheet } from '../theme'
import Dropdown from '../Dropdown'
import OnClickOutside from '../events/OnClickOutside'
import ClearIcon from '../icons/forms/ClearIcon'
import SearchIcon from '../icons/forms/SearchIcon'
import { isolateMixin } from '../style/mixins'
import { COMPLEX_SEARCH_SUGGEST_ITEM_CONTEXT } from '../constants/context'

@injectSheet(theme => ({
  root: {
    ...isolateMixin,
    fontFamily: theme.fontFamily,
    fontSize: theme.search.fontSize,
    width: '100%',
    maxWidth: theme.search.maxWidth,
    display: 'flex',
    flexDirection: 'column'
  },
  inputRow: {
    height: theme.search.height,
    position: 'relative',
    width: '100%',
    display: 'flex'
  },
  active: {},
  inputWrapper: {
    borderColor: theme.search.input.borderColor,
    borderWidth: 2,
    borderStyle: 'solid',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    paddingRight: 30,
    borderRadius: '1px 0 0 1px',
    width: '100%',
    height: theme.search.height,
    '&$active': {
      borderColor: theme.search.input.hoverColor
    }
  },
  bottomWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '15px 0',
    fontSize: 12
  },
  division: {
    height: 30,
    padding: '0 12px',
    display: 'flex',
    alignItems: 'center',
    margin: '0 3px',
    fontSize: 11,
    textTransform: 'uppercase',
    fontWeight: 500,
    borderRadius: '1px',
    backgroundColor: theme.search.division.color,
    letterSpacing: 1.3,
    cursor: 'pointer'
  },
  input: {
    ...isolateMixin,
    padding: '10px 12px',
    border: 'none',
    boxSizing: 'border-box',
    display: 'block',
    borderRadius: 0,
    width: '100%',
    fontWeight: 400,
    fontSize: theme.search.fontSize,
    lineHeight: 1.43,
    appearance: 'none',
    color: theme.search.color,
    height: '100%',
    outline: 0,
    boxShadow: 'none',

    '&::-ms-reveal, &::-ms-clear': {
      display: 'none'
    }
  },
  searchButton: {
    color: theme.search.button.color,
    top: 0,
    height: theme.search.height,
    borderRadius: '0 1px 1px 0',
    border: 'none',
    flexShrink: 0,
    cursor: 'pointer',
    padding: '0 10px',
    boxSizing: 'border-box',
    background: theme.search.button.default.background,
    outline: 'none',
    fontSize: 12,
    fontWeight: 500,
    textTransform: 'uppercase',

    '&:hover': {
      background: theme.search.button.hover.background
    },

    '&:active': {
      background: theme.search.button.active.background
    }
  },
  searchIcon: {
    marginRight: 8,
    marginTop: -2,
    verticalAlign: 'middle'
  },
  withoutButton: {
    '& $inputWrapper': {
      borderRadius: 1,
      boxShadow: 'none'
    }
  },
  clear: {
    position: 'absolute',
    right: 15,
    top: '50%',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    opacity: 0.6,

    '&:hover': {
      opacity: 1,
      color:  theme.search.clear.hoverColor
    },
    
    '&:active': {
      opacity: 1
    }
  },
  suggest: {
    width: '100%',
    background: 'white',
    boxShadow: '1px 2px 5px 0 rgba(102, 116, 166, 0.15)'
  },
  dropdown: {
    transition: 'none',
    animation: 'none',
    width: '100%'
  },
  overlay: {
    width: '100%'
  }
}))
class ComplexSearch extends React.Component {
  static propTypes = {
    /**
     * Переопределение стандартных стилей компонента Search
     */
    style: PropTypes.object,
    /**
     * CSS-класс компонента
     */
    className: PropTypes.string,
    /**
     * Текущий поисковый запрос
     */
    value: PropTypes.string,
    /**
     * Кнопка поиска
     */
    searchButton: PropTypes.node,
    /**
     * Минимальная ширина кнопки поиска. Может быть числом или строкой (например, '100%')
     */
    searchButtonMinWidth: PropTypes.oneOfType([PropTypes.number , PropTypes.string]),
    /**
     * Иконка поиска, по дефолту подставляется иконка с лупой
     */
    searchIcon: PropTypes.node,
    /**
     * Имя раздела, по которому ищем
     */
    division: PropTypes.string,
    /**
     * Плейсхолдер поискового инпута
     */
    placeholder: PropTypes.string,
    /**
     * Коллбек на изменение поискового запроса, принимает первым аргументом значение поискового запроса
     */
    onSearch: PropTypes.func,
    /**
     * Коллбек на фокус поискового инпута
     */
    onFocus: PropTypes.func,
    /**
     * Коллбек на блур поискового инпута
     */
    onBlur: PropTypes.func,
    /**
     * Коллбек на выбор поискового запроса через стрелки, первым аргументом получает props.value соответствующего SuggestItem
     */
    onSelectItem: PropTypes.func,
    /**
     * Коллбек на клик SuggestItem, первым аргументом получает props.value соответствующего SuggestItem
     */
    onClickItem: PropTypes.func,
    /**
    * Коллбек на удаление SuggestItem, первым аргументом получает props.value соответствующего SuggestItem
    */
    onRemoveItem: PropTypes.func,
    /**
     * Колбек ховера по SuggestItem, первым аргументом получает props.value соответствующего SuggestItem
     */
    onHoverItem: PropTypes.func,
    /**
     * Коллбек на нажатие на кнопку поиска, принимает первым аргументом значение поискового запроса
     */
    onSubmit: PropTypes.func,
    /**
     * Коллбек на нажатие на Enter, принимает первым аргументом значение поискового запроса
     */
    onPressEnter: PropTypes.func,
    /**
     * Вставлять ли dropdown внутри body
     */
    appendToBody: PropTypes.bool
  };

  static defaultProps = {
    value: '',
    placeholder: '',
    division: null,
    appendToBody: true,
    searchButton: null,
    searchButtonMinWidth: 0,
    onSearch() {},
    onFocus() {},
    onBlur() {},
    onSelectItem() {},
    onClickItem() {},
    onRemoveItem() {},
    onHoverItem() {},
    onSubmit() {},
    onPressEnter() {}
  };

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

  constructor(props) {
    super(props)
    this.state = {
      isDropdownOpened: false,
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

  /**
   * Показывать ли крестик очищения input
   * @return {Boolean}
   */
  get isClearVisible() {
    return Boolean(this.state.value)
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

  componentWillUnmount() {
    this.events.removeAllListeners()
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.value !== nextProps.value)
      this.setState({
        value: nextProps.value
      })
  }

  setNode = name => node => {
    this[`${name}Node`] = node
  }

  isNodeNotInComponent(node) {
    if (!this.props.appendToBody)
      return !this.rootNode.contains(node)
    return (!this.suggestNode || this.suggestNode !== node && !this.suggestNode.contains(node)) &&
      (this.rootNode !== node && !this.rootNode.contains(node))
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

  onSubmit = () => {
    this.props.onSubmit(this.state.value)
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

  onFocus = () => {
    this.openDropdown()
    this.props.onFocus()
  }

  onBlur = (e) => {
    // на всякий случай проверяем, находится у нас еще компонент в DOM, т.к. React может прислать blur после анмаунта компонента
    if (this.rootNode && e.relatedTarget && this.isNodeNotInComponent(e.relatedTarget))
      this.closeDropdown()

    this.props.onBlur()
  }

  onSearchInput = (e) => {
    const value = e.target.value
    this.setHighlightedId(null)
    this.setState({value})
    this.openDropdown()
    this.props.onSearch(value)
  }

  onClickOutside = (e) => {
    if (this.rootNode && e.target && this.isNodeNotInComponent(e.target))
      this.closeDropdown()
  }

  setHighlightedId = (id) => {
    this.highlightedSuggestItemId = id
    this.events.emit('highlight', this.highlightedSuggestItemId)
  }

  openDropdown() {
    this.setState({isDropdownOpened: true})
  }

  closeDropdown() {
    this.setHighlightedId(null)
    this.setState({isDropdownOpened: false})
  }

  clearForm = () => {
    const value = ''
    this.setHighlightedId(null)
    this.setState({value})
    this.inputNode.focus()
    this.props.onSearch(value)
  }

  renderInput = () => {
    const {
      division,
      placeholder,
      sheet: { classes: css }
    } = omit(this.props, 'onChange', 'value')
    return (
      <div className={classnames(css.inputWrapper, this.state.isDropdownOpened && css.active)}>
        {division && <div className={css.division}>{division}</div> }
        <input
          type="text"
          onChange={this.onSearchInput}
          onKeyDown={this.onKeyDown}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          value={this.state.value}
          className={css.input}
          placeholder={placeholder}
          ref={this.setNode('input')}
        />
        {this.isClearVisible && <ClearIcon
          className={css.clear}
          size={16}
          color="currentColor"
          onClick={this.clearForm}
        ></ClearIcon>}
      </div>
    )
  }

  renderButton() {
    const {
      sheet: { classes: css },
      searchButton,
      searchButtonMinWidth
    } = this.props

    if (!searchButton)
      return null

    // если передали ноду - ее отдаем на рендер
    if (typeof searchButton === 'object')
      return searchButton

    return (
      <button
        className={css.searchButton}
        onClick={this.onSubmit}
        size="small"
        style={{minWidth: searchButtonMinWidth}}
        tabIndex={-1}
      >
        {this.renderIcon()}{searchButton}
      </button>
    )
  }

  renderIcon() {
    if (this.props.searchIcon === undefined)
      return (
        <SearchIcon
          size={12}
          className={this.props.sheet.classes.searchIcon}
          color={this.props.theme.search.button.color}
        />
      )
    if (this.props.searchIcon)
      return this.props.searchIcon
    return null
  }

  renderDropdown() {
    const {
      children,
      appendToBody,
      sheet: { classes: css }
    } = this.props

    return (
      <Dropdown
        isOpened={this.state.isDropdownOpened && Children.count(children) > 0}
        anchor={this.renderInput()}
        padding={false}
        className={css.dropdown}
        appendToBody={appendToBody}
        anchorFullWidth={true}
        autoPositionY={true}
        anchorPointY="bottom"
        contentPointY="top"
        overlayClassName={css.overlay}
        cachePositionOptions={false}
        closeOnClickOutside={false}
      >
        <div className={css.suggest} ref={this.setNode('suggest')}>
          {children}
        </div>
      </Dropdown>
    )
  }

  render() {
    const {
      sheet: { classes: css },
      style,
      className
    } = this.props
    const button = this.renderButton()

    return (
      <OnClickOutside handler={this.onClickOutside}>
        <div
          className={classnames(
            css.root,
            !button && css.withoutButton,
            className,
          )}
          style={style}
          ref={this.setNode('root')}
        >
          <div
            className={css.inputRow}
          >
            {this.renderDropdown()}
            {button}
          </div>
        </div>
      </OnClickOutside>
    )
  }
}

export default ComplexSearch
