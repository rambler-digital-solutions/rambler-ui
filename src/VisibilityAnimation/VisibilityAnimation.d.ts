import {PureComponent} from 'react'

declare interface VisibilityAnimationProps {
  isVisible?: boolean;
  animationDuration: number;
  onWillVisible?: () => void;
  onVisible?: () => void;
  onWillInvisible?: () => void;
  onInvisible?: () => void;
  children?: () => any;
}

export default class VisibilityAnimation extends PureComponent<VisibilityAnimationProps, {}> {}
