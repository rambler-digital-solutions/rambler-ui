import React, { Component } from 'react'
import SvgIcon from '../SvgIcon'
import pure from 'recompose/pure'

@pure
export default class RemoveIcon extends Component {

  static displayName = 'RemoveIcon'

  render() {
    return (
      <SvgIcon { ...this.props } viewBox="0 0 15 15">
        <path d="M6.1 5.2v6.297c0 .27-.225.503-.502.503h-.196a.507.507 0 0 1-.502-.503V5.2H2.2v8.6h10.6V5.2h-2.7v6.297c0 .27-.225.503-.502.503h-.196a.507.507 0 0 1-.502-.503V5.2H6.1zM1 14.004V4.51c0-.282.226-.51.494-.51h12.012c.273 0 .494.228.494.51v9.494c0 .551-.447.996-.999.996H2A.997.997 0 0 1 1 14.004zM2.2 2.2v.307A.496.496 0 0 1 1.698 3h-.196A.505.505 0 0 1 1 2.5V2c0-.556.447-1 .999-1H13A1 1 0 0 1 14 2v.5c0 .268-.225.5-.502.5h-.196a.502.502 0 0 1-.502-.493V2.2H2.2z" />
      </SvgIcon>
    )
  }

}
