import { RadioButton, RadioButtonGroup } from 'rambler-ui/Radio'
import React, { Component } from 'react'
import { ApplyTheme } from 'rambler-ui/theme'

export default class RadioExample extends Component {

  state = {
    radioValue: null
  }

  onChange(event, newValue) {
    this.setState({
      radioValue: newValue
    })
  }

  componentWillMount() {
    this.setState({radioValue: 'New-York'})
  }

  render() {

    return (
      <ApplyTheme>
        <div>
          <div>
            <RadioButtonGroup
              value={this.state.radioValue}
              onChange={::this.onChange}
              block={true}
              labelPosition="right"
              name="RdBtnGrp">
                <RadioButton
                  value="Moscow"
                  label="Moscow"
                  disabled={false}
                  style={{marginTop: 20}}
                />
                <RadioButton
                  value="Samara"
                  label="Samara"
                  disabled={false}
                  style={{marginTop: 20}}
                />
                <RadioButton
                  value="New-York"
                  label="New-York"
                  disabled={false}
                  style={{marginTop: 20}}
                />
            </RadioButtonGroup>
            <br/>
          </div>
          <div>
              <div><span>this.state.radioValue:</span><b>{this.state.radioValue}</b></div>
          </div>
        </div>
      </ApplyTheme>
    )

  }

}
