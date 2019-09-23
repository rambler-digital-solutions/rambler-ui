/**
 * Компонент пагинации
 */
import React, {Component, cloneElement} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {injectSheet} from '../theme'
import {isolateMixin} from '../utils/mixins'
import {ENTER} from '../constants/keys'
import Tooltip from '../Tooltip'
import Input from '../Input'

const inactiveElement = <button type="button" tabIndex={-1} disabled />
const buttonContainer = () => <button type="button" />

const isInt = value => typeof value === 'number' && (value | 0) === value

@injectSheet(
  theme => ({
    root: {
      extend: isolateMixin,
      display: 'inline-flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      fontFamily: theme.fontFamily,
      userSelect: 'none',
      color: theme.pagination.colors.default.text,
      '&:hover $arrow': {
        opacity: 1
      }
    },
    item: {
      extend: isolateMixin,
      display: 'inline-block',
      flex: 'none',
      height: theme.pagination.size,
      lineHeight: theme.pagination.size + 'px',
      border: 0,
      outline: 'none !important',
      background: 'none',
      fontSize: theme.pagination.fontSize,
      whiteSpace: 'nowrap',
      textAlign: 'center',
      cursor: 'default',
      'button&::-moz-focus-inner': {
        border: 'none !important',
        outline: 'none !important'
      }
    },
    page: {
      composes: '$item',
      minWidth: theme.pagination.size,
      padding: '0 5px',
      borderRadius: theme.pagination.size / 2,
      cursor: 'pointer',
      background: theme.pagination.colors.default.background,
      transitionDuration: theme.tabs.animationDuration,
      transitionProperty: 'color, background-color',
      '&&': {
        color: theme.pagination.colors.default.text,
        fontWeight: 400
      },
      '&$isSelected': {
        color: theme.pagination.colors.selected.text,
        fontWeight: 500,
        backgroundColor: theme.pagination.colors.selected.background
      },
      '&:focus': {
        color: theme.pagination.colors.focus.text
      },
      '&:hover': {
        color: theme.pagination.colors.hover.text
      },
      '&:active': {
        color: theme.pagination.colors.active.text,
        background: theme.pagination.colors.active.background
      },
      '&$isDisabled': {
        color: theme.pagination.colors.disabled.text,
        background: 'none'
      }
    },
    arrow: {
      composes: '$item',
      position: 'relative',
      width: theme.pagination.size,
      cursor: 'pointer',
      overflow: 'hidden',
      paddingLeft: theme.pagination.size,
      opacity: 0,
      '&&': {
        transitionDuration: theme.tabs.animationDuration,
        transitionProperty: 'fill, opacity',
        color: theme.pagination.colors.default.arrow
      },
      '&&:focus': {
        color: theme.pagination.colors.focus.arrow
      },
      '&&:hover': {
        color: theme.pagination.colors.hover.arrow
      },
      '&&:active': {
        color: theme.pagination.colors.active.arrow
      },
      '&$isDisabled': {
        color: theme.pagination.colors.disabled.arrow + '!important'
      },
      '&:before': {
        boxSizing: 'border-box',
        position: 'absolute',
        top: 6,
        left: 13,
        content: '""',
        width: 11,
        height: 11,
        border: 'solid',
        borderWidth: '0 0 2px 2px',
        transform: 'rotate(45deg)',
        transformOrigin: 'left bottom'
      }
    },
    prevArrow: {
      composes: '$arrow',
      marginRight: 7
    },
    nextArrow: {
      composes: '$arrow',
      marginLeft: 7,
      transform: 'scaleX(-1)'
    },
    isDisabled: {
      cursor: 'not-allowed'
    },
    isSelected: {},
    inputWrapper: {
      paddingLeft: 20
    },
    input: {
      width: 76
    },
    inputSmall: {
      width: 45,
      marginRight: 10
    },
    label: {
      fontSize: theme.pagination.fontSize,
      lineHeight: theme.pagination.size + 'px',
      cursor: 'pointer',
      color: theme.pagination.colors.label.default,
      transitionDuration: theme.tabs.animationDuration,
      transitionProperty: 'color',
      '&:hover, &:focus': {
        color: theme.pagination.colors.label.hover
      }
    }
  }),
  {name: 'Pagination'}
)
export default class Pagination extends Component {
  static propTypes = {
    /**
     * Количество страниц
     */
    pagesCount: PropTypes.number,
    /**
     * Выбранная страница
     */
    currentPage: PropTypes.number,
    /**
     * Дополнительный класс контейнера
     */
    className: PropTypes.string,
    /**
     * CSS-стили корневого элемента
     */
    style: PropTypes.object,
    /**
     * Функция, возвращающая React-элемент, `function (pageNumber: number) {}`
     */
    pageContainer: PropTypes.func,
    /**
     * Функция, вызывающая при изменении значения `function (event: object, newValue: number) {}`
     */
    onChange: PropTypes.func,
    /**
     * Input для ручного ввода страниц
     */
    showPageInput: PropTypes.bool,
    /**
     * Дополнительный класс инпута
     */
    pageInputClassName: PropTypes.string,
    /**
     * Текст кнопки вызова инпута
     */
    pageInputLabel: PropTypes.string,
    /**
     * Дополнительный класс кнопки вызова инпута
     */
    pageInputLabelClassName: PropTypes.string,
    /**
     * Текст тултипа при неверном вводе страницы
     */
    pageInputTooltip: PropTypes.string,
    /**
     * Количество страниц в диапазоне
     */
    pagesInRange: PropTypes.number,
    /**
     * Тип - выбор или ввод
     */
    type: PropTypes.oneOf(['select', 'input'])
  }

