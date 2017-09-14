import React, { Component } from 'react'
import SvgIcon from '../SvgIcon'
import pure from 'recompose/pure'

@pure
export default class ClosedEyeIcon extends Component {

  static displayName = 'ClosedEyeIcon'

  render() {
    return (
      <SvgIcon { ...this.props } viewBox="0 0 15 15">
        <path d="M8.792 5.36l3-3.001a.4.4 0 0 1 .567 0l.282.282a.4.4 0 0 1 0 .566l-3 3A2.5 2.5 0 0 1 6.208 9.64l-3 3.001a.4.4 0 0 1-.567 0l-.282-.282a.4.4 0 0 1 0-.566l3-3A2.5 2.5 0 0 1 8.792 5.36zM8.74 7.108L7.109 8.74A1.3 1.3 0 0 0 8.74 7.109zm1.276-4.667l-.958.96A6.08 6.08 0 0 0 7.502 3.2c-2.6 0-4.97 1.67-6.175 4.3.381.833.88 1.569 1.464 2.186l-.86.862A9.267 9.267 0 0 1 0 7.5C1.264 4.264 4.144 2 7.5 2c.878 0 1.723.155 2.516.442zm3.066 2.024A9.27 9.27 0 0 1 15 7.5c-1.264 3.236-4.144 5.5-7.5 5.5-.87 0-1.71-.152-2.496-.435l.96-.963a6.08 6.08 0 0 0 1.538.198c2.6 0 4.97-1.67 6.175-4.3a8.038 8.038 0 0 0-1.453-2.174l.858-.86z" />
      </SvgIcon>
    )
  }

}
