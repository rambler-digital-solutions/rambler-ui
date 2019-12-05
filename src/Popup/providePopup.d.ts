import {Component, PureComponent, FC} from 'react'

declare const providePopup: <T = {}>(
  Target: Component<T> | PureComponent<T> | FC<T>
) => Component<T>

export default providePopup
