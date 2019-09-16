import {Component, CSSProperties, ReactNode} from 'react'

declare interface SideNavProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  size?: 'small' | 'medium';
  value?: any;
  block?: boolean;
  onChange?: (event: object, newValue: any) => void;
}

export default class SideNav extends Component<SideNavProps, {}> {}
