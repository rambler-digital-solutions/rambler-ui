import {Component, CSSProperties, ReactNode, SyntheticEvent} from 'react'

export interface StepProps {
  value: number
  icon?: ReactNode
  disabled?: boolean
  completed?: boolean
  active?: boolean
  onClick?: (event: SyntheticEvent, value: any) => void | Promise<void>
  className?: string
  badgeClassName?: string
  textClassName?: string
  style?: CSSProperties
}

export default class Step extends Component<StepProps, {}> {}
