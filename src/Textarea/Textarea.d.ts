import {CSSProperties, PureComponent, SyntheticEvent} from 'react'
import {StatusType, Variation} from '..'

export interface TextareaProps {
  value: any
  placeholder?: string
  disabled?: boolean
  status?: StatusType | null
  variation?: Variation
  className?: string
  style?: CSSProperties
  textareaClassName?: string
  textareaStyle?: CSSProperties
  onChange?: (event: SyntheticEvent, value: any) => void | Promise<void>
}

export default class Textarea extends PureComponent<TextareaProps, {}> {}
