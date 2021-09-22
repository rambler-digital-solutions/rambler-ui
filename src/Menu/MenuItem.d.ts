import {PureComponent, ReactElement, ReactNode, HTMLProps, Ref} from 'react'

export interface MenuItemProps<T, E>
  extends Omit<HTMLProps<E>, 'value' | 'ref'> {
  value?: T
  disabled?: boolean
  container?: ReactElement | ((props: {activeClassName: string}) => ReactNode)
  ref?: Ref<MenuItem<T, E>>
}

export default class MenuItem<
  T = any,
  E = HTMLDivElement
> extends PureComponent<MenuItemProps<T, E>, {}> {}
