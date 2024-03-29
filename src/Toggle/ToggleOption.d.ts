import {Component, ReactNode, Ref, SyntheticEvent, HTMLProps} from 'react'
import {Size} from '..'

export interface ToggleOptionProps<T>
  extends Omit<HTMLProps<HTMLButtonElement>, 'size' | 'value' | 'ref'> {
  value: T | null
  icon?: ReactNode
  size?: Size
  isSelected?: boolean
  onPress?: (event: SyntheticEvent, value: T | null) => void | Promise<void>
  nodeRef?: Ref<HTMLElement>
  ref?: Ref<ToggleOption<T>>
}

export default class ToggleOption<T = any> extends Component<
  ToggleOptionProps<T>,
  {}
> {}
