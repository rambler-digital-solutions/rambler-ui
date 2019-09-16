import {CSSProperties, PureComponent, ReactNode} from 'react'

declare interface SwitcherProps {
  name?: string;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
  switcherClassName?: string;
  switcherStyle?: CSSProperties;
  trackClassName?: string;
  trackStyle?: CSSProperties;
  labelClassName?: string;
  labelStyle?: CSSProperties;
  iconPosition?: 'left' | 'right';
  checked: boolean;
  children?: ReactNode;
  onCheck?: (event, checked) => void;
}

export default class Switcher extends PureComponent<SwitcherProps, {}> {}
