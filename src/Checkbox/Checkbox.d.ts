import {
  CSSProperties,
  PureComponent,
  SyntheticEvent,
  HTMLProps,
  Ref
} from 'react'
import {HorizontalPosition, Size, Variation} from '..'

export interface CheckboxProps
  extends Omit<HTMLProps<HTMLInputElement>, 'size' | 'ref'> {
  name?: string
  disabled?: boolean
  iconPosition?: Exclude<HorizontalPosition, 'center'>
  checked?: boolean
  indeterminate?: boolean
  onCheck?: (event: SyntheticEvent, checked: boolean) => void | Promise<void>
  checkboxStyle?: CSSProperties
  checkboxClassName?: string
  labelStyle?: CSSProperties
  labelClassName?: string
  variation?: Exclude<Variation, 'promo'>
  size?: Size
  ref?: Ref<Checkbox>
}

export default class Checkbox extends PureComponent<CheckboxProps, {}> {}
