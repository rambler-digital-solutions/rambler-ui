import React, { Component } from 'react'
import Hint from 'rambler-ui/Hint'
import { ApplyTheme } from 'rambler-ui/theme'

export default class HintExample extends Component {

  render() {
    return (
      <ApplyTheme>
        <div>

          <div style={{ width: '50%', display: 'inline-block' }}>
            Подсказка справа
            <Hint style={{ marginLeft: 15 }}>
              Номер телефона поможет вам восстановить пароль от почты
            </Hint>
          </div>

          <div style={{ width: '50%', display: 'inline-block', textAlign: 'right' }}>
            Подсказка слева
            <Hint style={{ marginLeft: 15 }}>
              Номер телефона поможет вам восстановить пароль от почты
            </Hint>
          </div>

        </div>
      </ApplyTheme>
    )
  }

}
