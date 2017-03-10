import React, { Component } from 'react'
import SvgIcon from '../SvgIcon'
import pure from 'recompose/pure'

@pure
export default class PhoneIcon extends Component {

  static displayName = 'PhoneIcon'

  render() {
    return (
      <SvgIcon { ...this.props } viewBox="0 0 12 18">
        <path d="M0 18V0h12v18H0zM2 2h8v10H2V2zm3 12h2v2H5v-2z" fill="#262626" fillRule="evenodd" />
      </SvgIcon>
    )
  }

}
