import {PureComponent} from 'react'

export interface OnClickOutsideProps {
  handler: () => any
}

export default class OnClickOutside extends PureComponent<
  OnClickOutsideProps,
  {}
> {}
