import React, {Component} from 'react'
import Hint from 'rambler-ui/Hint'
import InfoIcon from 'rambler-ui/icons/forms/InfoIcon'

export default class HintExample extends Component {
  render() {
    return (
      <div style={{display: 'flex', alignItems: 'center'}}>
        <div style={{width: '33%', display: 'flex', alignItems: 'center'}}>
          Подсказка справа
          <Hint style={{marginLeft: 15}}>
            Номер телефона поможет вам восстановить пароль от почты
          </Hint>
        </div>

        <div style={{width: '33%', display: 'flex', alignItems: 'center'}}>
          Кастомная иконка
          <Hint icon={<InfoIcon color="magenta" />} style={{marginLeft: 15}}>
            Номер телефона поможет вам восстановить пароль от почты
          </Hint>
        </div>

        <div
          style={{
            width: '33%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end'
          }}>
          Подсказка слева
          <Hint style={{marginLeft: 15}}>
            Номер телефона поможет вам восстановить пароль от почты
          </Hint>
        </div>
      </div>
    )
  }
}
