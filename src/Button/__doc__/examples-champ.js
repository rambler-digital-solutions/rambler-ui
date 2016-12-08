import Button from 'rambler-ui/Button'
import React, {Component} from 'react'
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
        <ApplyTheme name="champ">
          <div>
            <div style={{marginBottom: 50}}>
              <Button style={{margin: 20}} type='primary' size='small' disabled>Button</Button>
              <Button style={{margin: 20, width: 296}} type='primary' size='small' onClick={::this.handleClick} loading={this.state.loading}>Button</Button>
              <Button style={{margin: 20, width: 200}} type='secondary' size='small' onClick={::this.handleClick} loading={this.state.loading}>Button</Button>
              <Button style={{margin: 20}} type='outline' size='small' onClick={::this.handleClick} loading={this.state.loading}>Button</Button>
            </div>
            <div>
              <Button style={{margin: 20}} type='primary' size='medium' disabled>Button</Button>
              <Button style={{margin: 20, width: 200}} type='primary' size='medium' onClick={::this.handleClick} loading={this.state.loading}>Button</Button>
              <Button style={{margin: 20, width: 150}} type='secondary' size='medium' onClick={::this.handleClick} loading={this.state.loading}>Button</Button>
              <Button style={{margin: 20}} type='outline' size='medium' onClick={::this.handleClick} loading={this.state.loading}>Button</Button>
            </div>
          </div>
        </ApplyTheme>
      </div>
    )
  }
}
