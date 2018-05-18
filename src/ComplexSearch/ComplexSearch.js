import React, { cloneElement } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { injectSheet } from '../theme'
import ClearIcon from '../icons/forms/ClearIcon'
import SearchIcon from '../icons/forms/SearchIcon'
import { isolateMixin } from '../utils/mixins'
import SourceButtons from './SourceButtons'
import provideSearch from './provideSearch'
import provideSearchDropdown from './provideSearchDropdown'
import { 
  COMPLEX_SEARCH_SUGGEST_ITEM_CONTEXT 
} from '../constants/context'

@injectSheet(theme => ({
  withSourceButtons: {},
  active: {},
  root: {
    extend: isolateMixin,
    fontFamily: theme.fontFamily,
    fontSize: theme.search.fontSize,
    width: '100%',
    maxWidth: theme.search.maxWidth,
    display: 'flex',
    flexDirection: 'column'
  },
  inputRow: {
    height: theme.search.height,
    position: 'relative',
    width: '100%',
    display: 'flex'
  },
  inputWrapper: {
    borderColor: theme.search.input.default.borderColor,
    borderWidth: 2,
    borderStyle: 'solid',
    borderRightWidth: 0,
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    borderRadius: '1px 0 0 1px',
    width: '100%',
    height: theme.search.height,
    boxSizing: 'border-box',
    '&$active': {
      borderColor: theme.search.input.hover.borderColor
    }
  },
  bottomWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '15px 0',
    fontSize: 12
  },
  division: {
    height: 30,
    padding: '0 12px',
    display: 'flex',
    alignItems: 'center',
    margin: '0 3px',
    fontSize: 11,
    textTransform: 'uppercase',
    fontWeight: 500,
    borderRadius: '1px',
    backgroundColor: theme.search.division.color,
    letterSpacing: 1.3,
    cursor: 'pointer'
  },
  input: {
    extend: isolateMixin,
    padding: '10px 12px',
    border: 'none',
    boxSizing: 'border-box',
    display: 'block',
    borderRadius: 0,
    width: '100%',
    fontWeight: 400,
    fontSize: theme.search.fontSize,
    lineHeight: 1.43,
    appearance: 'none',
    color: theme.search.input.color,
    height: '100%',
    outline: 0,
    boxShadow: 'none',

    '&::-ms-reveal, &::-ms-clear': {
      display: 'none'
    }
  },
  inputLeftIcon: {
    marginLeft:  12
  },
  searchButton: {
    extend: isolateMixin,
    color: theme.search.button.color,
    top: 0,
    height: theme.search.height,
    borderRadius: '0 1px 1px 0',
    textAlign: 'center',
    border: 'none',
    flexShrink: 0,
    cursor: 'pointer',
    padding: '0 20px',
    boxSizing: 'border-box',
    background: theme.search.button.default.background,
    outline: 'none',
    fontSize: theme.search.button.fontSize,
    fontWeight: theme.search.button.fontWeight,
    letterSpacing: theme.search.button.letterSpacing,
    textTransform: theme.search.button.textTransform,

    '&:hover': {
      background: theme.search.button.hover.background
    },

    '&:active': {
      background: theme.search.button.active.background
    }
  },
  searchIcon: {
    marginRight: 8,
    marginTop: -2,
    verticalAlign: 'middle'
  },
  withoutButton: {
    '& $inputWrapper': {
      borderRadius: 1,
      borderRightWidth: 2,
      boxShadow: 'none'
    }
  },
  clear: {
    position: 'absolute',
    right: 15,
    top: '50%',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    opacity: 0.6,

    '&:hover': {
      opacity: 1,
      color:  theme.search.serviceIcon.hover.color
    },

    '&:active': {
      opacity: 1
    }
  },

  serviceIcons: {
    display: 'flex',
    flexShrink: 0,
    padding: '0 15px',
    alignItems: 'center'
  },
  serviceIcon: {
    opacity: 0.5,
    transition: 'opacity 0.2s, color 0.2s',
    color: theme.search.serviceIcon.color,
    cursor: 'pointer',
    marginRight: 10,

    '&:last-child': {
      marginRight: 0
    },

    '&:hover': {
      opacity: 1,
      color: theme.search.serviceIcon.hover.color
    },
      
    '&$active': {
      opacity: 1
    }
  }
}), {name: 'ComplexSearch'})
class ComplexSearch extends React.Component {
  static propTypes = {
    /**
     * Переопределение стандартных стилей компонента Search
     */
    style: PropTypes.object,
    /**
     * CSS-класс компонента
     */
    className: PropTypes.string,
    /**
     * CSS-класс для родителя инпута
     */
    inputWrapperClassName: PropTypes.string,
    /**
     * Текущий поисковый запрос
     */
    value: PropTypes.string,
    /**
     * Кнопка поиска
     */
    searchButton: PropTypes.node,
    /**
     * Объект для дополнительных стилей для кнопки
     */
    searchButtonStyle: PropTypes.object,
    /**
     * Дополнительный css-класс для кнопки поиска
     */
    searchButtonClassName: PropTypes.string,
    /**
     * Иконка поиска, по дефолту подставляется иконка с лупой
     */
    searchIcon: PropTypes.node,
    /**
    * Иконка инпута слева
     */
    inputLeftIcon: PropTypes.node,
    /**
     * Объект для дополнительных стилей для дропдауна
     */
    dropdownStyle: PropTypes.object,
    /**
     * Дополнительный css-класс для дропдауна
     */
    dropdownClassName: PropTypes.string,
    /**
     * Имя раздела, по которому ищем
     */
    division: PropTypes.string,
    /**
     * Плейсхолдер поискового инпута
     */
    placeholder: PropTypes.string,
    /**
     * Коллбек на изменение поискового запроса, принимает первым аргументом значение поискового запроса
     */
    onSearch: PropTypes.func,
    /**
     * Коллбек на фокус поискового инпута
     */
    onFocus: PropTypes.func,
    /**
     * Коллбек на блур поискового инпута
     */
    onBlur: PropTypes.func,
    /**
     * Коллбек на выбор поискового запроса через стрелки, первым аргументом получает props.value соответствующего SuggestItem
     */
    onSelectItem: PropTypes.func,
    /**
     * Коллбек на клик SuggestItem, первым аргументом получает props.value соответствующего SuggestItem
     */
    onClickItem: PropTypes.func,
    /**
    * Коллбек на удаление SuggestItem, первым аргументом получает props.value соответствующего SuggestItem
    */
    onRemoveItem: PropTypes.func,
    /**
     * Колбек ховера по SuggestItem, первым аргументом получает props.value соответствующего SuggestItem
     */
    onHoverItem: PropTypes.func,
    /**
     * Коллбек на нажатие на кнопку поиска, принимает первым аргументом значение поискового запроса
     */
    onSubmit: PropTypes.func,
    /**
     * Коллбек на нажатие на Enter, принимает первым аргументом значение поискового запроса
     */
    onPressEnter: PropTypes.func,
    /**
     * Вставлять ли dropdown внутри body
     */
    appendToBody: PropTypes.bool,
    /**
     * 	Автоматическое позиционирование дропдауна по оси Y (если выходит за пределы экрана)
     */
    autoPositionY: PropTypes.bool,
    /**
     * 	Дополнительные аттрибуты для поискового инпута
     */
    inputProps: PropTypes.object,
    /**
     * 	Дополнительные аттрибуты для кнопок переключения источника поиска
     */
    sourceButtonsProps: PropTypes.func,
    /**
     * 	Текст тултипа поиска по сервису
     */
    serviceTooltipLabel: PropTypes.string,
    /**
     * 	Дополнительные аттрибуты для кнопки
     */
    searchButtonProps: PropTypes.object,
    /**
     * Для отображения поиска по сервису/интернету
     */
    sourceType: PropTypes.bool
  };

