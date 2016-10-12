/**
 * Компонент переключателя
 */
import React, { Component, PropTypes, cloneElement } from 'react'
import classnames from 'classnames'
import ToggleOption from './ToggleOption'
import { injectSheet } from '../theme'
import { fontStyleMixin, borderMixin } from '../style/mixins'

@injectSheet(theme => ({
  isSelected: {},
  isDisabled: {},
  Toggle: {
    ...fontStyleMixin(theme.font),
    isolate: true,
    display: 'block',
    '&, & *': { transition: 'all .2s' },
    '&--block': {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'nowrap'
    },
    '&__option': {
      borderStyle: 'solid',
      borderColor: '#ddd',
      borderWidth: '1px 0px 1px 1px',
      cursor: 'pointer',
      userSelect: 'none',
      position: 'relative',
      display: 'inline-block',
      '&:last-child': { borderWidth: 1 },
      '&:before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        pointerEvents: 'none',
        left: -1,
        top: -1,
        right: -1,
        bottom: -1
      }
    },
    '&--block&--equalWidth &__option': {
      flex: 1,
      flexBasis: 0,
      textAlign: 'center'
    },
    '&__option:active, &__option:active$isSelected': { background: '#eee' },
    '&__option:hover': {
      zIndex: 2,
      '&:before': borderMixin('#262626')
    },
    '&__option$isSelected': {
      background: 'rgba(49, 94, 251, 0.1)',
      color: '#315EFB',
      zIndex: 1,
      '&:before': borderMixin('#315EFB')
    },
    '&--behavior-radio &__option$isSelected': { cursor: 'default' },
    '&$isDisabled': {
      opacity: 0.5,
      '& *': { pointerEvents: 'none !important' }
    }
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
    if (this.shouldCalcMinWidth())
      this.setState({ minWidth: this.minWidth })
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
    } = this.props
    let i = 0
    const options = React.Children.map(children, (child) => {
      if (!child instanceof ToggleOption)
        throw new Error('Child component should be instance of <ToggleOption />')
      const isSelected = child.props.value === this.state.value
      const resultClassName = classnames(css.Toggle__option, {
        [css['is-selected']]: isSelected
      })

      let ref = null
      if (this.shouldCalcMinWidth())
        ref = (el) => {
          this.minWidth = Math.max(el ? el.offsetWidth : 0, this.minWidth || 0)
        }

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
      css.Toggle,
      css[`Toggle--size-${size}`],
      css[`Toggle--behavior-${behavior}`],
      {
        [css['Toggle--block']]: block,
        [css['Toggle--equalWidth']]: equalWidth,
        [css['is-disabled']]: disabled
      }
    )

    return (
      <div { ...other } className={ resultClassName }>
        { options }
      </div>
    )
  }

}
