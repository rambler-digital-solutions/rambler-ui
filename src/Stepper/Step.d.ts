import {Component, ReactNode, SyntheticEvent, HTMLProps, Ref} from 'react'

export interface StepProps
  extends Omit<HTMLProps<HTMLDivElement>, 'onClick' | 'ref'> {
  value: number
  icon?: ReactNode
  disabled?: boolean
  completed?: boolean
  active?: boolean
  onClick?: (event: SyntheticEvent, value: number) => void | Promise<void>
  badgeClassName?: string
  textClassName?: string
  ref: Ref<Step>
}

export default class Step extends Component<StepProps, {}> {}
