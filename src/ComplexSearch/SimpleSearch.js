import React from 'react'
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
    active: {},
    withoutButton: {},
    root: {
      extend: isolateMixin,
      fontFamily: theme.fontFamily,
      fontSize: 13,
      width: '100%',
      maxWidth: theme.simpleSearch.maxWidth,
      display: 'flex',
      flexDirection: 'column'
    },
    inputRow: {
      position: 'relative',
      width: '100%',
      display: 'flex'
    },
    inputWrapper: {
      borderColor: theme.simpleSearch.input.default.borderColor,
      borderWidth: 2,
      borderStyle: 'solid',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      borderRadius: '1px 0 0 1px',
      width: '100%',
      boxSizing: 'border-box',

      '&$active': {
        borderColor: theme.simpleSearch.input.hover.borderColor
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
      color: theme.simpleSearch.input.color,
      height: '100%',
      outline: 0,
      boxShadow: 'none',

      '&::-ms-reveal, &::-ms-clear': {
        display: 'none'
      }
    },
    searchButton: {
      extend: isolateMixin,
      display: 'inline-flex',
      background: 'none',
      borderRadius: '0 1px 1px 0',
      textAlign: 'center',
      paddingLeft: 15,
      border: 'none',
      flexShrink: 0,
      cursor: 'pointer',
      boxSizing: 'border-box',
      color: theme.simpleSearch.button.color,
      outline: 'none',

      '&:active': {
        color: theme.search.button.active.color
      }
    },
    serviceIcons: {
      display: 'flex',
      flexShrink: 0,
      padding: '0 15px',
      alignItems: 'center'
    },
    overlay: {
      width: '100%'
    }
  }

  return deepmerge(css, ['small', 'medium'].reduce((result, size) => {
    const styles = theme.simpleSearch.sizes[size]

    return {
      ...result,
      [`size-${size}`]: {
        '& $inputWrapper': {
          height: styles.height
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


  renderInputNode() {
    const {
      placeholder,
      inputProps,
      classes,
      onKeyDown,
      onFocusInput,
      onBlurInput,
      setNode,
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
        ref={setNode('input')}
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
        onClick={this.props.onSubmit}
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
      size,
      showSearchButton
    } = this.props

    return (
      <div
        className={classnames(
          classes.root,
          !showSearchButton && classes.withoutButton,
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
