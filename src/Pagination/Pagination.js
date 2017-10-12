/**
 * Компонент пагинации
 */
import React, { Component, cloneElement } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import omit from 'lodash/omit'
import { injectSheet } from '../theme'
import { isolateMixin } from '../style/mixins'

const inactiveElement = <span />

@injectSheet((theme) => ({
  root: {
    extend: isolateMixin,
    display: 'inline-flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    fontFamily: theme.fontFamily,
    userSelect: 'none',
    color: theme.pagination.colors.default.text
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
      fontWeight: 500
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
    '&&': {
      transitionDuration: theme.tabs.animationDuration,
      transitionProperty: 'fill',
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
  dots: {
    composes: '$item',
    width: theme.pagination.size
  },
  isDisabled: {
    cursor: 'not-allowed'
  },
  isSelected: {}
}))
export default class Pagination extends Component {

  static propTypes = {
    /**
     * Количество страниц
     */
    pagesCount: (props, propName, componentName) => {
      if (props.pagesCount > 0) return
      return new Error('Invalid prop value `' + propName + '` supplied to' +
        ' `' + componentName + '`. Should be a number greater then 1'
      )
    },
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
    pageFactory: PropTypes.func,
    /**
     * Функция, вызывающая при изменении значения `function (event: object, newValue: number) {}`
     */
    onChange: PropTypes.func
  }

  static defaultProps = {
    currentPage: 1,
    pageFactory: () => (
      <button type="button" />
    )
  }

  handleChange = (event) => {
    const {onChange, currentPage} = this.props
    if (!onChange)
      return
    event.preventDefault()
    const pageNumber = +event.currentTarget.textContent
    if (!pageNumber || currentPage === pageNumber)
      return
    this.props.onChange(event, pageNumber)
  }

  renderPages() {
    const {
      sheet: { classes },
      pagesCount,
      currentPage,
      pageFactory,
      onChange
    } = this.props

    const dots = '...'
    const edgePages = 3
    const aroundPages = 2

    const leftPageNum = currentPage - aroundPages
    const rightPageNum = currentPage + aroundPages
    const startRange = edgePages
    const endRange = pagesCount - edgePages + 1

    let pages = []
    for(let i = 1; i <= pagesCount; i++)
      if (
        // Первая страница
        i === 1 ||
        // Последняя страница
        i === pagesCount ||
        // В диапозоне `aroundPages` страниц до и после текущей страницы
        (i >= leftPageNum && i <= rightPageNum) || 
        // в диапозоне `edgePages` страниц с начала списка и при условии нахождения текущей страницы в этом диапозоне
        (currentPage <= startRange && i <= startRange) ||
        // в диапозоне `edgePages` страниц с конца списка и при условии нахождения текущей страницы в этом диапозоне
        (currentPage >= endRange && i >= endRange)
      )
        pages.push(i)

    // Если пропуск более 1 страницы, заполняем строкой '...', иначе номером пропущенной страницы
    pages = pages.reduce((accumulator, pageNumber, index) => {
      const prevPageNumber = index > 0 ? pages[index - 1] : null
      if (!prevPageNumber || prevPageNumber + 1 === pageNumber) return accumulator.concat(pageNumber)
      if (prevPageNumber + 2 === pageNumber) return accumulator.concat(pageNumber - 1, pageNumber)
      return accumulator.concat(dots, pageNumber)
    }, [])

    let dotsCount = 0
    return pages.map((pageNumber) => {
      const isPage = pageNumber !== dots
      const isCurrentPage = currentPage === pageNumber
      return cloneElement(isPage ? pageFactory(pageNumber) : inactiveElement, {
        key: isPage ? pageNumber : dotsCount--,
        className: classnames(isPage ? classes.page : classes.dots, isCurrentPage && classes.isSelected),
        onClick: onChange ? this.handleChange : undefined
      }, pageNumber)
    })
  }

  renderArrow(pageNumber, className, isDisabled, key) {
    const {
      pageFactory,
      onChange,
      sheet: {classes}
    } = this.props
    return cloneElement(isDisabled ? inactiveElement : pageFactory(pageNumber), {
      onClick: onChange && !isDisabled ? this.handleChange : undefined,
      className: classnames(className, isDisabled && classes.isDisabled),
      key
    }, !isDisabled && onChange ? pageNumber : null)
  }

  render() {
    const {
      className,
      sheet: { classes },
      currentPage,
      pagesCount,
      ...other
    } = omit(this.props, ['pageFactory', 'onChange', 'theme'])

    if (!(pagesCount > 1))
      return null

    const pages = this.renderPages()
    const prevPageArrow = this.renderArrow(currentPage - 1, classes.prevArrow, currentPage <= 1, 'prev')
    const nextPageArrow = this.renderArrow(currentPage + 1, classes.nextArrow, currentPage >= pagesCount, 'next')

    return (
      <div className={classnames(className, classes.root)} { ...other }>
        {prevPageArrow}
        {pages}
        {nextPageArrow}
      </div>
    )
  }
}
