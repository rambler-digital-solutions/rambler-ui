import Button from 'rambler-ui/Button'
import React, {Component} from 'react'
import ChevronRightIcon from 'rambler-ui/icons/forms/ChevronRightIcon'
import {ApplyTheme} from 'rambler-ui/theme'

const types = ['primary', 'danger', 'secondary', 'outline', 'flat']

export default class ButtonExample extends Component {
  state = {
    loading: false
  }

  onServerResponse() {
    setTimeout(() => {
      this.setState({loading: false})
    }, 1000)
  }

  handleClick = () => {
    this.setState({loading: true})
    this.onServerResponse()
  }

  render() {
    return (
      <ApplyTheme>
        <div>
          {types.map(type => (
            <div key={type}>
              <Button
                style={{margin: 20}}
                icon={<ChevronRightIcon />}
                iconPosition="right"
                type={type}>
                {type}
              </Button>
              <Button
                style={{margin: 20}}
                icon={<ChevronRightIcon />}
                iconPosition="right"
                type={type}
                loading={true}>
                {type}
              </Button>
              <Button
                style={{margin: 20}}
                icon={<ChevronRightIcon />}
                iconPosition="right"
                type={type}
                size="small">
                {type} small
              </Button>
              <Button
                style={{margin: 20}}
                icon={<ChevronRightIcon />}
                iconPosition="right"
                type={type}
                disabled={true}>
                {type} disabled
              </Button>
            </div>
          ))}
          <div
            style={{
              width: 300,
              padding: 20,
              margin: 20,
              border: '1px solid #eee'
            }}>
            <Button style={{marginBottom: 20}} block={true} size="small">
              Primary block
            </Button>
            <Button block={true} type="secondary" size="small" disabled>
              Primary block disabled
            </Button>
          </div>
          <div>
            <Button
              style={{margin: 20}}
              rounded={true}
              type="secondary"
              size="small"
              onClick={this.handleClick}
              loading={this.state.loading}>
              Secondary loader
            </Button>
            <Button
              style={{margin: 20}}
              size="small"
              overlay={<input type="file" name="hello" />}>
              Upload file
            </Button>
            <Button
              icon={<ChevronRightIcon />}
              iconPosition="right"
              style={{margin: 20}}
              rounded={true}>
              Rounded With Icon
            </Button>
            <Button style={{margin: 20}} rounded={true}>
              Rounded
            </Button>
          </div>
        </div>
      </ApplyTheme>
    )
  }
}
