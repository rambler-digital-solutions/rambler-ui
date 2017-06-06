import React, { PureComponent, Children } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Menu from '../Menu/Menu'
import Input from '../Input'
import Dropdown from '../Dropdown'
import { TAB, UP, DOWN, RIGHT, ESCAPE } from '../constants/keys'
import { injectSheet } from '../theme'

@injectSheet(theme => ({
  select: {
    position: 'relative',
    backgroundColor: '#fff'
  },
  disabled: {
    backgroundColor: '#eee'
  },
  input: {
    backgroundColor: 'transparent !important'
  },
  readonly: {
    cursor: 'pointer !important',
    userSelect: 'none'
  },
  suggest: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    border: '1px solid transparent',
    padding: theme.input.padding,
    color: 'rgba(38, 38, 38, 0.4)',
    fontSize: theme.field.fontSize
  },
  medium: {
    lineHeight: '41px'
  },
  small: {
    lineHeight: '31px'
  },
  withIcon: {
    paddingLeft: theme.field.withIconPadding
  },
  arrow: {
    position: 'absolute',
    top: '50%',
    right: theme.field.iconMargin,
    transform: 'translateY(-50%)',
    fontSize: 0,
    border: 0,
    outline: 0,
    margin: 0,
    padding: 0,
    width: 20,
    height: 20,
    background: 'transparent',
    '&::after': {
      position: 'absolute',
      top: 4,
      left: 6,
      border: '1px solid #ccc',
      borderWidth: '0 0 1px 1px',
      height: 8,
      width: 8,
      outline: 0,
      content: '""',
      pointerEvents: 'none',
      transform: 'rotate(-45deg)'
    }
  }
}))
export default class Select extends PureComponent {

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
     * Дополнительный CSS-класс `<Dropdown />`
     */
    dropdownClassName: PropTypes.string,
    /**
     * Inline-стили `<Dropdown />`
     */
    dropdownStyle: PropTypes.object,
    /**
     * Дополнительный CSS-класс `<Menu />`
     */
    menuClassName: PropTypes.string,
    /**
     * Inline-стили `<Menu />`
     */
    menuStyle: PropTypes.object,
    /**
    * Идентификатор элемента
    */
    id: PropTypes.string,
    /**
    * Имя элемента
    */
    name: PropTypes.string,
    /**
     * Автофокус элемента
     */
    autoFocus: PropTypes.bool,
    /**
     * Выбранное значение
     */
    value: PropTypes.any,
    /**
     * Плэйсхолдер
     */
    placeholder: PropTypes.string,
    /**
     * С поиском по элементам
     */
    searchable: PropTypes.bool,
    /**
     * Функция фильтрации
     */
    filter: PropTypes.func,
    /**
     * Доступность элемента
     */
    disabled: PropTypes.bool,
    /**
     * Опции поля, обязаны быть компонентами типа `<MenuItem />`
     */
    children: PropTypes.node,
    /**
     * Иконка
     */
    icon: PropTypes.node,
    /**
     * Размер
     */
    size: PropTypes.oneOf(['small', 'medium']),
    /**
    * Статусы валидации
    */
    status: PropTypes.oneOf([
      'error',
      'warning',
      'success',
      'filled',
      null
    ]),
    /**
     * Коллбек вызывающийся при фокусе
     */
    onFocus: PropTypes.func,
    /**
     * Коллбек вызывающийся при блюре
     */
    onBlur: PropTypes.func,
    /**
     * Коллбек вызывающийся при изменении состояния
     */
    onChange: PropTypes.func,
    /**
     * Коллбек вызывающийся при изменении поискового запроса
     */
    onSearch: PropTypes.func
  };

  static defaultProps = {
    value: null,
    status: null,
    size: 'medium',
    disabled: false,
    searchable: false,
    filter: (searchText, text) => searchText !== '' && text.indexOf(searchText) > -1,
    onFocus: () => {},
    onBlur: () => {},
    onChange: () => {},
    onSearch: () => {}
  };

  value = null

  state = {
    isOpened: false,
    value: null,
    searchText: '',
    focusedIndex: null
  }

  get css() {
    return this.props.sheet.classes
  }

  componentWillMount() {
    this.async = this.props.children.length === 0
    this.setValue(this.props.value)
  }

  componentWillReceiveProps({ value }) {
    this.setValue(value)
  }

  setValue(value) {
    if (value === this.value)
      return

    this.value = value

    this.setState({
      value,
      searchText: ''
    })
  }

  changeValue = value => {
    this.setValue(value)
    this.props.onChange(value)
    this.close()
    this.input.focus()
  }

  open = () => {
    this.setState({
      isOpened: true
    })
  }

  close = () => {
    this.setState({
      isOpened: false,
      focusedIndex: null
    })
  }

  closeOnEsc = event => {
    if (this.state.isOpened) {
      event.stopPropagation()
      this.close()
      this.input.focus()
    }
  }

  keyDown = event => {
    const code = event.keyCode

    if (code === ESCAPE) {
      this.closeOnEsc(event)
    } else if (code === TAB) {
      this.close()
    } else if (code === UP || code === DOWN) {
      event.preventDefault()

      this.setState({
        focusedIndex: this.props.value ? null : (code === UP ? -1 : 0)
      })

      if (!this.async && !this.state.isOpened)
        this.open()
    } else if (code === RIGHT) {
      const suggest = this.getSuggest()

      if (suggest) {
        event.preventDefault()

        this.setState({
          searchText: suggest
        })

        this.props.onSearch(suggest)
      }
    }
  }

  filter = event => {
    const searchText = event.target.value

    this.setValue(null)

    this.setState({
      searchText,
      focusedIndex: null
    })

    this.props.onChange(null)
    this.props.onSearch(searchText)

    if (searchText)
      setTimeout(this.open, 0)
  }

  focus = event => {
    if (!this.state.isOpened)
      this.props.onFocus(event)
  }

  blur = event => {
    if (!this.state.isOpened)
      this.props.onBlur(event)
  }

  blurDropdown = () => {
    const filteredChildren = this.getFilteredChildren()

    if (this.state.isOpened && filteredChildren.length > 0) {
      this.close()
      this.props.onBlur()
    }
  }

  preventBlur = event => {
    event.preventDefault()
  }

  getLabel() {
    const {
      value,
      searchText
    } = this.state

    if (value === null)
      return searchText

    return Children.map(this.props.children, child => {
      if (!child.type || child.type.displayName !== 'ruiMenuItem')
        throw new Error('Child component should be instance of <MenuItem />')

      if (child.props.value !== value)
        return undefined

      return child.props.text
    })
  }

  getSuggest() {
    const {
      isOpened,
      searchText
    } = this.state

    const filteredChildren = this.getFilteredChildren()

    const suggest = this.props.searchable &&
      isOpened && searchText &&
      filteredChildren.length > 0 && filteredChildren[0].props.text

    return searchText !== suggest && suggest
  }

  getFilteredChildren() {
    const { searchText } = this.state

    const {
      children,
      filter,
      searchable
    } = this.props

    if (searchable)
      return Children.map(children, child => {
        if (!child.type || child.type.displayName !== 'ruiMenuItem')
          throw new Error('Child component should be instance of <MenuItem />')

        if (this.async || searchText === '' || filter(searchText, child.props.text))
          return child

        return undefined
      })

    return children
  }

  renderInput() {
    const { value } = this.state

    const {
      style,
      className,
      status,
      id,
      name,
      size,
      icon,
      searchable,
      autoFocus,
      disabled,
      placeholder
    } = this.props

    const label = this.getLabel()
    const suggest = this.getSuggest()

    return (
      <div className={classnames(this.css.select, disabled && this.css.disabled)}>
        <input
          type="hidden"
          id={id}
          name={name}
          value={value === null ? '' : value} />
        {suggest &&
          <div className={classnames(this.css.suggest, this.css[size], icon && this.css.withIcon)}>
            {suggest}
          </div>
        }
        <Input
          inputRef={el => { this.input = el }}
          style={style}
          className={classnames(this.css.input, !searchable && this.css.readonly, className)}
          size={size}
          status={status}
          iconLeft={icon}
          autoFocus={autoFocus}
          disabled={disabled}
          placeholder={placeholder}
          readOnly={!searchable}
          value={label}
          onFocus={this.focus}
          onClick={!searchable && this.open}
          onBlur={this.blur}
          onChange={this.filter}
          onKeyDown={this.keyDown} />
        {!this.async &&
          <button
            type="button"
            tabIndex="-1"
            className={this.css.arrow}
            onMouseDown={this.preventBlur}
            onClick={this.open} />
        }
      </div>
    )
  }

  render() {
    const {
      value,
      isOpened,
      focusedIndex
    } = this.state

    const {
      dropdownStyle,
      dropdownClassName,
      menuStyle,
      menuClassName,
      searchable
    } = this.props

    const filteredChildren = this.getFilteredChildren()

    return (
      <Dropdown
        isOpened={isOpened && filteredChildren.length > 0}
        anchor={this.renderInput()}
        padding={false}
        style={dropdownStyle}
        className={dropdownClassName}
        appendToBody={true}
        anchorFullWidth={true}
        autoPositionY={true}
        anchorPointY={searchable ? 'bottom' : 'top'}
        contentPointY="top"
        closeOnClickOutside={true}
        cachePositionOptions={false}
        onClose={this.blurDropdown}>
        <Menu
          style={menuStyle}
          className={menuClassName}
          maxHeight={189}
          autoFocus={true}
          focusedIndex={focusedIndex}
          value={value}
          onChange={this.changeValue}
          onEscKeyDown={this.closeOnEsc}>
          {filteredChildren}
        </Menu>
      </Dropdown>
    )
  }

}
