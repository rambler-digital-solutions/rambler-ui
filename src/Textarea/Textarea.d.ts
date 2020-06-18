import {
  CSSProperties,
  PureComponent,
  SyntheticEvent,
  HTMLAttributes
} from 'react'
import {StatusType, Variation} from '..'

export interface TextareaProps
  extends Omit<HTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
  value: string | null
  placeholder?: string
  disabled?: boolean
  status?: StatusType | null
  variation?: Variation
  textareaClassName?: string
  textareaStyle?: CSSProperties
  onChange?: (event: SyntheticEvent, value: string) => void | Promise<void>
}

export default class Textarea extends PureComponent<TextareaProps, {}> {}
