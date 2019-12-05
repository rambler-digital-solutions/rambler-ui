import {PureComponent, ReactElement, ReactNode} from 'react'

export interface MenuItemProps<T> {
  className?: string
  value?: T
  disabled?: boolean
  children: ReactNode
  container?: ReactElement | ((props: {activeClassName: string}) => ReactNode)
}

export default class MenuItem<T = any> extends PureComponent<
  MenuItemProps<T>,
  {}
> {}
