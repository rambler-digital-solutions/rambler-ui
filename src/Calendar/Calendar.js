import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { injectSheet } from '../theme'
import { isolateMixin } from '../utils/mixins'

@injectSheet((theme) => ({
  root: {
    display: 'inline-block',
    width: 275,
    padding: 15,
    fontFamily: theme.calendar.service.fontFamily,
    backgroundColor: theme.calendar.colors.default.background,
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
    lineHeight: theme.calendar.month.size + 'px',
    fontSize: theme.calendar.month.fontSize,
    fontWeight: theme.calendar.month.fontWeight,
    color: theme.calendar.colors.default.text
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
      transitionDuration: theme.calendar.animationDuration,
      transitionProperty: 'color, background-color'
    }
  },
  day: {
    composes: '$item',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: theme.calendar.size
  },

  arrow: {
    composes: '$item',
    position: 'relative',
    width: theme.calendar.arrow.size,
    height: theme.calendar.arrow.size,
    color: theme.calendar.service.colors.default,
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
      color: theme.calendar.service.colors.hover
    },
    '&:focus': {
      color: theme.calendar.service.colors.hover
    },
    '$isMedia &': {
      color: theme.calendar.media.colors.default
    },
    '$isMedia &:hover': {
      color: theme.calendar.media.colors.hover
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
    height: theme.calendar.weekDay.size,
    fontSize: theme.calendar.weekDay.fontSize,
    color: theme.calendar.colors.default.weekDay
  },

  days: {
    overflow: 'hidden',
    '$isAnimate &': {
      transitionDuration: theme.calendar.animationDuration,
      transitionProperty: 'height'
    }
  },
  daysWrap: {
    display: 'flex',
    flexWrap: 'wrap',
    '$isAnimate &': {
      transitionDuration: theme.calendar.animationDuration,
      transitionProperty: 'transform'
    }
  },
  dateDay: {
    composes: '$day',
    height: theme.calendar.date.size,
    fontSize: theme.calendar.date.fontSize,
    color: theme.calendar.colors.default.text,
    backgroundColor: theme.calendar.colors.default.background,
    '$isSelectable &': {
      cursor: 'pointer'
    },
    '$isSelectable &:hover': {
      color: theme.calendar.colors.hover.text
    },
    '$isSelectable &:focus': {
      color: theme.calendar.colors.hover.text
    }
  },

  isMedia: {
    fontFamily: theme.calendar.media.fontFamily
  },
  isAnimate: {},

  isSelectable: {
    userSelect: 'none'
  },
  isWeekend: {
    color: theme.calendar.colors.weekend.text
  },
  isToday: {
    fontWeight: 500,
    color: theme.calendar.colors.today.text,
    '$isSelectable &:hover': {
      color: theme.calendar.colors.todayHover.text
    },
    '$isSelectable &$isUnavailable:hover': {
      color: theme.calendar.colors.disabled.text
    }
  },
  isSelected: {
    backgroundColor: theme.calendar.colors.selected.background
  },
  isActive: {
    color: theme.calendar.colors.active.text,
    backgroundColor: theme.calendar.colors.active.background,
    '$isSelectable &:hover': {
      color: theme.calendar.colors.active.text,
      backgroundColor: theme.calendar.colors.activeHover.background
    },
    '$isSelectable &$isUnavailable:hover': {
      color: theme.calendar.colors.disabled.text,
      backgroundColor: theme.calendar.colors.activeHover.background
    },
    '$isSelectable &:focus': {
      color: theme.calendar.colors.active.text,
      backgroundColor: theme.calendar.colors.activeHover.background
    },
    '$isSelectable &$isUnavailable:focus': {
      color: theme.calendar.colors.disabled.text,
      backgroundColor: theme.calendar.colors.activeHover.background
    }
  },
  isUnavailable: {
    color: theme.calendar.colors.disabled.text
  },
  isDisableArrow: {
    color: theme.calendar.colors.disabled.text,
    cursor: 'default',
    '&:hover': {
      color: theme.calendar.colors.disabled.text,
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

  onClick = day => {
    const {range, value} = this.props

    const [numberFrom, numberTo] = [].concat(value)
      .map(this.dateToNumber)

    if (numberFrom && numberFrom === day && range && !numberTo)
      return

    if (range && numberFrom && !numberTo)
      if (day < numberFrom)
        this.onSetNewDates([
          day,
          numberFrom
        ])
      else
        this.onSetNewDates([
          numberFrom,
          day
        ])
    else
      this.onSetNewDates([day])
  }

  onSetNewDates([numberFrom, numberTo = null]) {
    const {range, onChange} = this.props

    const dateFrom = numberFrom && this.numberToDate(numberFrom)
    const dateTo = numberTo && this.numberToDate(numberTo)

    const value = range ? [dateFrom, dateTo] : dateFrom

    if (typeof onChange === 'function')
      onChange(value)
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

    const weeksVisible = Math.floor(dates.indexOf(first) / 7)
    const weeksAfterVisible = Math.ceil(dates.indexOf(last) / 7)
    const weeksBeforeVisible = weeksAfterVisible - weeksVisible

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
          style={{height: theme.calendar.size * weeksBeforeVisible}}
        >
          <div
            className={classes.daysWrap}
            style={{transform: `translateY(${-1 * theme.calendar.size * weeksVisible}px)`}}
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
                    onClick={() => this.onClick(number)}
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
