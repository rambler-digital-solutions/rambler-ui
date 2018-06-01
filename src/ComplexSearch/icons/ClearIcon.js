import React, { PureComponent } from 'react'
import SvgIcon from '../../icons/SvgIcon'

export default class ClearIcon extends PureComponent {

  static displayName = 'ClearIcon'

  render() {
    return (
      <SvgIcon { ...this.props } viewBox="0 0 20 20">
        <path  fillRule="nonzero" d="M10 8.94L4.89 3.828a.504.504 0 0 0-.719 0l-.342.342a.5.5 0 0 0 0 .718L8.939 10l-5.11 5.11a.504.504 0 0 0 0 .719l.342.342a.5.5 0 0 0 .718 0L10 11.061l5.11 5.11a.504.504 0 0 0 .719 0l.342-.342a.5.5 0 0 0 0-.718L11.061 10l5.11-5.11a.504.504 0 0 0 0-.719l-.342-.342a.5.5 0 0 0-.718 0L10 8.939v.001z"/>
      </SvgIcon>
    )
  }

}
