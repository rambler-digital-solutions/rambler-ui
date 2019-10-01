import {
  Component,
  CSSProperties,
  ReactElement,
  ReactNode,
  SyntheticEvent
} from 'react'
import {Size} from '..'

export interface TabsItemProps {
  value?: any
  className?: string
  style?: CSSProperties
  children?: ReactNode
  size?: Size
  isSelected?: boolean
  disabled?: boolean
  container?: ReactElement | ((props: {activeClassName: string}) => ReactNode)
  onPress?: (event: SyntheticEvent, value: any) => void | Promise<void>
}

export default class TabsItem extends Component<TabsItemProps, {}> {}
