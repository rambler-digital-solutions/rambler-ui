import React, {Component} from 'react'
import Calendar from 'rambler-ui/Calendar'
import { ApplyTheme } from 'rambler-ui/theme'

export default class CalendarExample extends Component {
  state = {
    today: new Date(),
    dateFrom: null,
    dateTo: null,
    selected: 0
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

    return (
      <ApplyTheme>
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
          <div>
            <Calendar
              value={[dateFrom, dateTo]}
              today={today}
              range
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
            initDate={dateFrom || new Date(2018, 0)}
            showMonthSwitch={false}
            showYear={false}
            highlightWeekend
          />
        </div>
      </ApplyTheme>
    )
  }
}
