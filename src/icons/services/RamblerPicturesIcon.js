import React, {PureComponent} from 'react'
import SvgIcon from '../SvgIcon'

export default class RamblerPicturesIcon extends PureComponent {
  static displayName = 'RamblerPicturesIcon'

  render() {
    return (
      <SvgIcon {...this.props} viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M5.834 7.739a.961.961 0 1 1 1.923 0 .961.961 0 0 1-1.923 0zm-2.443 7.29v-.906l2.982-2.134 2.978 2.139a.75.75 0 0 0 1.067-.197l2.944-4.486 3.216 4.323v1.261H3.39zM16.578 4.971v6.406L13.93 7.819a.751.751 0 0 0-1.231.036l-3.088 4.706-2.798-2.011a.751.751 0 0 0-.877-.001L3.391 12.37V4.971h13.187zm.42-1.418H2.971a1 1 0 0 0-1.002 1v10.895c0 .552.449 1 1.002 1h14.025c.552 0 1.002-.448 1.002-1V4.553c0-.553-.45-1-1.002-1z"
        />
      </SvgIcon>
    )
  }
}
