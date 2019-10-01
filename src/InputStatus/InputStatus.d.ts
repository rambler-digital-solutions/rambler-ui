import {PureComponent, ReactNode, Ref} from 'react'
import {StatusType} from '..'

export interface InputStatusProps {
  type?: Exclude<StatusType, 'filled'>
  message?: ReactNode
  children: ReactNode
  className?: string
  containerRef?: Ref<HTMLElement>
}

export default class InputStatus extends PureComponent<InputStatusProps, {}> {}
