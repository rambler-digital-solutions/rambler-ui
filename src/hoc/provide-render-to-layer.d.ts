import {Component, PureComponent, FC} from 'react'

declare const provideRenderToLayer: <T>(
  Target: Component<T> | PureComponent<T> | FC<T>
) => PureComponent<T>

export default provideRenderToLayer
