import React, { PureComponent } from 'react'
import SvgIcon from '../SvgIcon'

export default class ChevronLeftIcon extends PureComponent {

  static displayName = 'ChevronLeftIcon'

  render() {
    return (
      <SvgIcon { ...this.props } viewBox="0 0 10 10">
        <path d="M6.84 7.855c.08.08.08.21.007.283l-.714.714c-.076.076-.207.069-.28-.004L2.287 5.282a.41.41 0 0 1 0-.574l3.566-3.566a.201.201 0 0 1 .28-.004l.714.714c.076.076.075.2-.007.283l-2.86 2.86 2.86 2.86z" />
      </SvgIcon>
    )
  }

}
