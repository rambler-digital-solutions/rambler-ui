import React, { PureComponent } from 'react'
import SvgIcon from '../SvgIcon'

export default class RamblerHoroscopesIconBig extends PureComponent {

  static displayName = 'RamblerHoroscopesIconBig'

  render() {
    return (
      <SvgIcon { ...this.props } viewBox="0 0 80 80">
        <path fill-rule="evenodd" d="M39.957 9.476c-.87 0-1.74.442-2.21 1.329l-9.356 17.646-17.618 9.31c-1.758.93-1.78 3.442-.037 4.401l17.454 9.606 9.61 17.634a2.473 2.473 0 0 0 2.195 1.304c.848 0 1.695-.421 2.175-1.268l10.015-17.673 17.13-9.593c1.73-.968 1.7-3.466-.052-4.392l-17.72-9.364-9.38-17.615a2.472 2.472 0 0 0-2.206-1.325m.004 7.828l7.529 14.139c.235.441.597.802 1.038 1.035l14.336 7.576-13.731 7.69c-.4.223-.73.551-.954.949L40.037 63.06 32.23 48.734a2.49 2.49 0 0 0-.99-.994l-14.032-7.723 14.199-7.504a2.503 2.503 0 0 0 1.04-1.04l7.514-14.169"/>
      </SvgIcon>
    )
  }
}
