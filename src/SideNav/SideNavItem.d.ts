import {
  Component,
  ReactNode,
  ReactElement,
  SyntheticEvent,
  HTMLProps
} from 'react'
import {Size} from '..'

export interface SideNavItemProps<T, E>
  extends Omit<HTMLProps<E>, 'size' | 'value' | 'ref'> {
  icon: ReactNode
  size?: Size
  value?: T | null
  isSelected?: boolean
  container?: ReactElement | ((props: {activeClassName: string}) => ReactNode)
  onPress?: (event: SyntheticEvent, value: T) => void | Promise<void>
}

export default class SideNavItem<T = any, E = HTMLDivElement> extends Component<
  SideNavItemProps<T, E>,
  {}
> {}
