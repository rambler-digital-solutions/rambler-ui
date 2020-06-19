import {PureComponent, ReactNode, HTMLAttributes} from 'react'
import {TagType} from '..'

export interface TagsInputProps extends HTMLAttributes<HTMLDivElement> {
  disabled?: boolean
  isExpanded?: boolean
  onChange?: () => void | Promise<void>
  onMoreClick?: () => void | Promise<void>
  type?: TagType
}

export default class TagsInput extends PureComponent<TagsInputProps, {}> {}
