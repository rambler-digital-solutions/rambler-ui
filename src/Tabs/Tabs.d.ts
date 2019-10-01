import {Component, CSSProperties, ReactNode, SyntheticEvent} from 'react'
import {Size, VerticalPosition} from '..'

export interface TabsProps {
  value?: any
  className?: string
  style?: CSSProperties
  children?: ReactNode
  size?: Size
  position?: Exclude<VerticalPosition, 'center'>
  disabled?: boolean
  onChange?: (event: SyntheticEvent, value: any) => void | Promise<void>
}

export default class Tabs extends Component<TabsProps, {}> {}
