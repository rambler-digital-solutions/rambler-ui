import React, {PureComponent} from 'react'
import SvgIcon from '../SvgIcon'

export default class BookIcon extends PureComponent {
  static displayName = 'BookIcon'

  render() {
    return (
      <SvgIcon {...this.props} viewBox="0 0 21 20">
        <path
          d="M10 4.416l-8-2.4v13.868l8 2.4V4.416zm1.3-.09v13.868l7.7-2.31V2.016l-7.7 2.31zM.5 0l10 3 10-3v17l-10 3-10-3V0z"
          fillRule="evenodd"
        />
      </SvgIcon>
    )
  }
}
