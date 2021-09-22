import {Component, SyntheticEvent, HTMLProps} from 'react'
import {Size} from '..'

export interface SideNavProps<T>
  extends Omit<
    HTMLProps<HTMLDivElement>,
    'size' | 'value' | 'onChange' | 'ref'
  > {
  size?: Size
  value?: T | null
  block?: boolean
  onChange?: (event: SyntheticEvent, value: T) => void | Promise<void>
}

export default class SideNav<T = any> extends Component<SideNavProps<T>, {}> {}
