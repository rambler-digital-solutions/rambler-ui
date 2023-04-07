import React, {Component, Children, cloneElement, createRef} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {withStyles} from '../theme'
import {isolateMixin} from '../utils/mixins'
import {TabsContext} from './context'
import {keys} from '../utils/keys'

const styles = theme => ({
  tabs: {
    extend: isolateMixin,
    display: 'inline-flex',
    fontFamily: theme.tabs.fontFamily,
    paddingLeft: theme.tabs.sidePadding,
    paddingRight: theme.tabs.sidePadding
  },
  'position-top': {
    boxShadow: `inset 0 -1px 0px ${theme.tabs.colors.default.outline}`
  },
  'position-bottom': {
    boxShadow: `inset 0 1px 0px ${theme.tabs.colors.default.outline}`
  },
  item: {
    '&&': {
      flex: 'none'
    }
  },
  ...['small', 'medium'].reduce(
    (result, size) => ({
      ...result,
      [`size-${size}`]: {
        '& $item:nth-child(1n+2)': {
          marginLeft: theme.tabs.sizes[size].horizontalGap
        }
      }
    }),
    {}
  ),
  isDisabled: {
    cursor: 'not-allowed'
  }
})

class Tabs extends Component {
  static propTypes = {
    /**
     * Выбранное значение табов
     */
    value: PropTypes.any,
    /**
     * Класс контейнера
     */
    className: PropTypes.string,
    /**
     * CSS-стили корневого элемента
     */
    style: PropTypes.object,
    /**
     * Опции переключателя, обязаны быть компонентами типа `<Tab />`
     */
    children: PropTypes.node,
    /**
     * Размер компонента
     */
    size: PropTypes.oneOf(['small', 'medium']),
    /**
     * Позиционирование табов
     */
    position: PropTypes.oneOf(['top', 'bottom']),
    /**
     * Перевод табов в состояние disabled
     */
    disabled: PropTypes.bool,
    /**
     * Функция, вызывающая при изменении значения `function (event: object, newValue: any) {}`
     */
    onChange: PropTypes.func
  }

  static defaultProps = {
    size: 'small',
    position: 'top',
    disabled: false
  }

  constructor(props) {
    super(props)

    this.tabsRef = createRef()

    this.state = {
      value: props.value
    }
  }

  get contextValue() {
    return {
      position: this.props.position
    }
  }

  componentDidUpdate(prevProps) {
    const {value} = this.props
    if (value !== prevProps.value) this.setValue(value)
  }

  onKeyUp = event => {
    const {children} = this.props

    const value = event.target.dataset.value
    const tabIndex = children.findIndex(child => child.props.value === value)
    const isFirstChild = !tabIndex
    const isLastChild = tabIndex === children.length - 1
    const childrenNodes = this.tabsRef.current.children

    switch (event.key) {
    case keys.ARROW_LEFT: {
      childrenNodes[isFirstChild ? children.length - 1 : tabIndex - 1].focus()

      break
    }

    case keys.ARROW_RIGHT: {
      childrenNodes[isLastChild ? 0 : tabIndex + 1].focus()

      break
    }

    case keys.ENTER: {
      this.handleValueChange(event, children[tabIndex].props.value)

      break
    }

    default:
      break
    }
  }

  setValue(value) {
    if (value === this.state.value) return
    this.setState({value})
  }

  handleValueChange = (event, value) => {
    this.setValue(value)
    if (!this.props.onChange) return
    this.props.onChange(event, value)
  }

  render() {
    const {
      children,
      size,
      position,
      disabled,
      className,
      classes,
      theme, // eslint-disable-line no-unused-vars
      onChange, // eslint-disable-line no-unused-vars
      value, // eslint-disable-line no-unused-vars
      ...other
    } = this.props
    let i = 0

    const tabs = Children.map(children, (child, index) => {
      if (!child.type || child.type.displayName !== 'RamblerUI(TabsItem)')
        throw new Error('Child component should be instance of <Tab />')
      const {className, value} = child.props
      const hasValue = 'value' in child.props
      return cloneElement(child, {
        className: classnames(className, classes.item),
        key:
          child.key !== undefined
            ? child.key
            : typeof value === 'string' || typeof value === 'number'
              ? value
              : i++,
        isSelected: hasValue && child.props.value === this.state.value,
        onKeyUp: hasValue && !disabled ? this.onKeyUp : null,
        onClick: hasValue && !disabled ? this.handleValueChange : null,
        size,
        disabled,
        position,
        tabIndex: !index ? 0 : -1
      })
    })

    return (
      <TabsContext.Provider value={this.contextValue}>
        <div
          {...other}
          role="tablist"
          ref={this.tabsRef}
          {...(disabled && {'aria-disabled': true})}
          className={classnames(
            className,
            classes.tabs,
            classes[`size-${size}`],
            classes[`position-${position}`],
            disabled && classes.isDisabled
          )}>
          {tabs}
        </div>
      </TabsContext.Provider>
    )
  }
}

export default withStyles(styles, {name: 'Tabs'})(Tabs)
