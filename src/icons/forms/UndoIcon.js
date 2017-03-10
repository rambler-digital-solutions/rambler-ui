import React, { Component } from 'react'
import SvgIcon from '../SvgIcon'
import pure from 'recompose/pure'

@pure
export default class UndoIcon extends Component {

  static displayName = 'UndoIcon'

  render() {
    return (
      <SvgIcon { ...this.props } viewBox="0 0 14 6">
        <path d="M7.181.667c-1.812 0-3.454.66-4.719 1.733L0 0v6h6.155L3.68 3.587A5.524 5.524 0 0 1 7.18 2.333c2.421 0 4.48 1.54 5.198 3.667L14 5.48C13.05 2.687 10.362.667 7.181.667z" fillRule="nonzero" />
      </SvgIcon>
    )
  }

}
