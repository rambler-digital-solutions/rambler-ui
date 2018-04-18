import React, { PureComponent } from 'react'
import SvgIcon from '../SvgIcon'

export default class RamblerGamesIconBig extends PureComponent {

  static displayName = 'RamblerGamesIconBig'

  render() {
    return (
      <SvgIcon { ...this.props } viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M53.16 34.401a4.2 4.2 0 1 1-8.398 0 4.2 4.2 0 0 1 8.398 0zm-15.922 0a4.2 4.2 0 1 1-8.398 0 4.2 4.2 0 0 1 8.398 0zm27.19 32.548l-7.1-7.843-1.643-1.815a2.501 2.501 0 0 0-3.493-.21l-1.848 1.605-9.379 8.137-9.452-8.094-1.857-1.588a2.499 2.499 0 0 0-3.487.23l-1.63 1.818-6.966 7.768V35.002c0-12.917 10.51-23.426 23.427-23.426s23.427 10.509 23.427 23.426v31.947zM41 6.576c-15.7 0-28.427 12.727-28.427 28.426v34.422a4 4 0 0 0 4 4h.131a4.007 4.007 0 0 0 2.98-1.329l8.577-9.568 11.09 9.495c.94.806 2.33.801 3.263-.01l11.006-9.55 8.734 9.646a3.994 3.994 0 0 0 2.964 1.316h.11a4 4 0 0 0 4-4V35.002C69.427 19.303 56.698 6.576 41 6.576z"/>
      </SvgIcon>
    )
  }
}
