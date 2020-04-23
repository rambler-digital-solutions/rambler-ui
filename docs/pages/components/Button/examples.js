import Button from 'rambler-ui/Button'
import React, {Component} from 'react'
import ChevronRightIcon from 'rambler-ui/icons/forms/ChevronRightIcon'

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
      <div>
        {types.map(type => (
          <div key={type}>
            <h4>type: {type}</h4>
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
        <div>
          <h4>rounded: true</h4>
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
            icon={<ChevronRightIcon />}
            iconPosition="right"
            style={{margin: 20}}
            rounded={true}>
            Rounded With Icon
          </Button>
          <Button
            style={{margin: 20}}
            rounded={true}
            container={<a href="#" rel="nofollow" target="_self" />}>
            Rounded as a link
          </Button>

          <h4>overlay</h4>
          <Button
            style={{margin: 20}}
            size="small"
            overlay={<input type="file" name="hello" />}>
            Upload file
          </Button>
        </div>
        <h4>block: true</h4>
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
      </div>
    )
  }
}
