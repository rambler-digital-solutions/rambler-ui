import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Menu from '../Menu/Menu'
import Input from '../Input'
import Dropdown from '../Dropdown'
import { TAB, UP, DOWN, ESCAPE } from '../constants/keys'
import { injectSheet } from '../theme'

@injectSheet(theme => ({
  select: {
    position: 'relative',
    backgroundColor: '#fff'
  },
  disabled: {
    backgroundColor: '#eee',
    '& $arrow': {
      cursor: 'default'
    }
  },
  input: {
    backgroundColor: 'transparent !important',
    '&:disabled': {
      cursor: 'default !important'
    }
  },
  readonly: {
    cursor: 'pointer !important',
    userSelect: 'none'
  },
  current: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    border: '1px solid transparent',
    padding: theme.input.padding,
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
    cursor: 'pointer',
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
     * Выбранное значение, по-умолчанию считается, что это примитив
     */
    value: PropTypes.any,
    /**
     * Проверка равенства значений, задается, если значением является объект
     */
    valuesEquality: PropTypes.func,
    /**
     * Функция рендера выбранного значения в поле, задается, если значением является объект
     */
    labelRenderer: PropTypes.func,
    /**
     * Плэйсхолдер
     */
    placeholder: PropTypes.string,
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
    valuesEquality: (a, b) => a === b,
    labelRenderer: value => value,
    onFocus: () => {},
    onBlur: () => {},
    onChange: () => {}
  };

  value = null

  state = {
    isOpened: false,
    isFocused: false,
    value: null,
    searchText: '',
    focusedIndex: null
  }

  get css() {
    return this.props.sheet.classes
  }

  componentWillMount() {
    this.showArrow = this.props.children.length > 0
    this.setValue(this.props.value)
  }

  componentWillReceiveProps({ value }) {
    this.setValue(value)
  }

  setValue(value) {
    if (this.props.valuesEquality(value, this.value))
      return

    this.setState({
      value
    })

    this.value = value
    this.setSearchText('')
  }

  setSearchText(searchText) {
    this.setState({
      searchText
    })

    if (this.props.onSearch)
      this.props.onSearch(searchText)
  }

  setFocusIndex(index) {
    this.setState({
      focusedIndex: index
    })
  }

  changeValue = value => {
    this.setValue(value)
    this.props.onChange(value)
    this.close()
    this.input.focus()
  }

  open = () => {
    if (!this.props.disabled)
      this.setState({
        isOpened: true
      })
  }

  openOnAction = () => {
    this.open()
    this.keepFocus = true

    if (this.props.onSearch && this.state.value !== null)
      setTimeout(() => {
        this.setFocusIndex(null)
        this.input.focus()
      }, 0)
  }

  close = () => {
    this.setFocusIndex(null)

    this.setState({
      isOpened: false
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
      const {
        value,
        isOpened
      } = this.state

      event.preventDefault()
      this.setFocusIndex(!isOpened && value !== null ? null : (code === UP ? -1 : 0))

      if (!isOpened)
        this.open()
    }
  }

  filter = event => {
    this.setSearchText(event.target.value)
    setTimeout(this.openOnAction, 0)
  }

  focus = event => {
    this.setState({
      isFocused: true
    })

    if (!this.state.isOpened)
      this.props.onFocus(event)
  }

  blur = event => {
    if (!this.keepFocus)
      this.setState({
        isFocused: false
      })

    this.setSearchText('')
    this.props.onBlur(event)
  }

  blurInput = event => {
    if (!this.state.isOpened)
      this.blur(event)

    this.keepFocus = false
  }

  blurDropdown = event => {
    if (this.state.isOpened && this.props.children.length > 0) {
      this.close()
      this.blur(event)
    }

    this.keepFocus = false
  }

  preventBlur = event => {
    event.preventDefault()
  }

  renderInput() {
    const {
      isFocused,
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
      autoFocus,
      disabled,
      placeholder,
      labelRenderer,
      onSearch
    } = this.props

    const label = labelRenderer(value)

    return (
      <div className={classnames(this.css.select, disabled && this.css.disabled)}>
        <input
          type="hidden"
          id={id}
          name={name}
          value={value === null ? '' : value} />
        {onSearch && isFocused && searchText === '' &&
          <div className={classnames(this.css.current, this.css[size], icon && this.css.withIcon)}>
            {label}
          </div>
        }
        <Input
          inputRef={el => { this.input = el }}
          inputStyle={style}
          className={classnames(this.css.input, !onSearch && this.css.readonly, className)}
          size={size}
          status={status}
          iconLeft={icon}
          autoFocus={autoFocus}
          disabled={disabled}
          placeholder={label === null ? placeholder : ''}
          readOnly={!onSearch}
          value={onSearch && isFocused ? searchText : (label === null ? '' : label)}
          onFocus={this.focus}
          onClick={this.openOnAction}
          onBlur={this.blurInput}
          onChange={this.filter}
          onKeyDown={this.keyDown} />
        {this.showArrow &&
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
      valuesEquality,
      onSearch,
      children
    } = this.props

    return (
      <Dropdown
        isOpened={isOpened && children.length > 0}
        anchor={this.renderInput()}
        padding={false}
        style={dropdownStyle}
        className={dropdownClassName}
        appendToBody={true}
        anchorFullWidth={true}
        autoPositionY={true}
        anchorPointY={onSearch ? 'bottom' : 'top'}
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
          valuesEquality={valuesEquality}
          onChange={this.changeValue}
          onEscKeyDown={this.closeOnEsc}>
          {children}
        </Menu>
      </Dropdown>
    )
  }

}