  static defaultProps = {
    value: '',
    placeholder: '',
    division: null,
    appendToBody: true,
    autoPositionY: false,
    searchButton: null,
    searchButtonStyle: {},
    searchButtonClassName: '',
    inputProps: {},
    searchButtonProps: {},
    sourceButtonsProps: () => ({}),
    sourceType: false,
    onSearch() {},
    onFocus() {},
    onBlur() {},
    onSelectItem() {},
    onClickItem() {},
    onRemoveItem() {},
    onHoverItem() {},
    onSubmit() {},
    onPressEnter() {}
  };

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
      setHighlightedId: PropTypes.func
    })
  }


  state = {
    sourceType: 'global'
  }

  /**
   * Показывать ли крестик очищения input
   * @return {Boolean}
   */
  get isClearVisible() {
    return Boolean(this.props.value)
  }

  onSourceIconClick = (type) => {
    this.setState({sourceType: type})
  }

  renderInputIcon() {
    const {inputLeftIcon, theme, classes} = this.props
    if (!inputLeftIcon)
      return
    const {size, className, color} = inputLeftIcon.props
    return cloneElement(inputLeftIcon, {
      className: classnames(classes.inputLeftIcon, className),
      size: size || 15,
      color: color || theme.search.input.default.icon
    })
  }

  renderInputNode() {
    const {
      placeholder,
      inputProps,
      classes,
      setNode,
      onKeyDown,
      onSearch,
      onFocus,
      onBlur,
      value
    } = this.props

    return (
      <input
        type="text"
        onChange={onSearch}
        onKeyDown={onKeyDown}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        className={classes.input}
        placeholder={placeholder}
        {...inputProps}
        ref={setNode('input')}
      />
    )
  }

  renderInput = () => {
    const {
      division,
      inputWrapperClassName,
      classes,
      isDropdownOpened
    } = this.props

    return (
      <div 
        className={classnames(
          classes.inputWrapper, 
          inputWrapperClassName, 
          isDropdownOpened && classes.active
        )}
      >
        {division && <div className={classes.division}>{division}</div> }
        {this.renderInputIcon()}
        {this.renderInputNode()}
        {this.renderServiceIcons()}
      </div>
    )
  }

  renderServiceIcons() {
    const {
      classes, 
      sourceType,
      sourceButtonsProps,
      serviceTooltipLabel
    } = this.props
    return (
      <div className={classes.serviceIcons}>
        {this.isClearVisible && <ClearIcon
          className={classes.serviceIcon}
          size={15}
          color="currentColor"
          onClick={this.props.clearForm}
        ></ClearIcon>}
        {sourceType && <SourceButtons
          serviceTooltipLabel={serviceTooltipLabel}
          onSourceIconClick={this.onSourceIconClick}
          sourceButtonsProps={sourceButtonsProps}
          activeType={this.state.sourceType}
        />}
      </div>
    ) 
  }

  renderButton() {
    const {
      classes,
      searchButton,
      searchButtonStyle,
      searchButtonClassName,
      searchButtonProps,
      onSubmitInput
    } = this.props

    if (!searchButton)
      return null

    // если передали ноду - ее отдаем на рендер
    if (typeof searchButton === 'object')
      return searchButton

    return (
      <button
        className={classnames(classes.searchButton, searchButtonClassName)}
        onClick={onSubmitInput}
        size="small"
        style={searchButtonStyle}
        tabIndex={-1}
        {...searchButtonProps}
      >
        {this.renderSearchIcon()}{searchButton}
      </button>
    )
  }

  renderSearchIcon() {
    if (this.props.searchIcon === undefined)
      return (
        <SearchIcon
          size={12}
          className={this.props.classes.searchIcon}
          color={this.props.theme.search.button.color}
        />
      )
    if (this.props.searchIcon)
      return this.props.searchIcon
    return null
  }

  renderDropdown() {
    return this.props.renderDropdown(this.renderInput())
  }

  render() {
    const {
      classes,
      style,
      className,
      sourceType,
      setNode
    } = this.props
    const button = this.renderButton()

    return (
      <div
        className={classnames(
          classes.root,
          !button && classes.withoutButton,
          className,
          sourceType && classes.withSourceButtons
        )}
        style={style}
        ref={setNode('root')}
      >
        <div className={classes.inputRow}>
          {this.renderDropdown()}
          {button}
        </div>
      </div>
    )
  }
}

export default provideSearch(provideSearchDropdown(ComplexSearch))
