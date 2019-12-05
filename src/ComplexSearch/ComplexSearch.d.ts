import {CSSProperties, PureComponent, ReactNode, SyntheticEvent} from 'react'
import {Size} from '..'

export interface ComplexSearchProps<T> {
  style?: CSSProperties
  className?: string
  inputWrapperClassName?: string
  value?: string
  searchButton?: ReactNode
  searchButtonStyle?: CSSProperties
  searchButtonClassName?: string
  searchIcon?: ReactNode
  inputLeftIcon?: ReactNode
  dropdownStyle?: CSSProperties
  dropdownClassName?: string
  division?: string
  placeholder?: string
  onSearch?: (value: string, options: object) => void | Promise<void>
  onFocus?: (event: SyntheticEvent) => void | Promise<void>
  onBlur?: (event: SyntheticEvent) => void | Promise<void>
  onSelectItem?: (value: T) => void | Promise<void>
  onClickItem?: (value: T) => void | Promise<void>
  onRemoveItem?: (value: T) => void | Promise<void>
  onHoverItem?: (value: T) => void | Promise<void>
  onSubmit?: (value: string, options: object) => void | Promise<void>
  onPressEnter?: (value: string, options: object) => void | Promise<void>
  appendToBody?: boolean
  autoPositionY?: boolean
  inputProps?: object
  sourceButtonsProps?: () => object
  serviceTooltipLabel?: string
  searchButtonProps?: object
  sourceType?: boolean
  size?: Size
}

export default class ComplexSearch<T = any> extends PureComponent<
  ComplexSearchProps<T>,
  {}
> {}
