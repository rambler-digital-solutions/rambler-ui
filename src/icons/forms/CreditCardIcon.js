import React, {PureComponent} from 'react'
import SvgIcon from '../SvgIcon'

export default class CreditCardIcon extends PureComponent {
  static displayName = 'CreditCardIcon'

  render() {
    return (
      <SvgIcon {...this.props} viewBox="0 0 23 19">
        <path
          d="M21 6V3.992A1.996 1.996 0 0 0 19.003 2H3.997A1.993 1.993 0 0 0 2 3.992v11.016C2 16.107 2.894 17 3.997 17h15.006A1.993 1.993 0 0 0 21 15.008V7.3H2V6h19zM.5 3.992A3.493 3.493 0 0 1 3.997.5h15.006A3.496 3.496 0 0 1 22.5 3.992v11.016a3.493 3.493 0 0 1-3.497 3.492H3.997A3.496 3.496 0 0 1 .5 15.008V3.992zM4 12.5h5v1.3H4v-1.3zm7 0h3v1.3h-3v-1.3z"
          fillRule="evenodd"
        />
      </SvgIcon>
    )
  }
}
