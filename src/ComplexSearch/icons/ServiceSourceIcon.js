import React, { PureComponent } from 'react'
import SvgIcon from '../../icons/SvgIcon'

export default class ServiceSourceIcon extends PureComponent {

  static displayName = 'ServiceSourceIcon'

  render() {
    return (
      <SvgIcon { ...this.props } viewBox="0 0 20 20">
        <path fillRule="nonzero" d="M4 14c2.32 0 4.427.951 6 2.5 1.573-1.549 3.68-2.5 6-2.5V7c-2.32 0-4.427.951-6 2.5C8.427 7.951 6.32 7 4 7v7zm6-7c1.107 0 2-.893 2-2s-.893-2-2-2-2 .893-2 2 .893 2 2 2z"/>
      </SvgIcon>
    )
  }
}
