import Search from 'rambler-ui/Search'
import SuggestItem from 'rambler-ui/SuggestItem'
import React, { Component } from 'react'
import { ApplyTheme } from 'rambler-ui/theme'

const queryResults = [
  'результат один',
  'результат два',
  'результат три',
  'результат четыре',
  'результат пять'
]

export default class SearchExample extends Component {
  state = {
    items: []
  }

  fetchQuery = (query) => {
    if (!query) {
      this.setState({items: []})
      return false
    }
    this.setState({items: queryResults})
  }

  render() {
    return (
      <ApplyTheme>
        <div>
          <Search
            onSearch={this.fetchQuery.bind(this)}
          >
            {this.state.items.map(item => <SuggestItem>{item}</SuggestItem>)}
          </Search>
        </div>
      </ApplyTheme>
    )

  }

}
