import React from 'react'
import * as pt from 'prop-types'
import { injectSheet } from '../theme'
import cn from 'classnames'
import Button from '../Button'
import { isolateMixin } from '../style/mixins'

@injectSheet(theme => ({
  root: {
    ...isolateMixin,
    fontFamily: theme.fontFamily,
    fontSize: theme.radio.fontSize,
    display: 'flex',
    width: '100%'
  },
  inputWrapper: {
    display: 'flex',
    position: 'relative'
  },
  input: {

  },
  suggest: {

  }
}))
class Search extends React.Component {
  static propTypes = {
    /**
    * Переопределение стандартных стилей компонента Search
    */
    style: pt.object,
    /**
    * css-класс компонента
    */
    className: pt.string,
    /**
    * текущий поисковый запрос
    */
    value: pt.string,
    /**
    /* Выбранный SuggestItem
    */
    selectedItem: pt.any,
    /**
    /* кнопка поиска
    */
    searchButton: pt.node,
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
    const {
      // children,
      className,
      style,
      sheet: { classes: css },
      ...other
    } = this.props

    return (
      <div className={cn(css.root, className)} style={style} {...other}>
        <div className={css.inputWrapper}>
          <input
            className={css.input}
          />
          <Button />
        </div>
        <div className={css.suggest}>
        </div>
      </div>
    )
  }
}

export default Search
