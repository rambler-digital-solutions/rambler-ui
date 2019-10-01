import {Component, PureComponent, FC} from 'react'

declare const provideSnackbar: <T = {}>(
  Target: Component<T> | PureComponent<T> | FC<T>
) => Component<T>

export default provideSnackbar
