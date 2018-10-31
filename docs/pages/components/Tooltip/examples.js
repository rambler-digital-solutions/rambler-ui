import React, {Component} from 'react'
import Tooltip from 'rambler-ui/Tooltip'
import Button from 'rambler-ui/Button'
import IconButton from 'rambler-ui/IconButton'
import Input from 'rambler-ui/Input'
import FormGroup from 'rambler-ui/FormGroup'
import AddIcon from 'rambler-ui/icons/forms/AddIcon'

export default class TooltipExample extends Component {
  state = {
    value: 'Errored value',
    isTooltipOpened: false
  }

  onChange = (e, value) => {
    this.setState({value})
  }

  openTooltip = () => {
    this.setState({isTooltipOpened: true})
  }

  closeTooltip = () => {
    this.setState({isTooltipOpened: false})
  }

  render() {
    return (
      <div>
        <div>
          <Tooltip content="Default tooltip" style={{marginRight: '20px'}}>
            <Button type="secondary">Default</Button>
          </Tooltip>
          <Tooltip
            content="Success tooltip"
            style={{marginRight: '20px'}}
            status="success">
            <Button type="secondary">Success</Button>
          </Tooltip>
          <Tooltip
            content="Error tooltip"
            style={{marginRight: '20px'}}
            status="error">
            <Button type="secondary">Error</Button>
          </Tooltip>
          <Tooltip
            content="Warn tooltip"
            style={{marginRight: '20px'}}
            status="warning">
            <Button type="secondary">Warning</Button>
          </Tooltip>
        </div>
        <div style={{marginTop: '20px'}}>
          <Tooltip
            style={{marginRight: '20px'}}
            content={`
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nam tristique quis nisl quis fermentum.
                Praesent lectus ligula, tincidunt a orci in, cursus fermentum leo.
                Praesent egestas scelerisque consectetur.
              `}>
            <Button type="secondary">Large text</Button>
          </Tooltip>
          <Tooltip
            position="right"
            content={`
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nam tristique quis nisl quis fermentum.
                Praesent lectus ligula, tincidunt a orci in, cursus fermentum leo.
                Praesent egestas scelerisque consectetur.
              `}>
            <Button type="secondary">Large text right</Button>
          </Tooltip>
        </div>
        <div style={{marginTop: '20px'}}>
          <Tooltip
            content="Top tooltip"
            position="top"
            style={{marginRight: '20px'}}>
            <Button type="secondary">Top</Button>
          </Tooltip>
          <Tooltip
            content="Bottom tooltip"
            position="bottom"
            style={{marginRight: '20px'}}
            status="success">
            <Button type="secondary">Bottom</Button>
          </Tooltip>
          <Tooltip
            content="Left tooltip"
            position="left"
            style={{marginRight: '20px'}}
            status="error">
            <Button type="secondary">Left</Button>
          </Tooltip>
          <Tooltip
            content="Right tooltip"
            position="right"
            style={{marginRight: '20px'}}
            status="warning">
            <Button type="secondary">Right</Button>
          </Tooltip>
        </div>
        <div style={{marginTop: '20px'}}>
          <Tooltip
            content="Top tooltip"
            position="top"
            style={{marginRight: '20px'}}>
            <IconButton size={22} type="secondary">
              <AddIcon />
            </IconButton>
          </Tooltip>
          <Tooltip
            content="Left tooltip"
            position="left"
            style={{marginRight: '20px'}}
            status="success">
            <IconButton size={22} type="secondary">
              <AddIcon />
            </IconButton>
          </Tooltip>
          <Tooltip
            content="Right tooltip"
            position="right"
            style={{marginRight: '20px'}}
            status="error">
            <IconButton size={22} type="secondary">
              <AddIcon />
            </IconButton>
          </Tooltip>
          <Tooltip
            content="Bottom tooltip"
            position="bottom"
            style={{marginRight: '20px'}}
            status="warning">
            <IconButton size={22} type="secondary">
              <AddIcon />
            </IconButton>
          </Tooltip>
        </div>
        <div style={{marginTop: '50px'}}>
          <FormGroup label="Tooltip on focus">
            <Tooltip
              position="right"
              status="error"
              content="Some error"
              isOpened={this.state.isTooltipOpened}>
              <Input
                status="error"
                type="text"
                value={this.state.value}
                onFocus={this.openTooltip}
                onBlur={this.closeTooltip}
                onChange={this.onChange}
              />
            </Tooltip>
          </FormGroup>
        </div>
      </div>
    )
  }
}
