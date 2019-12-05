import {PureComponent, ReactNode, Ref} from 'react'

export interface FocusManagerProps {
  tabIndex?: number
  children: (props: {focusElement: Ref<HTMLElement>}) => ReactNode
}

export default class FocusManager extends PureComponent<
  FocusManagerProps,
  {}
> {}
