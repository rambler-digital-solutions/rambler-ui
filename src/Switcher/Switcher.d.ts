import {
  CSSProperties,
  PureComponent,
  SyntheticEvent,
  HTMLProps,
  Ref
} from 'react'
import {HorizontalPosition} from '..'

export interface SwitcherProps
  extends Omit<HTMLProps<HTMLInputElement>, 'ref'> {
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
  ref: Ref<Switcher>
}

export default class Switcher extends PureComponent<SwitcherProps, {}> {}
