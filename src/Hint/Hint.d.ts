import {CSSProperties, PureComponent, ReactNode} from 'react'
import {HorizontalPosition} from '..'

export interface HintProps {
  className?: string
  style?: CSSProperties
  icon?: (forwardRef: (ref: HTMLElement) => void) => ReactNode
  contentClassName?: string
  contentStyle?: CSSProperties
  isOpened?: boolean
  positionX?: Exclude<HorizontalPosition, 'center'>
  autoPositionY?: boolean
  closeOnScroll?: boolean
}

export default class Hint extends PureComponent<HintProps, {}> {}
