import {PureComponent, HTMLProps} from 'react'
import {TagType} from '..'

export interface TagsInputProps extends Omit<HTMLProps<HTMLDivElement>, 'ref'> {
  disabled?: boolean
  isExpanded?: boolean
  onChange?: () => void | Promise<void>
  onMoreClick?: () => void | Promise<void>
  type?: TagType
}

export default class TagsInput extends PureComponent<TagsInputProps, {}> {}
