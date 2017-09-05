import React from 'react'
import * as pt from 'prop-types'

class Search extends React.Component {
  static propTypes = {
    /**
    * текущий поисковый запрос
    */
    value: pt.string,
    /**
    /* Выбранный SuggestItem
    */
    selectedItem: pt.any,
    /**
    /* надпись на кнопке поиска
    */
    searchButton: pt.string,
    /**
    /* имя раздела, по которому ищем
    */
    division: pt.string,
    /**
    /* надо ли показывать имя раздела, по которому ищем
    */
    showDivision: pt.bool,
    /**
    /* хинт для поискового запроса
    */
    hint: pt.node,
    /**
    /* плейсхолдер поискового инпута
    */
    placeholder: pt.string,
    /**
    /* коллбек на изменение поискового запроса
    */
    onSearch: pt.func,
    /**
    /* коллбек на фокус поискового инпута
    */
    onFocus: pt.func,
    /**
    /* коллбек на блур поискового инпута
    */
    onBlur: pt.func,
    /**
    /* коллбек на выбор поискового запроса через стрелки
    */
    onSelectItem: pt.func,
    /**
    /* коллбек на удаление suggest-item
    */
    onRemoveItem: pt.func,
    /**
    /* коллбек на выбор конкретного SuggestItem (клик по SuggestItem, или нажатие на Enter сразу после выбора SuggestItem)
    */
    onChooseItem: pt.func,
    /**
    /* коллбек на нажатие на кнопку поиска или нажатие на Enter
    */
    onSubmit: pt.func
  }

  static defaultProps = {
    value: '',
    selectedItem: null,
    searchButton: 'Поиск',
    division: 'Поиск',
    showDivision: true,
    hint: null,
    placeholder: ''

  }

  render() {
    return (
      <div>
      </div>
    )
  }
}

export default Search
