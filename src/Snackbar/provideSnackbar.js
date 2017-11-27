import React, { Component } from 'react'
import omit from 'lodash/omit'
import provideRenderToLayer from '../hoc/provide-render-to-layer'

export default function provideSnackbar(Target) {

  @provideRenderToLayer
  class ProvideSnackbar extends Component {

    openSnackbar = (element) => {
      const snackbar = {}

      const close = () => {
        this.props.unrenderAtLayer(snackbar.element)
      }

      snackbar.element = this.props.renderToLayer(element, {
        onRequestClose: close
      })

      snackbar.close = close
      return snackbar
    }

    closeSnackbar = (snackbar) => {
      snackbar.close()
    }

    render() {
      const props = omit(this.props, 'renderToLayer', 'unrenderAtLayer')

      return (
        <Target
          {...props}
          openSnackbar={this.openSnackbar}
          closeSnackbar={this.closeSnackbar} />
      )
    }

  }

  return ProvideSnackbar

}
