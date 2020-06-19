import {Component, ReactNode, Ref, SyntheticEvent, HTMLAttributes} from 'react'
import {Size} from '..'

export interface ToggleOptionProps<T>
  extends HTMLAttributes<HTMLButtonElement> {
  value: T | null
  icon?: ReactNode
  size?: Size
  isSelected?: boolean
  onPress?: (event: SyntheticEvent, value: T | null) => void | Promise<void>
  nodeRef?: Ref<HTMLElement>
}

export default class ToggleOption<T = any> extends Component<
  ToggleOptionProps<T>,
  {}
> {}
