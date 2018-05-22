import React, { cloneElement } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { injectSheet } from '../theme'
import deepmerge from 'deepmerge'
import SearchIcon from '../icons/forms/SearchIcon'
import SourceButtons from './SourceButtons'
import { isolateMixin } from '../utils/mixins'
import provideSearch from './provideSearch'

@injectSheet(theme => {
  const css = {
    withSourceButtons: {},
    active: {},
    withoutButton: {},
    root: {
      extend: isolateMixin,
      fontFamily: theme.fontFamily,
      fontSize: 13,
      width: '100%',
      maxWidth: theme.search.maxWidth,
      display: 'flex',
      flexDirection: 'column'
    },
    inputRow: {
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
      fontSize: 13,
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

  return deepmerge(css, ['small', 'medium'].reduce((result, size) => {
    const styles = theme.search.sizes[size]

    return {
      ...result,
      [`size-${size}`]: {
        '& $inputWrapper': {
          height: styles.simple.height
        }
      }
    }
  }, {}))
}, {name: 'SimpleSearch'})
class SimpleSearch extends React.Component {
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
    * Иконка инпута слева
     */
    inputLeftIcon: PropTypes.node,
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
     * 	Текст тултипа поиска по сервису
     */
    serviceTooltipLabel: PropTypes.string
  };

  static defaultProps = {
    value: '',
    placeholder: '',
    showSearchButton: true,
    inputProps: {},
    searchButtonProps: {},
    sourceButtonsProps: () => ({}),
    sourceType: false,
    size: 'medium',
    onSearch() {},
    onFocus() {},
    onBlur() {},
    onSubmit() {},
    onPressEnter() {}
  };

  state = {
    sourceType: 'global'
  }

  onSourceIconClick = (type) => {
    this.setState({sourceType: type})
  }

  onSearch = (e) => {
    this.props.onSearch(e, {globalSearch: this.state.sourceType})
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
      classes,
      onKeyDown,
      onFocusInput,
      onBlurInput,
      value
    } = this.props

    return (
      <input
        type="text"
        onChange={this.onSearch}
        onKeyDown={onKeyDown}
        onFocus={onFocusInput}
        onBlur={onBlurInput}
        value={value}
        className={classes.input}
        placeholder={placeholder}
        {...inputProps}
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
      size,
      showSearchButton
    } = this.props

    return (
      <div
        className={classnames(
          classes.root,
          !showSearchButton && classes.withoutButton,
          sourceType && classes.withSourceButtons,
          className,
          classes[`size-${size}`]
        )}
        style={style}
      >
        <div className={classes.inputRow}>
          {this.renderInput()}
        </div>
      </div>
    )
  }
}

export default provideSearch(SimpleSearch)
