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
        <Button style={{margin: 20, display: 'block', width: 173}} onClick={::this.handleClick} loading={this.state.loading}>Кнопка-загрузка</Button>
        <Button style={{margin: 20, display: 'block', width: 173}} disabled>Disabled</Button>
        <Button style={{margin: 20, display: 'block', width: '173'}} theme="white" onClick={::this.handleClick} loading={this.state.loading}>Кнопка-загрузка</Button>
        <Button style={{margin: 20, display: 'block', width: '173'}} theme="white" disabled>disabled</Button>
        <Button style={{margin: 20, display: 'block', width: 173}} size="small" onClick={::this.handleClick} loading={this.state.loading}>Кнопка-загрузка</Button>
        <Button style={{margin: 20, display: 'block', width: '173'}} theme="light-blue" size="small" disabled>disabled</Button>
        <Button style={{margin: 20, display: 'block', width: 173}} theme="light-blue" size="small" onClick={::this.handleClick} loading={this.state.loading}>Кнопка-загрузка</Button>
        <Button style={{margin: 20, display: 'block', width: '173'}} theme="light-blue" size="small" disabled>disabled</Button>
        <Button style={{margin: 20, display: 'block', width: 173}} theme="light-blue" size="small" buttonType="file">Кнопка-файл</Button>
      </div>
    )
  }
}
