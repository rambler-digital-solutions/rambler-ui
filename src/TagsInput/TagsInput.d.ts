import {PureComponent, HTMLProps, Ref} from 'react'
import {TagType} from '..'

export interface TagsInputProps extends Omit<HTMLProps<HTMLDivElement>, 'ref'> {
  disabled?: boolean
  isExpanded?: boolean
  onChange?: () => void | Promise<void>
  onMoreClick?: () => void | Promise<void>
  type?: TagType
  ref: Ref<TagsInput>
}

export default class TagsInput extends PureComponent<TagsInputProps, {}> {}
