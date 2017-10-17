import React, { Component } from 'react'
import Textarea from 'rambler-ui/Textarea'
import FormGroup from 'rambler-ui/FormGroup'
import InputStatus from 'rambler-ui/InputStatus'
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
          <FormGroup inline={true} label='Имя'>
            <Textarea
              variation='regular'
              value={this.state.value}
              onChange={this.onChange}
              placeholder='Имя'
              style={{width: '500px'}}
              textareaStyle={{minHeight: '100px'}} />
          </FormGroup>

          <FormGroup inline={true} label='With error status'>
            <InputStatus type='error' message='Some error'>
              <Textarea
                status='error'
                size='small'
                value={this.state.value}
                onChange={this.onChange}
                style={{width: '500px'}}
                placeholder='Отчество' />
            </InputStatus>
          </FormGroup>

          <FormGroup inline={true} label='Disabled'>
            <Textarea
              value={this.state.value}
              onChange={this.onChange}
              style={{width: '500px'}}
              disabled />
          </FormGroup>
        </div>
      </ApplyTheme>
    )
  }

}
