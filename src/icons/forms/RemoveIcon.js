import React, { Component } from 'react'
import SvgIcon from '../SvgIcon'
import pure from 'recompose/pure'

@pure
export default class RemoveIcon extends Component {

  static displayName = 'RemoveIcon'

  render() {
    return (
      <SvgIcon { ...this.props } viewBox="0 0 9 3">
        <path d="M0 .75h9v2H0z" fillRule="evenodd" />
      </SvgIcon>
    )
  }

}
