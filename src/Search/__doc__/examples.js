import Search from 'rambler-ui/Search'
import SuggestItem from 'rambler-ui/SuggestItem'
import React, { Component } from 'react'
import { ApplyTheme } from 'rambler-ui/theme'

export default class SearchExample extends Component {

  render() {
    return (
      <ApplyTheme>
        <div>
          <Search>
            <SuggestItem>Один</SuggestItem>
            <SuggestItem>Два</SuggestItem>
            <SuggestItem>Три</SuggestItem>
          </Search>
        </div>
      </ApplyTheme>
    )

  }

}
