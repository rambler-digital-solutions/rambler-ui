import React, { Component } from 'react'
import SvgIcon from '../SvgIcon'
import pure from 'recompose/pure'

@pure
export default class Tick extends Component {

  static displayName = 'Галочка'

  render() {
    return (
      <SvgIcon { ...this.props } >
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fill-rule="evenodd">
            <g id="desktop_checkboxes" transform="translate(-103.000000, -776.000000)">
                <g id="Group-2-Copy-5" transform="translate(100.000000, 738.000000)">
                    <g id="Group" transform="translate(0.000000, 34.000000)">
                        <g id="icon_tick">
                          <rect id="Rectangle-45" fill="#EEEEEE" opacity="0" x="0" y="0" width="9.2" height="7.7"></rect>
                          <polygon id="icon_tick-copy-2"
                          fill="#315EFB" points="4.43212891 6.87255859 3 8.36260128 6.45515061 11.6863868 6.5162991 11.6900951 12.1716309 5.47314453 10.6680908 4 6.40774501 8.81703798"></polygon>
                        </g>
                    </g>
                </g>
            </g>
        </g>
      </SvgIcon>
    )
  }

}
