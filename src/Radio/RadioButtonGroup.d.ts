import {PureComponent, ReactNode, SyntheticEvent, HTMLAttributes} from 'react'

export interface RadioButtonGroupProps<T>
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  name?: string
  onChange?: (event: SyntheticEvent, value: T) => void | Promise<void>
  value?: T | null
}

export default class RadioButton<T = any> extends PureComponent<
  RadioButtonGroupProps<T>,
  {}
> {}
