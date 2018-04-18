import React, { PureComponent } from 'react'
import SvgIcon from '../SvgIcon'

export default class RamblerDoctorIconBig extends PureComponent {

  static displayName = 'RamblerDoctorIconBig'

  render() {
    return (
      <SvgIcon { ...this.props } viewBox="0 0 80 80">
        <path fillRule="evenodd" d="M25.95 48.736v-1a2 2 0 0 1 2-2h9.55v-9.542a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v9.542h9.55a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H42.5v9.557a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-9.557h-9.55a2 2 0 0 1-2-2zM11.32 68.66h57.362V27.812H11.32V68.66zm11.31-45.848h35.114V11.208H22.63v11.604zm47.052 0h-7.07V10.34a4 4 0 0 0-4-4h-36.85a4 4 0 0 0-4 4v12.47H10.32a4 4 0 0 0-4 4V69.66a4 4 0 0 0 4 4h59.363a4 4 0 0 0 4-4V26.812a4 4 0 0 0-4-4z"/>
      </SvgIcon>
    )
  }
}
