import {PureComponent} from 'react'

declare interface OnClickOutsideProps {
  handler: () => any;
}

export default class OnClickOutside extends PureComponent<OnClickOutsideProps, {}> {}
