import {CSSProperties, PureComponent, ReactNode, Ref} from 'react'

export interface SuggestDropdownProps {
  isOpened?: boolean
  anchor?: (forwardRef: Ref<HTMLElement>) => ReactNode
  className?: string
  appendToBody?: boolean
  autoPositionY?: boolean
  style?: CSSProperties
}

export default class SuggestDropdown extends PureComponent<
  SuggestDropdownProps,
  {}
> {}
