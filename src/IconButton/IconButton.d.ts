import {CSSProperties, PureComponent, ReactElement, ReactNode} from 'react'
import {ButtonType, Size} from '..'

export interface IconButtonProps {
  type?: ButtonType
  href?: string
  target?: string
  rel?: string
  className?: string
  style?: CSSProperties
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
