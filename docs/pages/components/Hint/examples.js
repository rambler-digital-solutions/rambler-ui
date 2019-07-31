import React, {PureComponent} from 'react'
import Hint from 'rambler-ui/Hint'
import InfoIcon from 'rambler-ui/icons/forms/InfoIcon'

export default class HintExample extends PureComponent {
  render() {
    return (
      <div style={{display: 'flex', alignItems: 'center'}}>
        <div style={{width: '33%', display: 'flex', alignItems: 'center'}}>
          Подсказка справа
          <Hint style={{marginLeft: 10}} positionX={'right'}>
            Номер телефона поможет вам восстановить пароль от почты
          </Hint>
        </div>

        <div style={{width: '33%', display: 'flex', alignItems: 'center'}}>
          Кастомная иконка
          <Hint icon={<InfoIcon color="magenta" />} style={{marginLeft: 10}}>
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
          <Hint style={{marginLeft: 10}} positionX={'left'}>
            Номер телефона поможет вам восстановить пароль от почты
          </Hint>
        </div>
      </div>
    )
  }
}
