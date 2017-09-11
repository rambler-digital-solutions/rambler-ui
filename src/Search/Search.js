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

@injectSheet(theme => ({
  root: {
    fontFamily: theme.fontFamily,
    fontSize: theme.search.fontSize,
    width: '100%',
    maxWidth: '765px'
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
    border: 'solid 2px #315efb',
    borderRight: 'none',
    padding: '10px 30px 10px 10px',
    fontSize: theme.search.fontSize,
    lineHeight: '1.43',
    color: '#262626',
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
    lineHeight: theme.search.height
  },
  clear: {
    position: 'absolute',
    right: '15px',
    top: '50%',
    transform: 'translateY(-50%)',
    cursor: 'pointer'
  },
  suggest: {
    width: '100%',
    background: 'white',
    boxShadow: '1px 2px 5px 0 rgba(102, 116, 166, 0.15)'
  }
}))
class Search extends React.Component {
  static propTypes = {
    /**
    * Переопределение стандартных стилей компонента Search
    */
    style: pt.object,
    /**
    * css-класс компонента
    */
    className: pt.string,
    /**
    * текущий поисковый запрос
    */
    value: pt.string,
    /**
    /* Выбранный SuggestItem
    */
    selectedItem: pt.any,
    /**
    * кнопка поиска
    */
    searchButton: pt.node,
    /**
    * имя раздела, по которому ищем
    */
    division: pt.string,
    /**
    * надо ли показывать имя раздела, по которому ищем
    */
    showDivision: pt.bool,
    /**
    * плейсхолдер поискового инпута
    */
    placeholder: pt.string,
    /**
    * коллбек на изменение поискового запроса
    */
    onSearch: pt.func,
    /**
    * коллбек на фокус поискового инпута
    */
    onFocus: pt.func,
    /**
    * коллбек на блур поискового инпута
    */
    onBlur: pt.func,
    /**
    * коллбек на выбор поискового запроса через стрелки
    */
    onSelectItem: pt.func,
    /**
    * коллбек на удаление suggest-item
    */
    onRemoveItem: pt.func,
    /**
    * коллбек на нажатие на кнопку поиска или нажатие на Enter
    */
    onSubmit: pt.func,
    /**
    * Поисковая подсказка
    */
    hint: pt.node,
    /**
    * ссы
    */
    bottomLinks: pt.node
  }

  static defaultProps = {
    value: '',
    selectedItem: null,
    searchButton: 'Поиск',
    division: 'Поиск',
    showDivision: true,
    placeholder: '',
    onSelectItem: () => {},
    onSubmit: () => {}
  }

  state = {
    isDropdownOpened: false,
    selectedItem: 0
  }

  componentDidMount() {
    if (this.divisionNode) {
      const styles = getComputedStyle(this.inputNode)
      const newPadding = parseInt(styles.paddingLeft || 0, 10) + this.divisionNode.offsetWidth
      this.inputNode.style.paddingLeft = `${newPadding}px`
    }
  }

  submitSearch = () => {
    this.props.onSubmit(this.inputNode.value)
  }

  onKeyDown = (e) => {
    const {
      selectedItem
    } = this.state
    const {
      children,
      onSelectItem
    } = this.props
    switch (e.key) {
    //eslint-disable-next-line
    case 'ArrowDown':
      const nextItem = selectedItem === children.length ? selectedItem + 1 : 0
      this.setState({selectedItem: nextItem})
      onSelectItem(nextItem)
      break
    //eslint-disable-next-line
    case 'ArrowUp':
      const prevItem = selectedItem === 0 ? children.length : selectedItem - 1
      this.setState({selectedItem: prevItem})
      onSelectItem(prevItem)
      break
    case 'Enter':
      this.props.onSubmit(this.inputNode.value)
      break
    default:
      return true

    }
  }

  onFocus = () => {
    this.setState({isDropdownOpened: true})
  }

  onSearchInput = () => {
    const value = this.inputNode.value.trim()
    this.props.onSearch && this.props.onSearch(value)
  }

  setNode(name) {
    const that = this
    return function (node) {
      that[`${name}Node`] = node
    }
  }

  clearForm = () => {
    this.inputNode.value = ''
    this.setState({isDropdownOpened: false})
    this.onSearchInput()
  }

  renderInput() {
    const {
      // children,
      division,
      showDivision,
      value,
      sheet: { classes: css }
    } = omit(this.props, 'theme', 'value', 'onChange')

    return (
      <div
        className={css.inputWrapper}
      >
        {showDivision &&
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
          defaultValue={value}
          className={css.input}
          ref={this.setNode('input')}
        />
        <ClearIcon
          className={css.clear}
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
      onSubmit,
      onRemoveItem
    } = this.props

    return React.Children.map(children, (child, index) => {
      const props = {
        onClick: onSubmit,
        isHighlighted: index + 1 === this.state.selectedItem,
        onRemoveClick: onRemoveItem
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
        overlayClassName={css.overlay}
        appendToBody={true}
        anchorFullWidth={true}
        autoPositionY={true}
        anchorPointY={'bottom'}
        contentPointY="top"
        closeOnClickOutside={false}
        cachePositionOptions={false}>
        <OnClickOutside handler={this.closeOnClickOutside}>
          <div className={css.suggest}>
            {this.renderItems()}
          </div>
        </OnClickOutside>
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
    )
  }
}

export default Search
