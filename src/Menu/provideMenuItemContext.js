
import React, { Component } from 'react'
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
      value: PropTypes.any.isRequired
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
         * Проверка, не активно ли меню
         */
        isMenuDisabled: PropTypes.func,
        /**
         * Получение размера меню
         */
        getMenuSize: PropTypes.func,
        /**
         * Шина событий
         * onPropsChange - изменение значений props в Menu, влияющих на отображение опций
         * onItemSelect - клик по MenuItem (args: value)
         * onItemFocus - фокус на MenuItem (args: id)
         * onItemMount - добавление и обновление MenuItem (args: id, componentInstanseRef)
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
      this.ctx.events.emit('onItemMount', this.id, this.item)
    }

    componentDidUpdate() {
      this.ctx.events.emit('onItemMount', this.id, this.item)
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
        ctx.isMenuDisabled() !== this.disabled ||
        ctx.getMenuSize() !== this.size
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
      this.item = ref
    }

    render() {
      const {props, ctx} = this
      this.isSelected = ctx.isValueSelected(props.value)
      this.isFocused = ctx.isItemFocused(this.id)
      this.disabled = ctx.isMenuDisabled()
      this.size = ctx.getMenuSize()

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
