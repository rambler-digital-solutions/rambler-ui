import {CSSProperties, PureComponent} from 'react'
import {HorizontalPosition} from '..'

export interface RadioButtonProps {
  value: any
  disabled?: boolean
  className?: string
  radioClassName?: string
  labelClassName?: string
  style?: CSSProperties
  labelStyle?: CSSProperties
  labelPosition?: Exclude<HorizontalPosition, 'center'>
}

export default class RadioButton extends PureComponent<RadioButtonProps, {}> {}
