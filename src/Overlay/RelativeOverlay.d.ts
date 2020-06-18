import {CSSProperties, PureComponent, ReactNode} from 'react'
import {HorizontalPosition, VerticalPosition} from '..'
import {getBoundingClientRect} from '../utils/DOM'

export interface RelativeOverlayProps {
  className?: string
  style?: CSSProperties
  isOpened: boolean
  anchorPointX: HorizontalPosition
  anchorPointY: VerticalPosition
  contentPointX: HorizontalPosition
  contentPointY: VerticalPosition
  autoPositionX?: boolean
  autoPositionY?: boolean
  anchor: () => ReactNode
  content: ReactNode
  onContentClose?: () => void | Promise<void>
  onContentOpen?: () => void | Promise<void>
  getWindowSize?: () => {width: number; height: number}
  getElementRect?: typeof getBoundingClientRect
}

export default class RelativeOverlay extends PureComponent<
  RelativeOverlayProps,
  {}
> {}
