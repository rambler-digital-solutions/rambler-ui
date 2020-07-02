import {PureComponent, ReactElement, ReactNode, HTMLProps} from 'react'

export interface MenuItemProps<T, E> extends Omit<HTMLProps<E>, 'value'> {
  value?: T
  disabled?: boolean
  container?: ReactElement | ((props: {activeClassName: string}) => ReactNode)
}

export default class MenuItem<
  T = any,
  E = HTMLDivElement
> extends PureComponent<MenuItemProps<T, E>, {}> {}
