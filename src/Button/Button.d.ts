import {
  ReactElement,
  ReactNode,
  PureComponent,
  SyntheticEvent,
  HTMLAttributes
} from 'react'
import {HorizontalPosition, Size, ButtonType} from '..'

export interface ButtonProps<E> extends Omit<HTMLAttributes<E>, 'onClick'> {
  type?: ButtonType
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
  nodeRef?: (ref: HTMLElement) => void
}

export default class Button<E = HTMLButtonElement> extends PureComponent<
  ButtonProps<E>,
  {}
> {}
