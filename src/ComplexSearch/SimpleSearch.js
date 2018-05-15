import React, { cloneElement } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import EventEmitter from 'events'
import { injectSheet } from '../theme'
import SearchIcon from '../icons/forms/SearchIcon'
import SourceButtons from './SourceButtons'
import { isolateMixin } from '../utils/mixins'

@injectSheet(theme => {
  const css = {
    small: {},
    medium: {},
    withSourceButtons: {},
    active: {},
    withoutButton: {},
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
      height: theme.search.simple.height,
      position: 'relative',
      width: '100%',
      display: 'flex'
    },
    inputWrapper: {
      borderColor: theme.search.input.default.borderColor,
      borderWidth: 2,
      borderStyle: 'solid',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      borderRadius: '1px 0 0 1px',
      width: '100%',
      height: theme.search.simple.height,
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
    serviceSearchIcon: {
      color: theme.search.input.default.icon,
      position: 'absolute',
      right: 15,
      top: '50%',
      transform: 'translateY(-50%)'
    },
    inputLeftIcon: {
      marginLeft:  12
    },
    searchButton: {
      extend: isolateMixin,
      background: 'none',
      borderRadius: '0 1px 1px 0',
      textAlign: 'center',
      paddingLeft: 15,
      border: 'none',
      flexShrink: 0,
      cursor: 'pointer',
      boxSizing: 'border-box',
      color: theme.search.button.default.background,
      outline: 'none',
      fontSize: theme.search.button.fontSize,
      fontWeight: theme.search.button.fontWeight,
      letterSpacing: theme.search.button.letterSpacing,
      textTransform: theme.search.button.textTransform,

      '&:hover': {
        color: theme.search.button.hover.background
      },

      '&:active': {
        color: theme.search.button.active.background
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

    serviceClearIcon: {
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
    },
    overlay: {
      width: '100%'
    }
  }

  return css
}, {name: 'SimpleSearch'})
export default class SimpleSearch extends React.Component {
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
     * Отображать или нет кнопку поиска
     */
    showSearchButton: PropTypes.bool,
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
     * 	Дополнительные аттрибуты для кнопки
     */
    searchButtonProps: PropTypes.object,
    /**
     * Размер поискового блока
     */
    size: PropTypes.oneOf(['small', 'medium']),
    /**
     * Для отображения поиска по сервису/интернету
     */
    sourceType: PropTypes.bool,
    /**
     * Вариант отображения поиска
     */
    layout: PropTypes.oneOf(['media', 'service'])
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
    showSearchButton: true,
    inputProps: {},
    searchButtonProps: {},
    sourceButtonsProps: () => ({}),
    layout: 'media',
    sourceType: false,
    size: 'medium',
    onSearch() {},
    onFocus() {},
    onBlur() {},
    onHoverItem() {},
    onSubmit() {},
    onPressEnter() {}
  };

  constructor(props) {
    super(props)
    this.state = {
      sourceType: 'global',
      value: this.props.value
    }
    this.events = new EventEmitter
    this.events.setMaxListeners(0)
  }

  /**
   * Показывать ли крестик очищения input
   * @return {Boolean}
   */
  get isClearVisible() {
    return Boolean(this.state.value)
  }

  componentWillUnmount() {
    this.events.removeAllListeners()
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.value !== nextProps.value)
      this.setState({
        value: nextProps.value
      })
  }

  setNode = name => node => {
    this[`${name}Node`] = node
  }

  isNodeNotInComponent(node) {
    if (!this.props.appendToBody)
      return !this.rootNode.contains(node)
  }

  onSubmit = () => {
    this.props.onSubmit(this.state.value)
  }

  onKeyDown = (e) => {
    if (!this.inputNode) // на всякий случай проверяем не пришло ли событие после анмаунта компонента
      return

    switch (e.key) {
    case 'Enter':
      e.preventDefault()
      this.props.onPressEnter(this.state.value)
      break

    case 'Escape':
      e.preventDefault()
      break
    }
  }

  onFocus = () => {
    this.props.onFocus()
  }

  onBlur = () => {
    this.props.onBlur()
  }

  onSearchInput = (e) => {
    const value = e.target.value
    this.setState({value})
    this.props.onSearch(value, {globalSearch: this.state.sourceType})
  }

  onSourceIconClick = (type) => {
    this.setState({sourceType: type})
  }

  clearForm = () => {
    const value = ''
    this.setState({value})
    this.inputNode.focus()
    this.props.onSearch(value)
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
      classes
    } = this.props

    return (
      <input
        type="text"
        onChange={this.onSearchInput}
        onKeyDown={this.onKeyDown}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        value={this.state.value}
        className={classes.input}
        placeholder={placeholder}
        {...inputProps}
        ref={this.setNode('input')}
      />
    )
  }

  renderInput() {
    const {
      inputWrapperClassName,
      classes
    } = this.props

    return (
      <div 
        className={classnames(
          classes.inputWrapper, 
          inputWrapperClassName, 
        )}
      >
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
      showSearchButton,
      sourceButtonsProps
    } = this.props
    return (
      <div className={classes.serviceIcons}>
        {sourceType && <SourceButtons
          onSourceIconClick={this.onSourceIconClick}
          sourceButtonsProps={sourceButtonsProps}
          activeType={this.state.sourceType}
        />}
        {showSearchButton && this.renderButton()}
      </div>
    ) 
  }

  renderButton() {
    const {
      classes,
      searchButtonStyle,
      searchButtonProps,
      searchButtonClassName
    } = this.props

    return (
      <button
        className={classnames(classes.searchButton, searchButtonClassName)}
        onClick={this.onSubmit}
        size="small"
        style={searchButtonStyle}
        tabIndex={-1}
        {...searchButtonProps}
      >
        <SearchIcon
          size={15}
          className={this.props.classes.searchIcon}
          color="currentColor"
        />
      </button>
    )
  }

  render() {
    const {
      classes,
      style,
      className,
      sourceType,
      showSearchButton
    } = this.props

    return (
      <div
        className={classnames(
          classes.root,
          !showSearchButton && classes.withoutButton,
          sourceType && classes.withSourceButtons,
          className,
        )}
        style={style}
        ref={this.setNode('root')}
      >
        <div className={classes.inputRow}>
          {this.renderInput()}
        </div>
      </div>
    )
  }
}
