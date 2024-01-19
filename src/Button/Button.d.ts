import {
  ReactElement,
  ReactNode,
  PureComponent,
  SyntheticEvent,
  HTMLProps,
  Ref
} from 'react'
import {HorizontalPosition, Size, ButtonType} from '..'

export interface ButtonProps<E>
  extends Omit<HTMLProps<E>, 'size' | 'onClick' | 'ref'> {
  className?: string
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
  nodeRef?: Ref<HTMLElement>
  ref?: Ref<Button<E>>
}

export default class Button<E = HTMLButtonElement> extends PureComponent<
  ButtonProps<E>,
  {}
> {}
