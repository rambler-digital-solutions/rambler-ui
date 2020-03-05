import React, {PureComponent} from 'react'
import * as PropTypes from 'prop-types'
import classnames from 'classnames'
import {withStyles} from '../theme'
import uuid from '../utils/uuid'
import {ProvideSearchDropdownContext} from './provideSearchDropdown'

const styles = theme => ({
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
})

class SuggestItem extends PureComponent {
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

  static contextType = ProvideSearchDropdownContext

  id = uuid()

  state = {
    isHighlighted: false
  }

  componentDidMount() {
    this.context.events.on('highlight', this.onHighlight)
    this.context.registerSuggestItem(this.id, this)
  }

  componentWillUnmount() {
    this.context.events.removeListener('highlight', this.onHighlight)
    this.context.registerSuggestItem(this.id, null)
  }

  onHighlight = highlightedItemId => {
    const isHighlighted = highlightedItemId === this.id
    if (this.state.isHighlighted !== isHighlighted)
      this.setState({isHighlighted})
  }

  onItemClick = () => {
    this.context.setHighlightedId(this.id)
    this.context.onSuggestItemClick(this.props.value)
  }

  onMouseEnter = () => {
    this.context.setHighlightedId(this.id)
    this.context.onSuggestItemHover(this.props.value)
  }

  onRemoveClick = () => {
    this.context.onRemoveSuggestItemClick(this.props.value)
  }

  render() {
    const {
      classes,
      className,
      highlightedClassName,
      removeButton,
      value, // eslint-disable-line no-unused-vars
      theme, // eslint-disable-line no-unused-vars
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

export default withStyles(styles, {name: 'SuggestItem'})(SuggestItem)
