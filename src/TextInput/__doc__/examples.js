import React, {Component} from 'react'
import TextInput from 'rambler-ui/TextInput'
import FormGroup from 'rambler-ui/FormGroup'
import InputStatus from 'rambler-ui/InputStatus'
import { ApplyTheme } from 'rambler-ui/theme'
import RamblerMailIcon from 'rambler-ui/icons/services/RamblerMailIcon'

export default class InputExample extends Component {

  onChange(...args) {
    console.log('2:', ...args)
  }

  render() {
    return (
      <div>
        <h1>Чемповская тема</h1>
        <ApplyTheme name='champTheme'>
          <div style={{width: 300}}>
            <TextInput
              style ={{marginBottom: 50}}
              type='text'
              placeholder='Почта'
              icon={<RamblerMailIcon />}
            />
            <TextInput
              type='password'
              onChange={::this.onChange}
              className='Пароль'
              placeholder='Пароль'
              icon={<RamblerMailIcon />}
            />
          </div>
        </ApplyTheme>

        <h1>Дефолтная тема</h1>
        <ApplyTheme>
          <FormGroup inline={true} label='Имя' fieldId='name' >
            <InputStatus
              type='success'
              message='Зелёный текст' >
              <TextInput type='text' placeholder='Имя'/>
            </InputStatus>
          </FormGroup>
        </ApplyTheme>
        <ApplyTheme>
          <FormGroup inline={true} label='Фамилия' fieldId='name'>
            <InputStatus
              type='warning'
              message='Текст предупреждения' >
              <TextInput type='text' placeholder='Фамилия' defaultValue='Фамилия' />
            </InputStatus>
          </FormGroup>
        </ApplyTheme>
        <ApplyTheme>
          <FormGroup inline={true} label='Отчество' fieldId='name'>
            <InputStatus
              type='error'
              message='Текст ошибки' >
              <TextInput type='text'/>
            </InputStatus>
          </FormGroup>
        </ApplyTheme>
        <ApplyTheme>
          <FormGroup inline={true} label='Input disabled' fieldId='name'>
            <InputStatus message='Без статуса задизэйблена'>
              <TextInput type='text' disabled/>
            </InputStatus>
          </FormGroup>
        </ApplyTheme>
        <ApplyTheme>
          <FormGroup inline={true} label='Пароль' fieldId='name'>
            <TextInput type='password' placeholder='Пароль' type='password' onChange={::this.onChange} />
          </FormGroup>
        </ApplyTheme>
      </div>
    )
  }

}
