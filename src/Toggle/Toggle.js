/**
 * Компонент переключателя
 */
import React, { Component, cloneElement } from 'react'
import { findDOMNode } from 'react-dom'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import omit from 'lodash/omit'
import { injectSheet } from '../theme'
import { isolateMixin } from '../style/mixins'

const whenDomReady = new Promise((resolve) => {
  if (document.readyState === 'complete')
    resolve()
  else
    window.addEventListener('load', resolve)
})

@injectSheet(theme => ({
  toggle: {
    ...isolateMixin,
    fontFamily: theme.fontFamily,
    display: 'inline-block',
    '&$block': { display: 'flex' },
    '&, & *': {
      transitionDuration: theme.toggle.animationDuration + 'ms',
      transitionProperty: 'background, opacity, border, box-shadow'
    }
  },
  option: {
    fontFamily: theme.fontFamily,
    textAlign: 'center',
    borderStyle: 'solid',
    borderColor: theme.toggle.colors.default.border,
    color: theme.toggle.colors.default.text,
    borderWidth: 1,
    background: theme.toggle.colors.default.background,
    cursor: 'pointer',
    userSelect: 'none',
    position: 'relative',
    display: 'inline-block',
    '&:not(:first-child)': {
      marginLeft: -1
    },
    '&:last-child': {
      borderWidth: 1,
      borderTopRightRadius: theme.toggle.borderRadius,
      borderBottomRightRadius: theme.toggle.borderRadius
    },
    '&:first-child': {
      borderTopLeftRadius: theme.toggle.borderRadius,
      borderBottomLeftRadius: theme.toggle.borderRadius
    },
    '&:hover': {
      zIndex: 2,
      borderColor: theme.toggle.colors.hover.border,
      // '&:before': borderMixin(theme.toggle.colors.hover.border),
      color: theme.toggle.colors.checked.text
    },
    '&:focus': {
      zIndex: 2,
      color: theme.toggle.colors.focus.text
    },
    '&$isSelected': {
      zIndex: 3,
      borderColor: theme.toggle.colors.checked.border,
      color: theme.toggle.colors.checked.text
    },
    '&:active': {
      // '&:before': borderMixin(theme.toggle.colors.active.border),
      color: theme.toggle.colors.active.text,
      background: theme.toggle.colors.active.background
    }
  },
  block: {
    flexDirection: 'row',
    flexWrap: 'nowrap'
  },
  isSelected: {
    zIndex: 3
  },
  isDisabled: {
    opacity: 0.5,
    '& *': { pointerEvents: 'none !important' }
  },
  equalWidth: {
    '& $option': {
      flex: 1,
      flexBasis: 0
    }
  },
  'behavior-radio': {
    '& $option$isSelected': { cursor: 'default' }
  }
}))
export default class Toggle extends Component {

  static propTypes = {
    /**
     * Выбранное значение переключателя
     */
    value: PropTypes.any,
    /**
     * Функция, вызывающая при изменении значения `function (event: object, newValue: any) {}`
     */
    onChange: PropTypes.func,
    /**
     * Класс контейнера
     */
    className: PropTypes.string,
    /**
     * CSS-стили переключателя
     */
    style: PropTypes.object,
    /**
     * Опции переключателя, обязаны быть компонентами типа `<ToggleOption/>`
     */
    children: PropTypes.node,
    /**
     * Размер компонента
     */
    size: PropTypes.oneOf(['small', 'medium']),
    /**
     * Опция, определяющая, поведение переключателя:
     * `radio` - кнопку нельзя отжать
     * `toggle` - кнопку можно отжать
     */
    behavior: PropTypes.oneOf(['radio', 'toggle']),
    /**
     * Отображать переключатель как блочный элемент (т.е. он будет растянут на всю ширину родительского элемента)
     */
    block: PropTypes.bool,
    /**
     * Все опции переключателя должны быть одинаковой ширины
     */
    equalWidth: PropTypes.bool,
    /**
     * Перевод компонента в состояние disabled
     */
    disabled: PropTypes.bool
  };

  static defaultProps = {
    size: 'small',
    behavior: 'radio',
    block: false,
    equalWidth: false
  };

  state = {
    value: null,
    minWidth: 0
  };

  optionsElements = [];

  onValueChange = (event, value) => {
    if (value === this.value && this.props.behavior === 'toggle')
      value = null
    this.setValue(value)
    if (this.props.onChange)
      this.props.onChange(event, value)
  };

  componentWillMount() {
    this.setValue(this.props.value)
  }

  componentWillReceiveProps(nextProps) {
    this.setValue(nextProps.value)
  }

  componentDidMount() {
    // Делаем через таймаут т.к. при начально загрузки страницы jss добавляет стили асинхронно
    if (this.shouldCalcMinWidth())
      whenDomReady.then(() => {
        this.setState({ minWidth: this.calcMinWidth() })
      })
  }

  calcMinWidth() {
    let minWidth = 0
    this.optionsElements.forEach(el => {
      el = findDOMNode(el)
      minWidth = Math.max(el ? el.offsetWidth : 0, minWidth)
    })
    return minWidth
  }

  shouldCalcMinWidth() {
    return this.props.equalWidth && !this.props.block
  }

  setValue(value) {
    if (this.value !== value) {
      this.value = value
      this.setState({ value })
    }
  }

  render() {
    const {
      children,
      size,
      block,
      equalWidth,
      behavior,
      disabled,
      className,
      sheet: { classes: css },
      ...other
    } = omit(this.props, 'theme')
    let i = 0
    this.optionsElements = []
    const options = React.Children.map(children, (child) => {
      if (!child.type || child.type.displayName !== 'ruiToggleOption')
        throw new Error('Child component should be instance of <ToggleOption />')
      const isSelected = child.props.value === this.state.value
      const resultClassName = classnames(css.option, {
        [css.isSelected]: isSelected
      })
      let ref = null
      if (this.shouldCalcMinWidth())
        ref = (el) => { this.optionsElements.push(el) }

      return cloneElement(child, {
        ref,
        size,
        isSelected,
        key: ++i,
        onPress: this.onValueChange,
        className: classnames(child.props.className, resultClassName),
        style: {...child.props.style, minWidth: this.state.minWidth}
      })
    })

    const resultClassName = classnames(
      css.toggle,
      css[`behavior-${behavior}`],
      {
        [css.block]: block,
        [css.equalWidth]: equalWidth,
        [css.isDisabled]: disabled
      },
      className
    )

    return (
      <div { ...other } className={ resultClassName }>
        { options }
      </div>
    )
  }

}
