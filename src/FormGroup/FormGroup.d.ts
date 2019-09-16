import {Component, CSSProperties, ReactNode} from 'react'

declare interface FormGroupProps {
  inline?: boolean;
  label?: ReactNode;
  size?: 'small' | 'medium';
  className?: string;
  fieldId?: string;
  children: ReactNode;
  style?: CSSProperties;
}

export default class FormGroup extends Component<FormGroupProps, {}> {}
