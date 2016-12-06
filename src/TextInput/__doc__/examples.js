import React, {Component} from 'react'
import TextInput from 'rambler-ui/TextInput'
import FormGroup from 'rambler-ui/FormGroup'
import InputStatus from 'rambler-ui/InputStatus'
import { ApplyTheme } from 'rambler-ui/theme'
import RamblerMailIcon from 'rambler-ui/icons/services/RamblerMailIcon'

export default class InputExample extends Component {
  state = {
    value1: 'asdasdasds',
    value2: '',
    value3: '',
    value4: '',
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
        <h1>Чемповская тема</h1>
        <h3>Пример без InputStatus</h3>
        <ApplyTheme name='champ'>
          <div style={{width: 300}}>
            <TextInput
              style={{marginBottom: 30}}
              type='text'
              name='value1'
              value={this.state.value1}
              status={!!this.state.value1 ? 'filled' : undefined}
              onChange={::this.onChange}
              placeholder='Почта'
              iconLeft={<RamblerMailIcon />}
              iconRight={<RamblerMailIcon />}
            />
            <TextInput
              type='password'
              name='value2'
              value={this.state.value2}
              status={this.state.value2 ? 'filled' : undefined}
              onChange={::this.onChange}
              placeholder='Пароль'
              iconLeft={<RamblerMailIcon />}
              iconRight={<RamblerMailIcon />}
            />
          </div>
        </ApplyTheme>

        <h3>Пример c InputStatus</h3>
        <ApplyTheme name='champ'>
          <div style={{width: 300}}>
            <div style={{marginBottom: 30}}>
              <InputStatus
                type='success'
                message='Зелёный текст' >
                <TextInput
                  type='text'
                  name='value1'
                  value={this.state.value1}
                  status={!!this.state.value1 ? 'filled' : undefined}
                  onChange={::this.onChange}
                  placeholder='Почта'
                  iconLeft={<RamblerMailIcon />}
                />
              </InputStatus>
            </div>
            <div style={{marginBottom: 30}}>
              <InputStatus
                type='error'
                message='Красный текст' >
                <TextInput
                  type='password'
                  name='value2'
                  value={this.state.value2}
                  status={this.state.value2 ? 'filled' : undefined}
                  onChange={::this.onChange}
                  placeholder='Пароль'
                  iconLeft={<RamblerMailIcon />}
                />
              </InputStatus>
            </div>
          </div>
        </ApplyTheme>

        <h3>Пример c status в inputText и без iconLeft</h3>
        <ApplyTheme name='champ'>
          <div style={{width: 300}}>
            <div style={{marginBottom: 30}}>
              <InputStatus
                type='success'
                message='Зелёный текст' >
                <TextInput
                  type='text'
                  name='value3'
                  value={this.state.value3}
                  status={this.state.value3 ? 'filled' : undefined}
                  onChange={::this.onChange}
                  placeholder='Почта'
                />
              </InputStatus>
            </div>
            <div style={{marginBottom: 30}}>
              <InputStatus
                type='error'
                message='Красный текст' >
                <TextInput
                  type='password'
                  name='value3'
                  value={this.state.value3}
                  status={this.state.value3 ? 'filled' : undefined}
                  onChange={::this.onChange}
                  className='Пароль'
                  placeholder='Пароль'
                  iconLeft={<RamblerMailIcon />}
                />
              </InputStatus>
            </div>
          </div>
        </ApplyTheme>
        <h3>Пример c disabled</h3>
        <ApplyTheme name='champ'>
          <div style={{width: 300}}>
            <div style={{marginBottom: 30}}>
              <InputStatus
                type='success'
                message='Зелёный текст' >
                <TextInput
                  disabled={true}
                  type='text'
                  value=''
                  onChange={::this.onChange}
                  iconLeft={<RamblerMailIcon />}
                />
              </InputStatus>
            </div>
          </div>
        </ApplyTheme>

        <h1>Дефолтная тема</h1>
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
