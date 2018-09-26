import React, {PureComponent} from 'react'
import SvgIcon from '../SvgIcon'

export default class RamblerLiveIcon extends PureComponent {
  static displayName = 'RamblerLiveIcon'

  render() {
    return (
      <SvgIcon {...this.props} viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M10.09 7.496a1.33 1.33 0 0 1 0 2.658 1.33 1.33 0 0 1 0-2.658zm0 3.89a2.56 2.56 0 1 0-.002-5.12 2.56 2.56 0 0 0 .001 5.12zm-4.1 4.91l.953-1.895a6.37 6.37 0 0 0 6.358-.04l.931 1.934H5.99zm-.885-7.47a4.989 4.989 0 0 1 4.984-4.984 4.99 4.99 0 0 1 4.984 4.983 4.99 4.99 0 0 1-4.984 4.984 4.99 4.99 0 0 1-4.984-4.984zm9.356 4.67a6.377 6.377 0 0 0 2.034-4.67 6.405 6.405 0 0 0-12.81 0c0 1.874.81 3.556 2.094 4.728l-1.577 3.133a.71.71 0 0 0 .635 1.03h10.526a.71.71 0 0 0 .64-1.02l-1.542-3.2z"
        />
      </SvgIcon>
    )
  }
}
