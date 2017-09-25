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
    fontSize: theme.suggestItem.fontSize,
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',

    '&$isHighlighted': {
      backgroundColor: theme.suggestItem.highlighted.backgroundColor,
      color: theme.search.color
    }
  },
  string: {
    lineHeight: theme.search.height,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap'
  },
  removeButton: {
    fontSize: theme.suggestItem.removeButton.fontSize,
    lineHeight: theme.search.height,
    color: theme.suggestItem.removeButton.color,
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
    * Значение поиского запроса айтема
    */
    value: pt.string.isRequired,
    onClick: pt.func.isRequired,
    onSelect: pt.func.isRequired,
    onRemoveClick: pt.func,
    isHighlighted: pt.bool,
    isSelected: pt.bool,
    query: pt.string,
    onHover: pt.func.isRequired
  }

  static defaultProps = {
    removeButton: '',
    isHighlighted: false,
    isSelected: false,
    onRemoveClick: () => {},
    onClick: () => {},
    onSelect: () => {},
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
