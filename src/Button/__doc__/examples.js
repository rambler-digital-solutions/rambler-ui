import Button from 'rambler-ui/Button'
import React, {Component} from 'react'

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
        <div>
          <Button style={{margin: 20}} onClick={::this.handleClick} loading={this.state.loading}>Кнопка-загрузка</Button>
          <Button style={{margin: 20}} disabled>Disabled</Button>
          <Button style={{margin: 20}} theme="white" onClick={::this.handleClick} loading={this.state.loading}>Кнопка-загрузка</Button>
          <Button style={{margin: 20}} theme="white" disabled>disabled</Button>
        </div>
        <div style={{width: 300, padding: 20, margin: 20, background: '#fafafa', border: '1px solid #eee'}}>
          <Button style={{marginBottom: 20}} block={true} size="small" onClick={::this.handleClick} loading={this.state.loading}>Кнопка-загрузка</Button>
          <Button block={true} theme="lightBlue" size="small" disabled>disabled</Button>
        </div>
        <Button style={{margin: 20, display: 'block', width: 173}} theme="lightBlue" size="small" onClick={::this.handleClick} loading={this.state.loading}>Кнопка-загрузка</Button>
        <Button style={{margin: 20, display: 'block', width: '173'}} theme="lightBlue" size="small" disabled>disabled</Button>
        <Button style={{margin: 20, display: 'block', width: 173}} theme="lightBlue" size="small" overlay={<input type="file"/>}>Кнопка-файл</Button>
      </div>
    )
  }
}
