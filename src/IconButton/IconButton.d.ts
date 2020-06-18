import {PureComponent, ReactElement, ReactNode, HTMLAttributes} from 'react'
import {ButtonType, Size} from '..'

export interface IconButtonProps extends HTMLAttributes<HTMLButtonElement> {
  type?: ButtonType
  children?: ReactNode
  size?: number | Size
  onClick?: () => void | Promise<void>
  container?: ReactElement
  overlay?: ReactElement
  disabled?: boolean
  buttonType?: string
  loading?: boolean
}

export default class IconButton extends PureComponent<IconButtonProps, {}> {}
