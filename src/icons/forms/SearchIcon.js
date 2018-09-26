import React, {PureComponent} from 'react'
import SvgIcon from '../SvgIcon'

export default class SearchIcon extends PureComponent {
  static displayName = 'SearchIcon'

  render() {
    return (
      <SvgIcon {...this.props} viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M0 20V0m20 0v20M9 4.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9m7.116 12.677l-3.441-3.441a5.987 5.987 0 0 1-4.768 1.167c-2.524-.45-4.524-2.556-4.855-5.098a6.006 6.006 0 0 1 6.753-6.753c2.542.331 4.648 2.331 5.098 4.855a5.987 5.987 0 0 1-1.167 4.768l3.441 3.441a.5.5 0 0 1 0 .707l-.354.354a.5.5 0 0 1-.707 0"
        />
      </SvgIcon>
    )
  }
}
