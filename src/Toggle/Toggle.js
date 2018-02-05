/**
 * Компонент переключателя
 */
import React, { Component, cloneElement } from 'react'
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
    '&$block': {
      display: 'flex'
    },
    '&, & *': {
      transitionDuration: theme.toggle.animationDuration + 'ms',
      transitionProperty: 'background, opacity, border, box-shadow'
    }
  },
  option: {
    '&&': {
      fontFamily: theme.fontFamily,
      textAlign: 'center',
      borderStyle: 'solid',
      color: theme.toggle.colors.default.text,
      borderWidth: 1,
      borderColor: theme.toggle.colors.default.border,
      background: theme.toggle.colors.default.background,
      cursor: 'pointer',
      userSelect: 'none',
      position: 'relative',
      display: 'inline-block',
      marginLeft: -1
    },
    '&:first-child': {
      marginLeft: 0,
      borderTopLeftRadius: theme.toggle.borderRadius,
      borderBottomLeftRadius: theme.toggle.borderRadius
    },
    '&:last-child': {
      borderWidth: 1,
      borderTopRightRadius: theme.toggle.borderRadius,
      borderBottomRightRadius: theme.toggle.borderRadius
    },
    '&:enabled:hover': {
      zIndex: 1
    },
    '&:focus': {
      color: theme.toggle.colors.focus.text
    },
    '&:active': {
      zIndex: 1
    },
    '&:disabled': {
      color: theme.toggle.colors.disabled.text,
      cursor: 'not-allowed'
    }
  },
  isSelected: {
    zIndex: 2,
    '&:enabled:hover': {
      zIndex: 3
    }
  },
  regular: {
    '& $option:disabled': {
      borderColor: theme.toggle.colors.disabled.border
    },
    '& $option:enabled:hover': {
      borderColor: theme.toggle.colors.hover.border,
      // '&:before': borderMixin(theme.toggle.colors.hover.border),
      color: theme.toggle.colors.checked.text
    },
    '& $option:focus': {
      color: theme.toggle.colors.focus.text
    },
    '& $option:active': {
      // '&:before': borderMixin(theme.toggle.colors.active.border),
      color: theme.toggle.colors.active.text,
      background: theme.toggle.colors.active.background
    },
    '& $isSelected:enabled': {
      borderColor: theme.toggle.colors.checked.border,
      color: theme.toggle.colors.checked.text
    },
    '& $isSelected:enabled:hover': {
      borderColor: theme.toggle.colors.checkedHover.border,
      color: theme.toggle.colors.checkedHover.text
    },
    '& $isSelected:disabled': {
      background: theme.toggle.colors.checkedDisabled.background
    }
  },
  transparent: {
    '& $isSelected': {
      background: theme.toggle.transparentColors.checked.background
    },
    '& $option:enabled:hover': {
      background: theme.toggle.transparentColors.hover.background
    },
    '& $option:disabled': {
      borderColor: theme.toggle.transparentColors.disabled.border
    }
  },
  block: {
    flexDirection: 'row',
    flexWrap: 'nowrap'
  },
  equalWidth: {
    '& $option': {
      flex: 1,
      flexBasis: 0
    }
  },
  'behavior-radio': {
    '& $isSelected:enabled': {
      cursor: 'default'
    }
  }
}), {name: 'Toggle'})
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
    disabled: PropTypes.bool,
    /**
     * Разновидность компонента
     */
    variation: PropTypes.oneOf(['regular', 'transparent'])
  };

  static defaultProps = {
    size: 'small',
    behavior: 'radio',
    block: false,
    equalWidth: false,
    disabled: false,
    variation: 'regular'
  };

  state = {
    value: null,
    minWidth: 0
  };

  optionsElements = [];
  addElement = (ref) => {
    this.optionsElements.push(ref)
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
    // Делаем через таймаут т.к. при начально загрузки страницы jss добавляет стили асинхронно
    if (this.shouldCalcMinWidth())
      whenDomReady.then(() => {
        this.setState({ minWidth: this.calcMinWidth() })
      })
  }

  calcMinWidth() {
    return this.optionsElements.reduce((result, el) => Math.max(el ? el.offsetWidth : 0, result), 0)
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
      variation,
      className,
      classes: css,
      ...other
    } = omit(this.props, 'theme')
    this.optionsElements = []
    let i = 0
    const options = React.Children.map(children, (child) => {
      if (!child.type || child.type.displayName !== 'ruiToggleOption')
        throw new Error('Child component should be instance of <ToggleOption />')
      const {value} = child.props
      const isSelected = value === this.state.value
      return cloneElement(child, {
        size,
        disabled,
        isSelected,
        'aria-pressed': isSelected,
        key: child.key !== undefined ? child.key : (typeof value === 'string' || typeof value === 'number') ? value : i++,
        onPress: this.onValueChange,
        nodeRef: this.shouldCalcMinWidth() ? this.addElement : null,
        className: classnames(css.option, isSelected && css.isSelected, child.props.className),
        style: {...child.props.style, minWidth: this.state.minWidth}
      })
    })

    const resultClassName = classnames(
      className,
      css.toggle,
      css[`behavior-${behavior}`],
      block && css.block,
      css[variation],
      equalWidth && css.equalWidth
    )

    return (
      <div { ...other } className={ resultClassName }>
        { options }
      </div>
    )
  }

}
