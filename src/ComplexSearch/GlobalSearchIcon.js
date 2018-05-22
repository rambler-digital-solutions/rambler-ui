import React, { PureComponent } from 'react'
import SvgIcon from '../icons/SvgIcon'

export default class GlobalSearchIcon extends PureComponent {

  static displayName = 'GlobalSearchIcon'

  render() {
    return (
      <SvgIcon { ...this.props } viewBox="0 0 15 15">
        <path id="a" d="M11.991 11.911A1.996 1.996 0 0 0 10 10V9a1 1 0 0 0-1-1H4V5h2a1 1 0 0 0 1-1V3h1c.869 0 1.601-.557 1.877-1.331C12.175 2.61 13.8 4.868 13.8 7.5a6.277 6.277 0 0 1-1.809 4.411M1.2 7.5c0-.405.042-.8.116-1.184L5 10a2 2 0 0 0 2 2h1v1.775a6.34 6.34 0 0 1-.5.025 6.307 6.307 0 0 1-6.3-6.3M7.5 0a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15"/>
      </SvgIcon>
    )
  }
}
