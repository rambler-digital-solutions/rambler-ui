/**
 * Компонент TagsInput
 */
import React, {PureComponent, cloneElement} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {injectSheet} from '../theme'
import {isolateMixin} from '../utils/mixins'
import windowEvents from '../hoc/window-events'

@injectSheet(
  theme => ({
    root: {
      extend: isolateMixin,
      fontSize: theme.tagsInput.fontSize,
      fontFamily: theme.fontFamily,
      fontWeight: 400,
      userSelect: 'none',
      overflow: 'hidden'
    },
    items: {
      display: 'flex',
      marginLeft: -theme.tagsInput.sideMargin,
      '$isDisabled &': {
        pointerEvents: 'none'
      }
    },
    ...['medium', 'small'].reduce(
      (result, size) => ({
        ...result,
        [size]: {
          '& $items': {
            minHeight:
              theme.tagsInput.height +
              theme.tagsInput.sizes[size].verticalMargin,
            marginTop: -theme.tagsInput.sizes[size].verticalMargin
          },
          '& $item': {
            marginTop: theme.tagsInput.sizes[size].verticalMargin
          }
        }
      }),
      {}
    ),
    isExpanded: {
      '& $items': {
        flexWrap: 'wrap'
      }
    },
    item: {
      '&&': {
        flex: 'none',
        alignSelf: 'flex-start',
        whiteSpace: 'nowrap',
        maxWidth: `calc(100% - ${theme.tagsInput.sideMargin}px)`,
        marginLeft: theme.tagsInput.sideMargin,
        lineHeight: theme.tagsInput.height + 'px'
      }
    },
    more: {
      composes: '$item',
      color: theme.tagsInput.colors.default.more,
      '$isDisabled &&': {
        color: theme.tagsInput.colors.disabled.more
      }
    },
    isClickable: {
      cursor: 'pointer',
      pointerEvents: 'auto',
      '&:hover, &:active': {
        color: theme.tagsInput.colors.hover.more
      }
    },
    isHidden: {
      '&&': {
        order: 1,
        visibility: 'hidden'
      }
    },
    isDisabled: {}
  }),
  {name: 'TagsInput'}
)
@windowEvents('resize')
export default class TagsInput extends PureComponent {
  static propTypes = {
    /**
     *  Элементы инпута, обязаны быть компонентами типа <TagsInputItem />
     */
    children: PropTypes.node,
    /**
     * Задизэйблить
     */
    disabled: PropTypes.bool,
    /**
     * Размер
     */
    size: PropTypes.oneOf(['small', 'medium']),
    /**
     * Класс контейнера
     */
    className: PropTypes.string,
    /**
     * Открыт/Закрыт список элементов
     */
    isExpanded: PropTypes.bool,
    /**
     * Переопределение стилей контейнера
     */
    style: PropTypes.object,
    /**
     * Коллбек вызывающийся при изменении состояния
     */
    onChange: PropTypes.func,
    /**
     * Коллбек вызывающийся при нажатии на кнопку "еще"
     */
    onMoreClick: PropTypes.func
  }

  static defaultProps = {
    size: 'medium'
  }

  state = {
    visibleItemsCount: null,
    containerWidth: null
  }
  items = []
  container = null
  moreButton = null

  componentDidMount() {
    this.props.windowEvents.on('resize', this.handleWindowResize, false)
    if (!this.props.isExpanded) this.setVisibleItemsCount()
  }

