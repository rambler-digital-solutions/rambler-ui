import {Component, CSSProperties, ReactNode, SyntheticEvent} from 'react'
import {Size} from '..'

export interface ToggleProps<T> {
  value?: T | null
  onChange?: (event: SyntheticEvent, value: T | null) => void | Promise<void>
  className?: string
  style?: CSSProperties
  children?: ReactNode
  size?: Size
  behavior?: 'radio' | 'toggle'
  block?: boolean
  equalWidth?: boolean
  disabled?: boolean
  variation?: 'regular' | 'transparent'
}

export default class Toggle<T = any> extends Component<ToggleProps<T>, {}> {}
