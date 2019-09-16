import {CSSProperties, PureComponent, ReactElement} from 'react'

declare interface MenuProps {
  className?: string;
  style?: CSSProperties;
  multiple?: boolean;
  disabled?: boolean;
  autoFocus?: boolean;
  maxHeight?: number;
  value?: any;
  valuesEquality?: () => boolean;
  children?: ReactElement | Array<ReactElement>;
  onChange?: () => void;
  onEscKeyDown?: () => void;
  size?: 'small' | 'medium';
}

export default class Menu extends PureComponent<MenuProps, {}> {}
