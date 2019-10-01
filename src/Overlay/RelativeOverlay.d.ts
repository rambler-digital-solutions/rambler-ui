import {CSSProperties, PureComponent, ReactNode} from 'react'

export interface RelativeOverlayProps {
  className?: string
  style?: CSSProperties
  isOpened: boolean
  anchorPointX: 'left' | 'right' | 'center'
  anchorPointY: 'top' | 'bottom' | 'center'
  contentPointX: 'left' | 'right' | 'center'
  contentPointY: 'top' | 'bottom' | 'center'
  autoPositionX?: boolean
  autoPositionY?: boolean
  anchor: ReactNode
  content: ReactNode
  onContentClose?: () => any
  onContentOpen?: () => any
  getWindowSize?: () => any
  getElementRect?: () => any
}

export default class RelativeOverlay extends PureComponent<
  RelativeOverlayProps,
  {}
> {}
