import React, {Component} from 'react'
import Checkbox from 'rambler-ui/Checkbox'
import { ApplyTheme } from 'rambler-ui/theme'

export default class CheckboxExample extends Component {
  state = {
    checked1: true,
    checked2: false
  }

  get isAllChecked() {
    if (this.state.checked1 === true && this.state.checked2 === true)
      return true
    if (this.state.checked1 === false && this.state.checked2 === false)
      return false
    return undefined
  }

  get isIndeterminate() {
    return this.isAllChecked === undefined
  }

  onCheck1(e, checked) {
    this.setState({checked1: checked})
  }

  onCheck2(e, checked) {
    this.setState({checked2: checked})
  }

  onAllCheck() {
    const checked = this.isAllChecked === false
    this.setState({
      checked1: checked,
      checked2: checked
    })
  }

  render() {
    return (
      <ApplyTheme>
        <div>
          <div style={{ display: 'flex', marginBottom: 20 }}>
            {['regular', 'awesome'].map(variation => (
              <div style={{maxWidth: 240, marginRight: 20}} key={variation}>
                <h4>variation: {variation}</h4>
                <div>
                  <Checkbox checked={this.isAllChecked} indeterminate={this.isIndeterminate} onCheck={::this.onAllCheck} variation={variation}>
                    Выбрать все
                  </Checkbox>
                </div>
                <div style={{marginTop: 20}}>
                  <Checkbox checked={this.state.checked1} onCheck={::this.onCheck1} variation={variation}>
                    Получать уведомления по почте
                  </Checkbox>
                </div>
                <div style={{marginTop: 20}}>
                  <Checkbox checked={this.state.checked2} onCheck={::this.onCheck2} variation={variation}>
                    Получать уведомления на мобильный
                  </Checkbox>
                </div>
                <div style={{marginTop: 20}}>
                  <Checkbox checked={this.state.checked1} disabled variation={variation}>
                    Получать уведомления по почте
                  </Checkbox>
                </div>
                <div style={{marginTop: 20}}>
                  <Checkbox checked={this.state.checked2} onCheck={::this.onCheck2} variation={variation} iconPosition='right'>
                    Получать уведомления на мобильный
                  </Checkbox>
                </div>
              </div>
            ))}
            <div style={{maxWidth: 240, marginRight: 20}}>
              <h4>size: small</h4>
              <div>
                <Checkbox checked={this.isAllChecked} indeterminate={this.isIndeterminate} onCheck={::this.onAllCheck} size='small'>
                  Выбрать все
                </Checkbox>
              </div>
              <div style={{marginTop: 20}}>
                <Checkbox checked={this.state.checked1} onCheck={::this.onCheck1} size='small'>
                  Получать уведомления по почте
                </Checkbox>
              </div>
              <div style={{marginTop: 20}}>
                <Checkbox checked={this.state.checked2} onCheck={::this.onCheck2} size='small'>
                  Получать уведомления на мобильный
                </Checkbox>
              </div>
              <div style={{marginTop: 20}}>
                <Checkbox checked={this.state.checked1} disabled size='small'>
                  Получать уведомления по почте
                </Checkbox>
              </div>
              <div style={{marginTop: 20}}>
                <Checkbox checked={this.state.checked2} onCheck={::this.onCheck2} size='small' iconPosition='right'>
                  Получать уведомления на мобильный
                </Checkbox>
              </div>
            </div>
          </div>
          <div>this.state.checked1: <b>{`${this.state.checked1}`}</b></div>
          <div>this.state.checked2: <b>{`${this.state.checked2}`}</b></div>
          <div>this.isIndeterminate: <b>{`${this.isIndeterminate}`}</b></div>
        </div>
      </ApplyTheme>
    )
  }
}
