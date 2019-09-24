import {CSSProperties, PureComponent, ReactNode} from 'react'

export interface InputProps {
  value: any
  placeholder?: string
  disabled?: boolean
  type?:
    | 'email'
    | 'number'
    | 'password'
    | 'tel'
    | 'text'
    | 'url'
    | 'time'
    | 'date'
    | 'month'
  size?: 'small' | 'medium'
  variation?: 'regular' | 'awesome' | 'promo'
  status?: 'error' | 'warning' | 'success' | null
  isFocused?: boolean
  className?: string
  inputClassName?: string
  fullWidth?: any
  inputStyle?: CSSProperties
  style?: CSSProperties
  onChange?: (e) => void
  iconLeft: ReactNode
  iconRight?: ReactNode
  passwordIconTooltip?: string | (() => void)
  passwordIconProps?: object | (() => void)
  groupPosition?: 'start' | 'middle' | 'end' | null
  iconRightClassName?: string
  iconLeftClassName?: string
}

export default class Input extends PureComponent<InputProps, {}> {}
