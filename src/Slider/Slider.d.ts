import {PureComponent, SyntheticEvent, HTMLAttributes} from 'react'

export interface SliderProps<T>
  extends Omit<HTMLAttributes<HTMLInputElement>, 'onChange'> {
  value?: T
  min?: number
  max?: number
  step?: number
  onChange?: (event: SyntheticEvent, value: T) => void | Promise<void>
}

export default class Slider<T = any> extends PureComponent<
  SliderProps<T>,
  {}
> {}
