import {Component, SyntheticEvent, HTMLProps} from 'react'
import {Size, VerticalPosition} from '..'

export interface TabsProps<T>
  extends Omit<
    HTMLProps<HTMLDivElement>,
    'size' | 'value' | 'onChange' | 'ref'
  > {
  value?: T
  size?: Size
  position?: Exclude<VerticalPosition, 'center'>
  disabled?: boolean
  onChange?: (event: SyntheticEvent, value: T) => void | Promise<void>
}

export default class Tabs<T = any> extends Component<TabsProps<T>, {}> {}
