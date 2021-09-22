import {PureComponent, ReactNode, Ref, HTMLProps} from 'react'
import {StatusType} from '..'

export interface FieldStatusProps
  extends Omit<HTMLProps<HTMLDivElement>, 'ref'> {
  type?: Exclude<StatusType, 'filled'>
  message?: ReactNode
  className?: string
  containerRef?: Ref<HTMLElement>
  ref: Ref<FieldStatus>
}

export default class FieldStatus extends PureComponent<FieldStatusProps, {}> {}
