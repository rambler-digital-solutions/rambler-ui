import React, { PureComponent } from 'react'
import SvgIcon from '../SvgIcon'

export default class EllipsisIcon extends PureComponent {

  static displayName = 'EllipsisIcon'

  render() {
    return (
      <SvgIcon { ...this.props } viewBox="0 0 15 15">
        <path d="M1.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
      </SvgIcon>
    )
  }

}
