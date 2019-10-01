import {CSSProperties, PureComponent, ReactNode, SyntheticEvent} from 'react'
import {Size} from '..'

export interface ComplexSearchProps {
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
  onSelectItem?: (value: string) => void | Promise<void>
  onClickItem?: (value: string) => void | Promise<void>
  onRemoveItem?: (value: string) => void | Promise<void>
  onHoverItem?: (value: string) => void | Promise<void>
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

export default class ComplexSearch extends PureComponent<
  ComplexSearchProps,
  {}
> {}
