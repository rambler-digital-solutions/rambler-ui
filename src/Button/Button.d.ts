import {
  CSSProperties,
  ReactElement,
  ReactNode,
  PureComponent,
  SyntheticEvent
} from 'react'
import {HorizontalPosition, Size, ButtonType} from '..'

export interface ButtonProps {
  type?: ButtonType
  href?: string
  target?: string
  className?: string
  style?: CSSProperties
  icon?: ReactNode
  iconPosition?: Exclude<HorizontalPosition, 'center'>
  size?: Size
  onClick?: (event: SyntheticEvent) => void | Promise<void>
  container?: ReactElement
  overlay?: ReactElement
  disabled?: boolean
  block?: boolean
  buttonType?: string
  width?: number | string
  loading?: boolean
  rounded?: boolean
}

export default class Button extends PureComponent<ButtonProps, {}> {}
