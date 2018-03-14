import React, { PureComponent } from 'react'
import SvgIcon from '../SvgIcon'

export default class InfoIcon extends PureComponent {

  static displayName = 'InfoIcon'

  render() {
    return (
      <SvgIcon { ...this.props } viewBox="0 0 16 16">
        <path d="M7.25 11.75h1.5v-4.5h-1.5v4.5zM8 .5C3.86.5.5 3.86.5 8c0 4.14 3.36 7.5 7.5 7.5 4.14 0 7.5-3.36 7.5-7.5C15.5 3.86 12.14.5 8 .5zM8 14c-3.308 0-6-2.693-6-6 0-3.308 2.692-6 6-6 3.307 0 6 2.692 6 6 0 3.307-2.693 6-6 6zm-.75-8.25h1.5v-1.5h-1.5v1.5z" fillRule="evenodd" />
      </SvgIcon>
    )
  }

}
