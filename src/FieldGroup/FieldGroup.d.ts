import {PureComponent} from 'react'
import {Size, Variation, StatusType} from '..'

export interface FieldGroupProps {
  size?: Size
  variation?: Variation
  status?: Exclude<StatusType, 'filled'> | null
  disabled?: boolean
  showDivider?: boolean
}

export default class FieldGroup extends PureComponent<FieldGroupProps, {}> {}
