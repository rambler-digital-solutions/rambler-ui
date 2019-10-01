import {CSSProperties, PureComponent, ReactNode} from 'react'

export interface SnackbarProps {
  className?: string
  style?: CSSProperties
  children: ReactNode
  isOpened?: boolean
  type?: 'main' | 'primary' | 'success' | 'danger'
  icon?: ReactNode
  actionButton?: string
  positionX?: 'left' | 'center' | 'right'
  positionY?: 'top' | 'bottom'
  showClose?: boolean
  closeOnClickOutside?: boolean
  autoCloseDuration?: number
  onAction?: () => void
  onRequestClose?: () => void
  size?: 'small' | 'medium'
}

export default class Snackbar extends PureComponent<SnackbarProps, {}> {}
