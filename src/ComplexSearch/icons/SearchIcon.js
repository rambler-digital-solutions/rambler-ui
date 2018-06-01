import React, { PureComponent } from 'react'
import SvgIcon from '../../icons/SvgIcon'

export default class SearchIcon extends PureComponent {

  static displayName = 'SearchIcon'

  render() {
    return (
      <SvgIcon { ...this.props } viewBox="0 0 15 15">
        <path d="M14.495 12.798l-1.646-1.646-1.043-.905A6.469 6.469 0 0 0 13 6.5 6.5 6.5 0 1 0 6.5 13a6.459 6.459 0 0 0 3.746-1.194l.905 1.043 1.647 1.646a.499.499 0 0 0 .707 0l.99-.99a.5.5 0 0 0 0-.707M6.5 2C8.981 2 11 4.019 11 6.5 11 8.982 8.981 11 6.5 11A4.505 4.505 0 0 1 2 6.5C2 4.019 4.019 2 6.5 2M0 15V0m15 0v15"/>
      </SvgIcon>
    )
  }

}
