import {CSSProperties, PureComponent} from 'react'
import {HorizontalPosition} from '..'

export interface RadioButtonProps<T> {
  value: T
  disabled?: boolean
  className?: string
  radioClassName?: string
  labelClassName?: string
  style?: CSSProperties
  labelStyle?: CSSProperties
  labelPosition?: Exclude<HorizontalPosition, 'center'>
}

export default class RadioButton<T = any> extends PureComponent<
  RadioButtonProps<T>,
  {}
> {}
