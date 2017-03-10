import React, { Component } from 'react'
import SvgIcon from '../SvgIcon'
import pure from 'recompose/pure'

@pure
export default class Tick extends Component {

  static displayName = 'Галочка'

  render() {
    return (
      <SvgIcon { ...this.props } viewBox="0 0 10 10">
        <path d="M1.432 2.873L0 4.363l3.455 3.323.061.004 5.656-6.217L7.668 0l-4.26 4.817z" fillRule="evenodd" />
      </SvgIcon>
    )
  }

}
