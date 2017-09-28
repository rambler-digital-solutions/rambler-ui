import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import omit from 'lodash/omit'
import Menu from '../Menu/Menu'
import Input from '../Input'
import Dropdown from '../Dropdown'
import OnClickOutside from '../events/OnClickOutside'
import { TAB, UP, DOWN, ESCAPE, BACKSPACE, DELETE } from '../constants/keys'
import { injectSheet } from '../theme'

@injectSheet(theme => ({
  select: {
    position: 'relative',
    backgroundColor: theme.field.colors.default.background,
    '&:hover:not($disabled) $arrow:after': {
      borderColor: theme.field.colors.default.text
    }
  },
  disabled: {
    backgroundColor: theme.field.colors.disabled.background,
    '& $arrow': {
      cursor: 'not-allow'
    }
  },
  focused: {
    '& $arrow:after': {
      borderColor: theme.field.colors.focus.border
    }
  },
  input: {
    backgroundColor: 'transparent !important',
    '& [disabled]': {
      cursor: 'not-allow !important'
    }
  },
  readonly: {
    cursor: 'pointer !important',
    userSelect: 'none'
  },
  withArrow: {
    paddingRight: `${theme.field.sizes.medium.withIconPadding}px !important`
  },
  ...['small', 'medium'].reduce((result, type) => ({
    ...result,
    [type]: {
      lineHeight: theme.field.sizes.medium.height - 4,
      '&$withIcon': {
        paddingLeft: theme.field.sizes.medium.withIconPadding
      },
      '& $arrow': {
        right: theme.field.sizes.medium.iconMargin
      }
    }
  }), {}),
  withIcon: {},
  arrow: {
    position: 'absolute',
    top: '50%',
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
      borderStyle: 'solid',
      borderColor: theme.field.colors.default.arrow,
      borderWidth: '0 0 1px 1px',
      height: 8,
      width: 8,
      outline: 0,
      content: '""',
      pointerEvents: 'none',
      transform: 'rotate(-45deg)'
    }
  },
  overlay: {
    display: 'block !important'
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

  requestItems = (event) => {
    this.setState({
      isOpened: true
    })

    this.setSearchText(event.target.value)
  }

  changeValue = (value) => {
    this.setState({
      isOpened: false
    })

    this.setValue(value)
    this.props.onChange(value)
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
      })
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
      disabled,
      icon,
      size,
      status,
      onSearch,
      ...other
    } = this.getInputProps()

    const focuseInput = inputFocused || isOpened
    const inputValue = inputValueRenderer(value)
    const resultPlaceholder = this.isValueEmpty(inputValue) ? placeholder : (onSearch && focuseInput && searchText === '' ? inputValue : '')

    return (
      <div className={classnames(this.css.select, this.css[size], disabled && this.css.disabled, focuseInput && this.css.focused)}>
        <Input
          {...other}
          inputRef={(el) => { this.input = el }}
          inputStyle={style}
          className={this.css.input}
          inputClassName={classnames(!onSearch && this.css.readonly, this.showArrow && this.css.withArrow, className)}
          size={size}
          status={status}
          iconLeft={icon}
          autoFocus={autoFocus}
          disabled={disabled}
          placeholder={resultPlaceholder}
          readOnly={!onSearch}
          value={onSearch && focuseInput && isOpened ? searchText : (this.isValueEmpty(inputValue) ? '' : inputValue)}
          onFocus={this.focusInput}
          onClick={this.open}
          onTouchStart={onSearch ? null : this.open}
          onTouchEnd={onSearch ? null : this.preventSelect}
          onBlur={this.blurInput}
          onChange={this.requestItems}
          onKeyDown={this.keyDown} />
        {this.showArrow &&
          <button
            type="button"
            tabIndex="-1"
            className={this.css.arrow}
            onMouseDown={this.preventBlurInput}
            onClick={this.open} />
        }
      </div>
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
      appendToBody
    } = this.props

    return (
      <Dropdown
        isOpened={isOpened && children.length > 0}
        anchor={this.renderInput()}
        padding={false}
        style={dropdownStyle}
        className={dropdownClassName}
        overlayClassName={this.css.overlay}
        appendToBody={appendToBody}
        anchorFullWidth={true}
        autoPositionY={true}
        anchorPointY={onSearch ? 'bottom' : 'top'}
        contentPointY="top"
        closeOnClickOutside={false}
        cachePositionOptions={false}>
        <OnClickOutside handler={this.closeOnClickOutside}>
          <Menu
            style={menuStyle}
            className={menuClassName}
            maxHeight={189}
            autoFocus={!inputFocused}
            value={value}
            valuesEquality={valuesEquality}
            onChange={this.changeValue}
            onMouseDown={this.preventBlurInput}
            onEscKeyDown={this.closeOnEsc}>
            {children}
          </Menu>
        </OnClickOutside>
      </Dropdown>
    )
  }

}
