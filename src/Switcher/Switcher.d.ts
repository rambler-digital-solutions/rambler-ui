import {CSSProperties, PureComponent, ReactNode, SyntheticEvent} from 'react'
import {HorizontalPosition} from '..'

export interface SwitcherProps {
  name?: string
  disabled?: boolean
  className?: string
  style?: CSSProperties
  switcherClassName?: string
  switcherStyle?: CSSProperties
  trackClassName?: string
  trackStyle?: CSSProperties
  labelClassName?: string
  labelStyle?: CSSProperties
  iconPosition?: Exclude<HorizontalPosition, 'center'>
  checked: boolean
  children?: ReactNode
  onCheck?: (event: SyntheticEvent, checked: boolean) => void | Promise<void>
}

export default class Switcher extends PureComponent<SwitcherProps, {}> {}