  static defaultProps = {
    currentPage: 1,
    showPageInput: false,
    pagesInRange: 5,
    type: 'select'
  }

  state = {
    pageValue: this.props.currentPage,
    showInput: false
  }

  // componentWillReceiveProps(nextProps) {
  //   if (this.state.pageValue !== nextProps.currentPage)
  //     this.setState({
  //       pageValue: nextProps.currentPage
  //     })
  // }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.pageValue !== this.props.currentPage)
      this.setState({
        pageValue: this.props.currentPage
      })
  }

  get pageContainer() {
    return this.props.pageContainer || buttonContainer
  }

  get isPageValid() {
    const {pageValue} = this.state
    if (pageValue === '') return true
    const {pagesCount} = this.props
    const page = +pageValue
    return isInt(page) && page <= pagesCount && page > 0
  }

  handleChange = (event, pageNumber) => {
    const {onChange, currentPage} = this.props
    if (!onChange) return
    event.preventDefault()
    if (!pageNumber || currentPage === pageNumber) return
    onChange(event, pageNumber)
  }

  handlePageChange = event => {
    const pageNumber = +event.currentTarget.textContent
    this.handleChange(event, pageNumber)
  }

  handleInputChange = event => {
    if (!this.isPageValid) return
    this.handleChange(event, +this.state.pageValue)
    this.hideInput()
  }

  onInputChange = (event, value) => {
    event.preventDefault()
    this.setState({
      pageValue: value
    })
  }

  handlePressKey = event => {
    if (event.keyCode === ENTER) this.handleInputChange(event)
  }

  showInput = () => {
    this.setState({
      showInput: true
    })
  }

  hideInput = () => {
    this.setState({
      showInput: false
    })
  }

  renderPages() {
    const {
      classes,
      pagesCount,
      currentPage,
      onChange,
      pagesInRange
    } = this.props

    const dots = '...'
    const edgePages = 3
    const aroundPages = Math.floor(pagesInRange / 2)

    const leftPageNum = currentPage - aroundPages
    const rightPageNum = currentPage + aroundPages
    const startRange = edgePages
    const endRange = pagesCount - edgePages + 1

    let pages = []
    for (let i = 1; i <= pagesCount; i++)
      if (
        // первая страница
        i === 1 ||
        // последняя страница
        i === pagesCount ||
        // в диапозоне `aroundPages` страниц до и после текущей страницы
        (i >= leftPageNum && i <= rightPageNum) ||
        // в диапозоне `edgePages` страниц с начала списка и при условии нахождения текущей страницы в этом диапозоне
        (i <= startRange && currentPage <= startRange) ||
        // в диапозоне `edgePages` страниц с конца списка и при условии нахождения текущей страницы в этом диапозоне
        (i >= endRange && currentPage >= endRange)
      )
        pages.push(i)

    // Если пропуск более 1 страницы, заполняем строкой со среднем значением, иначе номером пропущенной страницы
    pages = pages.reduce((accumulator, pageNumber, index) => {
      const prevPageNumber = index > 0 ? pages[index - 1] : null
      if (!prevPageNumber || prevPageNumber + 1 === pageNumber)
        return accumulator.concat(pageNumber)
      if (prevPageNumber + 2 === pageNumber)
        return accumulator.concat(pageNumber - 1, pageNumber)
      return accumulator.concat(
        `${Math.round((prevPageNumber + pageNumber) / 2)}`,
        pageNumber
      )
    }, [])

    return pages.map(pageNumber => {
      const isPage = isInt(pageNumber)
      const isCurrentPage = currentPage === pageNumber
      return cloneElement(
        this.pageContainer(pageNumber),
        {
          key: pageNumber,
          className: classnames(
            classes.page,
            isCurrentPage && classes.isSelected
          ),
          onClick: onChange
            ? event => this.handleChange(event, +pageNumber)
            : undefined
        },
        isPage ? pageNumber : dots
      )
    })
  }

  renderLitePages() {
    const {pageValue} = this.state
    const {
      classes,
      pagesCount,
      pageInputClassName,
      pageInputTooltip,
      theme
    } = this.props

    return [
      <Tooltip
        key={0}
        content={pageInputTooltip || theme.i18n.pagination.tooltip}
        isOpened={!this.isPageValid}>
        <Input
          variation="regular"
          type="text"
          size="small"
          className={classnames(pageInputClassName, classes.inputSmall)}
          status={!this.isPageValid ? 'error' : null}
          value={pageValue}
          onBlur={this.handleInputChange}
          onChange={this.onInputChange}
          onKeyUp={this.handlePressKey}
        />
      </Tooltip>,
      <span key={1} className={classes.item}>
        из {pagesCount}
      </span>
    ]
  }

  renderArrow(pageNumber, className, isDisabled, key) {
    const {onChange, classes} = this.props
    return cloneElement(
      isDisabled ? inactiveElement : this.pageContainer(pageNumber),
      {
        onClick: onChange && !isDisabled ? this.handlePageChange : undefined,
        className: classnames(className, isDisabled && classes.isDisabled),
        key
      },
      !isDisabled && onChange ? pageNumber : null
    )
  }

  renderInput() {
    const {pageValue, showInput} = this.state
    const {
      classes,
      pageInputClassName,
      pageInputLabelClassName,
      pageInputLabel,
      pageInputTooltip,
      theme
    } = this.props

    return (
      <div className={classes.inputWrapper}>
        {showInput ? (
          <Tooltip
            content={pageInputTooltip || theme.i18n.pagination.tooltip}
            isOpened={!this.isPageValid}>
            <Input
              autoFocus
              variation="regular"
              type="text"
              size="small"
              className={classnames(pageInputClassName, classes.input)}
              status={!this.isPageValid ? 'error' : null}
              value={pageValue}
              onBlur={this.handleInputChange}
              onChange={this.onInputChange}
              onKeyUp={this.handlePressKey}
            />
          </Tooltip>
        ) : (
          <span
            className={classnames(pageInputLabelClassName, classes.label)}
            onClick={this.showInput}>
            {pageInputLabel || theme.i18n.pagination.label}
          </span>
        )}
      </div>
    )
  }

  render() {
    const {
      className,
      classes,
      currentPage,
      pagesCount,
      pageContainer, // eslint-disable-line no-unused-vars
      onChange, // eslint-disable-line no-unused-vars
      theme, // eslint-disable-line no-unused-vars
      pageInputClassName, // eslint-disable-line no-unused-vars
      pageInputLabelClassName, // eslint-disable-line no-unused-vars
      pageInputLabel, // eslint-disable-line no-unused-vars
      pageInputTooltip, // eslint-disable-line no-unused-vars
      pagesInRange, // eslint-disable-line no-unused-vars
      showPageInput,
      type,
      ...other
    } = this.props

    if (!(pagesCount > 1)) return null

    const pages = type === 'input' ? this.renderLitePages() : this.renderPages()
    const input = type === 'select' && showPageInput && this.renderInput()
    const prevPageArrow = this.renderArrow(
      currentPage - 1,
      classes.prevArrow,
      currentPage <= 1,
      'prev'
    )
    const nextPageArrow = this.renderArrow(
      currentPage + 1,
      classes.nextArrow,
      currentPage >= pagesCount,
      'next'
    )

    return (
      <div className={classnames(className, classes.root)} {...other}>
        {prevPageArrow}
        {pages}
        {nextPageArrow}
        {input}
      </div>
    )
  }
}
