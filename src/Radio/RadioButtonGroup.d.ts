import {CSSProperties, PureComponent, ReactNode, SyntheticEvent} from 'react'

export interface RadioButtonGroupProps {
  name?: string
  children?: ReactNode
  className?: string
  style?: CSSProperties
  onChange?: (event: SyntheticEvent, value: any) => void | Promise<void>
  value?: any
}

export default class RadioButton extends PureComponent<
  RadioButtonGroupProps,
  {}
> {}
