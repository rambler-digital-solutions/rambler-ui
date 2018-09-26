import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {
  unmountComponentAtNode,
  unstable_renderSubtreeIntoContainer as renderSubtreeIntoContainer // eslint-disable-line camelcase
} from 'react-dom'

/**
 * Монтирует дерево оборачиваемого `Target` в отдельную ноду в DOM.
 *
 *  @renderToLayer
 *  class Popup extends Components {
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

    componentDidMount() {
      if (this.props.isOpened) this.mountPortal()
    }

    componentDidUpdate(prevProps) {
      const {isOpened} = this.props

      if (isOpened !== prevProps.isOpened)
        if (isOpened) this.mountPortal()
        else this.unmountPortal()
      else if (isOpened) this.renderPortal()
    }

    componentWillUnmount() {
      this.unmountPortal(true)
    }

    onOpen = () => {
      if (this.resolveOpening) this.resolveOpening()
    }

    onClose = () => {
      if (this.resolveClosing) this.resolveClosing()
    }

    mountPortal() {
      if (!this.node)
        new Promise(resolve => {
          this.node = document.createElement('div')
          this.node.style.position = 'absolute'
          this.node.style.zIndex = this.props.zIndex
          document.body.appendChild(this.node)
          this.props.containerRef(this.node)
          this.resolveOpening = resolve
          this.renderPortal()
        }).then(() => {
          this.resolveOpening = null
          this.props.onOpen()
        })
    }

    renderPortal() {
      if (this.node)
        renderSubtreeIntoContainer(this, this.renderContent(), this.node)
    }

    unmountPortal(force) {
      if (this.node)
        new Promise(resolve => {
          if (force) resolve()
          this.resolveClosing = resolve
          this.renderPortal()
        }).then(() => {
          unmountComponentAtNode(this.node)
          document.body.removeChild(this.node)
          this.node = null
          this.resolveClosing = null
          this.props.containerRef()
          this.props.onClose()
        })
    }

    renderContent() {
      return (
        <Target {...this.props} onOpen={this.onOpen} onClose={this.onClose} />
      )
    }

    render() {
      return null
    }
  }
}
