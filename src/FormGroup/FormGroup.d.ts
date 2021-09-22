import {Component, ReactNode, HTMLProps, Ref} from 'react'
import {Size} from '..'

export interface FormGroupProps
  extends Omit<HTMLProps<HTMLDivElement>, 'size' | 'label' | 'ref'> {
  inline?: boolean
  label?: ReactNode
  size?: Size
  fieldId?: string
  ref: Ref<FormGroup>
}

export default class FormGroup extends Component<FormGroupProps, {}> {}
