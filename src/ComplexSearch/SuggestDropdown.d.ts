import {CSSProperties, PureComponent, ReactNode} from 'react'

export interface SuggestDropdownProps {
  isOpened?: boolean
  anchor?: ReactNode
  className?: string
  appendToBody?: boolean
  autoPositionY?: boolean
  style?: CSSProperties
}

export default class SuggestDropdown extends PureComponent<
  SuggestDropdownProps,
  {}
> {}
