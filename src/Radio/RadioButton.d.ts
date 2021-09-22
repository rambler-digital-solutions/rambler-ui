import {CSSProperties, PureComponent, HTMLProps} from 'react'
import {HorizontalPosition} from '..'

export interface RadioButtonProps<T>
  extends Omit<HTMLProps<HTMLLabelElement>, 'value' | 'ref'> {
  value: T
  disabled?: boolean
  radioClassName?: string
  labelClassName?: string
  labelStyle?: CSSProperties
  labelPosition?: Exclude<HorizontalPosition, 'center'>
}

export default class RadioButton<T = any> extends PureComponent<
  RadioButtonProps<T>,
  {}
> {}
