import React, { PureComponent } from 'react'
import SvgIcon from '../SvgIcon'

export default class RamblerVideoIconBig extends PureComponent {

  static displayName = 'RamblerVideoIconBig'

  render() {
    return (
      <SvgIcon { ...this.props } viewBox="0 0 80 80">
        <path fill-rule="evenodd" d="M16.143 71.242l51.64-29.062c1.699-.956 1.698-3.403-.002-4.358L16.074 8.76c-1.668-.938-3.727.269-3.724 2.182l.066 58.125c.003 1.91 2.06 3.113 3.727 2.175m1.212-56.027l44.102 24.788L17.41 64.79l-.056-49.576"/>
      </SvgIcon>
    )
  }
}
