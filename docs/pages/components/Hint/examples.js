import React, {PureComponent} from 'react'
import Hint from 'rambler-ui/Hint'
import InfoIcon from 'rambler-ui/icons/forms/InfoIcon'

export default class HintExample extends PureComponent {
  render() {
    return (
      <div style={{display: 'flex', alignItems: 'center'}}>
        <div style={{width: '30%', display: 'flex', alignItems: 'center'}}>
          Подсказка справа
          <Hint style={{marginLeft: 10}} positionX={'right'}>
            Номер телефона поможет вам восстановить пароль от почты
          </Hint>
        </div>

        <div style={{width: '30%', display: 'flex', alignItems: 'center'}}>
          Кастомная иконка
          <Hint
            icon={ref => <InfoIcon nodeRef={ref} color="magenta" />}
            style={{marginLeft: 10}}>
            Номер телефона поможет вам восстановить пароль от почты
          </Hint>
        </div>

        <div
          style={{
            width: '40%',
            display: 'flex',
            justifyContent: 'flex-end'
          }}>
          <Hint
            style={{marginLeft: 10}}
            positionX={'left'}
            renderAnchor={icon => (
              <div
                style={{
                  flex: 'none',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                Подсказка слева с renderAnchor
                {icon}
              </div>
            )}>
            Номер телефона поможет вам восстановить пароль от почты
          </Hint>
        </div>
      </div>
    )
  }
}
