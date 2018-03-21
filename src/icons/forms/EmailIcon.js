import React, { PureComponent } from 'react'
import SvgIcon from '../SvgIcon'

export default class EmailIcon extends PureComponent {

  static displayName = 'EmailIcon'

  render() {
    return (
      <SvgIcon { ...this.props } viewBox="0 0 19 15">
        <path d="M0 0h19v15H0V0zm1.5 13.5h16v-12h-16v12zm2-6.5h6v1.3h-6V7zm0 3h6v1.3h-6V10zm9-6.5h3v3h-3v-3z" fillRule="evenodd" />
      </SvgIcon>
    )
  }

}
