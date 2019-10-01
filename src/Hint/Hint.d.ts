import {CSSProperties, PureComponent, ReactNode} from 'react'
import {HorizontalPosition} from '..'

export interface HintProps {
  className?: string
  style?: CSSProperties
  icon?: ReactNode
  contentClassName?: string
  contentStyle?: CSSProperties
  children: ReactNode
  isOpened?: boolean
  positionX?: Exclude<HorizontalPosition, 'center'>
  closeOnScroll?: boolean
}

export default class Hint extends PureComponent<HintProps, {}> {}
