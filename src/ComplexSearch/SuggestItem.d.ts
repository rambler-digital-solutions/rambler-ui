import {PureComponent, HTMLProps} from 'react'

export interface SuggestItemProps<T>
  extends Omit<HTMLProps<HTMLDivElement>, 'value'> {
  highlightedClassName?: string
  removeButton?: string
  value: T
}

export default class SuggestItem<T = any> extends PureComponent<
  SuggestItemProps<T>,
  {}
> {}
