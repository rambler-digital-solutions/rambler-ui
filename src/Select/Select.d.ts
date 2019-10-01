import {
  CSSProperties,
  PureComponent,
  ReactElement,
  ReactNode,
  SyntheticEvent
} from 'react'
import {Size, Variation, StatusType, TagType} from '..'

export interface SelectProps {
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
  value?: any
  valuesEquality?: (value: any, nextValue: any) => boolean
  inputValueRenderer?: (value: any) => string
  iconElementRenderer?: (value: any) => ReactElement
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
  onChange?: (value: any) => void | Promise<void>
  onSearch?: (searchText: string) => void | Promise<void>
  customElementRenderer?: (value: any) => ReactElement
  rootClassName?: string
  rootStyle?: CSSProperties
  containerClassName?: string
  containerStyle?: CSSProperties
  inputMode?: boolean
  native?: boolean
}

export default class Select extends PureComponent<SelectProps, {}> {}
