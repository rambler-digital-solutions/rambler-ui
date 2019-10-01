import {CSSProperties, PureComponent, ReactElement} from 'react'
import {Size} from '..'

export interface MenuProps {
  className?: string
  style?: CSSProperties
  multiple?: boolean
  disabled?: boolean
  autoFocus?: boolean
  maxHeight?: number
  value?: any
  valuesEquality?: () => boolean
  children?: ReactElement | Array<ReactElement>
  onChange?: () => void | Promise<void>
  onEscKeyDown?: () => void | Promise<void>
  size?: Size
}

export default class Menu extends PureComponent<MenuProps, {}> {}
