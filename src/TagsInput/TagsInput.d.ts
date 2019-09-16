import {PureComponent, ReactNode} from 'react'

declare interface TagsInputProps {
  children?: ReactNode;
  disabled?: boolean;
  className?: string;
  isExpanded?: boolean;
  onChange?: () => void;
  onMoreClick?: () => void;
  type?: 'regular' | 'background';
}

export default class TagsInput extends PureComponent<TagsInputProps, {}> {}
