import {Component, CSSProperties, ReactNode} from 'react'

export interface TabsProps {
  value?: any
  className?: string
  style?: CSSProperties
  children?: ReactNode
  size?: 'small' | 'medium'
  position?: 'top' | 'bottom'
  disabled?: boolean
  onChange?: (event: object, newValue: any) => void
}

export default class Tabs extends Component<TabsProps, {}> {}
