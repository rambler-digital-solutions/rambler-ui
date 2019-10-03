import {CSSProperties, PureComponent, ReactNode, SyntheticEvent} from 'react'
import {Size, Variation, StatusType} from '..'

export type InputType =
  | 'email'
  | 'number'
  | 'password'
  | 'tel'
  | 'text'
  | 'url'
  | 'time'
  | 'date'
  | 'month'

export interface InputProps {
  value: string | null
  placeholder?: string
  disabled?: boolean
  type?: InputType
  size?: Size
  variation?: Variation
  status?: StatusType | null
  isFocused?: boolean
  className?: string
  inputClassName?: string
  inputStyle?: CSSProperties
  style?: CSSProperties
  onChange?: (event: SyntheticEvent, value: string) => void | Promise<void>
  iconLeft: ReactNode
  iconRight?: ReactNode
  passwordIconTooltip?: string | ((type: 'text' | 'password') => string)
  passwordIconProps?: object | ((type: 'text' | 'password') => object)
  groupPosition?: 'start' | 'middle' | 'end' | null
  iconRightClassName?: string
  iconLeftClassName?: string
}

export default class Input extends PureComponent<InputProps, {}> {}
