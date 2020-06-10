import {
  Component,
  CSSProperties,
  ReactNode,
  ReactElement,
  SyntheticEvent
} from 'react'
import {Size} from '..'

export interface SideNavItemProps<T> {
  className?: string
  style?: CSSProperties
  children?: ReactNode
  icon: ReactNode
  size?: Size
  value?: T | null
  isSelected?: boolean
  container?: ReactElement | ((props: {activeClassName: string}) => ReactNode)
  onPress?: (event: SyntheticEvent, value: T) => void | Promise<void>
}

export default class SideNavItem<T = any> extends Component<
  SideNavItemProps<T>,
  {}
> {}
