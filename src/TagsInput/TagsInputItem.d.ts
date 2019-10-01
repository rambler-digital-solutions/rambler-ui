import {Component, ReactElement, Ref, SyntheticEvent} from 'react'
import {TagType} from '..'

export interface TagsInputItemProps {
  className?: string
  value: any
  children: string
  icon?: ReactElement
  onClick?: (event: SyntheticEvent) => void | Promise<void>
  onRemove?: (event: SyntheticEvent, value: any) => void | Promise<void>
  nodeRef?: Ref<HTMLElement>
  disabled?: boolean
  type?: TagType
}

export default class TagsInputItem extends Component<TagsInputItemProps, {}> {}
