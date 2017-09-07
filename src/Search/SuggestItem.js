import React from 'react'
import * as pt from 'prop-types'
import { injectSheet } from '../theme'
import cn from 'classnames'

@injectSheet({
  root: {
    height: '40px',
    lineHeight: '1.43',
    display: 'block',
    padding: ' 10px 15px',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    fontSize: '14px',

    '&:hover, &.isHighlighted': {
      backgroundColor: '#f7f9fa',
      color: '#262626'
    }
  }
})

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
      isHighlighted
    } = this.props

    return (
      <div
        className={cn(
          css.root,
          className,
          {isHighlighted}
        )}
        onClick={this.onItemClick}
      >
        {this.props.children}
      </div>
    )
  }
}

export default SuggestItem
