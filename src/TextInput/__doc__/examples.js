import React, {Component} from 'react'
import TextInput from 'rambler-ui/TextInput'
import FormGroup from 'rambler-ui/FormGroup'
import InputStatus from 'rambler-ui/InputStatus'
import { ApplyTheme } from 'rambler-ui/theme'
import RamblerMailIcon from 'rambler-ui/icons/services/RamblerMailIcon'

export default class InputExample extends Component {
  state = {
    value4: 'sdfsdfsdfsd',
    value5: '',
    value6: ''
  }

  onChange(event, value) {
    const {name} = event.target
    this.setState({[name]: value})
  }

  render() {
    return (
      <div>
        <h3>FormGroup inline=false</h3>
        <ApplyTheme>
          <FormGroup inline={false} label='Имя' fieldId='name' className='formGroup' style={{width: 300}}>
            <InputStatus
              type='success'
              message='Зелёный текст' >
              <TextInput
                status='success'
                type='text'
                name='value4'
                value={this.state.value4}
                onChange={::this.onChange}
                placeholder='Имя'
              />
            </InputStatus>
          </FormGroup>
        </ApplyTheme>
        <ApplyTheme>
          <FormGroup inline={false} label='Фамилия' fieldId='name' className='formGroup' style={{width: 400}}>
            <InputStatus
              type='warning'
              message='Текст предупреждения' >
              <TextInput
                status='warning'
                type='text'
                name='value4'
                value={this.state.value4}
                onChange={::this.onChange}
                placeholder='Фамилия'
              />
            </InputStatus>
          </FormGroup>
        </ApplyTheme>

        <h3>FormGroup inline=true</h3>
        <ApplyTheme>
          <FormGroup inline={true} label='Отчество' fieldId='name' className='formGroup' style={{width: 550}}>
            <InputStatus
              type='error'
              message='Текст ошибки' >
              <TextInput
                status='error'
                type='text'
                name='value5'
                value={this.state.value5}
                onChange={::this.onChange}
                placeholder='placeholder'
              />
            </InputStatus>
          </FormGroup>
        </ApplyTheme>
        <ApplyTheme>
          <FormGroup inline={true} label='Input disabled' fieldId='name' className='formGroup' style={{width: 600}}>
            <InputStatus message='Без статуса задизэйблена'>
              <TextInput
                type='text'
                value=''
                onChange={::this.onChange}
                disabled
              />
            </InputStatus>
          </FormGroup>
        </ApplyTheme>
        <ApplyTheme>
          <FormGroup inline={true} label='Пароль' fieldId='name' className='formGroup' style={{width: 650}}>
            <TextInput
              type='password'
              name='value6'
              value={this.state.value6}
              onChange={::this.onChange}
              placeholder='Пароль'
              onChange={::this.onChange}
            />
          </FormGroup>
        </ApplyTheme>

        <h3>Пример с iconLeft и iconRight</h3>
        <ApplyTheme>
          <FormGroup inline={true} label='Отчество' fieldId='name' className='formGroup' style={{width: 700}}>
            <InputStatus
              type='error'
              message='Текст ошибки' >
              <TextInput
                status='error'
                type='text'
                name='value6'
                style={{width: 300}}
                value={this.state.value6}
                onChange={::this.onChange}
                placeholder='placeholder'
                iconLeft={<RamblerMailIcon />}
                iconRight={<RamblerMailIcon />}
              />
            </InputStatus>
          </FormGroup>
        </ApplyTheme>
        <ApplyTheme>
          <FormGroup inline={true} label='Пароль' fieldId='name' className='formGroup' style={{width: 750}}>
            <TextInput
              type='password'
              name='value6'
              value={this.state.value6}
              onChange={::this.onChange}
              placeholder='Пароль'
              iconRight={<RamblerMailIcon />}
              onChange={::this.onChange}
            />
          </FormGroup>
        </ApplyTheme>
      </div>
    )
  }

}
