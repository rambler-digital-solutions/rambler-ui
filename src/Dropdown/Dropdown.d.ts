import {CSSProperties, PureComponent, ReactNode, Ref} from 'react'
import {HorizontalPosition, VerticalPosition} from '..'

export interface DropdownProps {
  anchor: (forwardRef: Ref<HTMLElement>) => ReactNode
  className?: string
  style?: CSSProperties
  overlayClassName?: string
  overlayStyle?: CSSProperties
  isOpened?: boolean
  onOpen?: () => void | Promise<void>
  onClose?: () => void | Promise<void>
  onRequestClose?: () => void | Promise<void>
  closeOnClickOutside?: boolean
  contentPointX?: HorizontalPosition
  anchorPointX?: HorizontalPosition
  contentPointY?: VerticalPosition
  anchorPointY?: VerticalPosition
  autoPositionX?: boolean
  autoPositionY?: boolean
  anchorFullWidth?: boolean
  appendToBody?: boolean
  padding?: string | boolean
  tabIndex?: number
  showArrow?: boolean
}

export default class Dropdown extends PureComponent<DropdownProps, {}> {}
