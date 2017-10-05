import React, {Component} from 'react'
import {TagsInput, TagsInputItem}  from 'rambler-ui/TagsInput'
import FormGroup from 'rambler-ui/FormGroup'
import InputStatus from 'rambler-ui/InputStatus'
import Checkbox from 'rambler-ui/Checkbox'
import { ApplyTheme } from 'rambler-ui/theme'
import RamblerMailIcon from 'rambler-ui/icons/services/RamblerMailIcon'

const exampleItems = ['Чехия', 'Мальта', 'Нидерланды', 'Германия', 'Гватемала', 'США', 'Люксембург', 'Канада', 'Австралия']

export default class TagsInputExample extends Component {
  state = {
    items: exampleItems.slice(2, 6)
  }

  toggleValue = (value, checked) => {
    this.setState({
      items: checked ? this.state.items.concat(value) : this.state.items.filter(el => el !== value)
    })
  }

  changeValue = (items) => {
    this.setState({items})
  }

  render() {
    const items = this.state.items.map(item => (
      <TagsInputItem value={item} key={item}>
        {item}
      </TagsInputItem>
    ))
    return (
      <ApplyTheme>
        <div>
          {exampleItems.map(item => (
            <Checkbox checked={this.state.items.indexOf(item) > -1} style={{marginRight: 20}} onCheck={(e, checked) => {this.toggleValue(item, checked)}} key={item}>
              {item}
            </Checkbox>
          ))}
          <div style={{ display: 'flex', marginTop: 40 }}>
            {['regular', 'awesome', 'promo'].map(variation => (
              <div style={{width: 300, marginRight: 40}} key={variation}>
                <h4>
                  {`Variation: ${variation}`}
                </h4>
                <FormGroup label='Input'>
                  <TagsInput placeholder='placeholder' variation={variation} onChange={this.changeValue} onMoreClick={() => {}}>
                    {items}
                  </TagsInput>
                </FormGroup>
                <FormGroup label='Input success'>
                  <InputStatus type='success' message='Success message' >
                    <TagsInput status="success" placeholder='placeholder' variation={variation} onChange={this.changeValue} onMoreClick={() => {}}>
                      {items}
                    </TagsInput>
                  </InputStatus>
                </FormGroup>
                <FormGroup label='Input warning'>
                  <InputStatus type='warning' message='Warning message' >
                    <TagsInput status="warning" placeholder='placeholder' variation={variation} onChange={this.changeValue} onMoreClick={() => {}}>
                      {items}
                    </TagsInput>
                  </InputStatus>
                </FormGroup>
                <FormGroup label='Input error'>
                  <InputStatus type='error' message='Error message' >
                    <TagsInput status="error" placeholder='placeholder' variation={variation} onChange={this.changeValue} onMoreClick={() => {}}>
                      {items}
                    </TagsInput>
                  </InputStatus>
                </FormGroup>
                <FormGroup label='Input disabled'>
                  <TagsInput disabled placeholder='placeholder' variation={variation} onChange={this.changeValue} onMoreClick={() => {}}>
                    {items}
                  </TagsInput>
                </FormGroup>
                <FormGroup label="Input small" size="small">
                  <TagsInput size="small" placeholder='placeholder' variation={variation} onChange={this.changeValue} onMoreClick={() => {}}>
                    {items}
                  </TagsInput>
                </FormGroup>
                <FormGroup label='Input with right icon'>
                  <TagsInput iconRight={<RamblerMailIcon />} placeholder='placeholder' variation={variation} onChange={this.changeValue} onMoreClick={() => {}}>
                    {items}
                  </TagsInput>
                </FormGroup>
                <FormGroup label='Input with left icon'>
                  <TagsInput iconLeft={<RamblerMailIcon />} placeholder='placeholder' variation={variation} onChange={this.changeValue} onMoreClick={() => {}}>
                    {items}
                  </TagsInput>
                </FormGroup>
                <FormGroup label='Small input with left and right icon'>
                  <TagsInput iconLeft={<RamblerMailIcon />} iconRight={<RamblerMailIcon />} placeholder='placeholder' variation={variation} onChange={this.changeValue} onMoreClick={() => {}} size="small">
                    {items}
                  </TagsInput>
                </FormGroup>
              </div>
            ))}
          </div>
          <div>this.state.items: <b>{ this.state.items.join(', ') }</b></div>
        </div>
      </ApplyTheme>
    )
  }
}
