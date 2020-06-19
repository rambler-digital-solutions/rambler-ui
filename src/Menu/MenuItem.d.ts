import {PureComponent, ReactElement, ReactNode, HTMLAttributes} from 'react'

export interface MenuItemProps<T> extends HTMLAttributes<HTMLDivElement> {
  value?: T
  disabled?: boolean
  container?: ReactElement | ((props: {activeClassName: string}) => ReactNode)
}

export default class MenuItem<T = any> extends PureComponent<
  MenuItemProps<T>,
  {}
> {}
