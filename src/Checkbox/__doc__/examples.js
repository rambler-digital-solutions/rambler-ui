import React, {Component} from 'react'
import Checkbox from 'rambler-ui/Checkbox'
import { ApplyTheme } from 'rambler-ui/theme'

export default class CheckboxExample extends Component {
  state = {
    checked: true,
    indeterminate: false
  }

  onCheck() {
    const {checked, indeterminate} = this.state
    const newState = {}
    if (checked && !indeterminate) {
      newState.checked = false
      newState.indeterminate = false
    } else if (!checked && !indeterminate) {
      newState.checked = false
      newState.indeterminate = true
    } else if (!checked && indeterminate) {
      newState.checked = true
      newState.indeterminate = true
    } else {
      newState.checked = true
      newState.indeterminate = false
    }
    this.setState(newState)
  }

  render() {
    return (
      <ApplyTheme>
        <div>
          <div style={{ display: 'flex', marginBottom: 20 }}>
            {['regular', 'awesome'].map(variation => (
              <div style={{maxWidth: 240, marginRight: 20}}>
                <h4>variation: {variation}</h4>
                <div>
                  <Checkbox name="checkbox6" checked={this.state.checked} indeterminate={this.state.indeterminate} onCheck={::this.onCheck} variation={variation}>
                    Получать уведомления по почте
                  </Checkbox>
                </div>
                <div style={{marginTop: 20}}>
                  <Checkbox name="checkbox8" checked={this.state.checked} indeterminate={this.state.indeterminate} onCheck={::this.onCheck} disabled variation={variation}>
                    На протяжении многих веков правители семи народов вели непрерывные войны.
                  </Checkbox>
                </div>
                <div style={{marginTop: 20}}>
                  <Checkbox name="checkbox8" checked={this.state.checked} indeterminate={this.state.indeterminate} onCheck={::this.onCheck} variation={variation} iconPosition='right'>
                    iconPosition: right
                  </Checkbox>
                </div>
              </div>
            ))}
          </div>
          <div>this.state.checked: <b>{`${this.state.checked}`}</b></div>
          <div>this.state.indeterminate: <b>{`${this.state.indeterminate}`}</b></div>
        </div>
      </ApplyTheme>
    )
  }
}
