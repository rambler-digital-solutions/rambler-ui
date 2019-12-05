import {Component, CSSProperties, SyntheticEvent} from 'react'

export interface StepperProps {
  value: number
  onChange: (event: SyntheticEvent, value: number) => void | Promise<void>
  className?: string
  style?: CSSProperties
}

export default class Stepper extends Component<StepperProps, {}> {}
