import {PureComponent, ReactNode} from 'react'

export interface VisibilityAnimationProps {
  isVisible?: boolean
  animationDuration: number
  onWillVisible?: () => void | Promise<void>
  onVisible?: () => void | Promise<void>
  onWillInvisible?: () => void | Promise<void>
  onInvisible?: () => void | Promise<void>
  children: (props: {isVisible: boolean}) => ReactNode
}

export default class VisibilityAnimation extends PureComponent<
  VisibilityAnimationProps,
  {}
> {}
