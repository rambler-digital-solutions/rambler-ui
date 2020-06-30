import {Component, ReactNode, HTMLAttributes} from 'react'
import {Size} from '..'

export interface FormGroupProps extends HTMLAttributes<HTMLDivElement> {
  inline?: boolean
  label?: ReactNode
  size?: Size
  fieldId?: string
}

export default class FormGroup extends Component<FormGroupProps, {}> {}
