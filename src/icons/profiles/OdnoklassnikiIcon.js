import React, { Component } from 'react'
import SvgIcon from '../SvgIcon'
import pure from 'recompose/pure'

@pure
export default class OdnoklassnikiIcon extends Component {

  static displayName = 'OdnoklassnikiIcon'

  render() {
    const fill = this.props.applyColor && this.props.color
    const resultFill = fill || '#f78408'

    return (
      <SvgIcon { ...this.props } viewBox="0 0 12 18">
        <path d="M5.556 2.605c1.014 0 1.84.825 1.84 1.84 0 1.014-.826 1.84-1.84 1.84a1.843 1.843 0 0 1-1.84-1.84c0-1.015.826-1.84 1.84-1.84zm0 6.284A4.448 4.448 0 0 0 10 4.445 4.45 4.45 0 0 0 5.556 0 4.45 4.45 0 0 0 1.11 4.445 4.449 4.449 0 0 0 5.556 8.89z" fill={resultFill} />
        <path d="M7.559 12.664a9.403 9.403 0 0 0 2.874-1.162c.678-.416.882-1.29.455-1.95a1.471 1.471 0 0 0-2-.446 6.42 6.42 0 0 1-6.665 0 1.47 1.47 0 0 0-2 .445 1.394 1.394 0 0 0 .454 1.951 9.415 9.415 0 0 0 2.875 1.162l-2.767 2.7a1.39 1.39 0 0 0 0 2c.284.275.654.414 1.025.414.372 0 .743-.139 1.027-.415l2.718-2.652 2.72 2.652a1.475 1.475 0 0 0 2.051 0 1.389 1.389 0 0 0 0-2l-2.767-2.7" fill={resultFill} />
      </SvgIcon>
    )
  }

}
