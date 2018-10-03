import React, {Component} from 'react'
import Switcher from 'rambler-ui/Switcher'

export default class SwitcherExample extends Component {
  state = {
    checked: false
  }

  onCheck = (event, checked) => {
    this.setState({
      checked
    })
  }

  render() {
    return (
      <div>
        <div>
          <Switcher checked={this.state.checked} onCheck={this.onCheck}>
            Получать уведомления по почте
          </Switcher>
        </div>
        <div style={{marginTop: 20}}>
          <Switcher
            iconPosition="right"
            checked={this.state.checked}
            onCheck={this.onCheck}>
            Получать уведомления по почте
          </Switcher>
        </div>
        <div style={{marginTop: 20, maxWidth: 200}}>
          <Switcher disabled checked={this.state.checked}>
            На протяжении многих веков правители семи народов вели непрерывные
            войны.
          </Switcher>
        </div>
      </div>
    )
  }
}
