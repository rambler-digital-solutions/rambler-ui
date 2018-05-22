import React, { PureComponent } from 'react'
import SvgIcon from '../icons/SvgIcon'

export default class ServiceSearchIcon extends PureComponent {

  static displayName = 'ServiceSearchIcon'

  render() {
    return (
      <SvgIcon { ...this.props } viewBox="0 0 15 15">
        <path id="a" d="M0 15V0m15 0v15M1.481 12.013a8.944 8.944 0 0 1 5.385 2.171.974.974 0 0 0 1.268 0 8.944 8.944 0 0 1 5.385-2.171.498.498 0 0 0 .481-.493V5.521a.505.505 0 0 0-.523-.506A8.968 8.968 0 0 0 7.5 7.786a8.968 8.968 0 0 0-5.977-2.771.505.505 0 0 0-.523.506v5.999c0 .268.213.479.481.493M7.5 1a2 2 0 1 0-.001 3.999A2 2 0 0 0 7.5 1M0 15V0m15 0v15"/>
      </SvgIcon>
    )
  }
}
