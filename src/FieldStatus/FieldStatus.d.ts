import {PureComponent, ReactNode, Ref, HTMLProps} from 'react'
import {StatusType} from '..'

export interface FieldStatusProps extends HTMLProps<HTMLDivElement> {
  type?: Exclude<StatusType, 'filled'>
  message?: ReactNode
  className?: string
  containerRef?: Ref<HTMLElement>
}

export default class FieldStatus extends PureComponent<FieldStatusProps, {}> {}
