import React, {PureComponent, cloneElement} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {injectSheet} from '../theme'
import {isolateMixin} from '../utils/mixins'
import windowEvents from '../hoc/window-events'

@injectSheet(
  ({fontFamily, tagsInput}) => ({
    root: {
      extend: isolateMixin,
      fontSize: tagsInput.fontSize,
      fontFamily,
      fontWeight: 400,
      userSelect: 'none',
      overflow: 'hidden'
    },
    items: {
      display: 'flex',
      '$isDisabled &': {
        pointerEvents: 'none'
      }
    },
    isExpanded: {
      '& $items': {
        flexWrap: 'wrap'
      }
    },
    item: {
      '&&': {
        flex: 'none',
        alignSelf: 'flex-start',
        whiteSpace: 'nowrap'
      }
    },
    more: {
      composes: '$item',
      color: tagsInput.colors.default.more,
      transition: 'color .2s',
      '$isDisabled &': {
        color: tagsInput.colors.disabled.more
      }
    },
    isClickable: {
      pointerEvents: 'auto',
      '$isEnabled &': {
        cursor: 'pointer',
        '&:hover': {
          color: tagsInput.colors.hover.more
        },
        '&:active': {
          color: tagsInput.colors.active.more
        }
      },
      '$isDisabled &': {
        cursor: 'not-allowed'
      }
    },
    regular: {},
    background: {},
    ...['regular', 'background'].reduce((typesResult, type) => {
      const {height, verticalGap, horizontalGap} = tagsInput.types[type]
      return {
        ...typesResult,
        [type]: {
          '& $items': {
            marginTop: -verticalGap,
            marginLeft: -horizontalGap,
            minHeight: height + verticalGap
          },
          '& $item': {
            marginTop: verticalGap,
            marginLeft: horizontalGap,
            maxWidth: `calc(100% - ${horizontalGap}px)`,
            lineHeight: `${height}px`
          }
        }
      }
    }, {}),
    isHidden: {
      '&&': {
        order: 1,
        visibility: 'hidden'
      }
    },
    isEnabled: {},
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
     * Класс контейнера
     */
    className: PropTypes.string,
    /**
     * Открыт/Закрыт список элементов
     */
    isExpanded: PropTypes.bool,
    /**
     * Коллбек вызывающийся при изменении состояния
     */
    onChange: PropTypes.func,
    /**
     * Коллбек вызывающийся при нажатии на кнопку "еще"
     */
    onMoreClick: PropTypes.func,
    /**
     * Разновидность тегов
     */
    type: PropTypes.oneOf(['regular', 'background'])
  }

  static defaultProps = {
    type: 'regular'
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
    if (!this.props.isExpanded) this.updateVisibleItemsCount()
  }

  componentDidUpdate(prevProps, prevState) {
    if (React.Children.count(this.props.children) === 0) this.items = []
    if (
      this.shouldVisibleItemsCountUpdate(
        this.state,
        prevState,
        this.props,
        prevProps
      )
    )
      this.updateVisibleItemsCount()
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

  shouldVisibleItemsCountUpdate(state, prevState, props, prevProps) {
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

  updateVisibleItemsCount() {
    const items = this.items.filter(Boolean)
    const itemsCount = items.length
    if (itemsCount < 1) {
      this.setState({visibleItemsCount: null})
      return
    }
    const {props} = this
    const {horizontalGap} = props.theme.tagsInput.types[props.type]
    const containerWidth = Math.floor(
      this.container.getBoundingClientRect().width
    )
    const moreButtonWidth =
      Math.ceil(this.moreButton.getBoundingClientRect().width) + horizontalGap
    let index = 0
    let itemsWidthSum = 0
    while (index < itemsCount) {
      const itemWidth =
        Math.ceil(this.items[index].getBoundingClientRect().width) +
        horizontalGap
      const iterationWidth =
        index < itemsCount - 1 ? itemWidth + moreButtonWidth : itemWidth

      if (itemsWidthSum + iterationWidth > containerWidth) break
      itemsWidthSum += itemWidth
      index += 1
    }
    this.setState({
      visibleItemsCount: index < itemsCount ? index : null
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

  onItemRemove = (event, value) => {
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
      disabled,
      classes,
      isExpanded,
      onMoreClick,
      type,
      onChange,
      theme, // eslint-disable-line no-unused-vars
      windowEvents, // eslint-disable-line no-unused-vars
      ...other
    } = this.props

    const {visibleItemsCount} = this.state
    const resultClassName = classnames(
      className,
      classes.root,
      classes[type],
      disabled ? classes.isDisabled : classes.isEnabled,
      isExpanded && classes.isExpanded
    )
    const count = React.Children.count(children)
    const items = React.Children.map(children, (child, i) => {
      if (!child.type || child.type.displayName !== 'ruiTagsInputItem')
        throw new Error(
          'Child component should be instance of <TagsInputItem />'
        )
      const isHidden =
        !isExpanded && visibleItemsCount !== null && visibleItemsCount <= i
      return cloneElement(child, {
        nodeRef: ref => {
          this.saveItemsRefs(ref, i, count)
        },
        className: classnames(
          child.props.className,
          classes.item,
          isHidden && classes.isHidden
        ),
        key: child.props.children,
        onRemove: onChange ? this.onItemRemove : undefined,
        type,
        disabled
      })
    })
    const moreCount =
      visibleItemsCount === null ? 0 : items.length - visibleItemsCount

    return (
      <div className={resultClassName} {...other}>
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
              onClick={disabled ? undefined : onMoreClick}>
              +{moreCount}
            </div>
          )}
        </div>
      </div>
    )
  }
}
