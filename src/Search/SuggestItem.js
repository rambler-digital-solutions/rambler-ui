import React from 'react'
import * as pt from 'prop-types'

class SuggestItem extends React.Component {
  static propTypes = {
    /**
    * Переопределение стандартных стилей компонента SuggestItem
    */
    style: pt.object,
    /**
    * css-класс компонента
    */
    className: pt.string,
    /**
    /* текст ссылки для удаления
    */
    removeButton: pt.string,
    /**
    /* коллбек для клика
    */
    onClick: pt.func,
    /**
    /* признак подсветки
    */
    isHighlighted: pt.bool
  }

  static defaultProps = {
    removeButton: '',
    isHighlighted: false
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default SuggestItem
