import Search from 'rambler-ui/Search'
import SuggestItem from 'rambler-ui/SuggestItem'
import React, { Component } from 'react'
import { ApplyTheme } from 'rambler-ui/theme'

const queryResults = [
  ['base', 'это россия детка русские приколы 2015 выпуск 8', '10', ''],
  ['base', 'это рыночная форма в которой на рынке доминирует небольшое количество продавцов', '8', ''],
  ['base', 'это россия детка её не победить', '7', ''],
  ['base', 'это ретро', '6', ''],
  ['base', 'это русская наследница с первой до последней серии', '5', ''],
  ['base', 'это рукопашный бой', '4', ''],
  ['base', 'это расширение контролируется правилами и не может быть удалено или отключено', '3', ''],
  ['base', 'это работает вк', '2', ''],
  ['base', 'это россия детка ютуб', '1', '']
]

export default class SearchExample extends Component {
  state = {
    items: [],
    selectedItem: 0,
    value: ''
  }

  fetchQuery = (query) => {
    if (!query) {
      this.setState({items: []})
      return false
    }
    this.setState({items: queryResults})
  }

  renderHint() {
    return (
      <div className='hint'>
        Например, <a href>напримерыч напримеров</a>
      </div>
    )
  }

  renderBottomLinks() {
    return (
      <div className='bottomLink'>
        <a href>Сделать поиск по умолчанию!</a>
      </div>
    )
  }

  onSelectItem = (index) => {
    if (!index || index < 0) {
      this.setState({selectedItem: 0 })
      return false
    }

    this.setState({selectedItem: index - 1 })
  }

  goToSearch = (query = '') => {
    const {
      selectedItem,
      items
    } = this.state
    let searchQuery

    if (selectedItem) {
      const item = items[selectedItem]
      this.setState({value: item[1]})
      searchQuery = item[1]
    } else {
      searchQuery = query
    }
    window.open(`https://nova.rambler.ru/search?query=${encodeURIComponent(searchQuery)}`)
  }

  render() {
    return (
      <ApplyTheme>
        <div>
          <Search
            value={this.state.value}
            onSearch={this.fetchQuery.bind(this)}
            onSubmit={this.goToSearch}
            onSelectItem={this.onSelectItem}
            hint={this.renderHint()}
            bottomLinks={this.renderBottomLinks()}
          >
            {this.state.items.map(item => (
              <SuggestItem
                key={item[0] + item[2]}
                value={item[1]}
              >
                {item[1]}
              </SuggestItem>)
            )}
          </Search>
        </div>
      </ApplyTheme>
    )

  }

}
