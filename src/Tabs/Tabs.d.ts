import {Component, ReactNode, SyntheticEvent, HTMLAttributes} from 'react'
import {Size, VerticalPosition} from '..'

export interface TabsProps<T>
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value?: T
  children?: ReactNode
  size?: Size
  position?: Exclude<VerticalPosition, 'center'>
  disabled?: boolean
  onChange?: (event: SyntheticEvent, value: T) => void | Promise<void>
}

export default class Tabs<T = any> extends Component<TabsProps<T>, {}> {}
