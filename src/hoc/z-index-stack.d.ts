import {Component, PureComponent, FC} from 'react'

export interface ZIndexStackProps {
  zIndex?: number
}

declare const zIndexStack: (
  ...types: string[]
) => <T = {}>(
  Target: Component<T> | PureComponent<T> | FC<T>
) => PureComponent<ZIndexStackProps & T>

export default zIndexStack
