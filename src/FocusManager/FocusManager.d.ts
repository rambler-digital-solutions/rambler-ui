import {PureComponent} from 'react'

export interface FocusManagerProps {
  tabIndex?: number
  children: () => any
}

export default class FocusManager extends PureComponent<
  FocusManagerProps,
  {}
> {}
