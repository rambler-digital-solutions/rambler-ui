
import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import PropTypes from 'prop-types'
import EventEmitter from 'events'
import uuid from '../utils/uuid'
import { MENU_ITEM_CONTEXT } from '../constants/context'

export default function provideMenuItemContext(Target) {

  return class ProvideMenuItemContext extends Component {

    static propTypes = {
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
         * Проверка, в фокусе ли значение (args: key)
         */
        isItemFocused: PropTypes.func,
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
      if (
        ctx.isValueSelected(props.value) !== this.isSelected ||
        ctx.isItemFocused(this.id) !== this.isFocused ||
        ctx.disabled !== this.disabled ||
        ctx.size !== this.size
      )
        this.forceUpdate()
    }

    handleFocus = () => {
      this.ctx.events.emit('onItemFocus', this.id)
    }

    handleSelect = () => {
      this.ctx.events.emit('onItemSelect', this.props.value)
    }

    saveRef = (ref) => {
      if (!this.item)
        this.item = findDOMNode(ref)
      this.ctx.events.emit('onItemUpdate', this.id, this.item, this.isSelected)
    }

    render() {
      const {props, ctx} = this
      this.isSelected = ctx.isValueSelected(props.value)
      this.isFocused = ctx.isItemFocused(this.id)
      this.disabled = ctx.disabled
      this.size = ctx.size

      return (
        <Target
          {...this.props}
          ref={this.saveRef}
          isSelected={this.isSelected}
          disabled={this.disabled}
          size={this.size}
          events={ctx.events}
          onFocus={this.handleFocus}
          onSelect={this.handleSelect}
          autoFocus={this.isFocused}
        />
      )
    }
  }
}
