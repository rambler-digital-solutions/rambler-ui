import {Component, CSSProperties} from 'react'

export interface StepperProps {
  value: number
  onChange: (event: object, newValue: number) => void
  className?: string
  style?: CSSProperties
}

export default class Stepper extends Component<StepperProps, {}> {}
