import {CSSProperties, PureComponent, ReactNode, Ref} from 'react'
import {HorizontalPosition} from '..'

export interface HintProps {
  children?: ReactNode | Array<ReactNode>
  className?: string
  style?: CSSProperties
  icon?: (forwardRef: Ref<HTMLElement>) => ReactNode
  contentClassName?: string
  contentStyle?: CSSProperties
  isOpened?: boolean
  positionX?: Exclude<HorizontalPosition, 'center'>
  autoPositionY?: boolean
  closeOnScroll?: boolean
  renderAnchor?: (icon: ReactNode) => ReactNode
}

export default class Hint extends PureComponent<HintProps, {}> {}
