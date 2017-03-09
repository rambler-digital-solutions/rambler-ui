import React, { Component } from 'react'
import SvgIcon from '../SvgIcon'
import pure from 'recompose/pure'

@pure
export default class AddIcon extends Component {

  static displayName = 'AddIcon'

  render() {
    return (
      <SvgIcon { ...this.props } viewBox="0 0 9 9">
        <path d="M5.5 3.5V0h-2v3.5H0v2h3.5V9h2V5.5H9v-2H5.5z" fillRule="evenodd" />
      </SvgIcon>
    )
  }

}
