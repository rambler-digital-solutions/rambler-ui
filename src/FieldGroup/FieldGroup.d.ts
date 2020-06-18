import {PureComponent, HTMLAttributes} from 'react'
import {Size, Variation, StatusType} from '..'

export interface FieldGroupProps
  extends HTMLAttributes<HTMLInputElement & HTMLSelectElement> {
  size?: Size
  variation?: Variation
  status?: Exclude<StatusType, 'filled'> | null
  disabled?: boolean
  showDivider?: boolean
}

export default class FieldGroup extends PureComponent<FieldGroupProps, {}> {}
