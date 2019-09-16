import {CSSProperties, PureComponent} from 'react'

declare interface TextareaProps {
  value: any;
  placeholder?: string;
  disabled?: boolean;
  status?: 'error' | 'warning' | 'success' | null;
  variation?: 'regular' | 'awesome' | 'promo';
  className?: string;
  style?: CSSProperties;
  textareaClassName?: string;
  textareaStyle?: CSSProperties;
  onChange?: () => any;
}

export default class Textarea extends PureComponent<TextareaProps, {}> {}
