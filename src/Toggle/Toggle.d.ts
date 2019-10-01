import {Component, CSSProperties, ReactNode, SyntheticEvent} from 'react'
import {Size} from '..'

export interface ToggleProps {
  value?: any
  onChange?: (event: SyntheticEvent, value: any) => void | Promise<void>
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

export default class Toggle extends Component<ToggleProps, {}> {}
