import {PureComponent, CSSProperties, SyntheticEvent} from 'react'

export interface SliderProps<T> {
  value?: T
  className?: string
  style?: CSSProperties
  min?: number
  max?: number
  step?: number
  onChange?: (event: SyntheticEvent, value: T) => void | Promise<void>
}

export default class TabsItem<T = any> extends PureComponent<
  SliderProps<T>,
  {}
> {}
