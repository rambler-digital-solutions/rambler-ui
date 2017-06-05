import React, { PureComponent, Children } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Menu from '../Menu/Menu'
import Input from '../Input'
import Dropdown from '../Dropdown'
import { UP, DOWN, ESCAPE } from '../constants/keys'
import { injectSheet } from '../theme'

@injectSheet(theme => ({
  select: {
    position: 'relative'
  },
  readonly: {
    userSelect: 'none'
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
     * Дополнительный CSS-класс дропдауна
     */
    dropdownClassName: PropTypes.string,
    /**
     * Inline-стили дропдауна
     */
    dropdownStyle: PropTypes.object,
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
     * Поиск по элементам
     */
    searchable: PropTypes.bool,
    /**
     * Функция фильтрации
     */
    filter: PropTypes.func,
    /**
     * Доступность инпута
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
    } else if (code === UP || code === DOWN) {
      event.preventDefault()

      this.setState({
        focusedIndex: this.props.value ? null : (code === UP ? -1 : 0)
      })

      if (!this.async && !this.state.isOpened)
        this.open()
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
    if (this.state.isOpened) {
      this.close()
      this.props.onBlur()
    }
  }

  preventBlur = event => {
    event.preventDefault()
  }

  renderInput() {
    const {
      value,
      searchText
    } = this.state

    const {
      style,
      className,
      status,
      id,
      name,
      size,
      icon,
      children,
      searchable,
      autoFocus,
      disabled,
      placeholder
    } = this.props

    const inputValue = value === null ?
      searchText :
      Children.map(children, child => {
        if (!child.type || child.type.displayName !== 'ruiMenuItem')
          throw new Error('Child component should be instance of <MenuItem />')

        if (child.props.value !== value)
          return undefined

        return child.props.text
      })

    return (
      <div className={this.css.select}>
        <input
          type="hidden"
          id={id}
          name={name}
          value={value === null ? '' : value} />
        <Input
          inputRef={el => { this.input = el }}
          style={style}
          className={classnames(!searchable && this.css.readonly, className)}
          size={size}
          status={status}
          iconLeft={icon}
          autoFocus={autoFocus}
          disabled={disabled}
          placeholder={placeholder}
          readOnly={!searchable}
          value={inputValue}
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
      searchText,
      focusedIndex
    } = this.state


    const {
      dropdownClassName,
      dropdownStyle,
      children,
      filter,
      searchable
    } = this.props

    const filteredChildren = !searchable ?
      children :
      Children.map(children, child => {
        if (!child.type || child.type.displayName !== 'ruiMenuItem')
          throw new Error('Child component should be instance of <MenuItem />')

        if (this.async || searchText === '' || filter(searchText, child.props.text))
          return child

        return undefined
      })

    const openDropdown = filteredChildren.length > 0 && isOpened

    return (
      <Dropdown
        isOpened={openDropdown}
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
        onClose={openDropdown ? this.blurDropdown : null}>
        <Menu
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
