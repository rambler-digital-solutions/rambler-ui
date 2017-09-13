import { RadioButton, RadioButtonGroup } from 'rambler-ui/Radio'
import React, { Component } from 'react'
import { ApplyTheme } from 'rambler-ui/theme'

export default class RadioExample extends Component {

  state = {
    objects: [{
      name: 'Moscow'
    }, {
      name: 'Samara'
    }, {
      name: 'NewYork'
    }],
    strings: [
      'Minsk',
      'Saint-Petersburg',
      'Washington'
    ],
    objectValue: null,
    stringValue: null
  }

  onObjectsChange(event, value) {
    this.setState({ objectValue: value })
  }

  onStringsChange(event, value) {
    this.setState({ stringValue: value })
  }

  render() {
    const {objects, strings} = this.state
    return (
      <ApplyTheme>
        <div>
          <div>
            <RadioButtonGroup
              style={{marginBottom: 40, maxWidth: 300}}
              value={this.state.objectValue}
              onChange={::this.onObjectsChange}>
              {
                objects.map((city, i) => <RadioButton key={i} value={city}>{city.name}</RadioButton>)
              }
            </RadioButtonGroup>
            <RadioButtonGroup
              name="city"
              style={{marginBottom: 40, maxWidth: 300}}
              value={this.state.stringValue}
              onChange={::this.onStringsChange}>
              {
                strings.map((city, i) => <RadioButton key={i} value={city}>{city}</RadioButton>)
              }
            </RadioButtonGroup>
            <RadioButtonGroup
              style={{marginBottom: 20, maxWidth: 300}}
              value={this.state.objectValue}
              onChange={::this.onObjectsChange}>
              <div style={{background: '#eee', padding: '20px', borderRadius: '3px'}}>
                {
                  objects.map((city, i) =>
                    <div key={i}>
                      <RadioButton value={city}>{city.name}</RadioButton>
                      { i + 1 < objects.length && <hr style={{marginBottom: '15px'}} /> }
                    </div>
                  )
                }
              </div>
            </RadioButtonGroup>
            <RadioButtonGroup
              style={{margin: '40px 0', maxWidth: 300}}
              value={this.state.objectValue}
              onChange={::this.onObjectsChange}>
              {
                objects.map((city, i) => <RadioButton key={i} value={city} disabled labelPosition='left'>{city.name}</RadioButton>)
              }
            </RadioButtonGroup>
          </div>
          <div>
            <div style={{marginBottom: '20px'}}>this.state.objectValue: <b>{JSON.stringify(this.state.objectValue)}</b></div>
            <div>this.state.stringValue: <b>{this.state.stringValue}</b></div>
          </div>
        </div>
      </ApplyTheme>
    )

  }

}
