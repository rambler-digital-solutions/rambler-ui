import {Component, CSSProperties, ReactNode, SyntheticEvent} from 'react'
import {Size} from '..'

export interface SideNavProps<T> {
  className?: string
  style?: CSSProperties
  children?: ReactNode
  size?: Size
  value?: T | null
  block?: boolean
  onChange?: (event: SyntheticEvent, value: T) => void | Promise<void>
}

export default class SideNav<T = any> extends Component<SideNavProps<T>, {}> {}
