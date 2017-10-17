import React, {Component} from 'react'
import {TagsInput, TagsInputItem}  from 'rambler-ui/TagsInput'
import Checkbox from 'rambler-ui/Checkbox'
import { ApplyTheme } from 'rambler-ui/theme'

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
          <div style={{marginTop: 40, maxWidth: 300, border: '1px solid'}}>
            <TagsInput onChange={this.changeValue} onMoreClick={() => {}}>
              {items}
            </TagsInput>
          </div>
          <div style={{marginTop: 10, maxWidth: 300, border: '1px solid'}}>
            <TagsInput onChange={this.changeValue} isExpanded={true}>
              {items}
            </TagsInput>
          </div>
          <div style={{marginTop: 40, maxWidth: 240, border: '1px solid'}}>
            <TagsInput onChange={this.changeValue} size="small">
              {items}
            </TagsInput>
          </div>
          <div style={{marginTop: 10, maxWidth: 240, border: '1px solid'}}>
            <TagsInput onChange={this.changeValue} onMoreClick={() => {}} size="small" isExpanded={true}>
              {items}
            </TagsInput>
          </div>
          <div style={{marginTop: 40, maxWidth: 240, border: '1px solid'}}>
            <TagsInput onChange={this.changeValue} onMoreClick={() => {}} size="small" disabled={true}>
              {items}
            </TagsInput>
          </div>
          <div style={{marginTop: 10, maxWidth: 240, border: '1px solid'}}>
            <TagsInput onChange={this.changeValue} onMoreClick={() => {}} size="small" isExpanded={true} disabled={true}>
              {items}
            </TagsInput>
          </div>

          <div style={{marginTop: 40}}>
            this.state.items: <b>{ this.state.items.join(', ') }</b>
          </div>
        </div>
      </ApplyTheme>
    )
  }
}
