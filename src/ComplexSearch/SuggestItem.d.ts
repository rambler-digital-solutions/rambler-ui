import {PureComponent, HTMLProps, Ref} from 'react'

export interface SuggestItemProps<T>
  extends Omit<HTMLProps<HTMLDivElement>, 'value' | 'ref'> {
  highlightedClassName?: string
  removeButton?: string
  value: T
  ref: Ref<SuggestItem<T>>
}

export default class SuggestItem<T = any> extends PureComponent<
  SuggestItemProps<T>,
  {}
> {}
