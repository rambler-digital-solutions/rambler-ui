import {CSSProperties, PureComponent, SyntheticEvent} from 'react'

export interface SourceButtonsProps {
  style?: CSSProperties
  className?: string
  sourceButtonsProps?: () => object
  serviceTooltipLabel?: string
  onSourceIconClick?: (event: SyntheticEvent) => void | Promise<void>
  activeType?: string
}

export default class SourceButtons extends PureComponent<
  SourceButtonsProps,
  {}
> {}
