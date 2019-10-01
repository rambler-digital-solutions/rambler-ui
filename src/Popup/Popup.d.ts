import {CSSProperties, PureComponent, ReactNode} from 'react'

export interface PopupProps {
  className?: string
  style?: CSSProperties
  backdropClassName?: string
  backdropStyle?: CSSProperties
  backdropColor?: 'black' | 'blue'
  children?: ReactNode
  title?: ReactNode
  titleClassName?: string
  titleStyle?: CSSProperties
  buttonsContainerClassName?: string
  buttonsContainerStyle?: CSSProperties
  isOpened?: boolean
  tabIndex?: number
  okButton?: ReactNode
  cancelButton?: ReactNode
  showClose?: boolean
  closeOnEsc?: boolean
  closeOnClickOutside?: boolean
  onOpen?: () => void
  onRequestClose?: () => void
  onClose?: () => void
}

export default class Popup extends PureComponent<PopupProps, {}> {}
