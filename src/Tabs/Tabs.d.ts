import {Component, CSSProperties, ReactNode, SyntheticEvent} from 'react'
import {Size, VerticalPosition} from '..'

export interface TabsProps<T> {
  value?: T
  className?: string
  style?: CSSProperties
  children?: ReactNode
  size?: Size
  position?: Exclude<VerticalPosition, 'center'>
  disabled?: boolean
  onChange?: (event: SyntheticEvent, value: T) => void | Promise<void>
}

export default class Tabs<T = any> extends Component<TabsProps<T>, {}> {}
