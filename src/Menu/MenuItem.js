import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { ENTER } from '../constants/keys'
import { injectSheet } from '../theme'
import { fontStyleMixin, isolateMixin } from '../style/mixins'

@injectSheet(theme => ({
  item: {
    ...isolateMixin,
    ...fontStyleMixin(theme.font),
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fff',
    cursor: 'pointer',
    padding: '7px 14px',
    outline: 0,
    fontSize: theme.field.fontSize,
    '&:hover': {
      backgroundColor: '#f0f0f0'
    },
    '&:focus': {
      backgroundColor: '#f0f0f0'
    }
  },
  isSelected: {
    color: theme.field.activeIconColor
  }
}))
class MenuItem extends PureComponent {

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
     * Контент опции
     */
    children: PropTypes.node.isRequired,
    /**
     * Есть ли фокус на опции (автоматически проставляется компонентом `<Menu />`)
     */
    isFocused: PropTypes.bool,
    /**
     * Выбрана ли эта опция (автоматически проставляется компонентом `<Menu />`)
     */
    isSelected: PropTypes.bool,
    /**
     * Колбек наведения на опцию (автоматически проставляется компонентом `<Menu />`)
     */
    onFocus: PropTypes.func,
    /**
     * Колбек выбора опции (автоматически проставляется компонентом `<Menu />`)
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

  componentDidMount() {
    if (this.props.isSelected && !this.props.isFocused)
      this.item.focus()
  }

  componentDidUpdate(prevProps) {
    if (this.props.isFocused && this.props.isFocused !== prevProps.isFocused)
      this.item.focus()
  }

  pressKey = event => {
    if (event.keyCode === ENTER) {
      event.stopPropagation()
      this.item.focus()
      this.props.onSelect()
    }
  }

  render() {
    const {
      className,
      style,
      children,
      isSelected,
      onFocus,
      onSelect
    } = this.props

    return (
      <div
        ref={el => { this.item = el }}
        style={style}
        className={classnames(this.css.item, isSelected && this.css.isSelected, className)}
        tabIndex="0"
        onFocus={onFocus}
        onClick={onSelect}
        onKeyDown={this.pressKey}>
        {children}
      </div>
    )
  }

}

MenuItem.displayName = 'ruiMenuItem'

export default MenuItem
