import {CSSProperties, PureComponent} from 'react'

export interface SuggestItemProps<T> {
  style?: CSSProperties
  className?: string
  highlightedClassName?: string
  removeButton?: string
  value: T
}

export default class SuggestItem<T = any> extends PureComponent<
  SuggestItemProps<T>,
  {}
> {}
