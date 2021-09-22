import {Component, SyntheticEvent, HTMLProps, Ref} from 'react'

export interface StepperProps
  extends Omit<HTMLProps<HTMLDivElement>, 'onChange' | 'ref'> {
  value: number
  onChange: (event: SyntheticEvent, value: number) => void | Promise<void>
  ref: Ref<Stepper>
}

export default class Stepper extends Component<StepperProps, {}> {}
