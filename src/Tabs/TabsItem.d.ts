import {Component, CSSProperties, ReactElement, ReactNode} from 'react'

export interface TabsItemProps {
  value?: any
  className?: string
  style?: CSSProperties
  children?: ReactNode
  size?: 'small' | 'medium'
  isSelected?: boolean
  disabled?: boolean
  container?: ReactElement | (() => any)
  onPress?: () => void
}

export default class TabsItem extends Component<TabsItemProps, {}> {}
