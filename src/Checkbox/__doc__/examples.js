import Checkbox from 'rambler-ui/Checkbox'
import React, {Component} from 'react'

export default class CheckboxExample extends Component {

  render() {
    return (
      <div>
        <div style={{marginTop: 20}}>
          <Checkbox style={{display: 'block', width: 225}} name="checkbox6" labelStyle={{color: '#f00'}}>Получать уведомления по почте</Checkbox>
        </div>
        <div style={{marginTop: 20}}>
          <Checkbox style={{display: 'block', width: 225}} name="checkbox7" checked>Получать уведомления по почте</Checkbox>
        </div>
        <div style={{marginTop: 20}}>
          <Checkbox labelPosition="left" style={{display: 'block', width: 225}} name="checkbox8" disabled>Получать уведомления по почте</Checkbox>
        </div>
      </div>
    )
  }
}
