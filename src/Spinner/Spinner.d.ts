import {CSSProperties, PureComponent} from 'react'

export interface SpinnerProps {
  className?: string
  style?: CSSProperties
  color?: string
  size?: number
  inline?: boolean
}

export default class Spinner extends PureComponent<SpinnerProps, {}> {}
