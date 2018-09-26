import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { injectSheet } from '../theme'
import { isolateMixin } from '../utils/mixins'

@injectSheet(({ calendar }) => ({
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
    '&:focus': {
      color: calendar.service.colors.hover
    },
    '$isMedia &': {
      color: calendar.media.colors.default
    },
    '$isMedia &:hover': {
      color: calendar.media.colors.hover
    }
  },
  prev: {
    composes: '$arrow'
  },
  next: {
    composes: '$arrow',
    transform: 'scaleX(-1)'
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
    '$isSelectable &': {
      cursor: 'pointer'
    },
    '$isSelectable &:hover': {
      color: calendar.colors.hover.text
    },
    '$isSelectable &:focus': {
      color: calendar.colors.hover.text
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
    '$isSelectable &:hover': {
      color: calendar.colors.todayHover.text
    },
    '$isSelectable &$isUnavailable:hover': {
      color: calendar.colors.disabled.text
    },
    '$isSelectable &:focus': {
      color: calendar.colors.todayHover.text
    },
    '$isSelectable &$isUnavailable:focus': {
      color: calendar.colors.disabled.text
    }
  },
  isSelected: {
    backgroundColor: calendar.colors.selected.background
  },
  isActive: {
    color: calendar.colors.active.text,
    backgroundColor: calendar.colors.active.background,
    '$isSelectable &:hover': {
      color: calendar.colors.active.text,
      backgroundColor: calendar.colors.activeHover.background
    },
    '$isSelectable &$isUnavailable:hover': {
      color: calendar.colors.disabled.text,
      backgroundColor: calendar.colors.activeHover.background
    },
    '$isSelectable &:focus': {
      color: calendar.colors.active.text,
      backgroundColor: calendar.colors.activeHover.background
    },
    '$isSelectable &$isUnavailable:focus': {
      color: calendar.colors.disabled.text,
      backgroundColor: calendar.colors.activeHover.background
    }
  },
  isUnavailable: {
    color: calendar.colors.disabled.text
  },
  isDisableArrow: {
    color: calendar.colors.disabled.text,
    cursor: 'default',
    '&:hover': {
      color: calendar.colors.disabled.text,
      cursor: 'default'
    }
  }
}), {name: 'Calendar'})
export default class Calendar extends Component {

  static propTypes = {
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
     * Коллбек, вызывающийся при изменении состояния.
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
    highlightWeekend: false
  }

