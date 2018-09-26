import React, {PureComponent} from 'react'
import SvgIcon from '../icons/SvgIcon'

export default class TickIconSmall extends PureComponent {
  static displayName = 'ClearIconSmall'

  /* eslint-disable max-len */
  render() {
    return (
      <SvgIcon {...this.props} viewBox="0 0 15 15">
        <path
          d="M0 15V0v15zM15 0v15V0zM8.348 7.5l3.223 3.222a.5.5 0 0 1-.001.708l-.141.141a.5.5 0 0 1-.707-.001L7.5 8.348 4.278 11.57a.5.5 0 0 1-.707.001l-.141-.141a.5.5 0 0 1-.001-.708L6.652 7.5 3.429 4.278a.5.5 0 0 1 .001-.708l.141-.141a.5.5 0 0 1 .707.001L7.5 6.652l3.222-3.222a.5.5 0 0 1 .707-.001l.141.141a.5.5 0 0 1 .001.708L8.348 7.5z"
          fillRule="evenodd"
        />
      </SvgIcon>
    )
  }
}
