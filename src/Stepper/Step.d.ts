import {Component, CSSProperties, ReactNode} from 'react'

declare interface StepProps {
  value: number;
  icon?: ReactNode;
  disabled?: boolean;
  completed?: boolean;
  active?: boolean;
  onClick?: (event: object, newValue: any) => void;
  className?: string;
  badgeClassName?: string;
  textClassName?: string;
  style?: CSSProperties;
}

export default class Step extends Component<StepProps, {}> {}
