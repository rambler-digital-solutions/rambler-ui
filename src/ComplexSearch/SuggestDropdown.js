import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import EventEmitter from 'events'
import {injectSheet} from '../theme'
import Dropdown from '../Dropdown'
import {COMPLEX_SEARCH_SUGGEST_ITEM_CONTEXT} from '../constants/context'

@injectSheet(
  () => ({
    dropdown: {
      transition: 'none',
      animation: 'none',
      width: '100%'
    },
    overlay: {
      width: '100%'
    },
    suggest: {
      width: '100%',
      background: 'white',
      boxShadow: '1px 2px 5px 0 rgba(102, 116, 166, 0.15)'
    }
  }),
  {name: 'SuggestDropdown'}
)
export default class SuggestDropdown extends React.Component {
  static propTypes = {
    /**
     * Признак того, открыт ли дропдаун
     */
    isOpened: PropTypes.bool,
    /**
     * Нода, к которой привязывается дропдаун
     */
    anchor: PropTypes.node,
    /**
     * Дополнительный класс для дропдауна
     */
    className: PropTypes.string,
    /**
     * Вставлять ли dropdown внутри body
     */
    appendToBody: PropTypes.bool,
    /**
     * 	Автоматическое позиционирование дропдауна по оси Y (если выходит за пределы экрана)
     */
    autoPositionY: PropTypes.bool,
    /**
     * Переопределение стилей дропдауна
     */
    style: PropTypes.object
  }

  static defaultProps = {
    isOpened: false,
    anchor: null,
    className: '',
    autoPositionY: false,
    appendToBody: true,
    overlayClassName: '',
    style: {},
    setNode: () => {}
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

  render() {
    const {
      children,
      isOpened,
      anchor,
      appendToBody,
      autoPositionY,
      dropdownStyle,
      dropdownClassName,
      classes
    } = this.props

    return (
      <Dropdown
        isOpened={isOpened}
        anchor={anchor}
        padding={false}
        style={dropdownStyle}
        className={classnames(classes.dropdown, dropdownClassName)}
        appendToBody={appendToBody}
        anchorFullWidth={true}
        autoPositionY={autoPositionY}
        anchorPointY="bottom"
        contentPointY="top"
        overlayClassName={classes.overlay}
        cachePositionOptions={false}
        closeOnClickOutside={false}>
        <div className={classes.suggest}>{children}</div>
      </Dropdown>
    )
  }
}
