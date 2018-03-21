import React, { PureComponent } from 'react'
import SvgIcon from '../SvgIcon'

export default class SearchIcon extends PureComponent {

  static displayName = 'SearchIcon'

  render() {
    return (
      <SvgIcon { ...this.props } viewBox="0 0 12 12">
        <path fillRule="nonzero" d="M8.168 7.107l3.007 3.008a.499.499 0 0 1-.004.714l-.342.342a.501.501 0 0 1-.714.004L7.107 8.168a4.5 4.5 0 1 1 1.06-1.06zM4.5 7.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
      </SvgIcon>
    )
  }

}
