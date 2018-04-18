import React, { PureComponent } from 'react'
import SvgIcon from '../SvgIcon'

export default class RamblerNewsIcon extends PureComponent {

  static displayName = 'RamblerNewsIcon'

  render() {
    return (
      <SvgIcon { ...this.props } viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M11 14.25v-.5a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5v.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5m6-4v-.5a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5v.5a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5m0-4v-.5a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5v.5a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5M20 0v20M0 20V0"/>
      </SvgIcon>
    )
  }
}
