import {
  Component,
  ReactElement,
  ReactNode,
  SyntheticEvent,
  HTMLAttributes
} from 'react'
import {Size} from '..'

export interface TabsItemProps<T> extends HTMLAttributes<HTMLButtonElement> {
  value?: T
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
