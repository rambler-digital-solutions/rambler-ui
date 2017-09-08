import React from 'react'
import * as pt from 'prop-types'
import { injectSheet } from '../theme'
import cn from 'classnames'

@injectSheet(theme => ({
  isHighlighted: {},
  root: {
    height: theme.search.height,
    padding: '0 15px',
    cursor: 'pointer',
    fontSize: '14px',
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',

    '&:hover, &$isHighlighted': {
      backgroundColor: '#f7f9fa',
      color: '#262626'
    }
  },
  string: {
    lineHeight: theme.search.height,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap'

  },
  removeButton: {
    fontSize: '13px',
    lineHeight: theme.search.height,
    color: '#3e217d',
    paddingLeft: '10px'
  }
}))

class SuggestItem extends React.Component {
  static propTypes = {
    /**
    * Переопределение стандартных стилей компонента SuggestItem
    */
    style: pt.object,
    /**
    * дополнительный css-класс компонента
    */
    className: pt.string,
    /**
    * текст ссылки для удаления
    */
    removeButton: pt.string,
    /**
    * клик по кнопке удаления
    */
    onRemoveClick: pt.func,
    /**
    * коллбек для клика
    */
    onClick: pt.func.isRequired,
    /**
    * признак подсветки
    */
    isHighlighted: pt.bool,
    /**
    * значение поиского запроса айтема
    */
    value: pt.string.isRequired,
    /**
    * поисковый запрос для матчинга и подсветки
    */
    query: pt.string
  }

  static defaultProps = {
    removeButton: '',
    isHighlighted: false,
    query: ''
  }

  onItemClick = () => {
    this.props.onClick(this.props.value)
  }

  render() {
    const {
      sheet: { classes: css },
      className,
      isHighlighted,
      removeButton,
      onRemoveClick,
      query,
      value
    } = this.props

    return (
      <div
        className={cn(
          css.root,
          className,
          {[css.isHighlighted]: isHighlighted}
        )}
        onClick={this.onItemClick}
      >
        <span className={css.string}>
          <span className={css.query}>{query}</span>{value.replace(query, '')}
        </span>
        {removeButton && (
          <span
            className={css.removeButton}
            onClick={onRemoveClick}
          >
            {removeButton}
          </span>
        )}
      </div>
    )
  }
}

export default SuggestItem
