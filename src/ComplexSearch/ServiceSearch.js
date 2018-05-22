import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import deepmerge from 'deepmerge'
import { injectSheet } from '../theme'
import ClearIcon from '../icons/forms/ClearIcon'
import SearchIcon from '../icons/forms/SearchIcon'
import { isolateMixin } from '../utils/mixins'
import provideSearch from './provideSearch'
import provideSearchDropdown from './provideSearchDropdown'

@injectSheet(theme => {
  const css = {
    small: {},
    medium: {},
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
      height: theme.search.height,
      boxSizing: 'border-box',
      borderColor: theme.field.colors.disabled.outline,
      borderWidth: 1,

      '&$active': {
        borderColor: theme.search.input.hover.borderColor
      },

      '& $input': {
        fontSize: 13
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
      position: 'absolute',
      alignItems: 'center',
      right: 15
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
  }

  return deepmerge(css, ['small', 'medium'].reduce((result, size) => {
    const styles = theme.search.sizes[size]

    return {
      ...result,
      [`size-${size}`]: {
        '& $inputWrapper': {
          height: styles.service.height
        }
      }
    }
  }, {}))
}, {name: 'ServiceSearch'})
class ServiceSearch extends React.Component {
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
     * 	Дополнительные аттрибуты для кнопки
     */
    searchButtonProps: PropTypes.object,
    /**
     * Размер поискового блока
     */
    size: PropTypes.oneOf(['small', 'medium'])
  };

  static defaultProps = {
    value: '',
    placeholder: '',
    appendToBody: true,
    autoPositionY: false,
    inputProps: {},
    searchButtonProps: {},
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
  };

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

  renderInput = () => {
    const {
      inputWrapperClassName,
      classes,
      isDropdownOpened
    } = this.props

    return (
      <div className={classnames(
        classes.inputWrapper, 
        inputWrapperClassName, 
        isDropdownOpened && classes.active
      )}>
        {this.renderInputNode()}
        {!this.isClearVisible && <SearchIcon
          size="15"
          className={classes.serviceSearchIcon}
          color="currentColor"
        />}
        {this.isClearVisible && <ClearIcon
          className={classes.serviceClearIcon}
          size={15}
          color="currentColor"
          onClick={this.props.clearForm}
        ></ClearIcon>}
      </div>
    )
  }

  renderDropdown() {
    return this.props.renderDropdown(this.renderInput())
  }

  render() {
    const {
      classes,
      style,
      className,
      size,
      setNode
    } = this.props

    return (
      <div
        className={classnames(
          classes.root,
          className,
          classes[`size-${size}`]
        )}
        style={style}
        ref={setNode('root')}
      >
        <div className={classes.inputRow}>
          {this.renderDropdown()}
        </div>
      </div>
    )
  }
}

export default provideSearch(provideSearchDropdown(ServiceSearch))