import { RadioButton, RadioButtonGroup } from 'rambler-ui/Radio'
import React, { Component } from 'react'
import { ApplyTheme } from 'rambler-ui/theme'
import TickIcon from 'rambler-ui/icons/forms/TickIcon'

export default class RadioExample extends Component {

  state = {
    radioValue: null
  }

  onChangeState(event, newValue) {
    console.log('onChangeState :', newValue)
    if (this.state.value !== newValue)
      this.setState({ radioValue: newValue })
  }

  onFocus(e) {
    console.log('onFocus: ', e.type)
  }

  onBlur(e) {
    console.log('onBlur: ', e.type)
  }

  componentWillMount() {
    this.setState({radioValue: 'Samara'})
  }

  render() {

    return (
      <ApplyTheme>
        <div>
          <div>
            <RadioButtonGroup
              styleForGroup={{width: 150}}
              value={this.state.radioValue}
              onChange={::this.onChangeState}
              labelPosition="right">
                <RadioButton
                  value="Moscow"
                  disabled={false}
                  style={{marginTop: 20}}
                  onFocus={::this.onFocus}
                  onBlur={::this.onBlur}
                >Moscow</RadioButton>
                <RadioButton
                  value="Samara"
                  disabled={false}
                  style={{marginTop: 20}}
                  onFocus={::this.onFocus}
                  onBlur={::this.onBlur}
                >Samara</RadioButton>
                <RadioButton
                  value="SaintP"
                  disabled={false}
                  style={{marginTop: 20}}
                  onFocus={::this.onFocus}
                  onBlur={::this.onBlur}
                >SaintP <TickIcon style={{color: 'blue'}}/> </RadioButton>
                <RadioButton
                  value="New-York"
                  disabled={false}
                  style={{marginTop: 20}}
                  disabled={true}
                  onFocus={::this.onFocus}
                  onBlur={::this.onBlur}
                ><span>yep</span> New-York</RadioButton>
            </RadioButtonGroup>
          </div>
          <div>
            <RadioButtonGroup
            styleForGroup={{width: 200}}
              value={this.state.radioValue}
              onChange={::this.onChangeState}
              labelPosition="left">
              <RadioButton
                value="Moscow"
                disabled={false}
                style={{marginTop: 20}}
                onFocus={::this.onFocus}
                onBlur={::this.onBlur}
              >Moscow</RadioButton>
              <RadioButton
                value="Samara"
                disabled={false}
                style={{marginTop: 20}}
                onFocus={::this.onFocus}
                onBlur={::this.onBlur}
              >Samara</RadioButton>
              <RadioButton
                value="SaintP"
                disabled={false}
                style={{marginTop: 20}}
                onFocus={::this.onFocus}
                onBlur={::this.onBlur}
              >SaintP</RadioButton>
              <RadioButton
                value="New-York"
                disabled={false}
                style={{marginTop: 20}}
                onFocus={::this.onFocus}
                onBlur={::this.onBlur}
              >New-York</RadioButton>
            </RadioButtonGroup>
            <br/>
          </div>

          <div>
          <RadioButton
            value="1"
            disabled={false}
            labelPosition='right'
            style={{marginTop: 20}}
            onFocus={::this.onFocus}
            onBlur={::this.onBlur}
          >1</RadioButton>
          <RadioButton
            value="2"
            disabled={false}
            labelPosition='right'
            style={{marginTop: 20}}
            onFocus={::this.onFocus}
            onBlur={::this.onBlur}
          >2</RadioButton>
          </div>

          <div>
              <div><span>this.state.radioValue:</span><b>{this.state.radioValue}</b></div>
          </div>
        </div>
      </ApplyTheme>
    )

  }

}
