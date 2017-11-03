import React, { cloneElement } from 'react'
import * as pt from 'prop-types'
import { injectSheet } from '../theme'
import cn from 'classnames'
import omit from 'lodash/omit'
import Button from '../Button'
import Dropdown from '../Dropdown'
import OnClickOutside from '../events/OnClickOutside'
import ClearIcon from '../icons/forms/ClearIcon'
import SearchIcon from '../icons/forms/SearchIcon'
import { isolateMixin } from '../style/mixins'

@injectSheet(theme => ({
  root: {
    ...isolateMixin,
    fontFamily: theme.fontFamily,
    fontSize: theme.search.fontSize,
    width: '100%',
    maxWidth: theme.search.maxWidth
  },
  inputRow: {
    marginRight: theme.search.button.width,
    height: theme.search.height,
    position: 'relative'
  },
  active: {},
  inputWrapper: {
    borderColor: theme.search.input.borderColor,
    borderWidth: 2,
    borderStyle: 'solid',
    display: 'flex',
    alignItems: 'center',
    marginRight: -2,
    paddingRight: 30,
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
    padding: 10,
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
    position: 'absolute',
    right: `-${theme.search.button.width}`,
    color: theme.search.button.color,
    top: 0,
    flexShrink: 0,
    width: theme.search.button.width,
    height: theme.search.height,

    '&:focus, &:active': {
      '&:after': {
        display: 'none'
      }
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
    animation: 'none'
  }
}))
class ComplexSearch extends React.Component {
  static propTypes = {
    /**
    * Переопределение стандартных стилей компонента Search
    */
    style: pt.object,
    /**
    * CSS-класс компонента
    */
    className: pt.string,
    /**
    * Текущий поисковый запрос
    */
    value: pt.string,
    /**
    * Кнопка поиска
    */
    searchButton: pt.node,
    /**
    * Имя раздела, по которому ищем
    */
    division: pt.string,
    /**
    * Плейсхолдер поискового инпута
    */
    placeholder: pt.string,
    /**
    * Коллбек на изменение поискового запроса
    */
    onSearch: pt.func,
    /**
    * Коллбек на фокус поискового инпута
    */
    onFocus: pt.func,
    /**
    * Коллбек на блур поискового инпута
    */
    onBlur: pt.func,
    /**
    * Коллбек на выбор поискового запроса через стрелки
    */
    onSelectItem: pt.func,
    /**
    * Коллбек на клик айтема
    */
    onClickItem: pt.func,
    /**
    * Коллбек на удаление suggest-item
    */
    onRemoveItem: pt.func,
    /**
    * Коллбек на нажатие на кнопку поиска
    */
    onSubmit: pt.func,
    /**
    * Коллбек на нажатие на Enter
    */
    onPressEnter: pt.func,
    /**
    * Вставлять ли dropdown внутри body
    */
    appendToBody: pt.bool,
    /**
    * Поисковая подсказка
    */
    hint: pt.node,
    /**
    * Ссылки рядом с хинтом
    */
    bottomLinks: pt.node
  }

  static defaultProps = {
    value: '',
    searchButton: 'Поиск',
    division: 'Поиск',
    placeholder: '',
    hint: null,
    bottomLinks: null,
    appendToBody: true,
    onFocus: () => {},
    onSelectItem: () => {},
    onSubmit: () => {},
    onPressEnter: () => {},
    onSearch: () => {},
    onBlur: () => {}
  }

  state = {
    isDropdownOpened: false,
    selectedItem: -1,
    highlightedItem: -1,
    isClearVisible: false,
    value: ''
  }

  componentDidUpdate(prevProps) {
    if (prevProps.value && prevProps.value !== this.props.value)
      if (this.inputNode) this.inputNode.value = this.props.value
  }

  submitSearch = () => {
    this.props.onSubmit(this.state.value)
  }

  onKeyDown = (e) => {
    const {
      highlightedItem
    } = this.state
    const {
      children
    } = this.props
    switch (e.key) {
    //eslint-disable-next-line
    case 'ArrowDown':
      e.preventDefault()
      const nextItem = highlightedItem === children.length - 1 ? 0 : highlightedItem + 1
      this.setState({selectedItem: nextItem, highlightedItem: nextItem})
      break
    //eslint-disable-next-line
    case 'ArrowUp':
      e.preventDefault()
      const prevItem = highlightedItem === 0 ? children.length - 1 : highlightedItem - 1
      this.setState({selectedItem: prevItem, highlightedItem: prevItem})
      break
    case 'Enter':
      e.preventDefault()
      this.props.onPressEnter(this.inputNode.value)
      break
    case 'Escape':
      this.setState({
        isDropdownOpened: false,
        selectedItem: -1,
        highlightedItem: -1
      })
      break
    default:
    }
  }

  onFocus = () => {
    this.setState({isDropdownOpened: true, isActive: true})
    this.props.onFocus()
  }

  onSearchInput = (e) => {
    const value = e.target.value.trim()
    const newState = {
      value
    }
    if (!this.state.isDropdownOpened)
      newState.isDropdownOpened = true
    if (this.state.highlightedItem !== -1)
      newState.highlightedItem = -1
    if (this.state.selectedItem !== -1)
      newState.selectedItem = -1
    newState.isClearVisible = value !== ''
    this.setState(newState)
    this.props.onSearch(value)
  }

  onBlur = () => {
    this.setState({isActive: false})
    this.props.onBlur()
  }

  setNode = name => node => {
    this[`${name}Node`] = node
  }

  clearForm = () => {
    this.inputNode.value = ''
    this.setState(
      {
        isDropdownOpened: false,
        isClearVisible: false,
        selectedItem: -1,
        highlightedItem: -1
      }
    )
    this.inputNode.focus()
  }

  renderInput = () => {
    const {
      division,
      placeholder,
      sheet: { classes: css },
      value,
      theme
    } = omit(this.props, 'onChange')

    return (
      <div
        className={css.inputRow}
      >
        <div className={cn(css.inputWrapper, {[css.active]: this.state.isActive})}>
          {division &&
            <div
              className={css.division}
            >{division}
            </div>
          }
          <input
            type="text"
            onChange={this.onSearchInput}
            onKeyDown={this.onKeyDown}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            defaultValue={value}
            className={css.input}
            placeholder={placeholder}
            ref={this.setNode('input')}
          />
        </div>
        {this.state.isClearVisible && <ClearIcon
          className={cn(
            css.clear
          )}
          size={16}
          color={theme.search.clear.color}
          onClick = {this.clearForm}
        ></ClearIcon>}
        {this.renderButton()}
      </div>
    )
  }

  renderButton() {
    const {
      sheet: { classes: css },
      searchButton
    } = this.props

    // если передали ноду - ее отдаем на рендер
    if (typeof searchButton === 'object')
      return searchButton

    return (
      <Button
        className={css.searchButton}
        onClick={this.submitSearch}
        size="small"
        icon={this.renderIcon()}
      >
        {searchButton}
      </Button>
    )
  }

  renderIcon() {
    return (
      <SearchIcon
        size={12}
        color={this.props.theme.search.button.color}
      />
    )
  }

  renderItems() {
    const {
      children,
      onRemoveItem,
      onSelectItem,
      onClickItem
    } = this.props

    return React.Children.map(children, (child, index) => {
      const props = {
        isHighlighted: index === this.state.highlightedItem,
        isSelected: index === this.state.selectedItem,
        onRemoveClick: onRemoveItem,
        onHover: () => { this.setState({highlightedItem: index, selectedItem: -1 }) },
        onSelect: onSelectItem,
        onClick: onClickItem
      }
      return cloneElement(child, props)
    })
  }

  closeOnClickOutside = () => {
    this.setState({
      isDropdownOpened: false,
      highlightedItem: -1,
      selectedItem: -1
    })
  }

  renderDropdown() {
    const {
      children,
      appendToBody,
      sheet: { classes: css }
    } = this.props

    const {isDropdownOpened} = this.state

    return (
      <Dropdown
        isOpened={isDropdownOpened && children.length > 0}
        anchor={this.renderInput()}
        padding={false}
        className={css.dropdown}
        appendToBody={appendToBody}
        anchorFullWidth={true}
        autoPositionY={true}
        anchorPointY={'bottom'}
        contentPointY="top"
        closeOnClickOutside={false}
        cachePositionOptions={false}
      >
        <div className={css.suggest}>
          {this.renderItems()}
        </div>
      </Dropdown>
    )
  }

  renderBottom() {
    const {
      hint,
      bottomLinks,
      sheet: { classes: css }
    } = this.props

    if (!hint && !bottomLinks)
      return null

    return (
      <div className={css.bottomWrapper}>
        {hint}
        {bottomLinks}
      </div>
    )
  }

  render() {
    const {
      sheet: { classes: css },
      style,
      className
    } = this.props

    return (
      <OnClickOutside handler={this.closeOnClickOutside}>
        <div
          className={cn(
            css.root,
            className,
          )}
          style={style}
        >
          {this.renderDropdown()}
          {this.renderBottom()}
        </div>
      </OnClickOutside>
    )
  }
}

export default ComplexSearch
