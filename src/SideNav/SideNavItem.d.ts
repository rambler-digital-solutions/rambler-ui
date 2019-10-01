import {
  Component,
  CSSProperties,
  ReactNode,
  ReactElement,
  SyntheticEvent
} from 'react'
import {Size} from '..'

export interface SideNavItemProps {
  className?: string
  style?: CSSProperties
  children?: ReactNode
  icon: ReactNode
  size?: Size
  value?: any
  isSelected?: boolean
  href?: string
  target?: string
  container?: ReactElement | ((props: {activeClassName: string}) => ReactNode)
  onPress?: (event: SyntheticEvent, value: any) => void | Promise<void>
}

export default class SideNavItem extends Component<SideNavItemProps, {}> {}
