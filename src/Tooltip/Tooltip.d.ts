import {CSSProperties, PureComponent, ReactNode} from 'react'

export interface TooltipProps {
  content?: ReactNode
  children: ReactNode
  className?: string
  style?: CSSProperties
  contentClassName?: string
  contentStyle?: CSSProperties
  delay?: number
  status?: 'default' | 'success' | 'error' | 'warning'
  isOpened?: boolean
  position?: 'top' | 'bottom' | 'left' | 'right'
  autoPosition?: boolean
  closeOnClickOutside?: boolean
  closeOnScroll?: boolean
}

export default class Tooltip extends PureComponent<TooltipProps, {}> {}
