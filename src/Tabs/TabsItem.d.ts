import {
  Component,
  ReactElement,
  ReactNode,
  SyntheticEvent,
  HTMLProps
} from 'react'
import {Size} from '..'

export interface TabsItemProps<T, E>
  extends Omit<HTMLProps<E>, 'size' | 'value' | 'ref'> {
  value?: T
  size?: Size
  isSelected?: boolean
  disabled?: boolean
  container?: ReactElement | ((props: {activeClassName: string}) => ReactNode)
  onPress?: (event: SyntheticEvent, value: T) => void | Promise<void>
}

export default class TabsItem<T = any, E = HTMLButtonElement> extends Component<
  TabsItemProps<T, E>,
  {}
> {}
