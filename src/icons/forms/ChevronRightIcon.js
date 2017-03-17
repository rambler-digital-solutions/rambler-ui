import React, { Component } from 'react'
import SvgIcon from '../SvgIcon'
import pure from 'recompose/pure'

@pure
export default class ChevronRightIcon extends Component {

  static displayName = 'ChevronRightIcon'

  render() {
    return (
      <SvgIcon { ...this.props } viewBox="0 0 6 9">
        <path d="M0 7.815l1.138 1.192 4.375-4.503-.675-.695L1.138 0 0 1.151l3.257 3.332z" fillRule="evenodd" />
      </SvgIcon>
    )
  }

}
