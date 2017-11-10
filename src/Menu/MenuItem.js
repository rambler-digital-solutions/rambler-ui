import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { ENTER } from '../constants/keys'
import { injectSheet } from '../theme'
import { isolateMixin } from '../style/mixins'

@injectSheet(theme => ({
  root: {
    ...isolateMixin,
    fontFamily: theme.fontFamily,
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    color: theme.menu.colors.default.text,
    backgroundColor: theme.menu.colors.default.background,
    cursor: 'pointer',
    paddingLeft: theme.menu.padding,
    paddingRight: theme.menu.padding,
    outline: 0,
    fontSize: theme.menu.fontSize,
    lineHeight: theme.menu.lineHeight + 'px',
    '&:hover': {
      color: theme.menu.colors.hover.text,
      backgroundColor: theme.menu.colors.hover.background
    },
    '&:focus': {
      color: theme.menu.colors.focus.text,
      background: theme.menu.colors.focus.background
    },
    '&:active': {
      color: theme.menu.colors.active.text,
      background: theme.menu.colors.active.background
    }
  },
  ...['medium', 'small'].reduce((result, size) => ({
    ...result,
    [size]: {
      minHeight: theme.menu.sizes[size].height,
      paddingTop: (theme.menu.sizes[size].height - theme.menu.lineHeight) / 2,
      paddingBottom: (theme.menu.sizes[size].height - theme.menu.lineHeight) / 2
    }
  }), {}),
  isSelected: {
    color: theme.menu.colors.selected.text
  },
  isDisabled: {
    color: theme.menu.colors.disabled.text + '!important',
    background: theme.menu.colors.disabled.background + '!important'
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
     * Значение опции, по-умолчанию считается, что это примитив
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
     * Опция не активна (проставляется вручную или автоматически компонентом `<Menu />`)
     */
    disabled: PropTypes.bool,
    /**
     * Коллбек наведения на опцию (автоматически проставляется компонентом `<Menu />`)
     */
    onFocus: PropTypes.func,
    /**
     * Коллбек выбора опции (автоматически проставляется компонентом `<Menu />`)
     */
    onSelect: PropTypes.func,
    /**
     * Размер опции (автоматически проставляется компонентом `<Menu />`)
     */
    size: PropTypes.oneOf(['small', 'medium'])
  };

  static defaultProps = {
    isFocused: false,
    isSelected: false,
    disabled: false,
    onFocus: () => {},
    onSelect: () => {},
    size: 'medium'
  };

  get css() {
    return this.props.sheet.classes
  }

  componentDidMount() {
    if (this.props.isFocused)
      this.item.focus()
  }

  componentDidUpdate(prevProps) {
    if (this.props.isFocused && this.props.isFocused !== prevProps.isFocused)
      this.item.focus()
  }

  pressKey = (event) => {
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
      disabled,
      onFocus,
      onSelect,
      size
    } = this.props

    return (
      <div
        ref={(el) => { this.item = el }}
        style={style}
        className={classnames(className, this.css.root, size && this.css[size], disabled && this.css.isDisabled, isSelected && this.css.isSelected)}
        tabIndex={disabled ? null : 0}
        onFocus={disabled ? null : onFocus}
        onClick={disabled ? null : onSelect}
        onKeyDown={disabled ? null : this.pressKey}
      >
        {children}
      </div>
    )
  }

}

MenuItem.displayName = 'ruiMenuItem'

export default MenuItem
