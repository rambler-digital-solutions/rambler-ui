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
              style={{marginBottom: 20, maxWidth: 300}}
              value={this.state.radioValue}
              onChange={::this.onChangeState}
              labelPosition="right">
                <RadioButton
                  value="Moscow"
                  onFocus={this.onFocus}
                  onBlur={this.onBlur}
                  onChange={this.onChange}
                  onClick={this.onClick}
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique quis nisl quis fermentum. Praesent lectus ligula, tincidunt a orci in, cursus fermentum leo. Praesent egestas scelerisque consectetur."</RadioButton>
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
