import React, {Component} from 'react'
import {TagsInput, TagsInputItem} from 'rambler-ui/TagsInput'
import PhotoCameraIcon from 'rambler-ui/icons/forms/PhotoCameraIcon'
import Checkbox from 'rambler-ui/Checkbox'

const exampleItems = [
  'Чехия',
  'Мальта',
  'Нидерланды',
  'Германия',
  'Гватемала',
  'США',
  'Люксембург',
  'Канада',
  'Австралия'
]

export default class TagsInputExample extends Component {
  state = {
    items: exampleItems.slice(2, 6)
  }

  toggleValue = (value, checked) => {
    this.setState({
      items: checked
        ? this.state.items.concat(value)
        : this.state.items.filter(el => el !== value)
    })
  }

  changeValue = items => {
    this.setState({items})
  }

  render() {
    const items = this.state.items.map(item => (
      <TagsInputItem value={item} key={item}>
        {item}
      </TagsInputItem>
    ))
    const itemsWithIcons = this.state.items.map(item => (
      <TagsInputItem value={item} key={item} icon={<PhotoCameraIcon />}>
        {item}
      </TagsInputItem>
    ))
    const clickableItems = this.state.items.map(item => (
      <TagsInputItem value={item} key={item} onClick={() => {}}>
        {item}
      </TagsInputItem>
    ))
    const clickableItemsWithIcons = this.state.items.map(item => (
      <TagsInputItem
        value={item}
        key={item}
        onClick={() => {}}
        icon={<PhotoCameraIcon />}>
        {item}
      </TagsInputItem>
    ))

    return (
      <div>
        {exampleItems.map(item => (
          <Checkbox
            checked={this.state.items.indexOf(item) > -1}
            style={{marginRight: 20}}
            onCheck={(e, checked) => {
              this.toggleValue(item, checked)
            }}
            key={item}>
            {item}
          </Checkbox>
        ))}
        <div style={{display: 'flex', marginLeft: -20}}>
          {['regular', 'background'].map(type => (
            <div
              style={{
                marginLeft: 20,
                flex: 'none',
                width: 'calc(50% - 20px)'
              }}
              key={type}>
              <h3>{`type: ${type}`}</h3>
              <h4>onChange</h4>
              <div style={{maxWidth: 300}}>
                <TagsInput onChange={this.changeValue} type={type}>
                  {items}
                </TagsInput>
              </div>
              <h4>onChange, items with icon</h4>
              <div style={{maxWidth: 300}}>
                <TagsInput onChange={this.changeValue} type={type}>
                  {itemsWithIcons}
                </TagsInput>
              </div>
              <h4>onChange, isExpanded, items with onClick</h4>
              <div style={{maxWidth: 300}}>
                <TagsInput
                  onChange={this.changeValue}
                  isExpanded={true}
                  type={type}>
                  {clickableItems}
                </TagsInput>
              </div>
              <h4>onChange, items with onClick with icon</h4>
              <div style={{maxWidth: 300}}>
                <TagsInput onChange={this.changeValue} type={type}>
                  {clickableItemsWithIcons}
                </TagsInput>
              </div>
              <h4>onMoreClick</h4>
              <div style={{maxWidth: 240}}>
                <TagsInput type={type} onMoreClick={() => {}}>
                  {items}
                </TagsInput>
              </div>
              <h4>isExpanded, items with onClick</h4>
              <div style={{maxWidth: 240}}>
                <TagsInput isExpanded={true} type={type}>
                  {clickableItems}
                </TagsInput>
              </div>
              <h4>items with onClick and icon</h4>
              <div style={{maxWidth: 240}}>
                <TagsInput type={type}>{clickableItemsWithIcons}</TagsInput>
              </div>
              <h4>disabled, onChange, onMoreClick</h4>
              <div style={{maxWidth: 240}}>
                <TagsInput
                  onChange={this.changeValue}
                  onMoreClick={() => {}}
                  disabled={true}
                  type={type}>
                  {items}
                </TagsInput>
              </div>
              <h4>disabled, isExpanded, onChange, items with onClick</h4>
              <div style={{maxWidth: 240}}>
                <TagsInput
                  onChange={this.changeValue}
                  isExpanded={true}
                  disabled={true}
                  type={type}>
                  {clickableItems}
                </TagsInput>
              </div>
              <h4>disabled, onChange, items with onClick and icon</h4>
              <div style={{maxWidth: 240}}>
                <TagsInput
                  onChange={this.changeValue}
                  disabled={true}
                  type={type}>
                  {clickableItemsWithIcons}
                </TagsInput>
              </div>
            </div>
          ))}
        </div>

        <div style={{marginTop: 40}}>
          this.state.value: <strong>{JSON.stringify(this.state.items)}</strong>
        </div>
      </div>
    )
  }
}
