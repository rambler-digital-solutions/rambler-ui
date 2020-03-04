import {PureComponent, ReactNode, Ref} from 'react'

export interface FocusManagerProps {
  tabIndex?: number
  children: (focusRef: Ref<HTMLElement>) => ReactNode
}

export default class FocusManager extends PureComponent<
  FocusManagerProps,
  {}
> {}
