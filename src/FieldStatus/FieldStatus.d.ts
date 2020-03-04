import {PureComponent, ReactNode, Ref} from 'react'
import {StatusType} from '..'

export interface FieldStatusProps {
  type?: Exclude<StatusType, 'filled'>
  message?: ReactNode
  children: ReactNode
  className?: string
  containerRef?: Ref<HTMLElement>
}

export default class FieldStatus extends PureComponent<FieldStatusProps, {}> {}
