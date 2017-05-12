import React, { Component, cloneElement } from 'react'
import {
  unmountComponentAtNode,
  unstable_renderSubtreeIntoContainer as renderSubtreeIntoContainer // eslint-disable-line camelcase
} from 'react-dom'
import uniqueId from 'lodash/uniqueId'

export default function provideSnackbar(Target) {

  return class ProvideSnackbar extends Component {

    elements = []

    componentWillUnmount() {
      this.elements = []
      this.unrenderContainer()
    }

    openSnackbar = element => {
      const snackbar = {}
      const key = uniqueId()
      const close = () => this.removeSnackbar(snackbar)

      snackbar.element = cloneElement(element, {
        key,
        isOpened: true,
        onRequestClose: close
      })

      snackbar.close = close

      this.elements.push(snackbar.element)
      this.renderContainer()

      return snackbar
    }

    closeSnackbar= snackbar => {
      snackbar.close()
    }

    removeSnackbar = snackbar => {
      const elementIndex = this.elements.indexOf(snackbar.element)

      if (elementIndex < 0) return

      return new Promise(resolve => {
        const { containerRef } = snackbar.element.props

        const closedElement = cloneElement(snackbar.element, {
          isOpened: false,
          containerRef: ref => {
            resolve()
            containerRef(ref)
          }
        })

        this.elements[elementIndex] = closedElement
        this.renderContainer()

        return closedElement
      }).then(element => {
        this.elements = this.elements.filter(el => el !== element)
        this.renderContainer()
      })
    }

    renderContainer() {
      if (this.elements.length > 0) {
        if (!this.node) {
          this.node = document.createElement('div')
          document.body.appendChild(this.node)
        }

        const listElement = (
          <div>{this.elements}</div>
        )

        renderSubtreeIntoContainer(
          this,
          listElement,
          this.node
        )
      } else {
        this.unrenderContainer()
      }
    }

    unrenderContainer() {
      if (this.node) {
        unmountComponentAtNode(this.node)
        document.body.removeChild(this.node)
        this.node = null
      }
    }

    render() {
      return (
        <Target
          {...this.props}
          openSnackbar={this.openSnackbar}
          closeSnackbar={this.closeSnackbar} />
      )
    }

  }

}
