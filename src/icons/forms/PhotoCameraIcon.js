import React, { Component } from 'react'
import SvgIcon from '../SvgIcon'
import pure from 'recompose/pure'

@pure
export default class PhotoCameraIcon extends Component {

  static displayName = 'PhotoCameraIcon'

  render() {
    return (
      <SvgIcon { ...this.props } viewBox="0 0 11 9">
        <path d="M4 0h3l.915 1H9.5c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1h-8c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h1.585L4 0zm1.5 6.6a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2zm0 .9a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 0 0 5z" fillRule="evenodd" />
      </SvgIcon>
    )
  }

}
