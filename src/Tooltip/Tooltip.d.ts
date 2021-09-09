import {CSSProperties, PureComponent, ReactNode} from 'react'
import {StatusType, HorizontalPosition, VerticalPosition} from '..'

export interface TooltipProps {
  content?: ReactNode
  className?: string
  style?: CSSProperties
  contentClassName?: string
  contentStyle?: CSSProperties
  arrowClassName?: string
  arrowStyle?: CSSProperties
  delay?: number
  status?: Exclude<StatusType, 'filled'> | 'default'
  isOpened?: boolean
  position?:
    | Exclude<VerticalPosition, 'center'>
    | Exclude<HorizontalPosition, 'center'>
  autoPosition?: boolean
  closeOnClickOutside?: boolean
  closeOnScroll?: boolean
}

export default class Tooltip extends PureComponent<TooltipProps, {}> {}
