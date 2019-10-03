import {CSSProperties, PureComponent, ReactElement} from 'react'
import {Size} from '..'

export interface MenuProps<T> {
  className?: string
  style?: CSSProperties
  multiple?: boolean
  disabled?: boolean
  autoFocus?: boolean
  maxHeight?: number
  value?: T
  valuesEquality?: () => boolean
  children?: ReactElement | Array<ReactElement>
  onChange?: (value: T) => void | Promise<void>
  onEscKeyDown?: () => void | Promise<void>
  size?: Size
}

export default class Menu<T = any> extends PureComponent<MenuProps<T>, {}> {}
