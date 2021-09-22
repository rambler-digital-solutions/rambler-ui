import {PureComponent, SyntheticEvent, HTMLProps, Ref} from 'react'

export interface RadioButtonGroupProps<T>
  extends Omit<HTMLProps<HTMLDivElement>, 'value' | 'onChange' | 'ref'> {
  name?: string
  onChange?: (event: SyntheticEvent, value: T) => void | Promise<void>
  value?: T | null
  ref: Ref<RadioButton<T>>
}

export default class RadioButton<T = any> extends PureComponent<
  RadioButtonGroupProps<T>,
  {}
> {}
