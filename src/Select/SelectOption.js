import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { getBoundingClientRect } from '../utils/DOM'
import { injectSheet } from '../theme'
import { fontStyleMixin, isolateMixin } from '../style/mixins'

@injectSheet(theme => ({
  option: {
    ...isolateMixin,
    ...fontStyleMixin(theme.font),
    boxSizing: 'border-box',
    display: 'block',
    backgroundColor: '#fff',
    cursor: 'pointer',
    padding: '7px 14px',
    fontSize: theme.field.fontSize
  },
  isFocused: {
    backgroundColor: '#f0f0f0'
  },
  isSelected: {
    color: theme.field.activeIconColor
  }
}))
class SelectOption extends PureComponent {

  static propTypes = {
    /**
     * Дополнительный CSS-класс
     */
    className: PropTypes.string,
    /**
     * Inline-стили
     */
    style: PropTypes.object,
    /**
     * Значение опции
     */
    value: PropTypes.any.isRequired,
    /**
     * Контент, который будет отображаться в `<Select />` если опция выбрана, по-умолчанию children
     */
    label: PropTypes.node,
    /**
     * Контент опции
     */
    children: PropTypes.node.isRequired,
    /**
     * Есть ли фокус на опции (автоматически проставляется компонентом `<Select />`)
     */
    isFocused: PropTypes.bool,
    /**
     * Выбрана ли эта опция (автоматически проставляется компонентом `<Select />`)
     */
    isSelected: PropTypes.bool,
    /**
     * Колбек наведения на опцию (автоматически проставляется компонентом `<Select />`)
     */
    onFocus: PropTypes.func,
    /**
     * Колбек выбора опции (автоматически проставляется компонентом `<Select />`)
     */
    onSelect: PropTypes.func
  };

  static defaultProps = {
    isFocused: false,
    isSelected: false,
    onFocus: () => {},
    onSelect: () => {}
  };

  get css() {
    return this.props.sheet.classes
  }

  focusOption = () => {
    this.focusedByHover = true
    this.props.onFocus(this.props.value)
  }

  selectOption = () => {
    this.props.onSelect(this.props.value)
  }

  componentDidMount() {
    if (this.props.isSelected || this.props.isFocused)
      this.scrollToOption()
  }

  componentDidUpdate(prevProps) {
    if (this.props.isFocused !== prevProps.isFocused) {
      if (this.props.isFocused && !this.focusedByHover)
        this.scrollToOption()

      this.focusedByHover = null
    }
  }

  scrollToOption() {
    const parent = this.option.parentElement
    const optionRect = getBoundingClientRect(this.option)
    const parentRect = getBoundingClientRect(parent)

    parent.scrollTop += optionRect.y - parentRect.y - (parentRect.height / 2)
  }

  render() {
    const {
      className,
      style,
      children,
      isFocused,
      isSelected
    } = this.props

    return (
      <div
        ref={el => { this.option = el }}
        style={style}
        className={classnames(this.css.option, {
          [this.css.isFocused]: isFocused,
          [this.css.isSelected]: isSelected
        }, className)}
        onClick={this.selectOption}
        onMouseEnter={this.focusOption}>
        {children}
      </div>
    )
  }

}

SelectOption.displayName = 'ruiSelectOption'

export default SelectOption
