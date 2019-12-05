import {Component, PureComponent, FC} from 'react'

declare const provideNotification: <T = {}>(
  Target: Component<T> | PureComponent<T> | FC<T>
) => Component<T>

export default provideNotification
