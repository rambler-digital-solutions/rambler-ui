import React, { Component } from 'react'
import SvgIcon from '../SvgIcon'
import pure from 'recompose/pure'

@pure
export default class EditIcon extends Component {

  static displayName = 'EditIcon'

  render() {
    return (
      <SvgIcon { ...this.props } viewBox="0 0 9 9">
        <path d="M0 7.125V9h1.875l5.529-5.53-1.875-1.874L0 7.126zm8.854-5.104a.498.498 0 0 0 0-.705L7.684.146a.498.498 0 0 0-.705 0l-.915.915L7.94 2.936l.915-.915z" fillRule="evenodd" />
      </SvgIcon>
    )
  }

}
