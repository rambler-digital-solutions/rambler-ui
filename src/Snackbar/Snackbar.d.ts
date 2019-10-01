import {CSSProperties, PureComponent, ReactNode, SyntheticEvent} from 'react'
import {HorizontalPosition, VerticalPosition, Size} from '..'

export type SnackbarType = 'main' | 'primary' | 'success' | 'danger'

export interface SnackbarProps {
  className?: string
  style?: CSSProperties
  children: ReactNode
  isOpened?: boolean
  type?: SnackbarType
  icon?: ReactNode
  actionButton?: string
  positionX?: HorizontalPosition
  positionY?: Exclude<VerticalPosition, 'center'>
  showClose?: boolean
  closeOnClickOutside?: boolean
  autoCloseDuration?: number
  onAction?: (event: SyntheticEvent) => void | Promise<void>
  onRequestClose?: (event: SyntheticEvent) => void | Promise<void>
  size?: Size
}

export default class Snackbar extends PureComponent<SnackbarProps, {}> {}
