import {Component, ReactNode, HTMLProps} from 'react'
import {Size} from '..'

export interface FormGroupProps
  extends Omit<HTMLProps<HTMLDivElement>, 'size' | 'label'> {
  inline?: boolean
  label?: ReactNode
  size?: Size
  fieldId?: string
}

export default class FormGroup extends Component<FormGroupProps, {}> {}
