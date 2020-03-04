import React, {Component} from 'react'
import provideRenderToLayer from '../hoc/provide-render-to-layer'

export default function provideSnackbar(Target) {
  class ProvideSnackbar extends Component {
    openSnackbar = element => {
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

    closeSnackbar = snackbar => {
      snackbar.close()
    }

    render() {
      const {
        renderToLayer, // eslint-disable-line no-unused-vars
        unrenderAtLayer, // eslint-disable-line no-unused-vars
        ...props
      } = this.props

      return (
        <Target
          {...props}
          openSnackbar={this.openSnackbar}
          closeSnackbar={this.closeSnackbar}
        />
      )
    }
  }

  return provideRenderToLayer(ProvideSnackbar)
}
