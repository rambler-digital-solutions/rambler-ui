import React, {Component} from 'react'
import Calendar from 'rambler-ui/Calendar'
import { ApplyTheme } from 'rambler-ui/theme'
import { Snackbar, provideSnackbar } from 'rambler-ui/Snackbar'

class CalendarExample extends Component {
  state = {
    today: new Date(),
    dateFrom: null,
    dateTo: null,
    selected: 0
  }

  numberToDate = number => new Date(
    Math.floor(number / 10000),
    Math.floor((number % 10000) / 100),
    number % 100
  )

  onValidateRange = (dates) => {
    const [dateFrom, dateTo] = dates.map(this.numberToDate)

    if (dateFrom && dateTo) {
      const selected = 1 + Math.abs(dateFrom.getTime() - dateTo.getTime()) / 86400000

      if (selected > 60) {
        this.setState({selected})

        this.props.openSnackbar(<Snackbar positionY='top' type='danger'>
          Вы не можете выбрать больше 60-ти дней
        </Snackbar>)

        return false
      }

      this.setState({selected})
    } else {
      this.setState({selected: 0})
    }

    return true
  }

  onChangeRange = ([dateFrom, dateTo]) => {
    this.setState({
      dateFrom,
      dateTo
    })
  }

  onChangeNotRange = dateFrom => {
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
      selected
    } = this.state

    const initMonth = Math.floor((dateFrom % 10000) / 100) || 0
    const initYear = Math.floor(dateFrom / 10000) || 2012

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
          <div style={{marginLeft: 20, marginBottom: 20}}>
            Дней в периоде: <b>{selected}</b>
          </div>
        </div>

        <Calendar
          type='media'
          value={dateFrom}
          today={today}
          onChange={this.onChangeNotRange}
        />

        <Calendar
          initMonth={initMonth}
          initYear={initYear}
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
