import {
  Component,
  CSSProperties,
  ReactElement,
  ReactNode,
  SyntheticEvent
} from 'react'
import {Size} from '..'

export interface TabsItemProps<T> {
  value?: T
  className?: string
  style?: CSSProperties
  children?: ReactNode
  size?: Size
  isSelected?: boolean
  disabled?: boolean
  container?: ReactElement | ((props: {activeClassName: string}) => ReactNode)
  onPress?: (event: SyntheticEvent, value: T) => void | Promise<void>
}

export default class TabsItem<T = any> extends Component<
  TabsItemProps<T>,
  {}
> {}
