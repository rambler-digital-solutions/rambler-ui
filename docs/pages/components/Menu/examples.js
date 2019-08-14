import React, {Component} from 'react'
import {Menu, MenuItem} from 'rambler-ui/Menu'
import Checkbox from 'rambler-ui/Checkbox'

const data = ['Foo', 'Bar', 'Baz'].map(category => ({
  category,
  items: [...Array(5)].map((item, i) => `${category}${i}`)
}))

class IsolatedMenuItem extends Component {
  shouldComponentUpdate() {
    return false
  }
  render() {
    return <MenuItem {...this.props} />
  }
}

export default class MenuExample extends Component {
  state = {
    small: false,
    disabled: false,
    value: [data[2].items[0]]
  }

  toggleValue = valueKey => () => {
    this.setState({
      [valueKey]: !this.state[valueKey]
    })
  }

  setValue = value => {
    this.setState({
      value
    })
  }

  render() {
    const {state} = this
    return (
      <div style={{maxWidth: 300}}>
        <div>
          <Checkbox
            style={{marginRight: 20}}
            checked={state.small}
            onCheck={this.toggleValue('small')}>
            size: small
          </Checkbox>
          <Checkbox
            checked={state.disabled}
            onCheck={this.toggleValue('disabled')}>
            disabled
          </Checkbox>
        </div>
        <Menu
          multiple={true}
          value={state.value}
          onChange={this.setValue}
          size={state.small ? 'small' : 'medium'}
          disabled={state.disabled}
          style={{margin: '20px 0', border: '1px solid'}}
          maxHeight={180}>
          {data.map((category, categoryIndex) => (
            <div
              style={{borderTop: categoryIndex ? '1px solid #ddd' : null}}
              key={categoryIndex}>
              <h5 style={{margin: 0, padding: 13}}>{category.category}</h5>
              {category.items.map((item, itemIndex) => (
                <IsolatedMenuItem
                  value={item}
                  key={itemIndex}
                  disabled={itemIndex === 0}>
                  {item}
                </IsolatedMenuItem>
              ))}
            </div>
          ))}
        </Menu>
        <div>{`state: ${JSON.stringify(this.state.value)}`}</div>
      </div>
    )
  }
}
