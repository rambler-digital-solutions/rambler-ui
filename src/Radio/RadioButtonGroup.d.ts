import {PureComponent, SyntheticEvent, HTMLProps} from 'react'

export interface RadioButtonGroupProps<T>
  extends Omit<HTMLProps<HTMLDivElement>, 'value' | 'onChange'> {
  name?: string
  onChange?: (event: SyntheticEvent, value: T) => void | Promise<void>
  value?: T | null
}

export default class RadioButton<T = any> extends PureComponent<
  RadioButtonGroupProps<T>,
  {}
> {}
