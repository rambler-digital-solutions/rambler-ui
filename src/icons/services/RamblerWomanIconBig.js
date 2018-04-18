import React, { PureComponent } from 'react'
import SvgIcon from '../SvgIcon'

export default class RamblerWomanIconBig extends PureComponent {

  static displayName = 'RamblerWomanIconBig'

  render() {
    return (
      <SvgIcon { ...this.props } viewBox="0 0 80 80">
        <path fillRule="evenodd" d="M59.617 53.81H20.3l-4.522-28.986 9.829 7.049 2.348 1.683a2.5 2.5 0 0 0 3.677-.881l1.329-2.565 7.04-13.589 7.041 13.589 1.334 2.574a2.5 2.5 0 0 0 3.684.877l2.35-1.699 9.778-7.066-4.572 29.014zm-2.023 12.838h-35.29L21.08 58.81h37.748l-1.236 7.838zm9.51-50.127L51.483 27.81 41.778 9.08c-.745-1.44-2.806-1.44-3.551 0l-9.705 18.73-15.644-11.22c-1.441-1.034-3.415.181-3.143 1.934l7.76 49.74a4 4 0 0 0 3.953 3.384h37a4 4 0 0 0 3.95-3.378l7.853-49.817c.277-1.757-1.705-2.974-3.147-1.932z"/>
      </SvgIcon>
    )
  }
}