  componentWillUpdate(nextProps) {
    if (React.Children.count(nextProps.children) === 0) this.items = []
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.shouldVisibleItemsCountReset(
        this.state,
        prevState,
        this.props,
        prevProps
      )
    )
      this.setVisibleItemsCount()
  }

  componentWillUnmount() {
    this.props.windowEvents.removeListener(
      'resize',
      this.handleWindowResize,
      false
    )
  }

  handleWindowResize = () => {
    this.setState({
      containerWidth: Math.floor(this.container.getBoundingClientRect().width)
    })
  }

  shouldVisibleItemsCountReset(state, prevState, props, prevProps) {
    if (props.isExpanded) return false
    if (props.isExpanded !== prevProps.isExpanded) return true
    if (state.containerWidth !== prevState.containerWidth) return true
    const items = React.Children.toArray(props.children)
    const prevItems = React.Children.toArray(prevProps.children)
    let itemsCount = items.length
    if (itemsCount !== prevItems.length) return true
    while (itemsCount--)
      if (
        items[itemsCount].props.children !==
        prevItems[itemsCount].props.children
      )
        return true
    return false
  }

  setVisibleItemsCount() {
    const items = this.items.filter(item => item)
    const itemsCount = items.length
    if (itemsCount < 1) {
      this.setState({visibleItemsCount: null})
      return
    }
    const containerWidth = Math.ceil(
      this.container.getBoundingClientRect().width
    )
    const moreButtonWidth =
      Math.ceil(this.moreButton.getBoundingClientRect().width) + 20
    let firstLineItemsCount = 0
    let itemsWidthSum = 0
    const itemsWidths = []
    while (firstLineItemsCount < itemsCount) {
      const itemWidth =
        Math.ceil(
          this.items[firstLineItemsCount].getBoundingClientRect().width
        ) + 20
      if (itemsWidthSum + itemWidth > containerWidth) break
      itemsWidths.push(itemWidth)
      itemsWidthSum += itemWidth
      firstLineItemsCount += 1
    }
    if (firstLineItemsCount < itemsCount) {
      let availableSpace = containerWidth - itemsWidthSum
      while (availableSpace < moreButtonWidth) {
        const itemWidth = itemsWidths[firstLineItemsCount]
        availableSpace += itemWidth
        firstLineItemsCount -= 1
      }
    }
    this.setState({
      visibleItemsCount:
        firstLineItemsCount < itemsCount ? firstLineItemsCount : null
    })
  }

  saveItemsRefs = (ref, index, length) => {
    this.items.length = length
    this.items[index] = ref
  }

  saveContainerRef = ref => {
    this.container = ref
  }

  saveMoreButtonRef = ref => {
    this.moreButton = ref
  }

  onItemClick = (event, value) => {
    if (this.props.disabled) return
    event.stopPropagation()
    const values = React.Children.toArray(this.props.children).map(
      item => item.props.value
    )
    this.props.onChange(values.filter(item => item !== value))
  }

  render() {
    const {
      children,
      className,
      style,
      disabled,
      classes,
      isExpanded,
      onMoreClick,
      size,
      theme: {i18n},
      onChange,
      windowEvents, // eslint-disable-line no-unused-vars
      ...other
    } = this.props

    const {visibleItemsCount} = this.state
    const resultClassName = classnames(
      className,
      classes.root,
      classes[size],
      disabled && classes.isDisabled,
      isExpanded && classes.isExpanded
    )
    const count = React.Children.count(children)
    const items = React.Children.map(children, (child, index) => {
      if (!child.type || child.type.displayName !== 'ruiTagsInputItem')
        throw new Error(
          'Child component should be instance of <TagsInputItem />'
        )
      return cloneElement(child, {
        nodeRef: ref => {
          this.saveItemsRefs(ref, index, count)
        },
        className: classnames(
          classes.item,
          visibleItemsCount !== null &&
            visibleItemsCount <= index &&
            !isExpanded &&
            classes.isHidden
        ),
        key: child.props.children,
        onClick: onChange ? this.onItemClick : undefined,
        disabled
      })
    })
    const moreCount =
      visibleItemsCount === null ? 0 : items.length - visibleItemsCount

    return (
      <div className={resultClassName} style={style} {...other}>
        <div ref={this.saveContainerRef} className={classes.items}>
          {items}
          {!isExpanded && (
            <div
              className={classnames(
                classes.more,
                onMoreClick && classes.isClickable,
                moreCount === 0 && classes.isHidden
              )}
              role={onMoreClick ? 'button' : undefined}
              ref={this.saveMoreButtonRef}
              onClick={onMoreClick}>
              + {i18n.tagsInput.more} {moreCount}
            </div>
          )}
        </div>
      </div>
    )
  }
}
