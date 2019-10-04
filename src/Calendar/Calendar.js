import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {injectSheet} from '../theme'
import {isolateMixin, focusSourceMixin} from '../utils/mixins'
import '../utils/focus-source'

const toNumber = (year, month, date) => year * 10000 + month * 100 + date

const dateToNumber = date =>
  date instanceof Date
    ? toNumber(date.getFullYear(), date.getMonth(), date.getDate())
    : null

const numberToDate = number =>
  new Date(
    Math.floor(number / 10000),
    Math.floor((number % 10000) / 100),
    number % 100
  )

@injectSheet(
  ({calendar}) => ({
    root: {
      display: 'inline-block',
      width: 275,
      padding: 15,
      fontFamily: calendar.service.fontFamily,
      backgroundColor: calendar.colors.default.background,
      boxSizing: 'border-box'
    },
    headline: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 15,
      padding: '0 10px',
      boxSizing: 'border-box'
    },
    month: {
      position: 'relative',
      top: 1,
      lineHeight: calendar.month.size + 'px',
      fontSize: calendar.month.fontSize,
      fontWeight: calendar.month.fontWeight,
      color: calendar.colors.default.text
    },

    item: {
      extend: isolateMixin,
      display: 'inline-block',
      flex: 'none',
      border: 0,
      outline: 'none !important',
      background: 'none',
      whiteSpace: 'nowrap',
      textAlign: 'center',
      boxSizing: 'border-box',
      'button&::-moz-focus-inner': {
        border: 'none !important',
        outline: 'none !important'
      },
      '$isSelectable &': {
        transitionDuration: calendar.animationDuration,
        transitionProperty: 'color, background-color'
      }
    },
    day: {
      composes: '$item',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: calendar.size
    },

    arrow: {
      composes: '$item',
      position: 'relative',
      width: calendar.arrow.size,
      height: calendar.arrow.size,
      color: calendar.service.colors.default,
      cursor: 'pointer',
      overflow: 'hidden',
      '&:before': {
        boxSizing: 'border-box',
        position: 'absolute',
        top: -1,
        left: 3,
        content: '""',
        width: 9,
        height: 9,
        border: 'solid',
        borderWidth: '0 0 1px 1px',
        transform: 'rotate(45deg)',
        transformOrigin: 'left bottom'
      },
      '&:hover': {
        color: calendar.service.colors.hover
      },
      ...focusSourceMixin('other', '&:focus', {
        color: calendar.service.colors.hover
      }),
      '$isMedia &': {
        color: calendar.media.colors.default
      },
      '$isMedia &:hover': {
        color: calendar.media.colors.hover
      },
      '&:disabled': {
        color: calendar.colors.disabled.text,
        cursor: 'not-allowed'
      }
    },
    prev: {
      composes: '$arrow'
    },
    next: {
      composes: '$arrow',
      transform: 'scaleX(-1)'
    },
    arrowMock: {
      visibility: 'hidden',
      pointerEvents: 'none'
    },
    week: {
      display: 'flex',
      margin: '20px 0 11px'
    },
    weekDay: {
      composes: '$day',
      height: calendar.weekDay.size,
      fontSize: calendar.weekDay.fontSize,
      color: calendar.colors.default.weekDay
    },

    days: {
      overflow: 'hidden',
      '$isAnimate &': {
        transitionDuration: calendar.animationDuration,
        transitionProperty: 'height'
      }
    },
    daysWrap: {
      display: 'flex',
      flexWrap: 'wrap',
      '$isAnimate &': {
        transitionDuration: calendar.animationDuration,
        transitionProperty: 'transform'
      }
    },
    dateDay: {
      composes: '$day',
      height: calendar.date.size,
      fontSize: calendar.date.fontSize,
      color: calendar.colors.default.text,
      backgroundColor: calendar.colors.default.background,
      '$isSelectable &:not(:disabled)': {
        cursor: 'pointer'
      },
      '$isSelectable &:not(:disabled):hover': {
        color: calendar.colors.hover.text
      },
      ...focusSourceMixin('other', '$isSelectable &:not(:disabled):focus', {
        color: calendar.colors.hover.text
      }),
      '&:disabled': {
        cursor: 'not-allowed'
      }
    },

    isMedia: {
      fontFamily: calendar.media.fontFamily
    },
    isAnimate: {},

    isSelectable: {
      userSelect: 'none'
    },
    isWeekend: {
      color: calendar.colors.weekend.text
    },
    isToday: {
      fontWeight: 500,
      color: calendar.colors.today.text,
      '$isSelectable &:not(:disabled):hover': {
        color: calendar.colors.todayHover.text
      },
      ...focusSourceMixin('other', '$isSelectable &:not(:disabled):focus', {
        color: calendar.colors.todayHover.text
      }),
      ...focusSourceMixin('other', '$isSelectable &$isUnavailable:hover', {
        color: calendar.colors.disabled.text
      }),
      ...focusSourceMixin('other', '$isSelectable &$isUnavailable:focus', {
        color: calendar.colors.disabled.text
      })
    },
    isSelected: {
      backgroundColor: calendar.colors.selected.background
    },
    isActive: {
      color: calendar.colors.active.text,
      backgroundColor: calendar.colors.active.background,
      '$isSelectable &:not(:disabled):hover': {
        color: calendar.colors.active.text,
        backgroundColor: calendar.colors.activeHover.background
      },
      ...focusSourceMixin('other', '$isSelectable &:not(:disabled):focus', {
        color: calendar.colors.active.text,
        backgroundColor: calendar.colors.activeHover.background
      }),
      '$isSelectable &$isUnavailable:hover': {
        color: calendar.colors.disabled.text,
        backgroundColor: calendar.colors.activeHover.background
      },
      ...focusSourceMixin('other', '$isSelectable &$isUnavailable:focus', {
        color: calendar.colors.disabled.text,
        backgroundColor: calendar.colors.activeHover.background
      })
    },
    isUnavailable: {
      color: calendar.colors.disabled.text
    }
  }),
  {name: 'Calendar'}
)
export default class Calendar extends PureComponent {
  static propTypes = {
    /**
     * Кол-во показываемых месяцев
     */
    visibleMonths: PropTypes.number,
    /**
     * CSS-класс контейнера
     */
    className: PropTypes.string,
    /**
     * Стили контейнера
     */
    style: PropTypes.object,
    /**
     * Тип календаря
     */
    variation: PropTypes.oneOf(['service', 'media']),
    /**
     *  Выбранная дата или период. Принимает объект Date
     *  или массив, в случае с выбором периода
     */
    value: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.instanceOf(Date)),
      PropTypes.instanceOf(Date)
    ]),
    /**
     * Отображаемый месяц при инициализации.
     * Принимает объект Date
     */
    initDate: PropTypes.instanceOf(Date),
    /**
     * Текущая дата. Принимает объект Date
     */
    today: PropTypes.instanceOf(Date),
    /**
     * Возможность выбора периода
     */
    range: PropTypes.bool,
    /**
     * Минимальный год для отображения
     */
    minYear: PropTypes.number,
    /**
     * Максимальный год для отображения
     */
    maxYear: PropTypes.number,
    /**
     * Минимальная дата для выбора
     */
    minDate: PropTypes.instanceOf(Date),
    /**
     * Максимальная дата для выбора
     */
    maxDate: PropTypes.instanceOf(Date),
    /**
     * Отображает год
     */
    showYear: PropTypes.bool,
    /**
     * Отображает переключатель месяцев
     */
    showMonthSwitch: PropTypes.bool,
    /**
     * Устанавливает подстветку выходных дней (сб и вс)
     */
    highlightWeekend: PropTypes.bool,
    /**
     * Функция, вызывающая при изменении значения `function (event: object, newValue: Date | Date[]) {}`.
     * Возвращает объект Date или массив, в случае с выбором периода
     */
    onChange: PropTypes.func
  }

  static defaultProps = {
    variation: 'service',
    range: false,
    minYear: 1900,
    maxYear: 2200,
    showYear: true,
    showMonthSwitch: true,
    highlightWeekend: false,
    visibleMonths: 1
  }

  /**
   * @prop {Array.<{displayMonth, displayYear, first, last}>}   data
   * @prop {Array.<number>}                                     dates
   * @prop {boolean}                                            animate
   */
  state = this.getState(this.props)

  componentDidUpdate(prevProps) {
    if (prevProps.initDate !== this.props.initDate) this.resetState()
  }

  resetState() {
    this.setState(this.getState(this.props))
  }

  getState(props) {
    const displayData = []
    const number =
      dateToNumber(props.initDate) ||
      dateToNumber(props.today) ||
      dateToNumber(new Date())

    const displayMonth = Math.floor((number % 10000) / 100)
    const displayYear = Math.floor(number / 10000)

    for (let i = props.visibleMonths - 1 || 0; i >= 0; i--) {
      let month = displayMonth - i
      let year = displayYear

      if (month < 0) {
        year = year - Math.ceil(Math.abs(month / 12))
        month = (12 + (month % 12)) % 12
      }

      displayData.push({
        displayMonth: month,
        displayYear: year
      })
    }

    return this.calculateDates(displayData)
  }

  switchMonth(displayData) {
    const {data, dates} = this.calculateDates(displayData)

    this.setState(
      {
        animate: true,
        data
      },
      () => {
        setTimeout(() => {
          this.setState({
            dates,
            animate: false
          })
        }, 210)
      }
    )
  }

  calculateDates(displayData) {
    const {showMonthSwitch, visibleMonths} = this.props

    const showWithAnimation = showMonthSwitch
    const data = []
    const allDates = []

    for (let i = 0; i < (visibleMonths || 1); i++) {
      const displayMonth = displayData[i].displayMonth

      const months = showWithAnimation
        ? [
          displayMonth - 2,
          displayMonth - 1,
          displayMonth,
          displayMonth + 1,
          displayMonth + 2
        ]
        : [displayMonth - 1, displayMonth, displayMonth + 1]

      const {meta, dates} = this.getMonthDates({
        months,
        displayData: displayData[i]
      })

      allDates.push(dates)
      data.push(meta)
    }

    return {
      data,
      dates: allDates
    }
  }

  getMonthDates({months, displayData}) {
    const {displayYear, displayMonth} = displayData
    const dates = []
    let first, last

    months.forEach((m, index) => {
      let month = m
      let year = displayYear

      if (m < 0) {
        month = m + 12
        year--
      } else if (m > 11) {
        month = m - 12
        year++
      }

      let dateFrom = 1
      let dateTo = new Date(year, month + 1, 0).getDate()

      if (index === 0)
        dateFrom = dateTo - (new Date(year, month + 1, 1).getDay() || 7) + 2
      else if (index === months.length - 1)
        dateTo = 8 - (new Date(year, month, 1).getDay() || 7) + 7

      if (month === displayMonth) {
        first = toNumber(year, month, 1)
        last = toNumber(year, month, dateTo)
      }

      for (let i = dateFrom; i <= dateTo; i++)
        dates.push(toNumber(year, month, i))
    })

    return {
      meta: {
        displayMonth,
        displayYear,
        first,
        last
      },
      dates
    }
  }

  setNewDates(event, [numberFrom, numberTo = null]) {
    const {range, onChange} = this.props

    const dateFrom = numberFrom && numberToDate(numberFrom)
    const dateTo = numberTo && numberToDate(numberTo)

    const value = range ? [dateFrom, dateTo] : dateFrom

    if (typeof onChange === 'function') onChange(event, value)
  }

  onPrev = () => {
    const {minYear} = this.props
    let {data} = this.state

    const firstCalendar = data[data.length - 1]

    if (
      this.state.animate ||
      (Number.isInteger(minYear) &&
        minYear === firstCalendar.displayYear &&
        firstCalendar.displayMonth === 0)
    )
      return

    this.switchMonth(
      data.map(({displayMonth, displayYear}) => {
        const prevMonth = displayMonth - 1

        if (prevMonth < 0)
          return {
            displayMonth: 11,
            displayYear: displayYear - 1
          }

        return {
          displayMonth: prevMonth,
          displayYear
        }
      })
    )
  }

  onNext = () => {
    const {maxYear} = this.props
    const {data} = this.state

    const lastCalendar = data[data.length - 1]

    if (
      this.state.animate ||
      (Number.isInteger(maxYear) &&
        maxYear === lastCalendar.displayYear &&
        lastCalendar.displayMonth === 11)
    )
      return

    this.switchMonth(
      data.map(({displayMonth, displayYear}) => {
        const nextMonth = displayMonth + 1

        if (nextMonth > 11)
          return {
            displayMonth: 0,
            displayYear: displayYear + 1
          }

        return {
          displayMonth: nextMonth,
          displayYear
        }
      })
    )
  }

  onClick = (event, day) => {
    const {range, value} = this.props

    const [numberFrom, numberTo] = [].concat(value).map(dateToNumber)

    if (range && numberFrom && !numberTo)
      if (day < numberFrom) this.setNewDates(event, [day, numberFrom])
      else this.setNewDates(event, [numberFrom, day])
    else this.setNewDates(event, [day])
  }

  renderCalendar(params) {
    const {
      className,
      style,
      variation,
      value,
      today,
      range,
      minYear,
      maxYear,
      minDate,
      maxDate,
      showYear,
      showMonthSwitch,
      highlightWeekend,
      onChange,
      classes,
      theme
    } = this.props

    const {
      key,
      data,
      dates,
      showRightMonthSwitch = true,
      showLeftMonthSwitch = true
    } = params

    const {animate} = this.state

    const {displayMonth, displayYear, last, first} = data

    const weeksBeforeVisible = Math.floor(dates.indexOf(first) / 7)
    const weeksAfterVisible = Math.ceil((dates.indexOf(last) + 1) / 7)
    const weeksVisible = 6 // максимальное кол-во недель, для того чтобы календарь не "прыгал"

    const numberToday = dateToNumber(today)
    const minNumberDate = minDate && dateToNumber(minDate)
    const maxNumberDate = maxDate && dateToNumber(maxDate)

    const [numberFrom, numberTo] = [].concat(value).map(dateToNumber)

    return (
      <div
        key={key}
        className={classnames(className, classes.root, {
          [classes.isAnimate]: animate,
          [classes.isSelectable]: typeof onChange === 'function',
          [classes.isMedia]: variation === 'media'
        })}
        style={style}>
        <div className={classes.headline}>
          {showMonthSwitch && (
            <button
              className={classnames(classes.prev, {
                [classes.arrowMock]: !showLeftMonthSwitch
              })}
              type="button"
              tabIndex={-1}
              onClick={this.onPrev}
              disabled={
                ((Number.isInteger(minYear) &&
                  minYear === displayYear &&
                  displayMonth === 0) ||
                  minNumberDate >= toNumber(displayYear, displayMonth, 1)) &&
                'disabled'
              }
            />
          )}

          <div
            className={classes.month}
            children={
              theme.i18n.months[displayMonth] +
              (showYear ? ', ' + displayYear : '')
            }
          />

          {showMonthSwitch && (
            <button
              className={classnames(classes.next, {
                [classes.arrowMock]: !showRightMonthSwitch
              })}
              type="button"
              tabIndex={-1}
              onClick={this.onNext}
              disabled={
                ((Number.isInteger(maxYear) &&
                  maxYear === displayYear &&
                  displayMonth === 11) ||
                  maxNumberDate <= toNumber(displayYear, displayMonth, 31)) &&
                'disabled'
              }
            />
          )}
        </div>

        <div className={classes.week}>
          {theme.i18n.days.map((el, index) => (
            <div
              key={index}
              className={classnames(classes.weekDay, {
                [classes.isWeekend]:
                  highlightWeekend && (index === 5 || index === 6)
              })}
              children={el}
            />
          ))}
        </div>

        <div
          className={classes.days}
          style={{height: theme.calendar.size * weeksVisible}}>
          <div
            className={classes.daysWrap}
            style={{
              transform: `translateY(${-1 *
                theme.calendar.size *
                weeksBeforeVisible}px)`
            }}>
            {dates.map((number, index) => {
              const classNameDateday = classnames(classes.dateDay, {
                [classes.isActive]:
                  number === numberFrom || (range && number === numberTo),
                [classes.isSelected]:
                  range &&
                  numberFrom &&
                  numberTo &&
                  number > numberFrom &&
                  number < numberTo,
                [classes.isToday]: number === numberToday,
                [classes.isWeekend]:
                  highlightWeekend &&
                  ((index + 1) % 7 === 6 || (index + 1) % 7 === 0),
                [classes.isUnavailable]:
                  number < minNumberDate ||
                  number < first ||
                  number > last ||
                  number > maxNumberDate
              })

              if (
                index >= weeksBeforeVisible * 7 &&
                index < weeksAfterVisible * 7
              )
                return (
                  <button
                    key={number}
                    className={classNameDateday}
                    type="button"
                    tabIndex={0}
                    disabled={
                      (number < minNumberDate || number > maxNumberDate) &&
                      'disabled'
                    }
                    onClick={event => this.onClick(event, number)}
                    children={number % 100}
                  />
                )

              return (
                <span
                  key={number}
                  className={classNameDateday}
                  children={number % 100}
                />
              )
            })}
          </div>
        </div>
      </div>
    )
  }

  render() {
    const {visibleMonths} = this.props
    const {data, dates} = this.state

    if (visibleMonths && visibleMonths > 1) {
      const elements = []

      for (let i = 0; i < visibleMonths; i++) {
        const params = {
          key: i,
          data: data[i],
          dates: dates[i],
          showRightMonthSwitch: i === visibleMonths - 1,
          showLeftMonthSwitch: i === 0
        }

        elements.push(this.renderCalendar(params))
      }

      return elements
    }

    return this.renderCalendar({
      data: data[0],
      dates: dates[0]
    })
  }
}
