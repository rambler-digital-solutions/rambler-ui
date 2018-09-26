import React, {PureComponent} from 'react'
import SvgIcon from '../SvgIcon'

export default class RamblerHeadIcon extends PureComponent {
  static displayName = 'RamblerHeadIcon'

  render() {
    return (
      <SvgIcon {...this.props} viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M20 0v20V0zM0 20V0v20zM3.349 6.694c-.221.19-.349.467-.349.759v7.54a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4h2v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-7.54c0-.292-.128-.569-.349-.759l-6-5.143a1 1 0 0 0-1.302 0l-6 5.143zM10 2.969l5.5 4.714v6.81h-3v-4a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v4h-3v-6.81L10 2.969z"
        />
      </SvgIcon>
    )
  }
}
