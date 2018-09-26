import React, {PureComponent} from 'react'
import SvgIcon from '../SvgIcon'

export default class RssIcon extends PureComponent {
  static displayName = 'RssIcon'

  static defaultProps = {
    color: '#f26522'
  }

  render() {
    return (
      <SvgIcon {...this.props} viewBox="0 0 13 13">
        <path
          d="M16 15H-4m0-19h20M1.937 8.76c.93 0 1.685.734 1.685 1.641s-.755 1.643-1.685 1.643S.253 11.308.253 10.4s.754-1.64 1.684-1.64zm4.127 3.284h2.274c-.251-5-2.368-7.79-8.085-7.833 0 .842.08 1.684.08 2.527 4.24-.282 5.656 2.357 5.73 5.306zm3.79 0C9.9 6.235 6.894 2.795.168 2.442L0 0c7.813.108 12.516 4.417 12.465 12.044H9.854z"
          fillRule="evenodd"
        />
      </SvgIcon>
    )
  }
}
