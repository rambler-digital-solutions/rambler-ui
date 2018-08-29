import React, {Component} from 'react'
import Calendar from 'rambler-ui/Calendar'
import { ApplyTheme } from 'rambler-ui/theme'
import { Snackbar, provideSnackbar } from 'rambler-ui/Snackbar'

class CalendarExample extends Component {
  state = {
    today: new Date(),
    dateFrom: null,
    dateTo: null,
    message: 'Выбрано дней: 0'
  }

  numberToDate = (number) => new Date(
    Math.floor(number / 10000),
    Math.floor((number % 10000) / 100),
    number % 100
  )

  onValidateRange = ([dateFrom, dateTo]) => {
    if (dateFrom && dateTo) {
      const range = 1 + Math.abs(this.numberToDate(dateFrom).getTime() - this.numberToDate(dateTo).getTime()) / (1000 * 3600 * 24)

      if (range > 60) {
        this.setState({
          message: 'Вы пытались выбрать дней: ' + range
        })

        this.props.openSnackbar(
          <Snackbar positionY='top' type='danger'>
            Вы не можете выбрать больше 60-ти дней
          </Snackbar>
        )

        return false
      }

      this.setState({
        message: 'Выбрано дней: ' + range
      })
    } else {
      this.setState({
        message: 'Выбрано дней: 0'
      })
    }

    return true
  }

  onChangeRange = ([dateFrom, dateTo = null]) => {
    this.setState({
      dateFrom,
      dateTo
    })
  }

  onChangeNotRange = (dateFrom) => {
    this.setState({
      dateFrom,
      dateTo: null
    })
  }

  render() {
    const {
      today,
      dateFrom,
      dateTo,
      message
    } = this.state

    const initMonthWithWeekends = dateFrom
      ? Math.floor((dateFrom % 10000) / 100) : 0

    const initYearWithWeekends = dateFrom
      ? Math.floor(dateFrom / 10000) : 2012

    return (
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        <div>
          <Calendar
            value={[dateFrom, dateTo]}
            today={today}
            range
            onValidate={this.onValidateRange}
            onChange={this.onChangeRange}
          />
          <div style={{marginLeft: 20, marginBottom: 20}}><b>{message}</b></div>
        </div>

        <Calendar
          type='media'
          today={today}
          value={dateFrom}
          onChange={this.onChangeNotRange}
        />

        <Calendar
          initMonth={initMonthWithWeekends}
          initYear={initYearWithWeekends}
          hiddenSwitchable
          hiddenYear
          showWeekend
        />
      </div>
    )
  }
}

const WithProvidedSnackbar = provideSnackbar(CalendarExample)

export default function CalendarDecoratorExample() {
  return (
    <ApplyTheme>
      <WithProvidedSnackbar />
    </ApplyTheme>
  )
}
