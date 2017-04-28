import React, { Component } from 'react'
import SvgIcon from '../SvgIcon'
import pure from 'recompose/pure'

@pure
export default class ClearIcon extends Component {

  static displayName = 'ClearIcon'

  render() {
    return (
      <SvgIcon { ...this.props } viewBox="0 0 16 16">
        <path d="M.929 2.343L2.343.93l12.728 12.728-1.414 1.414z" fillRule="evenodd" />
        <path d="M13.657.929l1.414 1.414L2.343 15.071.93 13.657z" fillRule="evenodd" />
      </SvgIcon>
    )
  }

}
