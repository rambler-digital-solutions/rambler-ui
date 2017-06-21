import React, {Component} from 'react'
import Input from 'rambler-ui/Input'
import FormGroup from 'rambler-ui/FormGroup'
import InputStatus from 'rambler-ui/InputStatus'
import { ApplyTheme } from 'rambler-ui/theme'
import RamblerMailIcon from 'rambler-ui/icons/services/RamblerMailIcon'

export default class InputExample extends Component {
  state = {
    value: ''
  }

  onChange(event, value) {
    this.setState({value})
  }

  render() {
    return (
      <ApplyTheme>
        <div>
          <div style={{width: '300px'}}>
            <h3>Form groups</h3>
            <FormGroup label='Input'>
              <Input type="text" value={this.state.value} onChange={::this.onChange} placeholder='placeholder' />
            </FormGroup>
            <FormGroup label='Input password'>
              <Input type="password" value={this.state.value} onChange={::this.onChange} placeholder='placeholder' />
            </FormGroup>
            <FormGroup label='Input success'>
              <InputStatus type='success' message='Success message' >
                <Input status="success" type="text" value={this.state.value} onChange={::this.onChange} placeholder='placeholder' />
              </InputStatus>
            </FormGroup>
            <FormGroup label='Input warning'>
              <InputStatus type='warning' message='Warning message' >
                <Input status="warning" type="text" value={this.state.value} onChange={::this.onChange} placeholder='placeholder' />
              </InputStatus>
            </FormGroup>
            <FormGroup label='Input error'>
              <InputStatus type='error' message='Error message' >
                <Input status="error" type="text" value={this.state.value} onChange={::this.onChange} placeholder='placeholder' />
              </InputStatus>
            </FormGroup>
            <FormGroup label='Input disabled'>
              <Input disabled type="text" value={this.state.value} onChange={::this.onChange} placeholder='placeholder' />
            </FormGroup>
            <FormGroup label='Input small'>
              <Input size="small" type="text" value={this.state.value} onChange={::this.onChange} placeholder='placeholder' />
            </FormGroup>
            <FormGroup label='Input with left icon'>
              <Input iconLeft={<RamblerMailIcon />} type="text" value={this.state.value} onChange={::this.onChange} placeholder='placeholder' />
            </FormGroup>
            <FormGroup label='Input with right icon'>
              <Input iconRight={<RamblerMailIcon />} type="text" value={this.state.value} onChange={::this.onChange} placeholder='placeholder' />
            </FormGroup>
          </div>
          <div style={{width: '600px'}}>
            <h3>Inline form groups</h3>
            <FormGroup label='Input' inline={true}>
              <Input type="text" value={this.state.value} onChange={::this.onChange} placeholder='placeholder' />
            </FormGroup>
            <FormGroup label='Input password' inline={true}>
              <Input type="password" value={this.state.value} onChange={::this.onChange} placeholder='placeholder' />
            </FormGroup>
            <FormGroup label='Input success' inline={true}>
              <InputStatus type='success' message='Success message' >
                <Input status="success" type="text" value={this.state.value} onChange={::this.onChange} placeholder='placeholder' />
              </InputStatus>
            </FormGroup>
            <FormGroup label='Input warning' inline={true}>
              <InputStatus type='warning' message='Warning message' >
                <Input status="warning" type="text" value={this.state.value} onChange={::this.onChange} placeholder='placeholder' />
              </InputStatus>
            </FormGroup>
            <FormGroup label='Input error' inline={true}>
              <InputStatus type='error' message='Error message' >
                <Input status="error" type="text" value={this.state.value} onChange={::this.onChange} placeholder='placeholder' />
              </InputStatus>
            </FormGroup>
            <FormGroup label='Input disabled' inline={true}>
              <Input disabled type="text" value={this.state.value} onChange={::this.onChange} placeholder='placeholder' />
            </FormGroup>
            <FormGroup label='Input small' inline={true}>
              <Input size="small" type="text" value={this.state.value} onChange={::this.onChange} placeholder='placeholder' />
            </FormGroup>
            <FormGroup label='Input with left icon' inline={true}>
              <Input iconLeft={<RamblerMailIcon />} type="text" value={this.state.value} onChange={::this.onChange} placeholder='placeholder' />
            </FormGroup>
            <FormGroup label='Input with right icon' inline={true}>
              <Input iconRight={<RamblerMailIcon />} type="text" value={this.state.value} onChange={::this.onChange} placeholder='placeholder' />
            </FormGroup>
          </div>
        </div>
      </ApplyTheme>
    )
  }

}
