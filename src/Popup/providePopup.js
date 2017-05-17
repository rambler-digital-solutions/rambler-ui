/**
 * HOC попапа
 */

import React, { Component } from 'react'
import provideRenderToLayer from '../hoc/provide-render-to-layer'

export default function providePopup(Target) {

  @provideRenderToLayer
  class ProvidePopup extends Component {

    openPopup = createElement => {
      const popup = {}

      let onOpen
      let onResolve
      let onReject

      popup.opened = new Promise(resolve => {
        onOpen = resolve
      })

      popup.closed = new Promise((resolve, reject) => {
        onResolve = arg => {
          this.props.unrenderAtLayer(popup.element).then(() => {
            resolve(arg)
          })
        }

        onReject = arg => {
          this.props.unrenderAtLayer(popup.element).then(() => {
            reject(arg)
          })
        }
      })

      popup.element = this.props.renderToLayer(
        createElement(onResolve, onReject),
        {
          onOpen,
          onRequestClose: onReject
        }
      )

      popup.close = onReject
      return popup
    }

    closePopup = popup => {
      popup.close()
    }

    render() {
      return (
        <Target
          {...this.props}
          openPopup={this.openPopup}
          closePopup={this.closePopup} />
      )
    }

  }

  return ProvidePopup

}
