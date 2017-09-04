import React from 'react'
import * as pt from 'prop-types'
import SearchSuggest from './SearchSuggest'

class Search extends React.Component {
  static propTypes = {
    // надо ли показывать поисковую подсказку
    showHint: pt.bool,
    // надо ли показывать лого
    showLogo: pt.bool,
    // надо ли показывать ссылки внизу (сделать главной, например)
    showBottomButtons: pt.bool,
    // максимальное количество строк в выдаче саджеста. 0 - выводим сколько есть.
    suggestCount: pt.number
  }

  static defaultProps = {
    showHint: true,
    showLogo: true,
    showBottomButtons: true,
    suggestCount: 0
  }

  state = {
    // признак того, что в инпут что-то введено
    notEmpty: false,
    // проперти для управления видимостью саджеста
    isSuggestVisible: false,
    // данные от поиска для передачи в Саджест
    suggestItems: [],
    // поисковая подсказка
    searchHint: ''
  }

  // ф-ция управления видимостью саджеста
  setSuggestVisibility() {

  }

  receiveSuggestData() {

  }

  clearForm() {

  }

  onSearchInput() {

  }

  // ф-ция фетча поисковой подсказки
  fetchSearchHint() {

  }

  // ф-ция подсветки строки в саджесте
  selectSuggestItem() {

  }

  render() {
    const {
      isSuggestVisible
    } = this.state

    const {
      suggestCount
    } = this.props

    return (
      <div>
        <SearchSuggest
          isSuggestVisible={isSuggestVisible}
          suggestCount={suggestCount}
        />
      </div>
    )
  }
}

export default Search