  constructor(props) {
    super(props)
    this.state = this.getState(props)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.initDate !== this.props.initDate)
      this.resetState()
  }

  resetState() {
    this.setState(
      this.getState(this.props)
    )
  }

  getState(props) {
    const number = this.dateToNumber(props.initDate)
      || this.dateToNumber(props.today)
      || this.dateToNumber(new Date())

    return this.calculateDates({
      displayMonth: Math.floor((number % 10000) / 100),
      displayYear: Math.floor(number / 10000)
    })
  }

  switchMonth({displayMonth, displayYear}) {
    const {
      dates,
      first,
      last
    } = this.calculateDates({displayMonth, displayYear})

    this.setState({
      animate: true,
      displayMonth,
      displayYear,
      first,
      last
    }, () => {
      setTimeout(() => {
        this.setState({
          dates,
          animate: false
        })
      }, 210)
    })
  }

  calculateDates = ({displayMonth, displayYear}) => {
    const dates = []

    const months = this.props.showMonthSwitch
      ? [displayMonth - 2, displayMonth - 1, displayMonth, displayMonth + 1, displayMonth + 2]
      : [displayMonth - 1, displayMonth, displayMonth + 1]

    let first
    let last

    months.map((m, index) => {
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
        dateTo = 8 - (new Date(year, month, 1).getDay() || 7)

      if (month === displayMonth) {
        first = this.toNumber(year, month, 1)
        last = this.toNumber(year, month, dateTo)
      }

      let i

      for (i = dateFrom; i <= dateTo; i++)
        dates.push(
          this.toNumber(year, month, i)
        )
    })

    return {
      displayMonth,
      displayYear,
      dates,
      first,
      last
    }
  }

  toNumber = (year, month, date) =>
    year * 10000 + month * 100 + date

  dateToNumber = date => {
    if (date instanceof Date)
      return this.toNumber(date.getFullYear(), date.getMonth(), date.getDate())

    return null
  }

  numberToDate = number => new Date(
    Math.floor(number / 10000),
    Math.floor((number % 10000) / 100),
    number % 100
  )

  onPrev = () => {
    const {minYear} = this.props
    let {displayMonth, displayYear} = this.state

    if (this.state.animate || (Number.isInteger(minYear) && minYear === displayYear && displayMonth === 0))
      return

    if (--displayMonth < 0) {
      displayMonth = 11
      displayYear--
    }

    this.switchMonth({displayMonth, displayYear})
  }

  onNext = () => {
    const {maxYear} = this.props
    let {displayMonth, displayYear} = this.state

    if (this.state.animate || (Number.isInteger(maxYear) && maxYear === displayYear && displayMonth === 11))
      return

    if (++displayMonth > 11) {
      displayMonth = 0
      displayYear++
    }

    this.switchMonth({displayMonth, displayYear})
  }

  onClick = (event, day) => {
    const {range, value} = this.props

    const [numberFrom, numberTo] = [].concat(value)
      .map(this.dateToNumber)

    if (numberFrom && numberFrom === day && range && !numberTo)
      return

    if (range && numberFrom && !numberTo)
      if (day < numberFrom)
        this.onSetNewDates(event, [
          day,
          numberFrom
        ])
      else
        this.onSetNewDates(event, [
          numberFrom,
          day
        ])
    else
      this.onSetNewDates(event, [day])
  }

  onSetNewDates(event, [numberFrom, numberTo = null]) {
    const {range, onChange} = this.props

    const dateFrom = numberFrom && this.numberToDate(numberFrom)
    const dateTo = numberTo && this.numberToDate(numberTo)

    const value = range ? [dateFrom, dateTo] : dateFrom

    if (typeof onChange === 'function')
      onChange(event, value)
  }

  render() {
    const {
      className,
      style,
      variation,
      value,
      today,
      range,
      minYear,
      maxYear,
      showYear,
      showMonthSwitch,
      highlightWeekend,
      onChange,
      classes,
      theme
    } = this.props

    const {
      animate,
      displayMonth,
      displayYear,
      dates,
      last,
      first
    } = this.state

    const weeksBeforeVisible = Math.floor(dates.indexOf(first) / 7)
    const weeksAfterVisible = Math.ceil(dates.indexOf(last) / 7)
    const weeksVisible = weeksAfterVisible - weeksBeforeVisible

    const numberToday = this.dateToNumber(today)

    const [numberFrom, numberTo] = [].concat(value)
      .map(this.dateToNumber)

    return (
      <div
        className={classnames(className, classes.root, {
          [classes.isAnimate]: animate,
          [classes.isSelectable]: typeof onChange === 'function',
          [classes.isMedia]: variation === 'media'
        })}
        style={style}
      >
        <div className={classes.headline}>
          {showMonthSwitch && (
            <button
              className={classnames(classes.prev, {
                [classes.isDisableArrow]: Number.isInteger(minYear) && minYear === displayYear && displayMonth === 0
              })}
              type='button'
              tabIndex={-1}
              onClick={this.onPrev}
            />
          )}

          <div
            className={classes.month}
            children={theme.i18n.months[displayMonth] + (showYear ? ', ' + displayYear : '')}
          />

          {showMonthSwitch && (
            <button
              className={classnames(classes.next, {
                [classes.isDisableArrow]: Number.isInteger(maxYear) && maxYear === displayYear && displayMonth === 11
              })}
              type='button'
              tabIndex={-1}
              onClick={this.onNext}
            />
          )}
        </div>

        <div className={classes.week}>
          {theme.i18n.days.map((el, index) => (
            <div
              key={index}
              className={classnames(classes.weekDay, {
                [classes.isWeekend]: highlightWeekend && (index === 5 || index === 6)
              })}
              children={el}
            />
          ))}
        </div>

        <div
          className={classes.days}
          style={{height: theme.calendar.size * weeksVisible}}
        >
          <div
            className={classes.daysWrap}
            style={{transform: `translateY(${-1 * theme.calendar.size * weeksBeforeVisible}px)`}}
          >
            {dates.map((number, index) => {
              const classNameDateday = classnames(classes.dateDay, {
                [classes.isActive]: number === numberFrom || (range && number === numberTo),
                [classes.isSelected]: range && numberFrom && numberTo && number > numberFrom && number < numberTo,
                [classes.isToday]: number === numberToday,
                [classes.isWeekend]: highlightWeekend && ((index + 1) % 7 === 6 || (index + 1) % 7 === 0),
                [classes.isUnavailable]: number < first || number > last
              })

              if (index >= weeksBeforeVisible * 7 && index < weeksAfterVisible * 7)
                return (
                  <button
                    key={number}
                    className={classNameDateday}
                    type='button'
                    tabIndex={0}
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
}
