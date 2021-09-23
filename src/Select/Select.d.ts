import {
  CSSProperties,
  PureComponent,
  ReactElement,
  ReactNode,
  SyntheticEvent,
  HTMLProps
} from 'react'
import {Size, Variation, StatusType, TagType} from '..'

export interface SelectProps<T>
  extends Omit<
    HTMLProps<HTMLInputElement>,
    'value' | 'size' | 'onChange' | 'inputMode' | 'ref'
  > {
  className?: string
  style?: CSSProperties
  dropdownClassName?: string
  dropdownStyle?: CSSProperties
  menuClassName?: string
  menuStyle?: CSSProperties
  multiple?: boolean
  multipleType?: TagType
  clearIcon?: boolean
  arrowClassName?: string
  arrowStyle?: CSSProperties
  value?: T
  valuesEquality?: (value?: T, nextValue?: T) => boolean
  inputValueRenderer?: (value?: T extends any[] ? T[0] : T) => string
  iconElementRenderer?: (value?: T) => ReactElement
  placeholder?: string
  lightPlaceholderColor?: boolean
  disabled?: boolean
  readOnly?: boolean
  children?: Array<ReactElement>
  icon?: ReactNode
  arrowIcon?: ReactNode
  size?: Size
  variation?: Variation
  status?: StatusType | null
  appendToBody?: boolean
  onFocus?: (event: SyntheticEvent) => void | Promise<void>
  onBlur?: (event: SyntheticEvent) => void | Promise<void>
  onChange?: (value?: T | null) => void | Promise<void>
  onSearch?: (searchText: string) => void | Promise<void>
  customElementRenderer?: (value?: T) => ReactElement
  rootClassName?: string
  rootStyle?: CSSProperties
  containerClassName?: string
  containerStyle?: CSSProperties
  inputMode?: boolean
  native?: boolean
}

export default class Select<T = any> extends PureComponent<
  SelectProps<T>,
  {}
> {}
