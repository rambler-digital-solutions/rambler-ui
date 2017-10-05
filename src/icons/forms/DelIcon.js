import React, { Component } from 'react'
import SvgIcon from '../SvgIcon'
import pure from 'recompose/pure'

@pure
export default class DelIcon extends Component {

  static displayName = 'DelIcon'

  render() {
    return (
      <SvgIcon { ...this.props } viewBox="0 0 15 15">
        <path fillRule="evenodd" d="M14.57 4.57l-.14-.14a.5.5 0 0 0-.708 0L10.5 7.651 7.277 4.43a.5.5 0 0 0-.707 0l-.14.141a.5.5 0 0 0 0 .707L9.651 8.5 6.43 11.722a.5.5 0 0 0 0 .707l.141.141a.5.5 0 0 0 .707 0L10.5 9.347l3.222 3.223a.5.5 0 0 0 .707 0l.141-.14a.5.5 0 0 0 0-.708L11.347 8.5l3.223-3.223a.5.5 0 0 0 0-.707M15 0v15M0 15V0" />
      </SvgIcon>
    )
  }
}
