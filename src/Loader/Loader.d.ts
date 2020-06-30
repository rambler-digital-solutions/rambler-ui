import {CSSProperties, PureComponent, ReactNode} from 'react'

export interface LoaderProps {
  className?: string
  loadingClassName?: string
  overlayClassName?: string
  style?: CSSProperties
  spinnerClassName?: string
  spinnerColor?: string
  loading?: boolean | Promise<any>
  hideContent?: boolean
  blurContent?: boolean
}

export default class Loader extends PureComponent<LoaderProps, {}> {}
