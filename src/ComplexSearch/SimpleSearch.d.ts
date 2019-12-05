import {CSSProperties, PureComponent} from 'react'
import {Size} from '..'

export interface SimpleSearchProps {
  style?: CSSProperties
  className?: string
  inputWrapperClassName?: string
  value?: string
  showSearchButton?: boolean
  placeholder?: string
  onSearch?: (value: string, options: object) => void | Promise<void>
  onFocus?: () => void | Promise<void>
  onBlur?: () => void | Promise<void>
  onSubmit?: (value: string, options: object) => void | Promise<void>
  onPressEnter?: (value: string, options: object) => void | Promise<void>
  inputProps?: object
  sourceButtonsProps?: () => object
  searchButtonProps?: object
  size?: Size
  sourceType?: boolean
  serviceTooltipLabel?: string
}

export default class SimpleSearch extends PureComponent<
  SimpleSearchProps,
  {}
> {}
