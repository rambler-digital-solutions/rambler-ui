import {Component, CSSProperties, ReactNode} from 'react'
import {Size} from '..'

export interface FormGroupProps {
  inline?: boolean
  label?: ReactNode
  size?: Size
  className?: string
  fieldId?: string
  children: ReactNode
  style?: CSSProperties
}

export default class FormGroup extends Component<FormGroupProps, {}> {}
