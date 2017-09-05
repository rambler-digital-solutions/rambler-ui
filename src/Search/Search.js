import React from 'react'
import * as pt from 'prop-types'
import SearchSuggest from './SearchSuggest'

class Search extends React.Component {
  static propTypes = {
    /**
    * Надо ли показывать поисковую подсказку
    */
    showHint: pt.bool,
    /**
    /* Надо ли показывать ссылки внизу (сделать главной, например)
    */
    showBottomButtons: pt.bool,
    /**
    /* максимальное количество строк в выдаче саджеста. 0 - выводим сколько есть.
    */
    suggestCount: pt.number,
    /**
    /* поисковая подсказка
    */
    searchHint: pt.string
  }

  static defaultProps = {
    showHint: true,
    showBottomButtons: true,
    suggestCount: 0,
    searchHint: ''
  }

  state = {
    /**
    /* признак того, что в инпут что-то введено
    */
    notEmpty: false,
    // проперти для управления видимостью саджеста
    /**
    /* признак того, что в инпут что-то введено
    */
    isSuggestVisible: false,
    /**
    /* данные от поиска для передачи в Саджест
    */
    suggestItems: []
  }

  /**
  /* функция управления видимостью саджеста
  */
  setSuggestVisibility() {

  }

  receiveSuggestData() {

  }

  clearForm() {

  }

  onSearchInput() {

  }

  /**
  /* функция фетча поисковой подсказки
  */
  fetchSearchHint() {

  }

  /**
  /* функция подсветки строки в саджесте
  */
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
