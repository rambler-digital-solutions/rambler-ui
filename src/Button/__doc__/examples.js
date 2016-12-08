import Button from 'rambler-ui/Button'
import React, {Component} from 'react'
import RamblerMailIcon from 'rambler-ui/icons/services/RamblerMailIcon'
import { ApplyTheme } from 'rambler-ui/theme'

export default class ButtonExample extends Component {
  state = {
    loading: false
  }

  onServerResponse() {
    setTimeout(() => {
      this.setState({loading: false})
    }, 1000)
  }

  handleClick() {
    this.setState({loading: true})
    this.onServerResponse()
  }

  render() {
    return (
      <div>

        <ApplyTheme>
          <div>
            <div>
              <Button icon={<RamblerMailIcon/>} style={{margin: 20}} onClick={::this.handleClick} loading={this.state.loading}>Почта</Button>
              <Button icon={<RamblerMailIcon/>} iconPosition="right" style={{margin: 20}} onClick={::this.handleClick} loading={this.state.loading}>Почта</Button>
              <Button style={{margin: 20}} disabled>Disabled</Button>
              <Button style={{margin: 20}} type="outline" onClick={::this.handleClick} loading={this.state.loading}>Кнопка-загрузка</Button>
              <Button style={{margin: 20}} type="outline" disabled>disabled</Button>
            </div>
            <div style={{width: 300, padding: 20, margin: 20, background: '#fafafa', border: '1px solid #eee'}}>
              <Button icon={<RamblerMailIcon/>} style={{marginBottom: 20}} block={true} size="small" onClick={::this.handleClick} loading={this.state.loading}>Кнопка-загрузка</Button>
              <Button block={true} type="secondary" size="small" disabled>disabled</Button>
            </div>
            <Button style={{margin: 20, display: 'block', width: 173}} type="secondary" size="small" onClick={::this.handleClick} loading={this.state.loading}>Кнопка-загрузка</Button>
            <Button style={{margin: 20, display: 'block', width: 173}} type="secondary" size="small" disabled>disabled</Button>
            <Button style={{margin: 20, display: 'block', width: 173}} type="secondary" size="small" overlay={<input type="file" name="hello"/>}>Загрузить файл</Button>
          </div>
        </ApplyTheme>

      </div>
    )
  }
}
