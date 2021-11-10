import React, {
  PureComponent,
  Children,
  createElement,
  cloneElement
} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import throttle from 'lodash.throttle'
import Menu from '../Menu/Menu'
import Input from '../Input'
import {TagsInput, TagsInputItem} from '../TagsInput'
import Dropdown from '../Dropdown'
import OnClickOutside from '../OnClickOutside'
import {
  TAB,
  UP,
  DOWN,
  ESCAPE,
  BACKSPACE,
  DELETE,
  ENTER
} from '../constants/keys'
import {withStyles} from '../theme'
import {isolateMixin, placeholderMixin, ifMobile} from '../utils/mixins'
import {ios, android} from '../utils/browser'
import {getBoundingClientRect} from '../utils/DOM'
import ClearIconSmall from './ClearIconSmall'

const isNativeSelectAllowed = ios || android

const emptyArr = []
const noop = () => {}

const absolutePosition = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0
}

/* Prevent strange behaviour of onChange event in multiple select */
/* http://stackoverflow.com/questions/34660500/mobile-safari-multi-select-bug */
const multipleSelectFix = <optgroup disabled hidden />

const assignStatusColors = borderColor => ({
  '& $field': {
    borderColor
  }
})

const styles = theme => ({
  root: {
    extend: isolateMixin,
    position: 'relative',
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
    '&$error': assignStatusColors(theme.field.colors.error.outline),
    '&$warning': assignStatusColors(theme.field.colors.warning.outline),
    '&$success': assignStatusColors(theme.field.colors.success.outline)
  },
  dropdownContainer: {
    '&&': {
      display: 'block'
    },
    '$isMultipleWithoutSearch &': {
      extend: absolutePosition,
      bottom: null
    }
  },
  icon: {
    '$isMultipleWithoutSearch &': {
      top: 'auto',
      bottom: 'auto',
      margin: 0,
      transform: 'translateY(-50%)'
    }
  },
  arrow: {
    cursor: 'pointer',
    textAlign: 'center',
    lineHeight: 0,
    color: theme.field.colors.default.arrow,
    pointerEvents: 'auto',
    '&:empty': {
      '&:after': {
        height: 8,
        width: 8,
        position: 'absolute',
        borderStyle: 'solid',
        borderWidth: '0 0 1px 1px',
        content: '""',
        transform: 'rotate(-45deg) translateY(50%)'
      }
    },
    '& svg': {
      extend: absolutePosition,
      margin: 'auto',
      maxWidth: '100%',
      maxHeight: '100%'
    },
    transitionProperty: 'color',
    transitionDuration: 200
  },
  input: {
    '$withCustom &': absolutePosition,
    '$isEnabled$isFocused &': {
      '& $arrow': {
        color: theme.field.colors.focus.arrow
      },
      '&:hover': {
        '& $arrow': {
          color: theme.field.colors.hover.arrow
        }
      }
    },
    '$isEnabled &': {
      '&:hover': {
        '& $field': {
          color: theme.select.colors.hover.text
        },
        '& $arrow': {
          color: theme.field.colors.hover.arrow
        }
      }
    },
    borderRadius: theme.field.borderRadius
  },
  inputBorder: {},
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
  darkPlaceholder: {
    '$isEnabled$isReadonly &, $isEnabled:not($isFocused) &': {
      ...placeholderMixin('&', {
        opacity: 1,
        color: theme.select.colors.default.placeholder,
        transitionProperty: 'color',
        transitionDuration: 200
      }),
      ...placeholderMixin('&:hover', {
        color: theme.select.colors.hover.placeholder
      })
    }
  },
  withCustom: {
    position: 'relative',
    '$isOpened &': {
      zIndex: 1
    }
  },
  withTopDropdown: {
    '& + *': {
      '& $dropdown': {
        marginBottom: theme.select.dropdown.marginTop
      }
    },
    '$regular$isOpened & + *': {
      '& $menu': {
        borderBottomLeftRadius: theme.dropdown.borderRadius,
        borderBottomRightRadius: theme.dropdown.borderRadius
      }
    }
  },
  withBottomDropdown: {
    '& + *': {
      '& $dropdown': {
        marginTop: theme.select.dropdown.marginTop
      }
    },
    '$regular$isOpened & + *': {
      '& $menu': {
        borderBottomLeftRadius: theme.dropdown.borderRadius,
        borderBottomRightRadius: theme.dropdown.borderRadius
      }
    }
  },
  custom: {
    position: 'relative',
    pointerEvents: 'none'
  },
  multipleValueItem: {
    '$isEnabled $options-regular &': {
      color: theme.field.colors.default.text
    }
  },
  options: {
    composes: '$custom'
  },
  dropdown: {
    '&&': {
      boxShadow: theme.select.dropdown.boxShadow,
      overflow: 'hidden',
      border: `${theme.select.dropdown.borderWidth}px solid ${theme.field.colors.default.outline}`,
      borderBottom: 0,
      backgroundColor: theme.field.colors.default.background,
      '&$isMultipleDropdown, $regular &': {
        transitionProperty: 'opacity',
        top: '0 !important'
      }
    }
  },
  selected: {
    borderBottom: `${theme.select.dropdown.borderWidth}px solid ${theme.field.colors.default.outline}`,
    cursor: 'default'
  },
  menu: {
    borderBottom: `${theme.select.dropdown.borderWidth}px solid ${theme.field.colors.default.outline}`,
    ...(theme.dropdown.borderRadius > 5 && {
      '&::-webkit-scrollbar-track': {
        margin: `${theme.dropdown.borderRadius}px 0`
      },
      '&::-webkit-scrollbar-thumb': {
        borderRadius: 3
      }
    }),
    ...(theme.select.dropdown.borderWidth === 0 && {
      '&:before, &:after': {
        content: '""',
        position: 'absolute',
        left: 0,
        width: '100%',
        height: '5px',
        backgroundColor: theme.field.colors.default.background,
        opacity: 0
      },
      '&:before': {
        top: 0
      },
      '&:after': {
        bottom: 0
      }
    })
  },
  scrollableBorderTop: {
    '&:before': {
      opacity: 1
    }
  },
  scrollableBorderBottom: {
    '&:after': {
      opacity: 1
    }
  },
  menuItem: {
    backgroundColor: theme.field.colors.default.background
  },
  ...['small', 'medium'].reduce(
    (result, size) => ({
      ...result,
      [`menuSize-${size}`]: {
        maxHeight: theme.menu.sizes[size].height * 7 + 2,
        '&$reducedHeight': {
          maxHeight: theme.menu.sizes[size].height * 6 + 2
        }
      }
    }),
    {}
  ),
  reducedHeight: {},
  clear: {
    flex: 'none',
    alignSelf: 'center',
    color: theme.field.icon.colors.default,
    fill: 'currentColor',
    marginTop: 1,
    marginLeft: 1,
    cursor: 'pointer',
    pointerEvents: 'auto',
    '&:hover , &:active': {
      color: theme.field.icon.colors.active
    }
  },
  ...['medium', 'small'].reduce(
    (result, size) => ({
      ...result,
      [size]: {
        '&$isMultipleWithoutSearch': {
          height: theme.field.sizes[size].height
        },
        '&$isMultipleWithoutSearch $icon': {
          top: theme.field.sizes[size].height / 2
        },
        '& $withCustom': {
          minHeight: theme.field.sizes[size].height
        },
        '& $arrow': {
          '&:before': {
            display: 'block',
            content: '" "',
            position: 'absolute',
            top: -Math.floor(
              (theme.field.sizes[size].height - theme.field.sizes[size].icon) /
                2
            ),
            bottom: -Math.floor(
              (theme.field.sizes[size].height - theme.field.sizes[size].icon) /
                2
            ),
            left: -10,
            right: -10,
            ...ifMobile({
              top: -Math.floor(
                (theme.field.sizes[size].height -
                  theme.field.mobile.sizes[size].icon) /
                  2
              ),
              bottom: -Math.floor(
                (theme.field.sizes[size].height -
                  theme.field.mobile.sizes[size].icon) /
                  2
              )
            }),
            borderRadius: theme.field.borderRadius
          },
          '&:empty:after': {
            top: size === 'small' ? -2 : -1,
            left: size === 'small' ? 1 : 1
          }
        },
        '&$isOpened $arrow:empty:after': {
          transform: 'rotate(45deg) translateY(-50%) scaleY(-1)',
          top: size === 'small' ? 9 : 9,
          left: size === 'small' ? 1 : 1
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
        ...['regular', 'background'].reduce((result, type) => {
          const verticalPadding =
            (theme.field.sizes[size].height -
              theme.tagsInput.types[type].height) /
            2
          return {
            ...result,
            [`& $options$options-${type}`]: {
              paddingTop: verticalPadding,
              paddingBottom: verticalPadding
            },
            [`& $selected$options-${type}`]: {
              padding: `${verticalPadding - 1}px ${theme.input.sizes[size]
                .padding - 1}px`
            }
          }
        }, {})
      }
    }),
    {}
  ),
  isNative: {
    '& $icon': {
      pointerEvents: 'none'
    }
  },
  nativeSelect: {
    extend: [isolateMixin, absolutePosition],
    width: '100%',
    height: '100%',
    opacity: 0,
    overflow: 'hidden',
    outline: 0
  },
  regular: {},
  awesome: {},
  promo: {},
  success: {},
  error: {},
  warning: {},
  isFocused: {},
  isOpened: {},
  isReadonly: {},
  isEnabled: {},
  isDisabled: {},
  isMultipleWithoutSearch: {},
  isMultipleDropdown: {},
  withSearch: {},
  withLeftIcon: {},
  withRightIcon: {},
  ['options-regular']: {},
  ['options-background']: {}
})

class Select extends PureComponent {
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
     * Разновидность элементов-значений множественного выбора
     */
    multipleType: PropTypes.oneOf(['regular', 'background']),
    /**
     * Показывать кнопку очистки инпута
     */
    clearIcon: PropTypes.bool,
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
     * Функция рендера иконки при множественном выборе (`multiple=true`).
     * В качестве аргумента принимает `value`.
     * Ожидается, что возвращает `Element`. Возвращаемое значение передается через свойство `icon` в `TagsInputItem`
     */
    iconElementRenderer: PropTypes.func,
    /**
     * Плэйсхолдер
     */
    placeholder: PropTypes.string,
    /**
     * Светлый плейсхолдер, как в компоненте `<Input />`
     */
    lightPlaceholderColor: PropTypes.bool,
    /**
     * Доступность элемента
     */
    disabled: PropTypes.bool,
    /**
     * Доступность только для чтения
     */
    readOnly: PropTypes.bool,
    /**
     * Опции поля, массив элементов
     */
    children: PropTypes.arrayOf(PropTypes.element),
    /**
     * Иконка
     */
    icon: PropTypes.node,
    /**
     * Иконка стрелки
     */
    arrowIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
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
    status: PropTypes.oneOf(['error', 'warning', 'success', 'filled', null]),
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
     * Должна возвращать `Element`.
     */
    customElementRenderer: PropTypes.func,
    /**
     * Дополнительный CSS-класс корневого контейнера
     */
    rootClassName: PropTypes.string,
    /**
     * Inline-стили корневого контейнера
     */
    rootStyle: PropTypes.object,
    /**
     * Дополнительный CSS-класс контейнера кастомного элемента и `<Input>`
     */
    containerClassName: PropTypes.string,
    /**
     * Inline-стили контейнера кастомного элемента и `<Input>`
     */
    containerStyle: PropTypes.object,
    /**
     * Позволяет вводить произвольное значение в поле, ожидается, что `value` типа `String`
     */
    inputMode: PropTypes.bool,
    /**
     * Применить логику выбора опций нативного select'a на мобильных устройствах.
     * При использовании `onSearch` - не применяется.
     * `<MenuItem>` в качестве `children` должен принимать элемент типа `String`
     */
    native: PropTypes.bool
  }

  static defaultProps = {
    multiple: false,
    multipleType: 'regular',
    clearIcon: false,
    status: null,
    size: 'medium',
    variation: 'awesome',
    disabled: false,
    readOnly: false,
    appendToBody: false,
    inputMode: false,
    valuesEquality: (a, b) => a === b,
    inputValueRenderer: value => value,
    children: []
  }

  state = {
    isOpened: false,
    inputFocused: false,
    searchText: '',
    value: this.initialValue,
    scrollableBorderTop: false,
    scrollableBorderBottom: false
  }

  get initialValue() {
    const {multiple, value} = this.props
    return multiple ? (Array.isArray(value) ? value : emptyArr) : value
  }

  get showArrow() {
    const {children, clearIcon, readOnly} = this.props
    return !readOnly && children && children.length > 0 && !clearIcon
  }

  get showClearIcon() {
    const {multiple, clearIcon} = this.props
    return !multiple && clearIcon && !this.isValueEmpty(this.state.value)
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.value === prevState.value) return null
    return Select.getValueState(nextProps.value, nextProps, prevState)
  }

  static getValueState(value, nextProps, prevState) {
    const {valuesEquality, multiple} = nextProps
    const {value: oldValue} = prevState
    if (multiple) {
      const currValue = Array.isArray(oldValue) ? oldValue : emptyArr
      const nextValue = Array.isArray(value) ? value : emptyArr
      if (
        nextValue.length === currValue.length &&
        nextValue.every((item, index) => valuesEquality(item, currValue[index]))
      )
        return null
    } else if (valuesEquality(value, oldValue)) {
      return null
    }
    return {value}
  }

  handleDropdownClose = () => {
    if (this.state.isOpened || this.props.inputMode) return
    this.setSearchText('')
  }

  setSearchText(searchText) {
    if (this.state.searchText === searchText) return
    this.setState({
      searchText
    })
    if (this.props.onSearch) this.props.onSearch(searchText)
  }

  requestItems = event => {
    this.setState({
      isOpened: true
    })
    this.setSearchText(event.target.value)
  }

  handleMenuScroll = throttle(menuNode => {
    const {classes} = this.props

    const items = menuNode.getElementsByClassName(classes.menuItem)
    const first = items[0]
    const last = items[items.length - 1]

    const scrolledToTop =
      getBoundingClientRect(first).top === getBoundingClientRect(menuNode).top

    const scrolledToBottom =
      getBoundingClientRect(last).bottom ===
      getBoundingClientRect(menuNode).bottom

    if (scrolledToTop) this.setState({scrollableBorderTop: false})
    else this.setState({scrollableBorderTop: true})

    if (scrolledToBottom) this.setState({scrollableBorderBottom: false})
    else this.setState({scrollableBorderBottom: true})
  })

  changeValue = value => {
    const {multiple, inputMode, onChange} = this.props
    if (!multiple)
      this.setState({
        isOpened: false,
        scrollableBorderTop: false,
        scrollableBorderBottom: false
      })
    if (inputMode) this.setSearchText(value || '')
    const nextState = Select.getValueState(value, this.props, this.state)
    if (nextState) this.setState(nextState)
    if (onChange) onChange(value)
    if (!inputMode && !multiple) this.input.focus()
  }

  focusInput = event => {
    const {onFocus} = this.props
    this.setState({
      inputFocused: true
    })
    if (onFocus && !this.state.isOpened) onFocus(event)
  }

  blurInput = event => {
    if (!this.state.inputFocused) return
    const {inputMode, onBlur} = this.props
    this.setState({
      isOpened: false,
      inputFocused: false,
      scrollableBorderTop: false,
      scrollableBorderBottom: false
    })
    if (inputMode) this.changeValue(this.state.searchText)
    if (onBlur) onBlur(event)
  }

  preventBlurInput = event => {
    event.preventDefault()
  }

  preventSelect = event => {
    event.preventDefault()
    event.stopPropagation()
  }

  open = () => {
    if (this.props.disabled || this.state.isOpened) return
    this.setState({isOpened: true})
    setTimeout(() => {
      this.input.focus()
    }, 0)
  }

  close = () => {
    if (!this.state.isOpened) return
    this.setState({
      isOpened: false,
      scrollableBorderTop: false,
      scrollableBorderBottom: false
    })
  }

  openOnArrowClick = () => {
    const {isOpened} = this.state
    if (isOpened) this.close()
    else this.open()
  }

  openOnArrowKey(event) {
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

  onClear = () => {
    this.setSearchText('')
    this.changeValue()
  }

  clearValueOnBackspace() {
    const {searchText, inputFocused} = this.state
    if (this.props.onSearch && inputFocused && searchText === '')
      this.changeValue()
  }

  closeOnEsc = event => {
    if (!this.state.isOpened) return
    event.stopPropagation()
    this.setState({
      isOpened: false,
      scrollableBorderTop: false,
      scrollableBorderBottom: false
    })
    this.input.focus()
  }

  saveInputRef = ref => {
    this.input = ref
  }

  closeOnClickOutside = event => {
    const {isOpened, inputFocused, onBlur} = this.state
    if (!isOpened || inputFocused) return
    this.setState({
      isOpened: false,
      inputFocused: false,
      scrollableBorderTop: false,
      scrollableBorderBottom: false
    })
    if (onBlur) onBlur(event)
  }

  keyDown = event => {
    const code = event.keyCode
    const {inputMode, multiple, customElementRenderer} = this.props
    if (code === ESCAPE) this.closeOnEsc(event)
    else if (code === TAB)
      this.setState({
        isOpened: false,
        scrollableBorderTop: false,
        scrollableBorderBottom: false
      })
    else if (code === UP || code === DOWN) this.openOnArrowKey(event)
    else if (inputMode && code === ENTER)
      this.changeValue(this.state.searchText)
    else if (
      !multiple &&
      !customElementRenderer &&
      (code === DELETE || code === BACKSPACE)
    )
      this.clearValueOnBackspace(event)
  }

  isValueEmpty(value) {
    return value == null || value === ''
  }

  getInputProps() {
    const {
      /* eslint-disable no-unused-vars */
      className,
      style,
      placeholder,
      icon,
      onSearch,
      dropdownClassName,
      dropdownStyle,
      menuClassName,
      menuStyle,
      valuesEquality,
      children,
      value,
      appendToBody,
      classes,
      onFocus,
      onBlur,
      onChange,
      inputValueRenderer,
      iconElementRenderer,
      customElementRenderer,
      multiple,
      multipleType,
      theme,
      arrowClassName,
      arrowStyle,
      arrowIcon,
      containerStyle,
      containerClassName,
      rootStyle,
      rootClassName,
      native,
      clearIcon,
      inputMode,
      lightPlaceholderColor,
      /* eslint-enable no-unused-vars */
      ...props
    } = this.props
    return props
  }

  Arrow = props => {
    const {isOpened} = this.state
    const {arrowStyle, arrowClassName, arrowIcon, classes} = this.props
    const {
      className,
      size, // eslint-disable-line no-unused-vars
      color, // eslint-disable-line no-unused-vars
      ...otherProps
    } = props
    return (
      <div
        style={arrowStyle}
        className={classnames(className, classes.arrow, arrowClassName)}
        {...otherProps}>
        {typeof arrowIcon === 'function' ? arrowIcon({isOpened}) : arrowIcon}
      </div>
    )
  }

  Clear = () => (
    <ClearIconSmall
      className={this.props.classes.clear}
      size={15}
      color="currentColor"
      onMouseDown={this.preventBlurInput}
      onClick={this.onClear}
    />
  )

  renderSelectedItems() {
    const {props} = this
    const selected = Array.isArray(props.value) ? props.value : emptyArr
    return selected.map(item => {
      const text = props.inputValueRenderer(item)
      return (
        <TagsInputItem
          value={item}
          key={text}
          className={props.classes.multipleValueItem}
          icon={
            props.iconElementRenderer ? props.iconElementRenderer(item) : null
          }>
          {text}
        </TagsInputItem>
      )
    })
  }

  renderInput() {
    const {value, searchText, isOpened, inputFocused} = this.state

    const {
      className,
      style,
      classes,
      placeholder,
      icon,
      readOnly,
      onSearch,
      multiple,
      inputValueRenderer,
      customElementRenderer,
      inputMode,
      lightPlaceholderColor
    } = this.props

    const focusedInput = inputFocused || isOpened

    if (inputMode && value != null && typeof value !== 'string')
      throw new Error('In `inputMode` value of <Select /> should be a string')

    let resultInputValue = ''
    if ((onSearch || inputMode) && focusedInput && isOpened) {
      resultInputValue = searchText
    } else if (!multiple && !customElementRenderer) {
      const inputValue = inputValueRenderer(value)
      resultInputValue = this.isValueEmpty(inputValue) ? '' : inputValue
    }

    let resultPlaceholder = ''
    if (customElementRenderer) {
      if (this.isValueEmpty(value) || (isOpened && !!onSearch))
        resultPlaceholder = placeholder
    } else if (multiple) {
      const withValue = Array.isArray(value) && value.length > 0
      if ((isOpened && onSearch && !readOnly) || !withValue)
        resultPlaceholder = placeholder
    } else {
      const inputValue = inputValueRenderer(value)
      resultPlaceholder =
        this.isValueEmpty(inputValue) || (inputMode && searchText === '')
          ? placeholder
          : onSearch && !inputMode && focusedInput && searchText === ''
            ? inputValue
            : ''
    }

    const canBeModified =
      (inputMode || !!onSearch) &&
      ((!customElementRenderer && !multiple) ||
        (customElementRenderer && (isOpened || this.isValueEmpty(value))) ||
        (multiple && (isOpened || !Array.isArray(value) || value.length === 0)))

    const rightIcon = this.showClearIcon
      ? createElement(this.Clear)
      : this.showArrow &&
        createElement(this.Arrow, {
          role: 'button',
          onMouseDown: this.preventBlurInput,
          onClick: this.openOnArrowClick
        })

    return (
      <Input
        {...this.getInputProps()}
        inputStyle={style}
        className={classes.input}
        iconLeft={icon}
        iconRight={rightIcon}
        iconRightClassName={classes.icon}
        activeBorderClassName={classes.inputBorder}
        onKeyDown={this.keyDown}
        onClick={!onSearch && isOpened ? this.close : this.open}
        onFocus={this.focusInput}
        onBlur={this.blurInput}
        onTouchStart={onSearch ? undefined : this.open}
        onTouchEnd={onSearch ? undefined : this.preventSelect}
        inputClassName={classnames(
          className,
          classes.field,
          !lightPlaceholderColor && classes.darkPlaceholder
        )}
        placeholder={resultPlaceholder}
        readOnly={readOnly || !canBeModified}
        value={resultInputValue}
        onChange={this.requestItems}
        inputRef={this.saveInputRef}
      />
    )
  }

  renderSelect() {
    const {
      value,
      inputFocused,
      isOpened,
      scrollableBorderTop,
      scrollableBorderBottom
    } = this.state

    const {
      dropdownStyle,
      dropdownClassName,
      containerStyle,
      containerClassName,
      rootStyle,
      rootClassName,
      customElementRenderer,
      menuStyle,
      menuClassName,
      valuesEquality,
      readOnly,
      onChange,
      inputMode,
      children,
      appendToBody,
      multiple,
      multipleType,
      disabled,
      size,
      variation,
      status,
      icon,
      classes
    } = this.props

    const onSearch = readOnly ? undefined : this.props.onSearch
    const focusedInput = inputFocused || isOpened
    const multipleWithValue =
      multiple && Array.isArray(value) && value.length > 0
    const options = multipleWithValue ? this.renderSelectedItems() : null
    const canBeModified = !!onSearch || inputMode

    let customElement = null
    if (customElementRenderer) {
      if (!this.isValueEmpty(value) && !(isOpened && onSearch)) {
        const customElementRendered = customElementRenderer(value)
        const {
          className: customElementRenderedClassName
        } = customElementRendered.props

        customElement = cloneElement(customElementRendered, {
          className: classnames(classes.custom, customElementRenderedClassName)
        })
      }
    } else if (multipleWithValue && (!isOpened || !onSearch)) {
      customElement = (
        <TagsInput
          className={classnames(
            classes.options,
            classes[`options-${multipleType}`]
          )}
          onChange={readOnly || !onChange ? undefined : this.changeValue}
          isExpanded={!isOpened || onSearch ? false : true}
          type={multipleType}
          disabled={disabled}>
          {options}
        </TagsInput>
      )
    }

    const resultIsOpened =
      !readOnly &&
      isOpened &&
      (children.length > 0 ||
        (multiple && Array.isArray(value) && value.length > 0))

    const resultClassName = classnames(
      rootClassName,
      classes.root,
      (readOnly || (!disabled && !canBeModified)) && classes.isReadonly,
      !readOnly && !disabled && canBeModified && classes.withSearch,
      icon && classes.withLeftIcon,
      this.showArrow && classes.withRightIcon,
      classes[size],
      classes[variation],
      classes[status],
      disabled ? classes.isDisabled : classes.isEnabled,
      resultIsOpened && classes.isOpened,
      focusedInput && classes.isFocused,
      multiple && !onSearch && classes.isMultipleWithoutSearch
    )

    const dropdownResultClassName = classnames(
      dropdownClassName,
      classes.dropdown,
      multiple && classes.isMultipleDropdown
    )

    return (
      <OnClickOutside handler={this.closeOnClickOutside}>
        {componentRef => (
          <div ref={componentRef} className={resultClassName} style={rootStyle}>
            <Dropdown
              isOpened={resultIsOpened}
              anchor={(ref, {contentPointY}) => (
                <div
                  className={classnames(
                    containerClassName,
                    (multiple || customElementRenderer) && classes.withCustom,
                    contentPointY === 'top'
                      ? classes.withBottomDropdown
                      : classes.withTopDropdown
                  )}
                  style={containerStyle}
                  ref={ref}>
                  {this.renderInput()}
                  {customElement}
                </div>
              )}
              padding={false}
              style={dropdownStyle}
              className={dropdownResultClassName}
              overlayClassName={classes.dropdownContainer}
              appendToBody={appendToBody}
              anchorFullWidth={true}
              autoPositionY={!multiple}
              anchorPointY="bottom"
              contentPointY="top"
              closeOnClickOutside={false}
              cachePositionOptions={false}
              onClose={this.handleDropdownClose}>
              {multipleWithValue && onSearch && (
                <TagsInput
                  className={classnames(
                    classes.selected,
                    classes[`options-${multipleType}`]
                  )}
                  onChange={this.changeValue}
                  isExpanded={true}
                  onMouseDown={this.preventBlurInput}
                  type={multipleType}>
                  {options}
                </TagsInput>
              )}

              {children.length > 0 && (
                <Menu
                  style={menuStyle}
                  className={classnames(
                    menuClassName,
                    classes.menu,
                    classes[`menuSize-${size}`],
                    onSearch && multiple && classes.reducedHeight,
                    scrollableBorderTop && classes.scrollableBorderTop,
                    scrollableBorderBottom && classes.scrollableBorderBottom
                  )}
                  onScroll={this.handleMenuScroll}
                  itemClassName={classes.menuItem}
                  autoFocus={resultIsOpened && !inputFocused}
                  value={
                    multiple ? (Array.isArray(value) ? value : emptyArr) : value
                  }
                  valuesEquality={valuesEquality}
                  onChange={this.changeValue}
                  onMouseDown={this.preventBlurInput}
                  onEscKeyDown={this.closeOnEsc}
                  multiple={multiple}
                  size={size}>
                  {children}
                </Menu>
              )}
            </Dropdown>
          </div>
        )}
      </OnClickOutside>
    )
  }

  handleNativeSelectChange = ({target}) => {
    const {multiple, onChange} = this.props
    const nextValue = multiple
      ? Array.prototype.map.call(
        target.selectedOptions,
        item => this.values[item.value]
      )
      : this.values[target.value]
    const nextState = Select.getValueState(nextValue, this.props, this.state)
    if (nextState) this.setState(nextState)
    if (onChange) onChange(nextValue)
  }

  renderNativeSelect() {
    const {
      placeholder,
      disabled,
      readOnly,
      multiple,
      multipleType,
      children,
      size,
      variation,
      status,
      icon,
      valuesEquality,
      inputValueRenderer,
      className,
      classes,
      rootStyle,
      rootClassName
    } = this.props

    const {value, inputFocused} = this.state

    let resultValue = multiple ? [] : ''
    this.values = []
    const options = []
    Children.forEach(children, (item, index) => {
      const {children} = item.props
      if (item.type.displayName !== 'RamblerUI(MenuItem)')
        throw new Error('Child component should be instance of <MenuItem />')
      if (typeof children !== 'string')
        throw new Error('Children of <MenuItem /> should be a string')
      options[index] = (
        <option key={children} value={index}>
          {children}
        </option>
      )
      this.values[index] = item.props.value
      if (multiple) {
        if (
          value.some(selectedItem =>
            valuesEquality(selectedItem, item.props.value)
          )
        )
          resultValue.push(index)
      } else if (valuesEquality(value, item.props.value)) {
        resultValue = index
      }
    })

    const selectedOptions =
      multiple &&
      Array.isArray(value) &&
      value.length > 0 &&
      this.renderSelectedItems()

    const resultClassName = classnames(
      rootClassName,
      classes.root,
      classes.isNative,
      classes.withRightIcon,
      icon && classes.withLeftIcon,
      classes[size],
      classes[variation],
      classes[status],
      disabled ? classes.isDisabled : classes.isEnabled,
      inputFocused && classes.isFocused,
      multiple && classes.isMultipleWithoutSearch,
      multiple && classes.withCustom
    )

    return (
      <div className={resultClassName} style={rootStyle}>
        <Input
          className={classes.input}
          inputClassName={classnames(className, classes.field)}
          disabled={disabled}
          onChange={noop}
          value={multiple ? '' : inputValueRenderer(value) || ''}
          iconLeft={icon}
          iconRight={createElement(this.Arrow)}
          iconRightClassName={classes.icon}
          activeBorderClassName={classes.inputBorder}
          tabIndex={-1}
          readOnly={true}
          placeholder={selectedOptions ? null : placeholder}
          isFocused={inputFocused}
        />
        {selectedOptions && (
          <TagsInput
            className={classnames(
              classes.options,
              classes[`options-${multipleType}`]
            )}
            size={size}
            type={multipleType}
            disabled={disabled}>
            {selectedOptions}
          </TagsInput>
        )}
        <select
          {...this.getInputProps()}
          className={classes.nativeSelect}
          multiple={multiple}
          value={resultValue}
          onChange={readOnly ? undefined : this.handleNativeSelectChange}
          onBlur={this.blurInput}
          onFocus={this.focusInput}>
          {placeholder ? (
            <option disabled value="">
              {placeholder}
            </option>
          ) : (
            multiple && multipleSelectFix
          )}
          {options}
        </select>
      </div>
    )
  }

  render() {
    return this.props.native && isNativeSelectAllowed && !this.props.onSearch
      ? this.renderNativeSelect()
      : this.renderSelect()
  }
}

export default withStyles(styles, {name: 'Select'})(Select)
