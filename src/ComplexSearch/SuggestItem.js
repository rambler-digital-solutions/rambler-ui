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
    alignItems: 'center',
    justifyContent: 'space-between',

    '&$isHighlighted': {
      backgroundColor: theme.suggestItem.highlighted.backgroundColor,
      color: theme.search.color
    }
  },
  string: {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap'
  },
  removeButton: {
    fontSize: theme.suggestItem.removeButton.fontSize,
    color: theme.suggestItem.removeButton.color,
    paddingLeft: 10
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
    * Значение поиского запроса айтема, может быть  любым объектом
    */
    value: pt.any.isRequired
  }

  static defaultProps = {
    removeButton: ''
  }

  state = {
    isHighlighted: false
  }

  componentWillUpdate(nextProps) {
    if (nextProps.isSelected !== this.props.isSelected)
      nextProps.isSelected && this.props.onSelect(nextProps.value)
  }

  onItemClick = () => {
    this.props.onClick && this.props.onClick(this.props.value)
  }

  onMouseEnter = () => {
    this.props.onHover && this.props.onHover()
  }

  onRemoveClick = () => {
    this.props.onRemoveClick && this.props.onRemoveClick(this.props.value)
  }

  render() {
    const {
      sheet: { classes: css },
      className,
      removeButton,
      isHighlighted
    } = this.props

    return (
      <div
        className={cn(
          css.root,
          className,
          {[css.isHighlighted]: isHighlighted}
        )}
        onClick={this.onItemClick}
        onMouseEnter={this.onMouseEnter}
      >
        <span className={css.string}>
          {this.props.children}
        </span>
        {removeButton && (
          <span
            className={css.removeButton}
            onClick={this.onRemoveClick}
          >
            {removeButton}
          </span>
        )}
      </div>
    )
  }
}

export default SuggestItem
