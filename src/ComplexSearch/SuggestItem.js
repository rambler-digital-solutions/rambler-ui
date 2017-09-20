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

    '&$isHighlighted': {
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
    * Дополнительный css-класс компонента
    */
    className: pt.string,
    /**
    * Текст ссылки для удаления
    */
    removeButton: pt.string,
    /**
    * Клик по кнопке удаления
    */
    onRemoveClick: pt.func,
    /**
    * Коллбек для клика
    */
    onClick: pt.func.isRequired,
    /**
    * Признак подсветки
    */
    isHighlighted: pt.bool,
    isSelected: pt.bool,
    /**
    * Значение поиского запроса айтема
    */
    value: pt.string.isRequired,
    /**
    * Поисковый запрос для матчинга и подсветки
    */
    query: pt.string,
    /**
    * Функция для сброса выделенного айтема по ховеру
    */
    onHover: pt.func.isRequired
  }

  static defaultProps = {
    removeButton: '',
    isHighlighted: false,
    isSelected: false,
    onRemoveClick: () => {},
    onClick: () => {},
    query: ''
  }

  state = {
    isHighlighted: false
  }

  componentWillUpdate(nextProps) {
    if (nextProps.isSelected !== this.props.isSelected)
      nextProps.isSelected && this.props.onSelect(nextProps.value)
  }

  onItemClick = () => {
    this.props.onClick(this.props.value)
  }

  render() {
    const {
      sheet: { classes: css },
      className,
      removeButton,
      onRemoveClick,
      query,
      value,
      isHighlighted,
      onHover
    } = this.props

    return (
      <div
        className={cn(
          css.root,
          className,
          {[css.isHighlighted]: isHighlighted}
        )}
        onClick={this.onItemClick}
        onMouseEnter={onHover}
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
