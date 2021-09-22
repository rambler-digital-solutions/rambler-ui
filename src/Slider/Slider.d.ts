import {PureComponent, SyntheticEvent, HTMLProps, Ref} from 'react'

export interface SliderProps<T>
  extends Omit<HTMLProps<HTMLInputElement>, 'value' | 'onChange' | 'ref'> {
  value?: T
  min?: number
  max?: number
  step?: number
  onChange?: (event: SyntheticEvent, value: T) => void | Promise<void>
  ref?: Ref<Slider<T>>
}

export default class Slider<T = any> extends PureComponent<
  SliderProps<T>,
  {}
> {}
