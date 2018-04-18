import React, { PureComponent } from 'react'
import SvgIcon from '../SvgIcon'

export default class RamblerKlassIconBig extends PureComponent {

  static displayName = 'RamblerKlassIconBig'

  render() {
    return (
      <SvgIcon { ...this.props } viewBox="0 0 80 80">
        <path fill-rule="evenodd" d="M40 39.205l-22.83-9.802 22.704-10.174 22.916 10.19L40 39.206zm32.14-11.1l-31.254-13.9a2.504 2.504 0 0 0-2.038.004L7.844 28.104c-1.193.534-1.179 2.23.021 2.747l7.358 3.158v24.819a2.99 2.99 0 0 0 1.85 2.772c3.711 1.52 12.596 4.648 22.922 4.648 11.348 0 19.737-3.074 23.22-4.61a2.987 2.987 0 0 0 1.772-2.737V33.919l-5 2.146V57.58c-3.568 1.43-10.643 3.668-19.992 3.668-8.422 0-15.899-2.323-19.772-3.786V36.155l18.791 8.068c.63.27 1.342.27 1.972 0l31.136-13.368c1.203-.516 1.214-2.216.018-2.75z"/>
      </SvgIcon>
    )
  }
}
