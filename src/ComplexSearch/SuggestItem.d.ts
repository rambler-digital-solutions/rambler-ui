import {PureComponent, HTMLAttributes} from 'react'

export interface SuggestItemProps<T> extends HTMLAttributes<HTMLDivElement> {
  highlightedClassName?: string
  removeButton?: string
  value: T
}

export default class SuggestItem<T = any> extends PureComponent<
  SuggestItemProps<T>,
  {}
> {}
