import {PureComponent, ReactNode} from 'react'
import {TagType} from '..'

export interface TagsInputProps {
  children?: ReactNode
  disabled?: boolean
  className?: string
  isExpanded?: boolean
  onChange?: () => void | Promise<void>
  onMoreClick?: () => void | Promise<void>
  type?: TagType
}

export default class TagsInput extends PureComponent<TagsInputProps, {}> {}
