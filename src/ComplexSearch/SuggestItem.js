import React from 'react'
import * as PropTypes from 'prop-types'
import EventEmitter from 'events'
import classnames from 'classnames'
import {injectSheet} from '../theme'
import uuid from '../utils/uuid'
import {COMPLEX_SEARCH_SUGGEST_ITEM_CONTEXT} from '../constants/context'

@injectSheet(
  theme => ({
    isHighlighted: {},
    root: {
      height: theme.suggestItem.height,
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
  }),
  {name: 'SuggestItem'}
)
class SuggestItem extends React.Component {
  static propTypes = {
    /**
     * Переопределение стандартных стилей компонента SuggestItem
     */
    style: PropTypes.object,
    /**
     * Дополнительный css-класс компонента
     */
    className: PropTypes.string,
    /**
     * Дополнительный css-класс компонента при его выделении
     */
    highlightedClassName: PropTypes.string,
    /**
     * Текст ссылки для удаления
     */
    removeButton: PropTypes.string,
    /**
     * Значение поиского запроса айтема, может быть  любым объектом
     */
    value: PropTypes.any.isRequired
  }

  static defaultProps = {
    removeButton: ''
  }

  static contextTypes = {
    [COMPLEX_SEARCH_SUGGEST_ITEM_CONTEXT]: PropTypes.shape({
      /**
       * Функция регистрации SuggestItem (при добавлении этого компонента в DOM)
       */
      registerSuggestItem: PropTypes.func,
      /**
       * Колбек удаления SuggestItem
       */
      onRemoveSuggestItemClick: PropTypes.func,
      /**
       * Колбек клика по SuggestItem
       */
      onSuggestItemClick: PropTypes.func,
      /**
       * Колбек наведения на SuggstItem
       */
      onSuggestItemHover: PropTypes.func,
      /**
       * Функция для подсветки SuggestItem
       */
      setHighlightedId: PropTypes.func,
      /**
       * Шина событий
       */
      events: PropTypes.instanceOf(EventEmitter)
    })
  }

  constructor(props) {
    super(props)
    this.id = uuid()
    this.state = {
      isHighlighted: false
    }
  }

  get ctx() {
    return this.context[COMPLEX_SEARCH_SUGGEST_ITEM_CONTEXT]
  }

  componentDidMount() {
    this.ctx.events.on('highlight', this.onHighlight)
    this.ctx.registerSuggestItem(this.id, this)
  }

  componentWillUnmount() {
    this.ctx.events.removeListener('highlight', this.onHighlight)
    this.ctx.registerSuggestItem(this.id, null)
  }

  onHighlight = highlightedItemId => {
    const isHighlighted = highlightedItemId === this.id
    if (this.state.isHighlighted !== isHighlighted)
      this.setState({isHighlighted})
  }

  onItemClick = () => {
    this.ctx.setHighlightedId(this.id)
    this.ctx.onSuggestItemClick(this.props.value)
  }

  onMouseEnter = () => {
    this.ctx.setHighlightedId(this.id)
    this.ctx.onSuggestItemHover(this.props.value)
  }

  onRemoveClick = () => {
    this.ctx.onRemoveSuggestItemClick(this.props.value)
  }

  render() {
    const {
      classes,
      className,
      highlightedClassName,
      removeButton,
      value, // eslint-disable-line no-unused-vars
      ...other
    } = this.props

    return (
      <div
        data-suggest-item-id={this.id}
        className={classnames(classes.root, className, {
          [classes.isHighlighted]: this.state.isHighlighted,
          [highlightedClassName]: this.state.isHighlighted
        })}
        onClick={this.onItemClick}
        onMouseEnter={this.onMouseEnter}
        {...other}>
        <span className={classes.string}>{this.props.children}</span>
        {removeButton && (
          <span className={classes.removeButton} onClick={this.onRemoveClick}>
            {removeButton}
          </span>
        )}
      </div>
    )
  }
}

export default SuggestItem
