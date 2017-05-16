import React, { Component, PropTypes } from 'react'
import {
  unmountComponentAtNode,
  unstable_renderSubtreeIntoContainer as renderSubtreeIntoContainer // eslint-disable-line camelcase
} from 'react-dom'

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
    };

    static defaultProps = {
      isOpened: false,
      onOpen: () => {},
      onClose: () => {},
      containerRef: () => {}
    };

    componentDidMount() {
      if (this.props.isOpened) this.mountPortal()
    }

    componentDidUpdate(prevProps) {
      const { isOpened } = this.props

      if (isOpened !== prevProps.isOpened)
        if (isOpened)
          this.mountPortal()
        else
          this.unmountPortal()

      else if (isOpened)
        this.renderPortal()
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
          this.renderPortal()
          this.resolveOpening = resolve
        }).then(() => {
          this.resolveOpening = null
          this.props.onOpen()
        })
    }

    renderPortal() {
      if (this.node)
        renderSubtreeIntoContainer(
          this,
          this.renderContent(),
          this.node
        )
    }

    unmountPortal(force) {
      if (this.node)
        new Promise(resolve => {
          if (force) resolve()
          this.renderPortal()
          this.resolveClosing = resolve
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
        <Target
          {...this.props}
          onOpen={this.onOpen}
          onClose={this.onClose} />
      )
    }

    render() {
      return null
    }

  }

}

