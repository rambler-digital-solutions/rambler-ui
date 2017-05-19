import React, { Component } from 'react'
import SvgIcon from '../SvgIcon'
import pure from 'recompose/pure'

@pure
export default class LivejournalIcon extends Component {

  static displayName = 'LivejournalIcon'

  render() {
    const fill = this.props.applyColor && this.props.color

    return (
      <SvgIcon { ...this.props } viewBox="0 0 18 18">
        <path d="M1.844 6.21L0 4.369A8.405 8.405 0 0 1 4.347 0l1.841 1.839.001.001a8.384 8.384 0 1 1-5.056 7.695 8.275 8.275 0 0 1 .71-3.323l6.82 6.806h-.001a8.415 8.415 0 0 1 4.343-4.369h.001L6.19 1.843l-.003-.001a8.407 8.407 0 0 0-4.343 4.369zm11.649 4.764a4.894 4.894 0 0 0-2.523 2.537l3.184.659-.66-3.196h-.001z" fill={fill || '#00afed'} />
        {!fill &&
          <g>
            <path d="M8.662 13.018a8.415 8.415 0 0 1 4.343-4.369h.001L6.19 1.843l-.003-.001a8.407 8.407 0 0 0-4.344 4.37l6.82 6.806h-.001zm4.831-2.044a4.894 4.894 0 0 0-2.523 2.537l3.184.659-.66-3.196h-.001z" fill="#13374d" />
            <path d="M13.493 10.975l-.487-2.325h-.002a8.417 8.417 0 0 0-4.342 4.368l2.308.493a4.916 4.916 0 0 1 2.523-2.536" fill="#fff" />
          </g>
        }
      </SvgIcon>
    )
  }

}
