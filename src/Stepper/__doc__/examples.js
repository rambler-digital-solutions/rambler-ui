import { Stepper, Step } from 'rambler-ui/Stepper'
import React, { Component } from 'react'
import { ApplyTheme } from 'rambler-ui/theme'
import TickIcon from 'rambler-ui/icons/forms/TickIcon'

export default class StepperExample extends Component {
  state = {
    value: 2
  }

  onChange = value => {
    this.setState({value})
  }

  render() {
    return (
      <ApplyTheme>
        <div>
          <div>
            <Stepper value={this.state.value} onChange={this.onChange}>
              {[1, 2, 3, 4, 5].map((item, index) => <Step key={index} value={index} />)}
            </Stepper>
          </div>

          <div style={{marginTop: '50px'}}>
            <Stepper value={this.state.value} onChange={this.onChange}>
              {[1, 2, 3, 4, 5].map((item, index) =>
                <Step
                  key={index}
                  value={index + 1}
                  icon={(value, currentValue) => (value === currentValue && <TickIcon />)} />
              )}
            </Stepper>
          </div>
        </div>
      </ApplyTheme>
    )
  }
}
