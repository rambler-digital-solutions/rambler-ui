import {Component, CSSProperties, ReactNode, SyntheticEvent} from 'react'
import {Size} from '..'

export interface SideNavProps {
  className?: string
  style?: CSSProperties
  children?: ReactNode
  size?: Size
  value?: any
  block?: boolean
  onChange?: (event: SyntheticEvent, value: any) => void | Promise<void>
}

export default class SideNav extends Component<SideNavProps, {}> {}
