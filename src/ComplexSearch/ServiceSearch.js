import React, {cloneElement} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {injectSheet} from '../theme'
import ClearIcon from './icons/ClearIcon'
import ServiceSearchIcon from './icons/ServiceSearchIcon'
import {isolateMixin} from '../utils/mixins'
import provideSearch from './provideSearch'
import provideSearchDropdown from './provideSearchDropdown'

@provideSearch
@provideSearchDropdown
@injectSheet(
  theme => ({
    small: {},
    medium: {},
    active: {},
    root: {
      extend: isolateMixin,
      fontFamily: theme.fontFamily,
      fontSize: theme.serviceSearch.fontSize,
      width: '100%',
      maxWidth: theme.serviceSearch.maxWidth,
      display: 'flex',
      flexDirection: 'column'
    },
    inputRow: {
      height: '100%',
      position: 'relative',
      width: '100%',
      display: 'flex'
    },
    inputWrapper: {
      borderStyle: 'solid',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      paddingRight: 30,
      borderRadius: 1,
      width: '100%',
      boxSizing: 'border-box',
      borderColor: theme.serviceSearch.input.default.borderColor,
      borderWidth: 1,
      backgroundColor: theme.search.input.backgroundColor,

      '&$active': {
        borderColor: theme.serviceSearch.input.hover.borderColor
      }
    },
    input: {
      extend: isolateMixin,
      padding: '10px 14px',
      border: 'none',
      boxSizing: 'border-box',
      display: 'block',
      borderRadius: 0,
      width: '100%',
      fontWeight: 400,
      fontSize: theme.serviceSearch.fontSize,
      lineHeight: '25px',
      appearance: 'none',
      color: theme.serviceSearch.input.color,
      height: '100%',
      outline: 0,
      boxShadow: 'none',

      '&::-ms-reveal, &::-ms-clear': {
        display: 'none'
      },
      '&::-webkit-input-placeholder': {
        fontSize: theme.serviceSearch.input.placeholder.fontSize,
        color: theme.serviceSearch.input.placeholder.color,
        opacity: 1
      },
      '&::-moz-placeholder': {
        fontSize: theme.serviceSearch.input.placeholder.fontSize,
        color: theme.serviceSearch.input.placeholder.color,
        opacity: 1
      },
      '&:-ms-input-placeholder': {
        fontSize: theme.serviceSearch.input.placeholder.fontSize,
        color: theme.serviceSearch.input.placeholder.color,
        opacity: 1
      }
    },
    inputLeftIcon: {
      marginLeft: 12
    },
    searchButton: {
      extend: isolateMixin,
      background: 'none',
      outline: 'none',
      border: 'none',
      cursor: 'pointer',
      position: 'absolute',
      padding: 0,
      width: 15,
      height: 15,
      right: 15,
      top: '50%',
      transform: 'translateY(-50%)'
    },
    searchIcon: {
      color: theme.serviceSearch.input.default.icon,
      outline: 'none'
    },
    clearIcon: {
      position: 'absolute',
      right: 15,
      top: '50%',
      transform: 'translateY(-50%)',
      cursor: 'pointer',
      color: theme.serviceSearch.clear.color
    },
    serviceIcons: {
      display: 'flex',
      position: 'absolute',
      alignItems: 'center',
      right: 15
    },
    ...['small', 'medium'].reduce(
      (result, size) => ({
        ...result,
        [`size-${size}`]: {
          '& $inputWrapper': {
            height: theme.serviceSearch.sizes[size].height
          }
        }
      }),
      {}
    )
  }),
  {name: 'ServiceSearch'}
)
export default class ServiceSearch extends React.Component {
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
     * Иконка поиска, по дефолту подставляется иконка с лупой
     */
    searchIcon: PropTypes.node,
    /**
     * Объект для дополнительных стилей для дропдауна
     */
    dropdownStyle: PropTypes.object,
    /**
     * Дополнительный css-класс для дропдауна
     */
    dropdownClassName: PropTypes.string,
    /**
     * Плейсхолдер поискового инпута
     */
    placeholder: PropTypes.string,
    /**
     * Коллбек на изменение поискового запроса `function (value: string, options: object) {}`,
     * принимает первым аргументом значение поискового запроса
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
     * Коллбек на нажатие на кнопку поиска `function (value: string, options: object) {}`,
     * принимает первым аргументом значение поискового запроса
     */
    onSubmit: PropTypes.func,
    /**
     * Коллбек на нажатие на Enter `function (value: string, options: object) {}`,
     * принимает первым аргументом значение поискового запроса
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
     * Размер поискового блока
     */
    size: PropTypes.oneOf(['small', 'medium']),
    /**
     * Иконка инпута слева
     */
    inputLeftIcon: PropTypes.node
  }

  static defaultProps = {
    value: '',
    placeholder: '',
    appendToBody: true,
    autoPositionY: false,
    inputProps: {},
    size: 'medium',
    onSearch() {},
    onFocus() {},
    onBlur() {},
    onSelectItem() {},
    onClickItem() {},
    onRemoveItem() {},
    onHoverItem() {},
    onSubmit() {},
    onPressEnter() {}
  }

  /**
   * Показывать ли крестик очищения input
   * @return {Boolean}
   */
  get isClearVisible() {
    return Boolean(this.props.value)
  }

  renderInputIcon() {
    const {inputLeftIcon, theme, classes} = this.props
    if (!inputLeftIcon) return
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
      onSearch,
      onBlur,
      onKeyDown,
      setNode,
      onFocus,
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

  renderButton() {
    const {
      classes,
      searchButton,
      searchButtonClassName,
      searchButtonProps,
      onSubmit,
      searchIcon
    } = this.props

    // если передали ноду - ее отдаем на рендер
    if (searchButton) return searchButton

    return (
      <button
        type="button"
        className={classnames(classes.searchButton, searchButtonClassName)}
        onClick={onSubmit}
        {...searchButtonProps}>
        {searchIcon || (
          <ServiceSearchIcon
            size={15}
            className={classes.searchIcon}
            tabIndex={-1}
            color="currentColor"
          />
        )}
      </button>
    )
  }

  renderInput = () => {
    const {
      inputWrapperClassName,
      classes,
      isDropdownOpened,
      onSubmit
    } = this.props

    return (
      <form
        action="#"
        method="get"
        className={classnames(
          classes.inputWrapper,
          inputWrapperClassName,
          isDropdownOpened && classes.active
        )}
        onSubmit={onSubmit}>
        {this.renderInputIcon()}
        {this.renderInputNode()}
        {!this.isClearVisible && this.renderButton()}
        {this.isClearVisible && (
          <ClearIcon
            className={classes.clearIcon}
            size={20}
            color="currentColor"
            onClick={this.props.clearForm}
          />
        )}
      </form>
    )
  }

  renderDropdown() {
    return this.props.renderDropdown(this.renderInput())
  }

  render() {
    const {classes, style, className, size, setNode} = this.props

    return (
      <div
        className={classnames(classes.root, className, classes[`size-${size}`])}
        style={style}
        ref={setNode('root')}>
        <div className={classes.inputRow}>{this.renderDropdown()}</div>
      </div>
    )
  }
}
