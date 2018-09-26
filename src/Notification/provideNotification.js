import React, {Component} from 'react'
import provideRenderToLayer from '../hoc/provide-render-to-layer'

export default function provideNotification(Target) {
  @provideRenderToLayer
  class ProvideNotification extends Component {
    openNotification = element => {
      const notification = {}

      const close = () => {
        this.props.unrenderAtLayer(notification.element)
      }

      notification.element = this.props.renderToLayer(element, {
        onRequestClose: close
      })

      notification.close = close
      return notification
    }

    closeNotification = notification => {
      notification.close()
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
          openNotification={this.openNotification}
          closeNotification={this.closeNotification}
        />
      )
    }
  }

  return ProvideNotification
}
