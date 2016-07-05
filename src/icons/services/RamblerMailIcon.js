import { Component } from 'react'
import SvgIcon from '../SvgIcon'
import pure from 'recompose/pure'

@pure
export default class RamblerMailIcon extends Component {

  static displayName = 'RamblerMailIcon'

  render() {

    return (
      <SvgIcon { ...this.props } >
        <g>
          <path d="m1 3.75h18l-.75-.75v13.1l.75-.75h-18l.75.75v-13.1l-.75.75m0-1.5c-.41 0-.75.34-.75.75v13.1c0 .41.34.75.75.75h18c.41 0 .75-.34.75-.75v-13.1c0-.41-.34-.75-.75-.75h-18"/>
          <path d="m3.88 6.88l5.71 3.65.4.26.4-.26 5.72-3.65-.81-1.26-5.72 3.65h.81l-5.71-3.65-.81 1.26"/>
        </g>
      </SvgIcon>
    )
  }

}
