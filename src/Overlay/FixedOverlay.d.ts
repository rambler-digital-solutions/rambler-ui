import {CSSProperties, PureComponent, ReactNode, Ref} from 'react'
import {HorizontalPosition, VerticalPosition} from '..'
import {getBoundingClientRect} from '../utils/DOM'

export interface FixedOverlayProps {
  isOpened: boolean
  anchorPointX: HorizontalPosition
  anchorPointY: VerticalPosition
  contentPointX: HorizontalPosition
  contentPointY: VerticalPosition
  autoPositionX?: boolean
  autoPositionY?: boolean
  anchor: (forwardRef: (ref: HTMLElement) => void) => ReactNode
  content: ReactNode
  contentWrapperRef?: Ref<HTMLElement>
  onContentClose?: () => void | Promise<void>
  onContentOpen?: () => void | Promise<void>
  getWindowSize?: () => {width: number; height: number}
  getElementRect?: typeof getBoundingClientRect
  getYScroll?: (getElementRect: typeof getBoundingClientRect) => number
  getXScroll?: (getElementRect: typeof getBoundingClientRect) => number
  cachePositionOptions?: boolean
  closeOnScroll?: boolean
  containerNodeClassName?: string
  containerNodeStyle?: CSSProperties
}

export default class FixedOverlay extends PureComponent<
  FixedOverlayProps,
  {}
> {}
