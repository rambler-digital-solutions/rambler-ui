import React, { PureComponent } from 'react'
import SvgIcon from '../SvgIcon'

export default class RamblerFinanceIconBig extends PureComponent {

  static displayName = 'RamblerFinanceIconBig'

  render() {
    return (
      <SvgIcon { ...this.props } viewBox="0 0 80 80">
        <path fillRule="evenodd" d="M5.539 62.085l-1.596-1.206a1.5 1.5 0 0 1-.293-2.101l15.16-20.07a2.5 2.5 0 0 1 3.698-.324l12.699 11.813 9.437-11.352a2.5 2.5 0 0 1 3.549-.3l5.873 5.035 18.288-25.31a1.5 1.5 0 0 1 2.094-.338l1.62 1.172c.673.485.824 1.423.338 2.094L56.528 48.709a2.5 2.5 0 0 1-3.653.435l-6.01-5.151-9.504 11.433a2.5 2.5 0 0 1-3.625.233L21.13 43.932 7.64 61.792c-.5.661-1.44.792-2.101.293"/>
      </SvgIcon>
    )
  }
}
