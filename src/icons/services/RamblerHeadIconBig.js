import React, { PureComponent } from 'react'
import SvgIcon from '../SvgIcon'

export default class RamblerHeadIconBig extends PureComponent {

  static displayName = 'RamblerHeadIconBig'

  render() {
    return (
      <SvgIcon { ...this.props } viewBox="0 0 80 80">
        <path fillRule="evenodd" d="M68.536 34.596A5 5 0 0 1 70 38.131V69.4a4.6 4.6 0 0 1-4.6 4.6H49.6a4.6 4.6 0 0 1-4.6-4.6V51H35v18.4a4.6 4.6 0 0 1-4.6 4.6H14.6a4.6 4.6 0 0 1-4.6-4.6V38.131a5 5 0 0 1 1.464-3.535l26.768-26.77a2.501 2.501 0 0 1 3.536 0l.354.354 26.414 26.416zM65 38.13l-25-25-25 25V69h15V50.6a4.6 4.6 0 0 1 4.6-4.6h10.8a4.6 4.6 0 0 1 4.6 4.6V69h15V38.13z"/>
      </SvgIcon>
    )
  }
}
