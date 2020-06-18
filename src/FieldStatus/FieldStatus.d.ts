import {PureComponent, ReactNode, Ref, HTMLAttributes} from 'react'
import {StatusType} from '..'

export interface FieldStatusProps extends HTMLAttributes<HTMLDivElement> {
  type?: Exclude<StatusType, 'filled'>
  message?: ReactNode
  children: ReactNode
  className?: string
  containerRef?: Ref<HTMLElement>
}

export default class FieldStatus extends PureComponent<FieldStatusProps, {}> {}
