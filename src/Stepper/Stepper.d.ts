import {Component, CSSProperties} from 'react'

declare interface StepperProps {
  value: number;
  onChange: (event: object, newValue: number) => void;
  className?: string;
  style?: CSSProperties;
}

export default class Stepper extends Component<StepperProps, {}> {}
