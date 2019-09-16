import {CSSProperties, PureComponent, ReactNode} from 'react'

declare interface NotificationProps {
  className?: string;
  style?: CSSProperties;
  isOpened?: boolean;
  icon?: ReactNode;
  title?: ReactNode;
  body: ReactNode;
  actionButton?: string;
  positionX?: 'left' | 'right';
  showClose?: boolean;
  closeOnClickOutside?: boolean;
  onAction?: () => any;
  onRequestClose?: () => any;
}

export default class Notification extends PureComponent<NotificationProps, {}> {}
