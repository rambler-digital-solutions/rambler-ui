import {Component, PureComponent, FC} from 'react'

declare const windowEvents: (
  ...types: string[]
) => <T = {}>(
  Target: Component<T> | PureComponent<T> | FC<T>
) => PureComponent<T>

export default windowEvents
