import {CSSProperties, PureComponent, ReactNode} from 'react'
import {Size} from '..'

export interface ServiceSearchProps {
  style?: CSSProperties
  className?: string
  inputWrapperClassName?: string
  value?: string
  searchButton?: ReactNode
  searchIcon?: ReactNode
  dropdownStyle?: CSSProperties
  dropdownClassName?: string
  placeholder?: string
  onSearch?: (value: string, options: object) => void | Promise<void>
  onFocus: () => void | Promise<void>
  onBlur?: () => void | Promise<void>
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
  size?: Size
  inputLeftIcon?: ReactNode
}

export default class ServiceSearch extends PureComponent<
  ServiceSearchProps,
  {}
> {}
