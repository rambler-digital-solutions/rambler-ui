import {Component, CSSProperties, ReactElement} from 'react'

export interface PaginationProps {
  pagesCount?: number
  currentPage?: number
  className?: string
  style?: CSSProperties
  pageContainer?: (pageNumber: number) => ReactElement
  onChange?: (event: object, newValue: number) => void
  showPageInput?: boolean
  pageInputClassName?: string
  pageInputLabel?: string
  pageInputLabelClassName?: string
  pageInputTooltip?: string
  pagesInRange?: number
  type?: 'select' | 'input'
}

export default class Pagination extends Component<PaginationProps, {}> {}
