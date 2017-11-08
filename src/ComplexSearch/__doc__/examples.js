import { ComplexSearch, SuggestItem } from 'rambler-ui/ComplexSearch'
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
    query: '',
    value: ''
  }

  fetchQuery = (query) => {
    if (!query) {
      this.setState({items: []})
      return false
    }
    this.setState({
      items: queryResults,
      query
    })
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

  onClear = () => {
    this.setState({items: []})
  }

  onPressEnter = (query) => {
    this.setState({value: query})
    this.goToSearch(query)
  }

  onSelectItem = (query) => {
    this.setState({value: query })
  }

  onItemClick = (query) => {
    this.goToSearch(query)
  }

  goToSearch = (query = '') => {
    window.open(`https://nova.rambler.ru/search?query=${encodeURIComponent(query)}`)
  }

  renderItem(string) {
    const query = this.state.query
    if (string.indexOf(query) === 0)
      return <span><b>{query}</b>{string.replace(query, '')}</span>

    return string

  }

  render() {
    return (
      <ApplyTheme>
        <div>
          <ComplexSearch
            value={this.state.value}
            onSearch={this.fetchQuery.bind(this)}
            onSubmit={this.goToSearch}
            onSelectItem={this.onSelectItem}
            onClickItem={this.onItemClick}
            onClear={this.onClear}
            hint={this.renderHint()}
            // appendToBody={false}
            bottomLinks={this.renderBottomLinks()}
            onPressEnter={this.onPressEnter}
            placeholder="Напишите 'это...'"
          >
            {this.state.items.map(item => (
              <SuggestItem
                key={item[0] + item[2]}
                value={item[1]}
              >
                {this.renderItem(item[1])}
              </SuggestItem>)
            )}
          </ComplexSearch>
        </div>
      </ApplyTheme>
    )

  }

}
