/**
 * Компонент переключателя
 */
import React, { Component, PropTypes, cloneElement } from 'react'
import classnames from 'classnames'
import omit from 'lodash/omit'
import ToggleOption from './ToggleOption'
import { injectSheet } from '../theme'
import { borderMixin, isolateMixin } from '../style/mixins'

@injectSheet(theme => ({
  toggle: {
    ...isolateMixin,
    display: 'inline-block',
    '&$block': { display: 'flex' },
    '&, & *': {
      transitionDuration: '.2s',
      transitionProperty: 'background, opacity, border, box-shadow'
    }
  },
  option: {
    textAlign: 'center',
    borderStyle: 'solid',
    borderColor: theme.toggle.color,
    borderWidth: '1px 0px 1px 1px',
    cursor: 'pointer',
    userSelect: 'none',
    position: 'relative',
    display: 'inline-block',
    '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      pointerEvents: 'none',
      left: -1,
      top: -1,
      right: -1,
      bottom: -1
    },
    '&:last-child': { borderWidth: 1 },
    '&:active, &:active$isSelected': { background: theme.toggle.activeBgColor },
    '&:hover': { zIndex: 2 },
    '&:hover:before': borderMixin(theme.toggle.hoverColor),
    '&$isSelected': {
      background: theme.toggle.selectedBgColor,
      color: theme.toggle.selectedColor
    },
    '&$isSelected:before': borderMixin(theme.toggle.selectedColor)
  },
  block: {
    flexDirection: 'row',
    flexWrap: 'nowrap'
  },
  isSelected: {
    zIndex: 1
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
      setTimeout(
        (() => this.setState({ minWidth: this.calcMinWidth() })),
        0
      )
  }

  calcMinWidth() {
    let minWidth = 0
    this.optionsElements.forEach(el => {
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
      sheet: { classes: css },
      ...other
    } = omit(this.props, 'theme')
    let i = 0
    this.optionsElements = []
    const options = React.Children.map(children, (child) => {
      if (!child instanceof ToggleOption)
        throw new Error('Child component should be instance of <ToggleOption />')
      const isSelected = child.props.value === this.state.value
      const resultClassName = classnames(css.option, {
        [css.isSelected]: isSelected
      })

      let ref = null
      if (this.shouldCalcMinWidth())
        ref = (el) => { this.optionsElements.push(el) }

      return (
        <div
          ref={ ref }
          className={ resultClassName }
          key={ ++i }
          style={{ minWidth: this.state.minWidth }} >
        {
          cloneElement(child, {
            isSelected,
            size,
            onPress: this.onValueChange
          })
        }
        </div>
      )
    }, this)

    const resultClassName = classnames(
      css.toggle,
      css[`behavior-${behavior}`],
      {
        [css.block]: block,
        [css.equalWidth]: equalWidth,
        [css.isDisabled]: disabled
      }
    )

    return (
      <div { ...other } className={ resultClassName }>
        { options }
      </div>
    )
  }

}
