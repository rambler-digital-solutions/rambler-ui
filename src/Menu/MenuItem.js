import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import EventEmitter from 'events'
import { ENTER } from '../constants/keys'
import { injectSheet } from '../theme'
import { isolateMixin } from '../style/mixins'
import uuid from '../utils/uuid'
import { MENU_ITEM_CONTEXT } from '../constants/context'

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
    children: PropTypes.node.isRequired
  }

  static contextTypes = {
    [MENU_ITEM_CONTEXT]: PropTypes.shape({
      /**
       * Проверка, выбрано ли значение (args: value)
       */
      isValueSelected: PropTypes.func,
      /**
       * Опции не активны
       */
      disabled: PropTypes.bool,
      /**
       * Размер опции
       */
      size: PropTypes.oneOf(['small', 'medium']),
      /**
       * Шина событий
       * onPropsChange - изменение значений props в Menu, влияющих на отображение опций
       * onItemSelect - клик по MenuItem (args: value)
       * onItemFocus - фокус на MenuItem (args: id)
       * onItemUpdate - добавление и обновление MenuItem (args: id, ref, isSelected)
       * onItemUnmount - удаление MenuItem (args: id)
       */
      events: PropTypes.instanceOf(EventEmitter)
    })
  }

  get ctx() {
    return this.context[MENU_ITEM_CONTEXT]
  }

  get css() {
    return this.props.sheet.classes
  }

  id = uuid()

  componentDidMount() {
    this.ctx.events.on('onPropsChange', this.handlePropsChange)
  }

  componentWillReceiveProps() {
    this.ctx.events.emit('onItemUpdate', this.id, this.item, this.isSelected)
  }

  componentWillUnmount() {
    this.ctx.events.removeListener('onPropsChange', this.handlePropsChange)
    this.ctx.events.emit('onItemUnmount', this.id)
  }

  handlePropsChange = () => {
    const {props, ctx} = this
    if (ctx.isValueSelected(props.value) !== this.isSelected || ctx.disabled !== this.disabled || ctx.size !== this.size)
      this.forceUpdate()
  }

  handleSelect = () => {
    this.ctx.events.emit('onItemSelect', this.props.value)
  }

  handleFocus = () => {
    this.ctx.events.emit('onItemFocus', this.id)
  }

  handlePressKey = (event) => {
    if (event.keyCode === ENTER) {
      event.stopPropagation()
      this.item.focus()
      this.handleSelect()
    }
  }

  saveRef = (ref) => {
    this.item = ref 
    this.ctx.events.emit('onItemUpdate', this.id, ref, this.isSelected)
  }

  render() {
    const {props, ctx} = this
    this.isSelected = ctx.isValueSelected(props.value)
    this.disabled = ctx.disabled
    this.size = ctx.size

    return (
      <div
        ref={this.saveRef}
        style={props.style}
        className={classnames(
          props.className,
          this.css.root,
          this.size && this.css[this.size],
          this.disabled && this.css.isDisabled,
          this.isSelected && this.css.isSelected
        )}
        tabIndex={this.disabled ? null : 0}
        onFocus={this.disabled ? null : this.handleFocus}
        onClick={this.disabled ? null : this.handleSelect}
        onKeyDown={this.disabled ? null : this.handlePressKey}
        autoFocus
      >
        {props.children}
      </div>
    )
  }

}

export default MenuItem
