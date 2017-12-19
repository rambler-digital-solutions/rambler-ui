import React, { Component, PureComponent } from 'react'
import { findDOMNode } from 'react-dom'
import { ApplyTheme } from 'rambler-ui/theme'
import Button from 'rambler-ui/Button'
import Select from 'rambler-ui/Select'
import provideMenuItemContext from 'rambler-ui/Menu/provideMenuItemContext'

const data = [...Array(9)].map((item, i) => `Foo${i}`)

const CustomMenuItem = provideMenuItemContext(
  class Item extends PureComponent {

    componentDidMount () {
      if (this.props.autoFocus && this.item)
        this.item.focus()
    }

    componentDidUpdate() {
      if (this.props.autoFocus && this.item)
        this.item.focus()
    }

    saveRef = (ref) => {
      if (this.item) return
      this.item = findDOMNode(ref)
    }

    render () {
      const {props} = this
      return (
        <Button
          ref={this.saveRef}
          disabled={props.disabled}
          size={props.size}
          onFocus={props.onFocus}
          onClick={props.onSelect}
          type={props.isSelected ? 'primary' : 'outline'}
          style={{display: 'block', margin: 0, width: '100%'}}
        >
          {props.children}
        </Button>
      )
    }
  }
)

export default class CustomSelectExample extends Component {
  state = {
    value1: null
  }

  setValue = (value) => {
    this.setState({value})
  }

  render() {
    return (
      <ApplyTheme>
        <div style={{ maxWidth: 300 }}>
          <Select
            multiple={true}
            placeholder="Select..."
            value={this.state.value}
            onChange={this.setValue}
            size="small"
            menuStyle={{fontSize: 0}}
            appendToBody={true}
          >
            {data.map(item => (
              <div style={{boxSizing: 'border-box', padding: 2, width: '33.333%', display: 'inline-block'}} key={item}>
                <CustomMenuItem value={item}>
                  {item}
                </CustomMenuItem>
              </div>
            ))}
          </Select>
        </div>
      </ApplyTheme>
    )
  }
}
