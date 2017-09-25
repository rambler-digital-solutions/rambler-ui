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
  inputWrapper: {
    marginRight: theme.search.button.width,
    height: theme.search.height,
    position: 'relative'
  },
  bottomWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '15px 0',
    fontSize: '12px'
  },
  division: {
    height: '30px',
    padding: '0 12px',
    lineHeight: '30px',
    fontSize: '11px',
    textTransform: 'uppercase',
    fontWeight: '500',
    borderRadius: '1px',
    backgroundColor: '#f5f7f8',
    letterSpacing: '1.3px',
    position: 'absolute',
    top: '5px',
    left: '5px',
    cursor: 'pointer'
  },
  input: {
    border: theme.search.input.border,
    borderRight: 'none',
    padding: '10px 30px 10px 10px',
    fontSize: theme.search.fontSize,
    lineHeight: '1.43',
    color: theme.search.color,
    width: '100%',
    height: theme.search.height,
    outline: 'none'
  },
  searchButton: {
    position: 'absolute',
    right: `-${theme.search.button.width}`,
    top: 0,
    flexShrink: 0,
    width: theme.search.button.width,
    height: theme.search.height,
    lineHeight: theme.search.height,

    '&:focus, &:active': {
      '&:after': {
        display: 'none'
      }
    }
  },
  visible: {},
  clear: {
    position: 'absolute',
    right: '15px',
    top: '50%',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    opacity: 0,

    '&$visible': {
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
    value: ''
  }

  componentDidMount() {
    if (this.divisionNode) {
      const styles = getComputedStyle(this.inputNode)
      const newPadding = parseInt(styles.paddingLeft || 0, 10) + this.divisionNode.offsetWidth
      this.inputNode.style.paddingLeft = `${newPadding}px`
    }
  }

  componentWillUpdate(nextProps) {
    if (nextProps.value && nextProps.value !== this.props.value) {
      this.setState({value: nextProps.value})
      if (this.inputNode) this.inputNode.value = nextProps.value
    }
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
      const nextItem = highlightedItem === children.length ? -1 : highlightedItem + 1
      this.setState({selectedItem: nextItem, highlightedItem: nextItem})
      break
    //eslint-disable-next-line
    case 'ArrowUp':
      const prevItem = highlightedItem === 0 ? children.length : highlightedItem - 1
      this.setState({selectedItem: prevItem, highlightedItem: prevItem})
      break
    case 'Enter':
      this.props.onPressEnter(this.state.value)
      break
    case 'Escape':
      this.setState({isDropdownOpened: false})
      break
    default:
    }
  }

  onFocus = () => {
    this.setState({isDropdownOpened: true})
    this.props.onFocus()
  }

  onSearchInput = (e) => {
    const value = e.target.value.trim()
    const newState = {value}
    if (!this.state.isDropdownOpened)
      newState.isDropdownOpened = true
    this.setState(newState)
    this.props.onSearch(value)
  }

  onBlur = () => {
    this.props.onBlur()
  }

  setNode = name => node => {
    this[`${name}Node`] = node
  }

  clearForm = () => {
    this.setState({value: ''})
    this.inputNode.value = ''
    this.setState({isDropdownOpened: false})
  }

  renderInput = () => {
    const {
      division,
      placeholder,
      sheet: { classes: css }
    } = omit(this.props, 'theme', 'onChange')

    return (
      <div
        className={css.inputWrapper}
      >
        {division &&
          <div
            className={css.division}
            ref={this.setNode('division')}
          >{division}
          </div>
        }
        <input
          type="text"
          onChange={this.onSearchInput}
          onKeyDown={this.onKeyDown}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          defaultValue={this.props.value}
          className={css.input}
          placeholder={placeholder}
          ref={this.setNode('input')}
        />
        <ClearIcon
          className={cn(
            css.clear,
            {[css.visible]: this.state.value !== ''}
          )}
          size={16}
          color="#B8B8B9"
          onClick = {this.clearForm}
        ></ClearIcon>
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
        color="#ffffff"
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
    this.setState({isDropdownOpened: false})
  }

  renderDropdown() {
    const {
      children,
      sheet: { classes: css }
    } = this.props

    const {isDropdownOpened} = this.state

    return (
      <Dropdown
        isOpened={isDropdownOpened && children.length > 0}
        anchor={this.renderInput()}
        padding={false}
        className={css.dropdown}
        appendToBody={true}
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
