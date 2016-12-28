import React, {Component} from 'react'
import Input from 'rambler-ui/Input'
import InputStatus from 'rambler-ui/InputStatus'
import { ApplyTheme } from 'rambler-ui/theme'
import RamblerMailIcon from 'rambler-ui/icons/services/RamblerMailIcon'

export default class InputExample extends Component {
  state = {
    value1: 'asdasdasds',
    value2: '',
    value3: 'yo',
    value4: 982034203,
    value5: 'email@email.com'
  }

  onChange(event, value) {
    const {name} = event.target
    this.setState({[name]: value})
  }

  render() {
    return (
      <div>
        <h3>Пример без InputStatus</h3>
        <ApplyTheme name='champ'>
          <div style={{width: 300}}>
            <Input
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
            <Input
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
                <Input
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
                <Input
                  type='password'
                  name='value2'
                  value={this.state.value2}
                  status={this.state.value2 ? 'error' : undefined}
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
                type='warning'
                message='Оранжевый текст' >
                <Input
                  type='text'
                  name='value3'
                  value={this.state.value3}
                  status={this.state.value3 ? 'warning' : undefined}
                  onChange={::this.onChange}
                  placeholder='Почта'
                />
              </InputStatus>
            </div>
            <div style={{marginBottom: 30}}>
              <InputStatus
                type='success'
                message='Зелёный текст' >
                <Input
                  type='password'
                  name='value3'
                  value={this.state.value3}
                  status={this.state.value3 ? 'success' : undefined}
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
                <Input
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
        <ApplyTheme name='champ'>
          <div style={{width: 300}}>
            <div style={{marginBottom: 30}}>
              <InputStatus
                type='warning'
                message='Зелёный текст' >
                <Input
                  type='tel'
                  name='value4'
                  value={this.state.value4}
                  status={this.state.value4 ? 'success' : null}
                  onChange={::this.onChange}
                  iconLeft={<RamblerMailIcon />}
                />
              </InputStatus>
            </div>
            <div style={{marginBottom: 30}}>
              <InputStatus
                type='error'
                message='Зелёный текст' >
                <Input
                  type='email'
                  name='value5'
                  value={this.state.value5}
                  status={this.state.value5 ? 'warning' : null}
                  onChange={::this.onChange}
                  iconLeft={<RamblerMailIcon />}
                />
              </InputStatus>
            </div>
            <div style={{marginBottom: 30}}>
              <InputStatus
                type='success'
                message='Зелёный текст' >
                <Input
                  type='email'
                  name='value5'
                  value={this.state.value5}
                  status={this.state.value5 ? 'error' : null}
                  onChange={::this.onChange}
                  iconLeft={<RamblerMailIcon />}
                />
              </InputStatus>
            </div>
          </div>
        </ApplyTheme>
      </div>
    )
  }
}
