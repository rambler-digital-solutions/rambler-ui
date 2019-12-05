import {CSSProperties, PureComponent, SyntheticEvent} from 'react'

export interface CalendarProps {
  visibleMonths?: number
  className?: string
  style?: CSSProperties
  variation?: 'service' | 'media'
  value?: Date[] | Date
  initDate?: Date
  today?: Date
  range?: boolean
  minYear?: number
  maxYear?: number
  minDate?: Date
  maxDate?: Date
  showYear?: boolean
  showMonthSwitch?: boolean
  highlightWeekend?: boolean
  onChange?: (
    event: SyntheticEvent,
    value: Date[] | Date
  ) => void | Promise<void>
}

export default class Calendar extends PureComponent<CalendarProps, {}> {}
