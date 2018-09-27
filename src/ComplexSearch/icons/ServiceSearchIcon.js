import React, {PureComponent} from 'react'
import SvgIcon from '../../icons/SvgIcon'

export default class ServiceSearchIcon extends PureComponent {
  static displayName = 'ServiceSearchIcon'

  render() {
    return (
      <SvgIcon {...this.props} viewBox="0 0 15 15">
        <path
          fillRule="evenodd"
          d="M0 15V0m15 0v15m-.929-1.778l-3.447-3.446c1.925-2.357 1.817-5.821-.381-8.019A5.984 5.984 0 0 0 6 0a5.984 5.984 0 0 0-4.379 1.898c-2.151 2.293-2.151 5.911 0 8.204A5.984 5.984 0 0 0 6 12c1.345 0 2.675-.477 3.776-1.376l3.446 3.447a.5.5 0 0 0 .707 0l.142-.142a.5.5 0 0 0 0-.707M6 1.2c1.282 0 2.488.499 3.394 1.406a4.804 4.804 0 0 1 0 6.788A4.766 4.766 0 0 1 6 10.8a4.768 4.768 0 0 1-3.394-1.406 4.804 4.804 0 0 1 0-6.788A4.766 4.766 0 0 1 6 1.2"
        />
      </SvgIcon>
    )
  }
}
