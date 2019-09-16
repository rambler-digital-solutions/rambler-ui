import {PureComponent, ReactNode} from 'react'

declare interface InputStatusProps {
  type?: 'error' | 'warning' | 'success';
  message?: ReactNode;
  children: ReactNode;
  className?: string;
  containerRef?: (ref) => any;
}

export default class InputStatus extends PureComponent<InputStatusProps, {}> {}
