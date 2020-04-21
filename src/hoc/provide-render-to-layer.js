import React, {Component, cloneElement} from 'react'
import {createPortal} from 'react-dom'
import uuid from '../utils/uuid'

/**
 * Предоставляет в оборачиваемый `Target` методы монтирования/размонтирования в отделную ноду в DOM.
 *
 *  @provideRenderToLayer
 *  class Popup extends Component {
 *
 *    openPopup = () => {
 *      this.popupElement = this.props.renderToLayer(
 *        <div>
 *          <button onClick={this.closePopup}>
 *            Закрыть попап
 *          </button>
 *        </div>
 *      )
 *    }
 *
 *    closePopup = () => {
 *      this.props.unrenderAtLayer(this.popupElement)
 *    }
 *
 *    render() {
 *      return (
 *        <button onClick={this.openPopup}>
 *          Открыть попап
 *        </button>
 *      )
 *    }
 *
 *  }
 *
 * Передает в оборачиваемый компонент следующие props:
 * - renderToLayer(element) - монтирует переданный `element` в отделную ноду
 * - unrenderAtLayer(element) - размонтирует `element`
 */
export default function provideRenderToLayer(Target) {
  return class ProvideRenderToLayer extends Component {
    elements = []

    state = {
      isOpened: false
    }

    componentWillUnmount() {
      this.elements = []
      this.unmountPortal()
    }

    renderToLayer = (element, props) => {
      const key = uuid()

      const resultElement = cloneElement(element, {
        ...props,
        key,
        isOpened: true
      })

      this.elements.push(resultElement)
      this.mountPortal()

      return resultElement
    }

    unrenderAtLayer = element => {
      const elementIndex = this.elements.indexOf(element)
      if (elementIndex < 0) return Promise.resolve()
      return new Promise(resolve => {
        const {containerRef} = element.props

        const closedElement = cloneElement(element, {
          isOpened: false,
          containerRef: ref => {
            if (containerRef) containerRef(ref)
            resolve(closedElement)
          }
        })

        this.elements[elementIndex] = closedElement
        this.mountPortal()
      }).then(closedElement => {
        this.elements = this.elements.filter(el => el !== closedElement)
        if (this.elements.length === 0) this.unmountPortal()
      })
    }

    getContentContainerNode() {
      if (!this.node) {
        this.node = document.createElement('div')
        document.body.appendChild(this.node)
      }
      return this.node
    }

    mountPortal() {
      this.setState({isOpened: true})
    }

    unmountPortal() {
      if (this.node) {
        this.setState({isOpened: false})
        document.body.removeChild(this.node)
        this.node = null
      }
    }

    render() {
      return (
        <>
          <Target
            {...this.props}
            renderToLayer={this.renderToLayer}
            unrenderAtLayer={this.unrenderAtLayer}
          />
          {this.state.isOpened &&
            createPortal(<>{this.elements}</>, this.getContentContainerNode())}
        </>
      )
    }
  }
}
