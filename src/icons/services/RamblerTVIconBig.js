import React, { PureComponent } from 'react'
import SvgIcon from '../SvgIcon'

export default class RamblerTVIconBig extends PureComponent {
  static displayName = 'RamblerTVIconBig'

  render() {
    return (
      <SvgIcon { ...this.props } viewBox="0 0 80 80">
        <path fill-rule="evenodd" d="M42.531 35.54V9.123a1.5 1.5 0 0 0-1.5-1.5h-2a1.5 1.5 0 0 0-1.5 1.5V35.54a1.5 1.5 0 0 0 1.5 1.5h2a1.5 1.5 0 0 0 1.5-1.5m-2.5 38.24c-17.43 0-31.61-14.18-31.61-31.611 0-10.588 5.39-20.544 14.17-26.368a1.562 1.562 0 0 1 2.212.495l.967 1.64A1.54 1.54 0 0 1 25.306 20C17.94 24.909 13.42 33.274 13.42 42.169c0 14.673 11.937 26.611 26.611 26.611 14.674 0 26.612-11.938 26.612-26.611 0-8.917-4.537-17.294-11.93-22.199a1.539 1.539 0 0 1-.468-2.063l.963-1.64a1.561 1.561 0 0 1 2.212-.501c8.812 5.821 14.223 15.79 14.223 26.403 0 17.431-14.18 31.611-31.612 31.611"/>
      </SvgIcon>
    )
  }
}