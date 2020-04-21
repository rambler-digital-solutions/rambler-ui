import React, {Component} from 'react'
import {createPortal} from 'react-dom'
import PropTypes from 'prop-types'

/**
 * Монтирует дерево оборачиваемого `Target` в отдельную ноду в DOM.
 *
 *  @renderToLayer
 *  class Popup extends Component {
 *
 *    render() {
 *      const {
 *        isOpened,
 *        children,
 *        ...other
 *      } = this.props
 *
 *      return (
 *        <div {...other} style={{ display: isOpened ? 'block' : 'none' }}>
 *          {children}
 *        </div>
 *      )
 *    }
 *
 *  }
 *
 * Передает в оборачиваемый компонент следующие props:
 * - isOpened - контролирует видимость контента
 * - onOpen() - коллбек, который нужно вызвать в `Target` после открытия, например после окончания всех анимаций
 * - onClose() - коллбек, который нужно вызвать в `Target` после закрытия, например после окончания всех анимаций
 */
export default function renderToLayer(Target) {
  return class RenderToLayer extends Component {
    static propTypes = {
      /**
       * Контролирует видимость
       */
      isOpened: PropTypes.bool,
      /**
       * Значение z-index
       */
      zIndex: PropTypes.number,
      /**
       * Коллбек вызывающийся после открытия
       */
      onOpen: PropTypes.func,
      /**
       * Коллбек вызывающийся после закрытия
       */
      onClose: PropTypes.func,
      /**
       * Коллбек вызывающийся при монтировании/размонтировании контейнера
       */
      containerRef: PropTypes.func
    }

    static defaultProps = {
      isOpened: false,
      onOpen: () => {},
      onClose: () => {},
      containerRef: () => {}
    }

    state = {
      isOpened: this.props.isOpened || false
    }

    componentDidMount() {
      if (this.props.isOpened) this.mountPortal()
    }

    componentDidUpdate(prevProps) {
      const {isOpened} = this.props
      if (isOpened !== prevProps.isOpened) if (isOpened) this.mountPortal()
    }

    componentWillUnmount() {
      this.unmountPortal()
    }

    onOpen = () => {
      this.props.onOpen()
    }

    onClose = () => {
      this.props.onClose()
      this.unmountPortal()
    }

    getContentContainerNode() {
      if (!this.node) {
        this.node = document.createElement('div')
        this.node.style.position = 'absolute'
        this.node.style.zIndex = this.props.zIndex
        this.props.containerRef(this.node)
        document.body.appendChild(this.node)
      }
      return this.node
    }

    mountPortal() {
      this.setState({isOpened: true})
    }

    unmountPortal() {
      if (this.node) {
        this.props.containerRef()
        this.setState({isOpened: false})
        document.body.removeChild(this.node)
        this.node = null
      }
    }

    renderContent() {
      return (
        <Target {...this.props} onOpen={this.onOpen} onClose={this.onClose} />
      )
    }

    render() {
      if (!this.state.isOpened) return null
      return createPortal(this.renderContent(), this.getContentContainerNode())
    }
  }
}
