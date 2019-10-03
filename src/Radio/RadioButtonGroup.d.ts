import {CSSProperties, PureComponent, ReactNode, SyntheticEvent} from 'react'

export interface RadioButtonGroupProps<T> {
  name?: string
  children?: ReactNode
  className?: string
  style?: CSSProperties
  onChange?: (event: SyntheticEvent, value: T) => void | Promise<void>
  value?: T | null
}

export default class RadioButton<T = any> extends PureComponent<
  RadioButtonGroupProps<T>,
  {}
> {}
