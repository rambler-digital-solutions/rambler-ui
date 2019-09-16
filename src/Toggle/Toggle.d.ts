import {Component, CSSProperties, ReactNode} from 'react'

declare interface ToggleProps {
  value?: any;
  onChange?: (event: object, newValue: any) => void;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  size?: 'small' | 'medium';
  behavior?: 'radio' | 'toggle';
  block?: boolean;
  equalWidth?: boolean;
  disabled?: boolean;
  variation?: 'regular' | 'transparent';
}

export default class Toggle extends Component<ToggleProps, {}> {}
