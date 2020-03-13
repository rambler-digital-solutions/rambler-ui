import {PureComponent, SyntheticEvent, Ref, ReactNode} from 'react'

export interface OnClickOutsideProps {
  handler: (event: SyntheticEvent) => void | Promise<void>
  children: (componentRef: Ref<HTMLElement>) => ReactNode
}

export default class OnClickOutside extends PureComponent<
  OnClickOutsideProps,
  {}
> {}
