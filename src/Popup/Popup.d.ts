import {CSSProperties, PureComponent, ReactNode, Ref} from 'react'

export interface PopupProps {
  className?: string
  style?: CSSProperties
  backdropClassName?: string
  backdropStyle?: CSSProperties
  backdropColor?: 'black' | 'blue'
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
  onOpen?: () => void | Promise<void>
  onRequestClose?: () => void | Promise<void>
  onClose?: () => void | Promise<void>
  containerRef?: Ref<HTMLElement>
}

export default class Popup extends PureComponent<PopupProps, {}> {}
