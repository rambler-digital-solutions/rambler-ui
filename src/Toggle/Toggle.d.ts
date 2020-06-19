import {Component, ReactNode, SyntheticEvent, HTMLAttributes} from 'react'
import {Size} from '..'

export interface ToggleProps<T>
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value?: T | null
  onChange?: (event: SyntheticEvent, value: T | null) => void | Promise<void>
  size?: Size
  behavior?: 'radio' | 'toggle'
  block?: boolean
  equalWidth?: boolean
  disabled?: boolean
  variation?: 'regular' | 'transparent'
}

export default class Toggle<T = any> extends Component<ToggleProps<T>, {}> {}
