import React from 'react'
import * as pt from 'prop-types'

class SearchSuggest extends React.Component {
  static propTypes = {
    // поисковый запрос
    query: pt.string.isRequired,
    // данные для отображения в саджесте
    data: pt.arrayOf(pt.string).isRequired,
    // айтем для подсветки
    selectedSuggestItem: pt.number.isRequired,
    // признак видимости
    visible: pt.bool.isRequired
  }

  render() {
    const {
      data,
      query
    } = this.props

    if (!data || data.length === 0 || query === '') return null

    return (
      <div>
      </div>
    )
  }
}

export default SearchSuggest
