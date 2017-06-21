import { RadioButton, RadioButtonGroup } from 'rambler-ui/Radio'
import React, { Component } from 'react'
import { ApplyTheme } from 'rambler-ui/theme'

export default class RadioExample extends Component {

  state = {
    radioValue: 'New-York'
  }

  onChangeState(event, newValue) {
    if (this.state.value !== newValue)
      this.setState({ radioValue: newValue })
  }

  render() {

    return (
      <ApplyTheme>
        <div>
          <div>
            <RadioButtonGroup
              style={{marginBottom: 20}}
              value={this.state.radioValue}
              onChange={::this.onChangeState}
              labelPosition="right">
                <RadioButton
                  value="Moscow"
                  onFocus={this.onFocus}
                  onBlur={this.onBlur}
                  onChange={this.onChange}
                  onClick={this.onClick}
                >Moscow</RadioButton>
                <RadioButton
                  value="Samara"
                  onFocus={this.onFocus}
                  onBlur={this.onBlur}
                  onChange={this.onChange}
                  onClick={this.onClick}
                >Samara</RadioButton>
                <RadioButton
                  value="New-York"
                  disabled
                  onFocus={this.onFocus}
                  onBlur={this.onBlur}
                  onChange={this.onChange}
                  onClick={this.onClick}
                >New-York</RadioButton>
            </RadioButtonGroup>
          </div>
          <div>
            <div><span>this.state.radioValue:</span><b>{this.state.radioValue}</b></div>
          </div>
        </div>
      </ApplyTheme>
    )

  }

}
