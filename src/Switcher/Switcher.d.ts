import {
  CSSProperties,
  PureComponent,
  ReactNode,
  SyntheticEvent,
  HTMLAttributes
} from 'react'
import {HorizontalPosition} from '..'

export interface SwitcherProps extends HTMLAttributes<HTMLInputElement> {
  name?: string
  disabled?: boolean
  switcherClassName?: string
  switcherStyle?: CSSProperties
  trackClassName?: string
  trackStyle?: CSSProperties
  labelClassName?: string
  labelStyle?: CSSProperties
  iconPosition?: Exclude<HorizontalPosition, 'center'>
  checked: boolean
  onCheck?: (event: SyntheticEvent, checked: boolean) => void | Promise<void>
}

export default class Switcher extends PureComponent<SwitcherProps, {}> {}
