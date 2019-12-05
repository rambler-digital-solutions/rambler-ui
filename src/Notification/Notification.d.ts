import {CSSProperties, PureComponent, ReactNode, SyntheticEvent} from 'react'
import {HorizontalPosition} from '..'

export interface NotificationProps {
  className?: string
  style?: CSSProperties
  isOpened?: boolean
  icon?: ReactNode
  title?: ReactNode
  body: ReactNode
  actionButton?: string
  positionX?: Exclude<HorizontalPosition, 'center'>
  showClose?: boolean
  closeOnClickOutside?: boolean
  onAction?: (event: SyntheticEvent) => void | Promise<void>
  onRequestClose?: (event: SyntheticEvent) => void | Promise<void>
}

export default class Notification extends PureComponent<
  NotificationProps,
  {}
> {}
