import {CSSProperties, PureComponent, HTMLProps, Ref} from 'react'
import {HorizontalPosition} from '..'

export interface RadioButtonProps<T>
  extends Omit<HTMLProps<HTMLLabelElement>, 'value' | 'ref'> {
  value: T
  disabled?: boolean
  radioClassName?: string
  labelClassName?: string
  variation?: 'regular' | 'awesome'
  labelStyle?: CSSProperties
  labelPosition?: Exclude<HorizontalPosition, 'center'>
  ref?: Ref<RadioButton<T>>
}

export default class RadioButton<T = any> extends PureComponent<
  RadioButtonProps<T>,
  {}
> {}
