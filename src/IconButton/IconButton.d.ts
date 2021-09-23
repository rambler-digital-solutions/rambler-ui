import {PureComponent, ReactElement, HTMLProps, Ref} from 'react'
import {ButtonType, Size} from '..'

export interface IconButtonProps<E> extends Omit<HTMLProps<E>, 'size' | 'ref'> {
  type?: ButtonType
  size?: number | Size
  onClick?: () => void | Promise<void>
  container?: ReactElement
  overlay?: ReactElement
  disabled?: boolean
  buttonType?: string
  loading?: boolean
  ref?: Ref<IconButton<E>>
}

export default class IconButton<E = HTMLButtonElement> extends PureComponent<
  IconButtonProps<E>,
  {}
> {}
