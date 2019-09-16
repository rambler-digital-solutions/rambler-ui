import {CSSProperties, PureComponent, ReactNode} from 'react'

declare interface RadioButtonGroupProps {
  name?: string;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  onChange?: () => any;
  value?: any;
}

export default class RadioButton extends PureComponent<RadioButtonGroupProps, {}> {}
