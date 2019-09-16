import {PureComponent, ReactElement, ReactNode} from 'react'

declare interface MenuItemProps {
  className?: string;
  value?: any;
  disabled?: boolean;
  children: ReactNode;
  container?: ReactElement | ((activeClassName) => any);
}

export default class MenuItem extends PureComponent<MenuItemProps, {}> {}
