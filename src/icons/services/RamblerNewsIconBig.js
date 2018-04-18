import React, { PureComponent } from 'react'
import SvgIcon from '../SvgIcon'

export default class RamblerNewsIconBig extends PureComponent {

  static displayName = 'RamblerNewsIconBig'

  render() {
    return (
      <SvgIcon { ...this.props } viewBox="0 0 80 80">
        <path fill-rule="evenodd" d="M40.728 53.906H11.46c-.882 0-1.6.718-1.6 1.6v1.988c0 .882.718 1.6 1.6 1.6h29.267c.88 0 1.599-.718 1.599-1.6v-1.988c0-.882-.718-1.6-1.6-1.6m27.812-16.5H11.46c-.882 0-1.6.718-1.6 1.6v1.988c0 .882.718 1.6 1.6 1.6h57.078c.882 0 1.6-.718 1.6-1.6v-1.988c0-.882-.718-1.6-1.6-1.6m1.6-14.9v1.988c0 .882-.718 1.6-1.6 1.6H11.46c-.882 0-1.6-.718-1.6-1.6v-1.988c0-.882.718-1.6 1.6-1.6h57.078c.882 0 1.6.718 1.6 1.6"/>
      </SvgIcon>
    )
  }
}
