import React, { PureComponent } from 'react'
import SvgIcon from '../SvgIcon'

export default class RamblerPicturesIconBig extends PureComponent {

  static displayName = 'RamblerPicturesIconBig'

  render() {
    return (
      <SvgIcon { ...this.props } viewBox="0 0 80 80">
        <path fill-rule="evenodd" d="M21.395 30.462a4.055 4.055 0 1 1 8.11 0 4.055 4.055 0 0 1-8.11 0zM11.247 62.198v-4.722l13.546-9.705 12.032 8.656a2.5 2.5 0 0 0 3.49-.572L54.108 36.65l14.645 19.712v5.835H11.247zm57.506-44.396v30.177L56.081 30.922a2.5 2.5 0 0 0-4.037.032l-14.33 19.953-11.458-8.244a2.499 2.499 0 0 0-2.916-.003l-12.093 8.664V17.802h57.506zm1-5H10.247a4 4 0 0 0-4 4v46.396a4 4 0 0 0 4 4h59.506a4 4 0 0 0 4-4V16.802a4 4 0 0 0-4-4z"/>
      </SvgIcon>
    )
  }
}
