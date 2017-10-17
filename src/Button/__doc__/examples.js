import Button from 'rambler-ui/Button'
import React, {Component} from 'react'
import ChevronRightIcon from 'rambler-ui/icons/forms/ChevronRightIcon'
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
      <ApplyTheme>
        <div>
          <div>
            <Button icon={<ChevronRightIcon/>} iconPosition="right" style={{margin: 20}}>Primary</Button>
            <Button style={{margin: 20}} disabled>Primary disabled</Button>
            <Button style={{margin: 20}} type="outline" onClick={::this.handleClick} loading={this.state.loading}>Outline loader</Button>
            <Button style={{margin: 20}} type="outline" disabled>Outline disabled</Button>
            <Button style={{margin: 20}} type="danger">Danger</Button>
            <Button style={{margin: 20}} type="danger" disabled>Danger disabled</Button>
            <Button style={{margin: 20}} type="secondary">Secondary</Button>
            <Button style={{margin: 20}} type="secondary" disabled>Secondary disabled</Button>
            <Button style={{margin: 20}} type="flat">Flat</Button>
            <Button style={{margin: 20}} type="flat" disabled>Flat disabled</Button>
          </div>
          <div>
            <Button size="small" icon={<ChevronRightIcon/>} iconPosition="right" style={{margin: 20}}>Primary</Button>
            <Button size="small" style={{margin: 20}} disabled>Primary disabled</Button>
            <Button size="small" style={{margin: 20}} type="outline" onClick={::this.handleClick} loading={this.state.loading}>Outline loader</Button>
            <Button size="small" style={{margin: 20}} type="outline" disabled>Outline disabled</Button>
            <Button size="small" style={{margin: 20}} type="danger">Danger</Button>
            <Button size="small" style={{margin: 20}} type="danger" disabled>Danger disabled</Button>
            <Button size="small" style={{margin: 20}} type="secondary">Secondary</Button>
            <Button size="small" style={{margin: 20}} type="secondary" disabled>Secondary disabled</Button>
            <Button size="small" style={{margin: 20}} type="flat">Flat</Button>
            <Button size="small" style={{margin: 20}} type="flat" disabled>Flat disabled</Button>
          </div>
          <div style={{
            width: 300, padding: 20, margin: 20, border: '1px solid #eee'
          }}>
            <Button style={{marginBottom: 20}} block={true} size="small">Primary block</Button>
            <Button block={true} type="secondary" size="small" disabled>Primary block disabled</Button>
          </div>
          <Button style={{margin: 20}} rounded={true} type="secondary" size="small" onClick={::this.handleClick} loading={this.state.loading}>Secondary loader</Button>
          <Button style={{margin: 20}} type="secondary" size="small" disabled>Secondary disabled</Button>
          <div>
            <Button style={{margin: 20}} size="small" overlay={<input type="file" name="hello"/>}>Upload file</Button>
          </div>
          <div>
            <Button icon={<ChevronRightIcon/>} iconPosition="right" style={{margin: 20}} rounded={true}>Rounded With Icon</Button>
            <Button style={{margin: 20}} rounded={true}>Rounded</Button>
          </div>
          <div>
            <Button icon={<ChevronRightIcon/>} iconPosition="right" style={{margin: 20}} loading={true}>Loading</Button>
            <Button icon={<ChevronRightIcon/>} iconPosition="right" style={{margin: 20}} loading={true} type="danger">Loading</Button>
            <Button icon={<ChevronRightIcon/>} iconPosition="right" style={{margin: 20}} loading={true} type="outline">Loading</Button>
            <Button icon={<ChevronRightIcon/>} iconPosition="right" style={{margin: 20}} loading={true} type="secondary">Loading</Button>
            <Button icon={<ChevronRightIcon/>} iconPosition="right" style={{margin: 20}} loading={true} type="flat">Loading</Button>
          </div>
        </div>
      </ApplyTheme>
    )
  }
}
