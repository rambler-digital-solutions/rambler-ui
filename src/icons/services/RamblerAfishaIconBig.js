import React, { PureComponent } from 'react'
import SvgIcon from '../SvgIcon'

export default class RamblerAfishaIconBig extends PureComponent {

  static displayName = 'RamblerAfishaIconBig'

  render() {
    return (
      <SvgIcon { ...this.props } viewBox="0 0 80 80">
        <path fillRule="evenodd" d="M7 20.944v38.112a4 4 0 0 0 4 4h57.46c1.97 0 3.166-2.172 2.113-3.837L58.415 40l12.158-19.219c1.053-1.665-.143-3.837-2.113-3.837H11a4 4 0 0 0-4 4m56.921 1L54.19 37.327l-.676 1.069a3.003 3.003 0 0 0 0 3.208l.676 1.069 9.732 15.383h-51.92V21.944h51.92"/>
      </SvgIcon>
    )
  }
}
