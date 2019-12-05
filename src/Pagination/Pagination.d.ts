import {Component, CSSProperties, ReactElement, SyntheticEvent} from 'react'

export interface PaginationProps {
  pagesCount?: number
  currentPage?: number
  className?: string
  style?: CSSProperties
  pageContainer?: (pageNumber: number) => ReactElement
  onChange?: (event: SyntheticEvent, value: number) => void | Promise<void>
  showPageInput?: boolean
  pageInputClassName?: string
  pageInputLabel?: string
  pageInputLabelClassName?: string
  pageInputTooltip?: string
  pagesInRange?: number
  type?: 'select' | 'input'
}

export default class Pagination extends Component<PaginationProps, {}> {}
