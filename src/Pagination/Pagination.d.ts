import {Component, ReactElement, SyntheticEvent, HTMLAttributes} from 'react'

export interface PaginationProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  pagesCount?: number
  currentPage?: number
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
