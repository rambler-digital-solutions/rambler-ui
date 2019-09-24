import {CSSProperties, PureComponent, ReactNode} from 'react'

export interface HintProps {
  className?: string
  style?: CSSProperties
  icon?: ReactNode
  contentClassName?: string
  contentStyle?: CSSProperties
  children: ReactNode
  isOpened?: boolean
  positionX?: 'left' | 'right'
  closeOnScroll?: boolean
}

export default class Hint extends PureComponent<HintProps, {}> {}
