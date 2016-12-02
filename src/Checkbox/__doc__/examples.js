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
      <div>
        <ApplyTheme>
          <div>
            <div style={{marginTop: 20}}>
              <Checkbox
                name="checkbox6"
                labelStyle={{color: '#f00'}}
                checked={this.state.checked}
                onCheck={::this.onCheck}>Получать уведомления по почте</Checkbox>
              <Checkbox
                checkboxStyle={{marginRight: 5}}
                style={{marginLeft: 20}}
                name="checkbox6"
                onCheck={(event, checked) => alert(`Checked: ${checked}`)}>Получать уведомления по почте</Checkbox>
            </div>
            <div style={{marginTop: 20}}>
              <Checkbox
                name="checkbox7"
                checked={this.state.checked}
                onCheck={::this.onCheck}>Получать уведомления по почте</Checkbox>
            </div>
            <div style={{marginTop: 20}}>
              <Checkbox iconPosition="right" name="checkbox8" disabled>Получать уведомления по почте</Checkbox>
            </div>
          </div>
        </ApplyTheme>

        <ApplyTheme name='champTheme'>
          <div>
            <div style={{marginTop: 20}}>
              <Checkbox
                name="checkbox6"
                labelStyle={{color: '#f00'}}
                checked={this.state.checked}
                onCheck={::this.onCheck}>Получать уведомления по почте</Checkbox>
              <Checkbox
                checkboxStyle={{marginRight: 5}}
                style={{marginLeft: 20}}
                name="checkbox6"
                onCheck={(event, checked) => alert(`Checked: ${checked}`)}>Получать уведомления по почте</Checkbox>
            </div>
          </div>
        </ApplyTheme>
      </div>
    )
  }
}
