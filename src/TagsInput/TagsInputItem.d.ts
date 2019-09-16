import {Component, ReactElement} from 'react'

declare interface TagsInputItemProps {
  className?: string;
  value: any;
  children: string;
  icon?: ReactElement;
  onClick?: () => void;
  onRemove?: (event, value) => void;
  nodeRef?: (r) => any;
  disabled?: boolean;
  type?: 'regular' | 'background';
}

export default class TagsInputItem extends Component<TagsInputItemProps, {}> {}
