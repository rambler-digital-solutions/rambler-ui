import React, { PureComponent, createElement, cloneElement } from 'react'
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
import { isolateMixin, placeholderMixin } from '../style/mixins'

const emptyArr = []

const absolutePosition = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0
}

@injectSheet(theme => ({
  root: {
    '&&': {
      ...isolateMixin,
      display: 'block'
    },
    '&:hover, &$isFocused': {
      '& $arrow': {
        color: theme.field.colors.focus.arrow
      }
    },
    '&$isDisabled': {
      cursor: 'not-allowed',
      '& $input': {
        pointerEvents: 'none'
      },
      '& $arrow': {
        color: theme.field.colors.disabled.arrow + '!important',
        pointerEvents: 'none'
      }
    },
    ...placeholderMixin('&$isReadonly:not($isDisabled) $input input', {
      opacity: 1,
      color: theme.field.colors.default.text
    }),
    ...placeholderMixin('&:not($isFocused):not($isDisabled) $input input', {
      opacity: 1,
      color: theme.field.colors.default.text
    })
  },
  arrow: {
    cursor: 'pointer',
    textAlign: 'center',
    lineHeight: 0,
    color: theme.field.colors.default.arrow,
    '&:empty': {
      '&:after': {
        height: 8,
        width: 8,
        position: 'absolute',
        borderStyle: 'solid',
        borderWidth: '0 0 1px 1px',
        content: '""',
        pointerEvents: 'none',
        transform: 'rotate(-45deg) translateY(50%)'
      }
    },
    '& svg': {
      extend: absolutePosition,
      margin: 'auto',
      maxWidth: '100%',
      maxHeight: '100%'
    }
  },
  input: {
    '$withCustom &': absolutePosition
  },
  field: {
    '$isReadonly &': {
      cursor: 'pointer',
      userSelect: 'none'
    },
    '$withSearch &': {
      cursor: 'text'
    },
    '$withCustom &&': {
      extend: absolutePosition,
      height: '100%'
    }
  },
  withCustom: {
    position: 'relative'
  },
  custom: {
    position: 'relative',
    pointerEvents: 'none'
  },
  options: {
    composes: '$custom'
  },
  dropdown: {
    '&&': {
      boxShadow: 'none',
      border: `1px solid ${theme.field.colors.default.outline}`,
      borderBottom: 0,
      '&$isMultipleDropdown': {
        transitionProperty: 'opacity',
        top: '0 !important'
      }
    }
  },
  selected: {
    borderBottom: `1px solid ${theme.field.colors.default.outline}`,
    cursor: 'default'
  },
  menu: {
    borderBottom: `1px solid ${theme.field.colors.default.outline}`,
    '$medium &': {
      maxHeight: theme.menu.sizes.medium.height * 4 + 2
    },
    '$small &': {
      maxHeight: theme.menu.sizes.small.height * 4 + 2
    }
  },
  ...['medium', 'small'].reduce((result, size) => ({
    ...result,
    [size]: {
      '& $withCustom': {
        minHeight: theme.field.sizes[size].height
      },
      '& $arrow': {
        '&:before': {
          display: 'block',
          content: '" "',
          position: 'absolute',
          top: -Math.floor((theme.field.sizes[size].height - theme.field.sizes[size].icon) / 2),
          bottom: -Math.floor((theme.field.sizes[size].height - theme.field.sizes[size].icon) / 2),
          left: -10,
          right: -10
        },
        '&:empty:after': {
          top: size === 'small' ? -2 : -1,
          left:  size === 'small' ? 1 : 1
        }
      },
      '&$isOpened $arrow:empty:after': {
        transform: 'rotate(45deg) translateY(-50%) scaleY(-1)',
        top: size === 'small' ? 9 : 9,
        left:  size === 'small' ? 1 : 1
      },
      '& $custom': {
        paddingRight: theme.input.sizes[size].padding + 1,
        paddingLeft: theme.input.sizes[size].padding + 1
      },
      '&$withLeftIcon $custom': {
        paddingLeft: theme.field.sizes[size].withIconPadding + 1
      },
      '&$withRightIcon $custom': {
        paddingRight: theme.field.sizes[size].withIconPadding + 1
      },
      '& $options': {
        paddingTop: (theme.field.sizes[size].height - theme.tagsInput.height) / 2,
        paddingBottom:  (theme.field.sizes[size].height - theme.tagsInput.height) / 2
      },
      '& $selected': {
        padding: `${(theme.field.sizes[size].height - theme.tagsInput.height) / 2 - 1}px ${theme.input.sizes[size].padding - 1}px`
      }
    }
  }), {}),
  isFocused: {},
  isOpened: {},
  isReadonly: {},
  isDisabled: {},
  isMultipleDropdown: {},
  withSearch: {},
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
     * Разновидность инпута
     */
    variation: PropTypes.oneOf(['regular', 'awesome', 'promo']),
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
    onSearch: PropTypes.func,
    /**
     * Функция рендера кастомного элемента над input, получает `value` в качестве значения.
     * Должна возвращать `reactElement`.
     */
    customElementRenderer: PropTypes.func,
    /**
     * Дополнительный CSS-класс контейнера кастомного элемента и `<Input>`
     */
    containerClassName: PropTypes.string,
    /**
     * Inline-стили контейнера кастомного элемента и `<Input>`
     */
    containerStyle: PropTypes.obj
  };

  static defaultProps = {
    value: null,
    multiple: false,
    status: null,
    size: 'medium',
    variation: 'awesome',
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

  get showArrow() {
    const {children} = this.props
    return children && children.length > 0
  }

  constructor(props) {
    super(props)

    this.state = {
      isOpened: false,
      inputFocused: false,
      value: props.value,
      searchText: ''
    }
  }

  componentWillReceiveProps({ value }) {
    this.setValue(value)
  }

  handleDropdownClose = () => {
    if (this.state.isOpened) return
    this.setSearchText('')
  }

  setValue(value) {
    const {valuesEquality} = this.props
    const oldValue = this.state.value
    if (this.props.multiple) {
      const currValue = Array.isArray(oldValue) ? oldValue : emptyArr
      const nextValue = Array.isArray(value) ? value : emptyArr
      if (nextValue.length === currValue.length && nextValue.every((item, index) => valuesEquality(item, currValue[index])))
        return
    } else if (valuesEquality(value, oldValue)) {
      return
    }
    this.setState({
      value
    })
  }

  setSearchText(searchText) {
    if (this.state.searchText === searchText) return

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
    this.input.focus()
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

  saveInputRef = (ref) => {
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
    else if (!this.props.multiple && !this.props.customElementRenderer && (code === DELETE || code === BACKSPACE))
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
      'onFocus',
      'onBlur',
      'onChange',
      'inputValueRenderer',
      'customElementRenderer',
      'multiple',
      'theme'
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
      placeholder,
      icon,
      onSearch,
      ...other
    } = omit(this.getInputProps(), ['arrowClassName', 'arrowStyle', 'arrowIcon', 'containerStyle'])

    const {
      multiple,
      inputValueRenderer,
      customElementRenderer
    } = this.props

    const focusedInput = inputFocused || isOpened

    let resultInputValue = ''
    if (onSearch && focusedInput && isOpened) {
      resultInputValue = searchText
    } else if (!multiple && !customElementRenderer) {
      const inputValue = inputValueRenderer(value)
      resultInputValue = this.isValueEmpty(inputValue) ? '' : inputValue
    }

    let resultPlaceholder = ''
    if (customElementRenderer) {
      if (this.isValueEmpty(value) || (isOpened && !!onSearch)) resultPlaceholder = placeholder
    } else if (multiple) {
      if (isOpened || !Array.isArray(value) || value.length === 0 ) resultPlaceholder = placeholder
    } else {
      const inputValue = inputValueRenderer(value)
      resultPlaceholder = this.isValueEmpty(inputValue) ? placeholder : (onSearch && focusedInput && searchText === '' ? inputValue : '')
    }

    const inputMode = !!onSearch && (
      (!customElementRenderer && !multiple) ||
      (customElementRenderer && (isOpened || this.isValueEmpty(value))) ||
      (multiple && (isOpened || !Array.isArray(value) || value.length === 0))
    )

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
        readOnly={!inputMode}
        value={resultInputValue}
        onChange={this.requestItems}
        inputRef={this.saveInputRef}
      />
    )
  }

  render() {
    const {
      value,
      inputFocused,
      isOpened
    } = this.state

    const {
      dropdownStyle,
      dropdownClassName,
      containerStyle,
      containerClassName,
      customElementRenderer,
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
      !disabled && !onSearch && this.css.isReadonly,
      !disabled && onSearch && this.css.withSearch,
      icon && this.css.withLeftIcon,
      this.showArrow && this.css.withRightIcon,
      size && this.css[size],
      disabled && this.css.isDisabled,
      isOpened && this.css.isOpened,
      focusedInput && this.css.isFocused
    )

    let customElement = null
    if (customElementRenderer) {
      if (!this.isValueEmpty(value) && !(isOpened && onSearch))
        customElement = cloneElement(customElementRenderer(value), {
          className: this.css.custom
        })

    } else if (multipleWithValue && !isOpened) {
      customElement = (
        <TagsInput
          className={this.css.options}
          onChange={this.changeValue}
          isExpanded={false}
        >
          {options}
        </TagsInput>
      )
    }

    const dropdownAnchor = (
      <div
        className={classnames(containerClassName, (multiple || customElementRenderer) && this.css.withCustom)}
        style={containerStyle}
      >
        {this.renderInput()}
        {customElement}
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
          className={classnames(dropdownClassName, this.css.dropdown, multiple && this.css.isMultipleDropdown)}
          overlayClassName={resultClassName}
          appendToBody={appendToBody}
          anchorFullWidth={true}
          autoPositionY={false}
          anchorPointY="bottom"
          contentPointY="top"
          closeOnClickOutside={false}
          cachePositionOptions={false}
          onClose={this.handleDropdownClose}
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
