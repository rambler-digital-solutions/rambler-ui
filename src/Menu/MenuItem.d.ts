import {PureComponent, ReactElement, ReactNode} from 'react'

export interface MenuItemProps {
  className?: string
  value?: any
  disabled?: boolean
  children: ReactNode
  container?: ReactElement | ((props: {activeClassName: string}) => ReactNode)
}

export default class MenuItem extends PureComponent<MenuItemProps, {}> {}
