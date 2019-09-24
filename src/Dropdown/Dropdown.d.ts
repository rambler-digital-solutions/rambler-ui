import {CSSProperties, PureComponent, ReactNode} from 'react'

export interface DropdownContainerProps {
  isVisible?: boolean
  onBecomeVisible?: () => void
  onBecomeInvisible?: () => void
  hide?: () => void
  tabIndex?: number
  anchorWidth?: number
  anchorFullWidth?: boolean
  onRequestClose?: () => void
  closeOnClickOutside?: boolean
  pointY?: 'top' | 'bottom' | 'center'
  padding?: boolean | string
  showArrow?: boolean
}

export class DropdownContainer extends PureComponent<
  DropdownContainerProps,
  {}
> {}

export interface DropdownProps {
  anchor: ReactNode
  children: ReactNode
  className?: string
  style?: CSSProperties
  overlayClassName?: string
  overlayStyle?: CSSProperties
  isOpened?: boolean
  onOpen?: () => void
  onClose?: () => void
  onRequestClose?: () => void
  closeOnClickOutside?: boolean
  contentPointX?: 'left' | 'right' | 'center'
  anchorPointX?: 'left' | 'right' | 'center'
  contentPointY?: 'top' | 'bottom' | 'center'
  anchorPointY?: 'top' | 'bottom' | 'center'
  autoPositionY?: boolean
  anchorFullWidth?: boolean
  appendToBody?: boolean
  padding?: string | boolean
  tabIndex?: number
  showArrow?: boolean
}

export default class Dropdown extends PureComponent<DropdownProps, {}> {}
