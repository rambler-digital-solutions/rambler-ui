import {Component, SyntheticEvent, HTMLProps} from 'react'

export interface StepperProps
  extends Omit<HTMLProps<HTMLDivElement>, 'onChange'> {
  value: number
  onChange: (event: SyntheticEvent, value: number) => void | Promise<void>
}

export default class Stepper extends Component<StepperProps, {}> {}
