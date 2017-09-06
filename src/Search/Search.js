import React, { cloneElement } from 'react'
import * as pt from 'prop-types'
import { injectSheet } from '../theme'
import cn from 'classnames'
import Button from '../Button'
import Dropdown from '../Dropdown'
import ClearIcon from '../icons/forms/ClearIcon'

@injectSheet(theme => ({
  root: {
    fontFamily: theme.fontFamily,
    fontSize: theme.radio.fontSize,
    display: 'flex',
    width: '765px',
    position: 'relative'
  },
  inputWrapper: {
    width: '100%',
    position: 'relative',
    height: '40px',
    paddingRight: '125px'
  },
  division: {
    height: '30px',
    padding: '0 12px',
    lineHeight: '30px',
    fontSize: '11px',
    textTransform: 'uppercase',
    fontWeight: '500',
    borderRadius: '1px',
    backgroundColor: '#f5f7f8',
    letterSpacing: '1.3px',
    position: 'absolute',
    top: '5px',
    left: '5px'
  },
  input: {
    border: 'solid 2px #315efb',
    padding: '10px 30px 10px 5px',
    fontSize: '14px',
    lineHeight: '1.43',
    color: '#262626',
    width: '100%',
    height: '40px',
    outline: 'none'
  },
  showDivision: {
    paddingLeft: '90px'
  },
  searchButton: {
    position: 'absolute',
    right: 0,
    top: 0,
    flexShrink: 0,
    width: '125px',
    height: '40px',
    lineHeight: '40px'
  },
  clear: {
    position: 'absolute',
    right: '135px',
    top: '50%',
    transform: 'translateY(-50%)',
    cursor: 'pointer'
  },
  suggest: {
    width: '100%',
    height: '400px',
    background: 'white',
    boxShadow: '1px 2px 5px 0 rgba(102, 116, 166, 0.15)',
    position: 'absolute',
    top: '40px'
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
    * кнопка поиска
    */
    searchButton: pt.node,
    /**
    * имя раздела, по которому ищем
    */
    division: pt.string,
    /**
    * надо ли показывать имя раздела, по которому ищем
    */
    showDivision: pt.bool,
    /**
    * хинт для поискового запроса
    */
    hint: pt.node,
    /**
    * плейсхолдер поискового инпута
    */
    placeholder: pt.string,
    /**
    * коллбек на изменение поискового запроса
    */
    onSearch: pt.func,
    /**
    * коллбек на фокус поискового инпута
    */
    onFocus: pt.func,
    /**
    * коллбек на блур поискового инпута
    */
    onBlur: pt.func,
    /**
    * коллбек на выбор поискового запроса через стрелки
    */
    onSelectItem: pt.func,
    /**
    * коллбек на удаление suggest-item
    */
    onRemoveItem: pt.func,
    /**
    * коллбек на нажатие на кнопку поиска или нажатие на Enter
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
    placeholder: '',
    onSubmit: () => {}
  }

  state = {
    isDropdownOpened: false
  }

  submitSearch() {
    this.props.onSubmit()
  }

  renderInput() {
    const {
      // children,
      className,
      style,
      division,
      showDivision,
      sheet: { classes: css },
      ...other
    } = this.props

    return (
      <div
        className={cn(
          css.root,
          className,
        )}
        style={style}
        {...other}
      >
        <div className={css.inputWrapper}>
          {showDivision && <div className={css.division}>{division}</div>}
          <input
            type="text"
            className={cn(
              css.input,
              {[css.withDivision]: showDivision}
            )}
          />
          <ClearIcon
            className={css.clear}
            size={16}
            color="#B8B8B9"
          ></ClearIcon>
          <Button
            className={css.searchButton}
            size="small"
          >Поиск</Button>
        </div>
        <div className={css.suggest}>
        </div>
      </div>
    )
  }

  renderItems() {
    const {
      children
    } = this.props

    return children.map(child => {
      const props = {}
      return cloneElement(child, props)
    })
  }

  render() {
    const {
      children,
      sheet: { classes: css }
    } = this.props

    // const {isDropdownOpened} = this.state

    return (
      <Dropdown
        isOpened={children.length > 0}
        anchor={this.renderInput()}
        padding={false}
        overlayClassName={css.overlay}
        appendToBody={true}
        anchorFullWidth={true}
        autoPositionY={true}
        anchorPointY={'bottom'}
        contentPointY="top"
        closeOnClickOutside={false}
        cachePositionOptions={false}>
        {this.renderItems()}
      </Dropdown>
    )
  }

}

export default Search
