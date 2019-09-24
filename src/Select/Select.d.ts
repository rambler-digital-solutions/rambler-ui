import {CSSProperties, PureComponent, ReactElement, ReactNode} from 'react'

export interface SelectProps {
  className?: string
  style?: CSSProperties
  dropdownClassName?: string
  dropdownStyle?: CSSProperties
  menuClassName?: string
  menuStyle?: CSSProperties
  multiple?: boolean
  multipleType?: 'regular' | 'background'
  clearIcon?: boolean
  arrowClassName?: string
  arrowStyle?: CSSProperties
  value?: any
  valuesEquality?: () => boolean
  inputValueRenderer?: () => string
  iconElementRenderer?: (value: any) => ReactElement
  placeholder?: string
  lightPlaceholderColor?: boolean
  disabled?: boolean
  readOnly?: boolean
  children?: Array<ReactElement>
  icon?: ReactNode
  arrowIcon?: ReactNode
  size?: 'small' | 'medium'
  variation?: 'regular' | 'awesome' | 'promo'
  status?: 'error' | 'warning' | 'success' | 'filled' | null
  appendToBody?: boolean
  onFocus?: () => void
  onBlur?: () => void
  onChange?: () => void
  onSearch?: () => void
  customElementRenderer?: (value: any) => ReactElement
  rootClassName?: string
  rootStyle?: CSSProperties
  containerClassName?: string
  containerStyle?: CSSProperties
  inputMode?: boolean
  native?: boolean
}

export default class Select extends PureComponent<SelectProps, {}> {}
