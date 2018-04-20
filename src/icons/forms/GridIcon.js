import React, { PureComponent } from 'react'
import SvgIcon from '../SvgIcon'

export default class GridIcon extends PureComponent {

  static displayName = 'GridIcon'

  render() {
    return (
      <SvgIcon { ...this.props } viewBox="0 0 15 15">
        <path d="M0 15V0v15zM15 0v15V0zm-1 11h-3v3h2a1 1 0 0 0 1-1v-2zm-8 3h3v-3H6v3zm-2-3H1v2a1 1 0 0 0 1 1h2v-3zM1 9h3V6H1v3zm5 0h3V6H6v3zm5 0h3V6h-3v3zm2-8h-2v3h3V2a1 1 0 0 0-1-1zM6 4h3V1H6v3zM4 4H1V2a1 1 0 0 1 1-1h2v3z"/>
      </SvgIcon>
    )
  }
}
