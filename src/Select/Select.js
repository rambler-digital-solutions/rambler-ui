import React, { PureComponent, Children, cloneElement } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Dropdown from '../Dropdown'
import { injectSheet } from '../theme'
import { fontStyleMixin, isolateMixin } from '../style/mixins'

const ESCAPE = 27
const ENTER = 13
const UP = 38
const DOWN = 40

@injectSheet(theme => ({
  select: {
    position: 'relative'
  },
  label: {
    ...isolateMixin,
    ...fontStyleMixin(theme.font),
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    borderRadius: 0,
    outline: 0,
    background: '#fff',
    fontWeight: 400,
    appearance: 'none',
    lineHeight: 'normal',
    borderTop: theme.field.border,
    borderLeft: theme.field.border,
    borderRight: theme.field.border,
    borderBottom: theme.field.borderBottom || theme.field.border,
    padding: theme.select.padding,
    fontSize: theme.field.fontSize,
    transitionProperty: 'border-color',
    transitionDuration: theme.select.animationDuration,
    cursor: 'pointer',
    userSelect: 'none',
    '&:focus': {
      borderBottom: theme.field.focusBorderBottom,
      paddingBottom: theme.select.focusPaddingBottom
    }
  },
  empty: {
    color: 'rgba(38, 38, 38, 0.4)'
  },
  medium: {
    height: theme.select.height || theme.sizes.medium.height
  },
  small: {
    height: theme.select.height || theme.sizes.small.height
  },
  disabled: {
    backgroundColor: '#eee',
    borderColor: '#eee',
    cursor: 'default'
  },
  success: {
    '&$label': {
      borderBottom: theme.field.successBorderBottom,
      paddingBottom: theme.select.focusPaddingBottom
    }
  },
  error: {
    '&$label': {
      borderBottom: theme.field.errorBorderBottom,
      paddingBottom: theme.select.focusPaddingBottom
    }
  },
  warning: {
    '&$label': {
      borderBottom: theme.field.warningBorderBottom,
      paddingBottom: theme.select.focusPaddingBottom
    }
  },
  filled: {
    '&$label': {
      borderBottom: theme.field.filledBorderBottom,
      paddingBottom: theme.select.focusPaddingBottom
    }
  },
  withIcon: {
    paddingLeft: theme.field.withIconPadding
  },
  icon: {
    position: 'absolute',
    top: '50%',
    left: theme.field.iconMargin,
    transform: 'translateY(-50%)',
    fontSize: 0
  },
  arrow: {
    extend: 'icon',
    left: 'auto',
    right: theme.field.iconMargin,
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
  },
  options: {
    ...isolateMixin,
    ...fontStyleMixin(theme.font),
    boxSizing: 'border-box',
    padding: '8px 0',
    maxHeight: 189,
    overflowY: 'auto'
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
     * Доступность инпута
     */
    disabled: PropTypes.bool,
    /**
     * Опции поля, обязаны быть компонентами типа `<SelectOption />`
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
    onChange: PropTypes.func
  };

  static defaultProps = {
    value: null,
    status: null,
    size: 'medium',
    disabled: false,
    onFocus: () => {},
    onBlur: () => {},
    onChange: () => {}
  };

  value = null

  state = {
    isOpened: false,
    value: null,
    focusedValue: null
  }

  get css() {
    return this.props.sheet.classes
  }

  componentWillMount() {
    this.setValue(this.props.value)
  }

  componentDidMount() {
    if (this.props.autoFocus)
      this.label.focus()
  }

  componentWillReceiveProps({ value }) {
    this.setValue(value)
  }

  getValues() {
    return Children.map(this.props.children, child =>
      child.props && child.props.value
    )
  }

  setValue(value) {
    if (value !== this.value) {
      this.value = value

      this.setState({
        value
      })

      this.props.onChange(value)
    }
  }

  focusOption = value => {
    if (!this.state.isOpened)
      this.open()

    this.setState({
      focusedValue: value
    })
  }

  selectOption = value => {
    this.setValue(value)
    this.close()
  }

  open = () => {
    if (!this.props.disabled) {
      this.setState({
        isOpened: true
      })

      this.label.focus()
    }
  }

  close = () => {
    this.setState({
      isOpened: false
    })
  }

  toggle = () => {
    if (this.state.isOpened)
      this.close()
    else
      this.open()
  }

  keyDown = event => {
    const code = event.keyCode
    const { isOpened, focusedValue } = this.state

    if (isOpened && code === ESCAPE) {
      event.stopPropagation()
      this.close()
    } else if (isOpened && code === ENTER) {
      event.stopPropagation()
      this.selectOption(focusedValue)
    } else if (code === UP || code === DOWN) {
      const values = this.getValues()
      const length = values.length
      const currentIndex = values.indexOf(focusedValue)

      const nextIndex = (focusedValue === null ?
        (code === UP ? length - 1 : 0) :
        (currentIndex + (isOpened ? (code === UP ? - 1 : 1) : 0)) + length) % length

      event.preventDefault()
      this.focusOption(values[nextIndex])
    }
  }

  blur = event => {
    this.close()
    this.props.onBlur(event)
  }

  preventBlur = event => {
    event.preventDefault()
  }

  renderLabel() {
    const { value } = this.state

    const {
      style,
      className,
      status,
      id,
      name,
      size,
      icon,
      children,
      disabled,
      placeholder,
      onFocus
    } = this.props

    const label = value === null ?
      placeholder :
      Children.map(children, child => {
        if (!child.type || child.type.displayName !== 'ruiSelectOption')
          throw new Error('Child component should be instance of <SelectOption />')

        if (child.props.value !== value)
          return undefined

        return child.props.label || child.props.children
      })

    return (
      <div className={this.css.select}>
        <input
          type="hidden"
          id={id}
          name={name}
          value={value === null ? '' : value} />
        {icon &&
          <div className={this.css.icon}>
            {icon}
          </div>
        }
        <div
          style={style}
          className={classnames(
            this.css.label,
            this.css[size],
            this.css[status],
            icon && this.css.withIcon,
            value === null && this.css.empty,
            disabled && this.css.disabled,
            className
          )}
          ref={el => { this.label = el }}
          tabIndex={disabled ? null : '0'}
          onFocus={onFocus}
          onClick={this.toggle}
          onBlur={this.blur}
          onKeyDown={this.keyDown}>
          {label}
        </div>
        <button
          type="button"
          tabIndex="-1"
          className={this.css.arrow}
          onMouseDown={this.preventBlur}
          onClick={this.toggle} />
      </div>
    )
  }

  renderOptions() {
    const options = Children.map(this.props.children, child => {
      if (!child.type || child.type.displayName !== 'ruiSelectOption')
        throw new Error('Child component should be instance of <SelectOption />')

      const value = child.props.value

      return cloneElement(child, {
        key: value,
        isFocused: value === this.state.focusedValue,
        isSelected: value === this.state.value,
        onFocus: this.focusOption,
        onSelect: this.selectOption
      })
    })

    return (
      <div
        className={this.css.options}
        onMouseDown={this.preventBlur}>
        {options}
      </div>
    )
  }

  render() {
    const {
      dropdownClassName,
      dropdownStyle
    } = this.props

    return (
      <Dropdown
        isOpened={this.state.isOpened}
        anchor={this.renderLabel()}
        padding={false}
        style={dropdownStyle}
        className={dropdownClassName}
        appendToBody={true}
        anchorFullWidth={true}
        autoPositionY={true}
        anchorPointY="top"
        contentPointY="top"
        closeOnClickOutside={false}
        cachePositionOptions={false}>
        {this.renderOptions()}
      </Dropdown>
    )
  }

}
