import React, { Component } from 'react'
import SvgIcon from '../SvgIcon'
import pure from 'recompose/pure'

@pure
export default class RefreshIcon extends Component {

  static displayName = 'RefreshIcon'

  render() {
    return (
      <SvgIcon { ...this.props } viewBox="0 0 12 12">
        <path d="M10.238 1.763A5.968 5.968 0 0 0 6 0 5.992 5.992 0 0 0 .008 6c0 3.315 2.677 6 5.992 6a5.987 5.987 0 0 0 5.797-4.5h-1.56A4.493 4.493 0 0 1 6 10.5 4.504 4.504 0 0 1 1.5 6c0-2.482 2.018-4.5 4.5-4.5 1.245 0 2.355.518 3.165 1.335L6.75 5.25H12V0l-1.762 1.763z" fillRule="evenodd" />
      </SvgIcon>
    )
  }

}
