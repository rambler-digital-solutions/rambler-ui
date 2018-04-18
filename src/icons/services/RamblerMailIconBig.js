import React, { PureComponent } from 'react'
import SvgIcon from '../SvgIcon'

export default class RamblerMailIconBig extends PureComponent {

  static displayName = 'RamblerMailIconBig'

  render() {

    return (
      <SvgIcon { ...this.props } viewBox="0 0 80 80">
        <path fillRule="evenodd" d="M13.156 58.977V35.048l25.984 9.884a2.997 2.997 0 0 0 2.16-.011l25.96-10.168v24.224H13.157zM67.26 21.023v8.36L40.195 39.984l-27.04-10.285v-8.676h54.106zm1-5H12.156a4 4 0 0 0-4 4v39.954a4 4 0 0 0 4 4H68.26a4 4 0 0 0 4-4V20.023a4 4 0 0 0-4-4z"/>
      </SvgIcon>
    )
  }

}
