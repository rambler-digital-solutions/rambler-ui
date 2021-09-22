import {Component, ReactElement, SyntheticEvent, HTMLProps} from 'react'

export interface PaginationProps
  extends Omit<HTMLProps<HTMLDivElement>, 'onChange' | 'ref'> {
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
