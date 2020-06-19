import {
  Component,
  ReactElement,
  Ref,
  SyntheticEvent,
  HTMLAttributes
} from 'react'
import {TagType} from '..'

export interface TagsInputItemProps<T> extends HTMLAttributes<HTMLDivElement> {
  value: T
  icon?: ReactElement
  onClick?: (event: SyntheticEvent) => void | Promise<void>
  onRemove?: (event: SyntheticEvent, value: T) => void | Promise<void>
  nodeRef?: Ref<HTMLElement>
  disabled?: boolean
  type?: TagType
}

export default class TagsInputItem<T = any> extends Component<
  TagsInputItemProps<T>,
  {}
> {}
