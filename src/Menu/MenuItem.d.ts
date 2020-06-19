import {PureComponent, ReactElement, ReactNode, HTMLAttributes} from 'react'

export interface MenuItemProps<T, E> extends HTMLAttributes<E> {
  value?: T
  disabled?: boolean
  container?: ReactElement | ((props: {activeClassName: string}) => ReactNode)
}

export default class MenuItem<
  T = any,
  E = HTMLDivElement
> extends PureComponent<MenuItemProps<T, E>, {}> {}
