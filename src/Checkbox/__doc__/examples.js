import React, {Component} from 'react'
import Checkbox from 'rambler-ui/Checkbox'
import { ApplyTheme } from 'rambler-ui/theme'

export default class CheckboxExample extends Component {

  componentWillMount() {
    this.setState({checked: true})
  }

  onCheck(event, checked) {
    this.setState({checked})
  }

  render() {
    return (
      <ApplyTheme>
        <div style={{ display: 'flex' }}>
          {['regular', 'awesome'].map(variation => (
            <div style={{maxWidth: 240, marginRight: 20}}>
              <h4>variation: {variation}</h4>
              <div>
                <Checkbox name="checkbox6" checked={this.state.checked} onCheck={::this.onCheck} variation={variation}>
                  Получать уведомления по почте
                </Checkbox>
              </div>
              <div style={{marginTop: 20}}>
                <Checkbox name="checkbox8" checked={this.state.checked} onCheck={::this.onCheck} disabled variation={variation}>
                  На протяжении многих веков правители семи народов вели непрерывные войны.
                </Checkbox>
              </div>
              <div style={{marginTop: 20}}>
                <Checkbox name="checkbox8" checked={this.state.checked} onCheck={::this.onCheck} variation={variation} iconPosition='right'>
                  iconPosition: right
                </Checkbox>
              </div>
            </div>
          ))}
        </div>
      </ApplyTheme>
    )
  }
}
