import {CSSProperties, PureComponent} from 'react'

export interface RadioButtonProps {
  value: any
  disabled?: boolean
  className?: string
  radioClassName?: string
  labelClassName?: string
  style?: CSSProperties
  labelStyle?: CSSProperties
  labelPosition?: 'left' | 'right'
}

export default class RadioButton extends PureComponent<RadioButtonProps, {}> {}
