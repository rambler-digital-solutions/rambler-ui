import React, { PureComponent, createElement } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import omit from 'lodash/omit'
import Menu from '../Menu/Menu'
import Input from '../Input'
import { TagsInput, TagsInputItem } from '../TagsInput'
import Dropdown from '../Dropdown'
import OnClickOutside from '../events/OnClickOutside'
import { TAB, UP, DOWN, ESCAPE, BACKSPACE, DELETE } from '../constants/keys'
import { injectSheet } from '../theme'

const emptyArr = []

@injectSheet(theme => ({
  root: {
    '&&': {
      display: 'block'
    }
  },
  isDisabled: {
    cursor: 'not-allowed'
  },
  focused: {
    '& $arrow:after': {
      borderColor: theme.field.colors.focus.border
    }
  },
  input: {
    '$isDisabled &': {
      pointerEvents: 'none'
    }
  },
  readonly: {
    cursor: 'pointer !important',
    userSelect: 'none'
  },
  arrow: {
    width: 20,
    height: 20,
    cursor: 'pointer',
    color: theme.field.colors.default.arrow,
    '$input:hover &': {
      color: theme.field.colors.hover.arrow
    },
    '$isDisabled &': {
      color: theme.field.colors.disabled.arrow + '!important'
    },
    '$isOpened &': {
      transform: 'scaleY(-1)'
    },
    '&:after': {
      position: 'absolute',
      top: 4,
      left: 6,
      borderStyle: 'solid',
      borderWidth: '0 0 1px 1px',
      height: 8,
      width: 8,
      content: '""',
      pointerEvents: 'none',
      transform: 'rotate(-45deg)'
    }
  },
  dropdown: {
    '&&': {
      display: 'flex',
      flexDirection: 'column',
      boxShadow: 'none'
    }
  },
  selected: {
    flex: 'none'
  },
  menu: {
    flex: 'none',
    border: `1px solid ${theme.field.colors.default.outline}`,
    '$selected + &': {
      borderTop: 0
    },
    '$medium &': {
      maxHeight: theme.menu.sizes.medium.height * 4
    },
    '$small &': {
      maxHeight: theme.menu.sizes.small.height * 4
    }
  },
  small: {},
  medium: {},
  isOpened: {}
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
     * Множественный выбор
     */
    multiple: PropTypes.bool,
    /**
     * Выбранное значение, по-умолчанию считается, что это примитив
     */
    value: PropTypes.any,
    /**
     * Проверка равенства значений, задается, если
     * значением является объект. Ожидается, что возвращает `Boolean`
     */
    valuesEquality: PropTypes.func,
    /**
     * Функция рендера выбранного значения в поле, задается, если
     * значением является объект. Ожидается, что возвращает `String`
     */
    inputValueRenderer: PropTypes.func,
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
     * Вставлять ли dropdown внутри body
     */
    appendToBody: PropTypes.bool,
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
    multiple: false,
    status: null,
    size: 'medium',
    disabled: false,
    appendToBody: false,
    valuesEquality: (a, b) => a === b,
    inputValueRenderer: value => value,
    onFocus: () => {},
    onBlur: () => {},
    onChange: () => {}
  };

  get css() {
    return this.props.sheet.classes
  }

  constructor(props) {
    super(props)

    this.state = {
      isOpened: false,
      inputFocused: false,
      value: props.value,
      searchText: ''
    }

    this.value = props.value
    this.showArrow = props.children.length > 0
  }

  componentWillReceiveProps({ value }) {
    this.setValue(value)
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.onSearch) {
      if (!prevState.isOpened && this.state.isOpened)
        this.input.focus()
      if (prevState.isOpened && !this.state.isOpened && this.state.searchText)
        this.setSearchText('')
    }
  }

  setValue(value) {
    if (!this.props.multiple && this.props.valuesEquality(value, this.value))
      return

    this.setState({
      value
    })

    this.value = value

    if (!this.props.multiple)
      this.setSearchText('')
  }

  setSearchText(searchText) {
    this.setState({
      searchText
    })

    if (this.props.onSearch)
      this.props.onSearch(searchText)
  }

  requestItems = (event) => {
    this.setState({
      isOpened: true
    })
    this.setSearchText(event.target.value)
  }

  changeValue = (value) => {
    if (!this.props.multiple)
      this.setState({isOpened: false})
    this.setValue(value)
    this.props.onChange(value)
    if (!this.props.multiple)
      this.input.focus()
  }

  focusInput = (event) => {
    this.setState({
      inputFocused: true
    })

    if (!this.state.isOpened)
      this.props.onFocus(event)
  }

  blurInput = (event) => {
    if (this.state.inputFocused) {
      this.setState({
        isOpened: false,
        inputFocused: false
      })
      this.setSearchText('')
      this.props.onBlur(event)
    }
  }

  preventBlurInput = (event) => {
    event.preventDefault()
  }

  preventSelect = (event) => {
    event.preventDefault()
    event.stopPropagation()
  }

  open = () => {
    if (!this.props.disabled && !this.state.isOpened)
      this.setState({
        isOpened: true
      }, )
  }

  openOnArrow(event) {
    event.preventDefault()

    if (!this.state.isOpened)
      this.setState({
        isOpened: true
      })

    setTimeout(() => {
      this.setState({
        inputFocused: false
      })
    }, 0)
  }

  clearValueOnBackspace() {
    const {
      searchText,
      inputFocused
    } = this.state

    if (this.props.onSearch && inputFocused && searchText === '')
      this.changeValue(null)
  }

  closeOnEsc = (event) => {
    if (this.state.isOpened) {
      event.stopPropagation()

      this.setState({
        isOpened: false
      })
      if (!this.props.multiple)
        this.input.focus()
    }
  }

  closeOnClickOutside = (event) => {
    if (this.state.isOpened && !this.state.inputFocused) {
      this.setState({
        isOpened: false,
        inputFocused: false
      })

      this.props.onBlur(event)
    }
  }

  keyDown = (event) => {
    const code = event.keyCode

    if (code === ESCAPE)
      this.closeOnEsc(event)
    else if (code === TAB)
      this.setState({
        isOpened: false
      })
    else if (code === UP || code === DOWN)
      this.openOnArrow(event)
    else if (code === DELETE || code === BACKSPACE)
      this.clearValueOnBackspace(event)
  }

  isValueEmpty(value) {
    return value == null || value === ''
  }

  getInputProps() {
    return omit(this.props, [
      'dropdownClassName',
      'dropdownStyle',
      'menuClassName',
      'menuStyle',
      'valuesEquality',
      'children',
      'value',
      'appendToBody',
      'sheet',
      'theme',
      'onFocus',
      'onBlur',
      'onChange'
    ])
  }

  Arrow = (props) => (
    <div
      role="button"
      className={classnames(props.className, this.css.arrow)}
      onMouseDown={this.preventBlurInput}
      onClick={this.open} />
  )

  renderSelectedItems() {
    const selected = Array.isArray(this.props.value) ? this.props.value : emptyArr
    return selected.map(item => (
      <TagsInputItem value={item}>
        {this.props.inputValueRenderer(item)}
      </TagsInputItem>
    ))
  }

  renderInput() {
    const {
      value,
      searchText,
      isOpened,
      inputFocused
    } = this.state

    const {
      className,
      style,
      autoFocus,
      inputValueRenderer,
      placeholder,
      icon,
      multiple,
      onSearch,
      ...other
    } = this.getInputProps()

    let inputProps = {
      ...other,
      inputStyle: style,
      className: this.css.input,
      iconLeft: icon,
      iconRight: this.showArrow ? createElement(this.Arrow) : null,
      onKeyDown: this.keyDown,
      onClick: this.open,
      onFocus: this.focusInput,
      onBlur: this.blurInput,
      onTouchStart: onSearch ? null : this.open,
      onTouchEnd: onSearch ? null : this.preventSelect
    }

    if (multiple && !(onSearch && isOpened))
      return (
        <TagsInput
          {...inputProps}
          placeholder={placeholder}
          onChange={this.changeValue}
          tabIndex="0"
        >
          {this.renderSelectedItems()}
        </TagsInput>
      )

    const focuseInput = inputFocused || isOpened  
    const inputValue = inputValueRenderer(value)
    const resultInputValue = multiple
      ? searchText
      : onSearch && focuseInput && isOpened ? searchText : (this.isValueEmpty(inputValue) ? '' : inputValue)
    const resultPlaceholder = multiple
      ? placeholder
      : this.isValueEmpty(inputValue) ? placeholder : (onSearch && focuseInput && searchText === '' ? inputValue : '')

    return (
      <Input
        {...inputProps}
        inputRef={el => { this.input = el }}
        inputClassName={classnames(className, !onSearch && this.css.readonly)}
        autoFocus={autoFocus}
        placeholder={resultPlaceholder}
        readOnly={!onSearch}
        value={resultInputValue}
        onChange={this.requestItems}
      />
    )
  }

  render() {
    const {
      value,
      isOpened,
      inputFocused
    } = this.state

    const {
      dropdownStyle,
      dropdownClassName,
      menuStyle,
      menuClassName,
      valuesEquality,
      onSearch,
      children,
      appendToBody,
      multiple,
      disabled,
      size
    } = this.props

    const focuseInput = inputFocused || isOpened

    return (
      <OnClickOutside handler={this.closeOnClickOutside}>
        <Dropdown
          isOpened={isOpened && children.length > 0}
          anchor={this.renderInput()}
          padding={false}
          style={dropdownStyle}
          className={classnames(dropdownClassName, this.css.dropdown)}
          overlayClassName={classnames(this.css.root, size && this.css[size], disabled && this.css.isDisabled, isOpened && this.css.isOpened, focuseInput && this.css.focused)}
          appendToBody={appendToBody}
          anchorFullWidth={true}
          autoPositionY={true}
          anchorPointY={onSearch ? 'bottom' : 'top'}
          contentPointY="top"
          closeOnClickOutside={false}
          cachePositionOptions={false}
        >
          {multiple && Array.isArray(value) && value.length > 0 &&
            <TagsInput className={this.css.selected} onChange={this.changeValue} isOpened={true}>
              {this.renderSelectedItems()}
            </TagsInput>
          }
          <Menu
            style={menuStyle}
            className={classnames(menuClassName, this.css.menu)}
            autoFocus={!inputFocused}
            value={multiple ? Array.isArray(value) ? value : emptyArr : value}
            valuesEquality={valuesEquality}
            onChange={this.changeValue}
            onMouseDown={this.preventBlurInput}
            onEscKeyDown={this.closeOnEsc}
            multiple={multiple}
            size={size}
          >
            {children}
          </Menu>
        </Dropdown>
      </OnClickOutside>
    )
  }
}
