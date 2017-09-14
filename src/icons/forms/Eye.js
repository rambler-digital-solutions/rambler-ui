import React, { Component } from 'react'
import SvgIcon from '../SvgIcon'
import pure from 'recompose/pure'

@pure
export default class Eye extends Component {

  static displayName = 'Eye'

  render() {
    return (
      <SvgIcon { ...this.props } viewBox="0 0 15 15">
        <path d="M0 7.5C1.264 4.264 4.144 2 7.5 2s6.236 2.264 7.5 5.5c-1.264 3.236-4.144 5.5-7.5 5.5S1.264 10.736 0 7.5zm13.677 0c-1.204-2.63-3.575-4.3-6.175-4.3-2.6 0-4.97 1.67-6.175 4.3 1.204 2.63 3.575 4.3 6.175 4.3 2.6 0 4.97-1.67 6.175-4.3zM5 7.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0zm1.58.92a1.3 1.3 0 1 0 1.84-1.84L6.58 8.42z" />
      </SvgIcon>
    )
  }

}
