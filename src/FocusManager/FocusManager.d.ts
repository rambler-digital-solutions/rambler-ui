import {PureComponent} from 'react'

declare interface FocusManagerProps {
  tabIndex?: number;
  children: () => any
}

export default class FocusManager extends PureComponent<FocusManagerProps, {}> {}
