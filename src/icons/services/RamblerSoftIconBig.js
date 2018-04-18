import React, { PureComponent } from 'react'
import SvgIcon from '../SvgIcon'

export default class RamblerSoftIconBig extends PureComponent {
  static displayName = 'RamblerSoftIconBig'

  render() {
    return (
      <SvgIcon { ...this.props } viewBox="0 0 80 80">
        <path fill-rule="evenodd" d="M38.216 58.347a2.5 2.5 0 0 0 3.582-.014l20.465-21.178a1.501 1.501 0 0 0-.037-2.121l-1.438-1.39a1.5 1.5 0 0 0-2.121.037L42.5 50.41V10.34a1.5 1.5 0 0 0-1.5-1.5h-2a1.5 1.5 0 0 0-1.5 1.5v40.138L20.989 33.658a1.5 1.5 0 0 0-2.121-.02l-1.428 1.4c-.59.58-.6 1.53-.02 2.122l20.796 21.187zm34.259-2.735V69.66a4 4 0 0 1-4 4h-56.95a4 4 0 0 1-4-4V55.612a1.5 1.5 0 0 1 1.5-1.5h2a1.5 1.5 0 0 1 1.5 1.5V68.66h54.95V55.612a1.5 1.5 0 0 1 1.5-1.5h2a1.5 1.5 0 0 1 1.5 1.5z"/>
      </SvgIcon>
    )
  }
}