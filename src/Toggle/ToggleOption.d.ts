import {Component, CSSProperties, ReactNode, Ref, SyntheticEvent} from 'react'
import {Size} from '..'

export interface ToggleOptionProps {
  value: any
  className?: string
  style?: CSSProperties
  children?: ReactNode
  icon?: ReactNode
  size?: Size
  isSelected?: boolean
  onPress?: (event: SyntheticEvent, value: any) => void | Promise<void>
  nodeRef?: Ref<HTMLElement>
}

export default class ToggleOption extends Component<ToggleOptionProps, {}> {}
