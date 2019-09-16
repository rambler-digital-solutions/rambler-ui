import {CSSProperties, PureComponent} from 'react'

declare interface SourceButtonsProps {
  style?: CSSProperties;
  className?: string;
  sourceButtonsProps?: () => any;
  serviceTooltipLabel?: string;
  onSourceIconClick?: () => void;
  activeType?: string;
}

export default class SourceButtons extends PureComponent<SourceButtonsProps, {}> {}
