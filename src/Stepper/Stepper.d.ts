import {Component, SyntheticEvent, HTMLAttributes} from 'react'

export interface StepperProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value: number
  onChange: (event: SyntheticEvent, value: number) => void | Promise<void>
}

export default class Stepper extends Component<StepperProps, {}> {}
