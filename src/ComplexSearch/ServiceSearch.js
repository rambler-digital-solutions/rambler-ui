import React, { Children } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import deepmerge from 'deepmerge'
import EventEmitter from 'events'
import { injectSheet } from '../theme'
import Dropdown from '../Dropdown'
import OnClickOutside from '../OnClickOutside'
import ClearIcon from '../icons/forms/ClearIcon'
import SearchIcon from '../icons/forms/SearchIcon'
import { isolateMixin } from '../utils/mixins'
import { COMPLEX_SEARCH_SUGGEST_ITEM_CONTEXT } from '../constants/context'

@injectSheet(theme => {
  const css = {
    small: {},
    medium: {},
    withSourceButtons: {},
    active: {},
    root: {
      extend: isolateMixin,
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
    inputWrapper: {
      borderStyle: 'solid',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      paddingRight: 30,
      borderRadius: 1,
      width: '100%',
      height: theme.search.height,
      boxSizing: 'border-box',
      borderColor: theme.field.colors.disabled.outline,
      borderWidth: 1,

      '&$active': {
        borderColor: theme.search.input.hover.borderColor
      },

      '& $input': {
        fontSize: 13
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
      extend: isolateMixin,
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
      color: theme.search.input.color,
      height: '100%',
      outline: 0,
      boxShadow: 'none',

      '&::-ms-reveal, &::-ms-clear': {
        display: 'none'
      }
    },
    serviceSearchIcon: {
      color: theme.search.input.default.icon,
      position: 'absolute',
      right: 15,
      top: '50%',
      transform: 'translateY(-50%)'
    },
    inputLeftIcon: {
      marginLeft:  12
    },
    searchButton: {
      extend: isolateMixin,
      color: theme.search.button.color,
      top: 0,
      height: theme.search.height,
      borderRadius: '0 1px 1px 0',
      textAlign: 'center',
      border: 'none',
      flexShrink: 0,
      cursor: 'pointer',
      padding: '0 20px',
      boxSizing: 'border-box',
      background: theme.search.button.default.background,
      outline: 'none',
      fontSize: theme.search.button.fontSize,
      fontWeight: theme.search.button.fontWeight,
      letterSpacing: theme.search.button.letterSpacing,
      textTransform: theme.search.button.textTransform,

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
    clear: {
      position: 'absolute',
      right: 15,
      top: '50%',
      transform: 'translateY(-50%)',
      cursor: 'pointer',
      opacity: 0.6,

      '&:hover': {
        opacity: 1,
        color:  theme.search.serviceIcon.hover.color
      },

      '&:active': {
        opacity: 1
      }
    },
    serviceClearIcon: {
      position: 'absolute',
      right: 15,
      top: '50%',
      transform: 'translateY(-50%)',
      cursor: 'pointer',
      opacity: 0.6,

      '&:hover': {
        opacity: 1,
        color:  theme.search.serviceIcon.hover.color
      },

      '&:active': {
        opacity: 1
      }
    },
    serviceIcons: {
      display: 'flex',
      position: 'absolute',
      alignItems: 'center',
      right: 15
    },
    serviceIcon: {
      opacity: 0.5,
      transition: 'opacity 0.2s, color 0.2s',
      color: theme.search.serviceIcon.color,
      cursor: 'pointer',
      marginRight: 10,

      '&:last-child': {
        marginRight: 0
      },

      '&:hover': {
        opacity: 1,
        color: theme.search.serviceIcon.hover.color
      },
      
      '&$active': {
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
  }

  deepmerge(css, ['small', 'medium'].reduce((result, size) => {
    const styles = theme.search.sizes[size]

    return {
      ...result,
      [`size-${size}`]: {
        '& $inputWrapper': {
          height: styles.service.height
        }
      }
    }
  }, {}))

  return css
}, {name: 'ServiceSearch'})
export default class ServiceSearch extends React.Component {
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
     * CSS-класс для родителя инпута
     */
    inputWrapperClassName: PropTypes.string,
    /**
     * Текущий поисковый запрос
     */
    value: PropTypes.string,
    /**
     * Объект для дополнительных стилей для кнопки
     */
    searchButtonStyle: PropTypes.object,
    /**
     * Дополнительный css-класс для кнопки поиска
     */
    searchButtonClassName: PropTypes.string,
    /**
     * Иконка поиска, по дефолту подставляется иконка с лупой
     */
    searchIcon: PropTypes.node,
    /**
     * Объект для дополнительных стилей для дропдауна
     */
    dropdownStyle: PropTypes.object,
    /**
     * Дополнительный css-класс для дропдауна
     */
    dropdownClassName: PropTypes.string,
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
    appendToBody: PropTypes.bool,
    /**
     * 	Автоматическое позиционирование дропдауна по оси Y (если выходит за пределы экрана)
     */
    autoPositionY: PropTypes.bool,
    /**
     * 	Дополнительные аттрибуты для поискового инпута
     */
    inputProps: PropTypes.object,
    /**
     * 	Дополнительные аттрибуты для кнопок переключения источника поиска
     */
    sourceButtonsProps: PropTypes.func,
    /**
     * 	Дополнительные аттрибуты для кнопки
     */
    searchButtonProps: PropTypes.object,
    /**
     * Размер поискового блока
     */
    size: PropTypes.oneOf(['small', 'medium']),
    /**
     * Для отображения поиска по сервису/интернету
     */
    sourceType: PropTypes.bool,
    /**
     * Вариант отображения поиска
     */
    layout: PropTypes.oneOf(['media', 'service'])
  };

  static defaultProps = {
    value: '',
    placeholder: '',
    division: null,
    appendToBody: true,
    autoPositionY: false,
    searchButton: null,
    withClearButton: true,
    searchButtonStyle: {},
    searchButtonClassName: '',
    inputProps: {},
    searchButtonProps: {},
    sourceButtonsProps: () => ({}),
    layout: 'media',
    sourceType: false,
    size: 'medium',
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

  /**
   * Показывать ли крестик очищения input
   * @return {Boolean}
   */
  get isClearVisible() {
    return this.props.withClearButton && Boolean(this.state.value)
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
    this.props.onSearch(value, {globalSearch: this.state.sourceType})
  }

  onClickOutside = (e) => {
    if (this.rootNode && e.target && this.isNodeNotInComponent(e.target))
      this.closeDropdown()
  }

  onSourceIconClick = (type) => {
    this.setState({sourceType: type})
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

  renderInputNode() {
    const {
      placeholder,
      inputProps,
      classes
    } = this.props

    return (
      <input
        type="text"
        onChange={this.onSearchInput}
        onKeyDown={this.onKeyDown}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        value={this.state.value}
        className={classes.input}
        placeholder={placeholder}
        {...inputProps}
        ref={this.setNode('input')}
      />
    )
  }

  renderInput = () => {
    const {
      inputWrapperClassName,
      classes
    } = this.props

    return (
      <div className={classnames(
        classes.inputWrapper, 
        inputWrapperClassName, 
        this.state.isDropdownOpened && classes.active
      )}>
        {this.renderInputNode()}
        {!this.isClearVisible && <SearchIcon
          size="15"
          className={classes.serviceSearchIcon}
          color="currentColor"
        />}
        {this.isClearVisible && <ClearIcon
          className={classes.serviceClearIcon}
          size={15}
          color="currentColor"
          onClick={this.clearForm}
        ></ClearIcon>}
      </div>
    )
  }

  renderDropdown() {
    const {
      children,
      appendToBody,
      autoPositionY,
      dropdownStyle,
      dropdownClassName,
      classes
    } = this.props

    return (
      <Dropdown
        isOpened={this.state.isDropdownOpened && Children.count(children) > 0}
        anchor={this.renderInput()}
        padding={false}
        style={dropdownStyle}
        className={classnames(classes.dropdown, dropdownClassName)}
        appendToBody={appendToBody}
        anchorFullWidth={true}
        autoPositionY={autoPositionY}
        anchorPointY="bottom"
        contentPointY="top"
        overlayClassName={classes.overlay}
        cachePositionOptions={false}
        closeOnClickOutside={false}
      >
        <div className={classes.suggest} ref={this.setNode('suggest')}>
          {children}
        </div>
      </Dropdown>
    )
  }

  render() {
    const {
      classes,
      style,
      className,
      size,
      sourceType
    } = this.props

    return (
      <OnClickOutside handler={this.onClickOutside}>
        <div
          className={classnames(
            classes.root,
            className,
            sourceType && classes.withSourceButtons,
            classes[`size-${size}`]
          )}
          style={style}
          ref={this.setNode('root')}
        >
          <div className={classes.inputRow}>
            {this.renderDropdown()}
          </div>
        </div>
      </OnClickOutside>
    )
  }
}