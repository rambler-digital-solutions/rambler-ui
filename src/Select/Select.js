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
    '& $arrow': {
      color: theme.field.colors.focus.border
    }
  },
  input: {
    '$isDisabled &': {
      pointerEvents: 'none'
    }
  },
  arrow: {
    width: 20,
    height: 20,
    cursor: 'pointer',
    color: theme.field.colors.default.arrow,
    textAlign: 'center',
    lineHeight: 0,
    '$input:hover &': {
      color: theme.field.colors.hover.arrow
    },
    '$isDisabled &': {
      color: theme.field.colors.disabled.arrow + '!important'
    },
    '&:empty:after': {
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
    },
    '$isOpened &:empty': {
      transform: 'scaleY(-1)'
    },
    '& svg': {
      margin: 'auto',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      position: 'absolute',
      maxWidth: '100%',
      maxHeight: '100%'
    }
  },
  field: {
    '$readonly &': {
      cursor: 'pointer',
      userSelect: 'none'
    },
    '$withSearch &': {
      cursor: 'text'
    }
  },
  options: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none'
  },
  dropdown: {
    '&&': {
      boxShadow: 'none',
      border: `1px solid ${theme.field.colors.default.outline}`,
      borderBottom: 0
    }
  },
  selected: {
    borderBottom: `1px solid ${theme.field.colors.default.outline}`,
    cursor: 'default'
  },
  menu: {
    borderBottom: `1px solid ${theme.field.colors.default.outline}`,
    '$medium &': {
      maxHeight: theme.menu.sizes.medium.height * 4
    },
    '$small &': {
      maxHeight: theme.menu.sizes.small.height * 4
    }
  },
  ...['medium', 'small'].reduce((result, size) => ({
    ...result,
    [size]: {
      '& $options': {
        padding: `${(theme.field.sizes[size].height - theme.tagsInput.height) / 2}px ${theme.input.padding + 1}px`
      },
      '&$withLeftIcon $options': {
        paddingLeft: theme.field.sizes[size].withIconPadding + 1
      },
      '&$withRightIcon $options': {
        paddingRight: theme.field.sizes[size].withIconPadding + 1
      },
      '& $selected': {
        padding: `${(theme.field.sizes[size].height - theme.tagsInput.height) / 2 - 1}px ${theme.input.padding - 1}px`
      }
    }
  }), {}),
  readonly: {},
  withSearch: {},
  isOpened: {},
  withLeftIcon: {},
  withRightIcon: {}
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
     * Дополнительный CSS-класс кнопки со стрелкой
     */
    arrowClassName: PropTypes.string,
    /**
     * Inline-стили кнопки со стрелкой
     */
    arrowStyle: PropTypes.object,
    /**
     * Выбранное значение, по-умолчанию считается, что это примитив. В случае множественного выбора - массив выбранных значений.
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
     * Иконка стрелки
     */
    arrowIcon: PropTypes.node,
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

  componentDidUpdate() {
    if (!this.state.isOpened && this.state.searchText)
      this.setSearchText('')
  }

  setValue(value) {
    if (this.props.multiple) {
      const currValue = Array.isArray(this.value) ? this.value : emptyArr
      const nextValue = Array.isArray(value) ? value : emptyArr
      if (nextValue.length === currValue.length && nextValue.every((item, index) => this.props.valuesEquality(item, currValue[index])))
        return
    } else if (this.props.valuesEquality(value, this.value)) {
      return
    }

    this.setState({
      value
    })

    this.value = value
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
    if (this.props.disabled || this.state.isOpened) return
    this.setState({isOpened: true})
  }

  close = () => {
    if (!this.state.isOpened) return
    this.setState({isOpened: false})
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
      this.input.focus()
    }
  }

  savaInputRef = (ref) => {
    this.input = ref
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
    else if (!this.props.multiple && (code === DELETE || code === BACKSPACE))
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

  Arrow = (props) => {
    const {arrowStyle, arrowClassName, arrowIcon} = this.props
    const {isOpened} = this.state
    return (
      <div
        style={arrowStyle}
        role="button"
        className={classnames(props.className, this.css.arrow, arrowClassName)}
        onMouseDown={this.preventBlurInput}
        onClick={isOpened ? this.close : this.open}
      >
        {arrowIcon}
      </div>
    )
  }

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
    } = omit(this.getInputProps(), ['arrowClassName', 'arrowStyle', 'arrowIcon'])

    const focusedInput = inputFocused || isOpened  
    const inputValue = inputValueRenderer(value)
    const resultInputValue = multiple
      ? searchText
      : onSearch && focusedInput && isOpened ? searchText : (this.isValueEmpty(inputValue) ? '' : inputValue)

    const resultPlaceholder = multiple
      ? !isOpened && Array.isArray(value) && value.length > 0 ? '' : placeholder
      : this.isValueEmpty(inputValue) ? placeholder : (onSearch && focusedInput && searchText === '' ? inputValue : '')

    const readOnly = !onSearch || (onSearch && multiple && !isOpened && Array.isArray(value) && value.length > 0)

    return (
      <Input
        {...other}
        inputStyle={style}
        className={this.css.input}
        iconLeft={icon}
        iconRight={this.showArrow ? createElement(this.Arrow) : undefined}
        onKeyDown={this.keyDown}
        onClick={this.open}
        onFocus={this.focusInput}
        onBlur={this.blurInput}
        onTouchStart={onSearch ? undefined : this.open}
        onTouchEnd={onSearch ? undefined : this.preventSelect}
        inputClassName={classnames(className, this.css.field)}
        autoFocus={autoFocus}
        placeholder={resultPlaceholder}
        readOnly={readOnly}
        value={resultInputValue}
        onChange={this.requestItems}
        inputRef={this.savaInputRef}
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
      size,
      icon
    } = this.props

    const focusedInput = inputFocused || isOpened
    const multipleWithValue = multiple && Array.isArray(value) && value.length > 0
    const options = multipleWithValue ? this.renderSelectedItems() : null

    const resultClassName = classnames(
      this.css.root,
      !disabled && !onSearch && this.css.readonly,
      !disabled && onSearch && this.css.withSearch,
      icon && this.css.withLeftIcon,
      this.showArrow && this.css.withRightIcon,
      size && this.css[size],
      disabled && this.css.isDisabled,
      isOpened && this.css.isOpened,
      focusedInput && this.css.focused
    )

    const dropdownAnchor = (
      <div>
        {this.renderInput()}
        {multipleWithValue && !isOpened &&
          <TagsInput
            className={this.css.options}
            onChange={this.changeValue}
            isExpanded={false}
          >
            {options}
          </TagsInput>
        }
      </div>
    )

    const resultIsOpened = isOpened && (children.length > 0 || (multiple && Array.isArray(value) && value.length > 0))

    return (
      <OnClickOutside handler={this.closeOnClickOutside}>
        <Dropdown
          isOpened={resultIsOpened}
          anchor={dropdownAnchor}
          padding={false}
          style={dropdownStyle}
          className={classnames(dropdownClassName, this.css.dropdown)}
          overlayClassName={resultClassName}
          appendToBody={appendToBody}
          anchorFullWidth={true}
          autoPositionY={false}
          anchorPointY={onSearch ? 'bottom' : 'top'}
          contentPointY="top"
          closeOnClickOutside={false}
          cachePositionOptions={false}
        >
          {multipleWithValue &&
            <TagsInput
              className={this.css.selected}
              onChange={this.changeValue}
              isExpanded={true}
              onMouseDown={this.preventBlurInput}
              size={size}
            >
              {options}
            </TagsInput>
          }
          {children.length > 0 &&
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
          }
        </Dropdown>
      </OnClickOutside>
    )
  }
}
