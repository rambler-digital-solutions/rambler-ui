import {PureComponent, SyntheticEvent} from 'react'

export interface OnClickOutsideProps {
  handler: (event: SyntheticEvent) => void | Promise<void>
}

export default class OnClickOutside extends PureComponent<
  OnClickOutsideProps,
  {}
> {}
