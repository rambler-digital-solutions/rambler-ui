import {
  ComplexSearch,
  ServiceSearch,
  SimpleSearch,
  SuggestItem
} from 'rambler-ui/ComplexSearch'
import React, {Component} from 'react'
import {ApplyTheme} from 'rambler-ui/theme'
import SearchIcon from 'rambler-ui/icons/forms/SearchIcon'

const mediaInputResults = {
  global: [
    ['base', 'это россия детка русские приколы 2015 выпуск 8', '10', ''],
    [
      'base',
      'это рыночная форма в которой на рынке доминирует небольшое количество продавцов',
      '8',
      ''
    ],
    ['base', 'это россия детка её не победить', '7', ''],
    ['base', 'это ретро', '6', ''],
    ['base', 'это русская наследница с первой до последней серии', '5', ''],
    ['base', 'это рукопашный бой', '4', ''],
    [
      'base',
      'это расширение контролируется правилами и не может быть удалено или отключено',
      '3',
      ''
    ],
    ['base', 'это работает вк', '2', ''],
    ['base', 'это россия детка ютуб', '1', '']
  ],
  service: [
    ['base', 'кексы рецепты самые простые', '10', ''],
    ['base', 'кекусин кан', '9', ''],
    ['base', 'кекс', '8', ''],
    ['base', 'кексы', '7', ''],
    ['base', 'кекс фм', '6', ''],
    ['base', 'кекс шоп 2', '5', ''],
    ['base', 'кекс шоп 2 играть онлайн', '4', ''],
    ['base', 'кекс на кефире', '3', ''],
    ['base', 'кекс на сметане', '2', ''],
    ['base', 'кекс шоп 3 играть', '1', '']
  ]
}

const serviceInputResults = [
  ['base', 'это россия детка русские приколы 2015 выпуск 8', '10', ''],
  [
    'base',
    'это рыночная форма в которой на рынке доминирует небольшое количество продавцов',
    '8',
    ''
  ],
  ['base', 'это россия детка её не победить', '7', ''],
  ['base', 'это ретро', '6', ''],
  ['base', 'это русская наследница с первой до последней серии', '5', ''],
  ['base', 'это рукопашный бой', '4', ''],
  [
    'base',
    'это расширение контролируется правилами и не может быть удалено или отключено',
    '3',
    ''
  ],
  ['base', 'это работает вк', '2', ''],
  ['base', 'это россия детка ютуб', '1', '']
]

export default class SearchExample extends Component {
  state = {
    mediaSearchItems: [],
    serviceSearchItems: [],
    query: '',
    value: '',
    serviceValue: ''
  }

  fetchQuery = (query, options = {}) => {
    if (!query) {
      this.setState({mediaSearchItems: []})
      return false
    }

    if (options.sourceType === 'service')
      this.setState({
        mediaSearchItems: mediaInputResults.service,
        query
      })
    else
      this.setState({
        mediaSearchItems: mediaInputResults.global,
        query
      })
  }

  fetchServiceQuery = query => {
    if (!query) {
      this.setState({serviceSearchItems: []})
      return false
    }

    this.setState({
      serviceSearchItems: serviceInputResults,
      query
    })
  }

  renderHint() {
    return (
      <div className="hint">
        Например, <a href>напримерыч напримеров</a>
      </div>
    )
  }

  renderBottomLinks() {
    return (
      <div className="bottomLink">
        <a href>Сделать поиск по умолчанию!</a>
      </div>
    )
  }

  onPressEnter = query => {
    this.setState({value: query})
    this.goToSearch(query)
  }

  onServiceEnter = query => {
    this.setState({serviceValue: query})
    this.goToSearch(query)
  }

  onSelectItem = query => {
    this.setState({value: query, query})
  }

  onServiceSelectItem = query => {
    this.setState({serviceValue: query, query})
  }

  onItemClick = query => {
    this.goToSearch(query)
  }

  goToSearch = (query = '') => {
    window.open(
      `https://nova.rambler.ru/search?query=${encodeURIComponent(query)}`
    )
  }

  renderItem(string) {
    const query = this.state.query
    if (string.indexOf(query) === 0)
      return (
        <span>
          <b>{query}</b>
          {string.replace(query, '')}
        </span>
      )

    return string
  }

  render() {
    return (
      <ApplyTheme>
        <div>
          <style>
            {`
              .example-topline-search {
                width: 300px;
              }
            `}
          </style>
          <h4>ComplexSearch</h4>
          <ComplexSearch
            value={this.state.value}
            onSearch={this.fetchQuery.bind(this)}
            onSubmit={this.goToSearch}
            onSelectItem={this.onSelectItem}
            onClickItem={this.onItemClick}
            hint={this.renderHint()}
            bottomLinks={this.renderBottomLinks()}
            onPressEnter={this.onPressEnter}
            placeholder="Напишите 'это...'"
            searchButton="НАЙТИ"
            searchButtonStyle={{minWidth: 125}}
            autoPositionY={false}
            inputProps={{'data-cerber-head': 'main::search'}}
            sourceType
            serviceTooltipLabel="Поиск по новостям"
            sourceButtonsProps={type => ({
              'data-cerber-head': `main::${type}`
            })}
            searchButtonProps={{'data-cerber-head': 'main::button'}}>
            {this.state.mediaSearchItems.map(item => (
              <div key={item[0] + item[2]}>
                <SuggestItem
                  value={item[1]}
                  data-cerber-head={`search::suggest:item-${item[2]}`}>
                  {this.renderItem(item[1])}
                </SuggestItem>
              </div>
            ))}
          </ComplexSearch>
          <br />
          <ComplexSearch
            inputLeftIcon={<SearchIcon />}
            placeholder="Компонент без параметров"
          />
          <br />
          <h4>ServiceSearch</h4>
          <ServiceSearch
            value={this.state.serviceValue}
            onSearch={this.fetchServiceQuery.bind(this)}
            onSelectItem={this.onServiceSelectItem}
            onClickItem={this.onItemClick}
            hint={this.renderHint()}
            bottomLinks={this.renderBottomLinks()}
            onPressEnter={this.onServiceEnter}
            placeholder="Напишите 'это...'"
            searchButton="Search"
            searchButtonStyle={{minWidth: 125}}
            onSubmit={this.goToSearch}
            inputLeftIcon={<SearchIcon />}>
            {this.state.serviceSearchItems.map(item => (
              <div
                key={item[0] + item[2]}
                style={{borderTop: '1px solid #eee'}}>
                <SuggestItem value={item[1]}>
                  {this.renderItem(item[1])}
                </SuggestItem>
              </div>
            ))}
          </ServiceSearch>
          <br />
          <ServiceSearch size="small" placeholder="Сервисный инпут маленький" />
          <br />
          <h4>SimpleSearch (topline search)</h4>
          <SimpleSearch
            placeholder="Поиск в топлайне"
            sourceType
            serviceTooltipLabel="Поиск по новостям"
            className="example-topline-search"
            inputWrapperClassName="example-topline-search-wrapper"
          />
        </div>
      </ApplyTheme>
    )
  }
}
