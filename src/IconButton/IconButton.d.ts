import {CSSProperties, PureComponent, ReactElement, ReactNode} from 'react'

declare interface IconButtonProps {
  type?: 'primary' | 'secondary' | 'outline' | 'flat' | 'danger';
  href?: string;
  target?: string;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  size?: number | 'small' | 'medium';
  onClick?: () => void;
  container?: ReactElement;
  overlay?: ReactElement;
  disabled?: boolean;
  buttonType?: string;
  loading?: boolean;
}

export default class IconButton extends PureComponent<IconButtonProps, {}> {}
