import {CSSProperties, PureComponent} from 'react'

declare interface SuggestItemProps {
  style?: CSSProperties;
  className?: string;
  highlightedClassName?: string;
  removeButton?: string;
  value: any;
}

export default class SuggestItem extends PureComponent<SuggestItemProps, {}> {}
