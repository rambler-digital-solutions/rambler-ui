import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { ENTER } from '../constants/keys'
import { injectSheet } from '../theme'
import { isolateMixin } from '../style/mixins'
import provideMenuItemContext from './provideMenuItemContext'

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
@provideMenuItemContext
export default class MenuItem extends PureComponent {

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
    children: PropTypes.node.isRequired
  }

  get css() {
    return this.props.classes
  }

  componentDidMount() {
    if (this.props.autoFocus && this.item)
      this.item.focus()
  }

  componentDidUpdate() {
    if (this.props.autoFocus && this.item)
      this.item.focus()
  }

  handlePressKey = (event) => {
    if (event.keyCode === ENTER) {
      event.stopPropagation()
      this.item.focus()
      this.props.onSelect()
    }
  }

  saveRef = (ref) => {
    this.item = ref
  }

  render() {
    const {props} = this

    return (
      <div
        ref={this.saveRef}
        style={props.style}
        className={classnames(
          props.className,
          this.css.root,
          props.size && this.css[props.size],
          props.disabled && this.css.isDisabled,
          props.isSelected && this.css.isSelected
        )}
        tabIndex={props.disabled ? null : 0}
        onFocus={props.disabled ? null : props.onFocus}
        onClick={props.disabled ? null : props.onSelect}
        onKeyDown={props.disabled ? null : this.handlePressKey}
      >
        {props.children}
      </div>
    )
  }

}
