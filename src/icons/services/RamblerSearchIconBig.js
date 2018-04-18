import React, { PureComponent } from 'react'
import SvgIcon from '../SvgIcon'

export default class RamblerSearchIconBig extends PureComponent {

  static displayName = 'RamblerSearchIconBig'

  render() {
    return (
      <SvgIcon { ...this.props } viewBox="0 0 80 80">
        <path fill-rule="evenodd" d="M13.323 34.984c0-12.185 9.914-22.098 22.099-22.098S57.52 22.8 57.52 34.984c0 12.186-9.914 22.1-22.1 22.1-12.184 0-22.098-9.914-22.098-22.1m59.062 34.302l-16.522-16.52a26.986 26.986 0 0 0 6.658-17.782c0-14.965-12.132-27.098-27.1-27.098-14.965 0-27.098 12.133-27.098 27.098 0 14.967 12.133 27.1 27.099 27.1 6.36 0 12.203-2.196 16.826-5.864L68.85 72.821a1.5 1.5 0 0 0 2.12 0l1.415-1.414a1.5 1.5 0 0 0 0-2.12"/>
      </SvgIcon>
    )
  }
}
