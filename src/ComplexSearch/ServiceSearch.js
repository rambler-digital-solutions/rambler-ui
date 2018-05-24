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

      '&$active': {
        borderColor: theme.serviceSearch.input.hover.borderColor
      }
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
      fontSize: theme.serviceSearch.fontSize,
      lineHeight: 1.43,
      appearance: 'none',
      color: theme.serviceSearch.input.color,
      height: '100%',
      outline: 0,
      boxShadow: 'none',

      '&::-ms-reveal, &::-ms-clear': {
        display: 'none'
      }
    },
    searchIcon: {
      color: theme.serviceSearch.input.default.icon,
      position: 'absolute',
      right: 15,
      top: '50%',
      transform: 'translateY(-50%)'
    },
    сlearIcon: {
      position: 'absolute',
      right: 15,
      top: '50%',
      transform: 'translateY(-50%)',
      cursor: 'pointer',
      color:  theme.serviceSearch.clear.color
    },
    serviceIcons: {
      display: 'flex',
      position: 'absolute',
      alignItems: 'center',
      right: 15
    }
  }

  return deepmerge(css, ['small', 'medium'].reduce((result, size) => {
    const styles = theme.serviceSearch.sizes[size]

    return {
      ...result,
      [`size-${size}`]: {
        '& $inputWrapper': {
          height: styles.height
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
          className={classes.searchIcon}
          color="currentColor"
        />}
        {this.isClearVisible && <ClearIcon
          className={classes.сlearIcon}
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