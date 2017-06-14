import React, { Component } from 'react'
import SvgIcon from '../SvgIcon'
import pure from 'recompose/pure'

@pure
export default class KeyboardIcon extends Component {

  static displayName = 'KeyboardIcon'

  render() {
    return (
      <SvgIcon { ...this.props } viewBox="0 0 20 12">
        <path d="M0 1.002C0 .45.455 0 .992 0h18.016c.548 0 .992.456.992 1.002v9.996c0 .553-.455 1.002-.992 1.002H.992C.444 12 0 11.544 0 10.998V1.002zM5 8v2h11V8H5zM2 5v2h3V5H2zm0-3v2h4V2H2zm5 0v2h2V2H7zm3 0v2h2V2h-2zm3 0v2h2V2h-2zm3 0v2h2V2h-2zM9 5v2h2V5H9zM6 5v2h2V5H6zm6 0v2h2V5h-2zm3 0v2h3V5h-3z" fillRule="evenodd" />
      </SvgIcon>
    )
  }

}
