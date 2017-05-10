import React, { Component } from 'react'
import Textarea from 'rambler-ui/Textarea'
import FormGroup from 'rambler-ui/FormGroup'
import InputStatus from 'rambler-ui/InputStatus'
import InfoIcon from 'rambler-ui/icons/forms/InfoIcon'
import { ApplyTheme } from 'rambler-ui/theme'

export default class TextareaExample extends Component {
  state = {
    value: ''
  }

  onChange = (event, value) => {
    this.setState({
      value
    })
  }

  render() {
    return (
      <ApplyTheme>
        <div>

          <h3>FormGroup inline=false</h3>
          <FormGroup inline={false} label='Имя' style={{ width: 300 }}>
            <InputStatus type='success' message='Успешно'>
              <Textarea
                status='success'
                name='value1'
                value={this.state.value}
                onChange={this.onChange}
                placeholder='Имя' />
            </InputStatus>
          </FormGroup>

          <h3>FormGroup inline=true</h3>
          <FormGroup inline={true} label='Фамилия' style={{ width: 600 }}>
            <InputStatus type='error' message='Ошибка'>
              <Textarea
                status='error'
                name='value2'
                value={this.state.value}
                onChange={this.onChange}
                iconRight={
                  <InfoIcon />
                }
                placeholder='Фамилия' />
            </InputStatus>
          </FormGroup>

          <FormGroup inline={true} label='Disabled' style={{ width: 300 }}>
            <InputStatus type='warning' message='Disabled'>
              <Textarea
                status='warning'
                value=''
                onChange={this.onChange}
                disabled />
            </InputStatus>
          </FormGroup>

        </div>
      </ApplyTheme>
    )
  }

}
