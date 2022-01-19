import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import uuid from '../utils/uuid'
import {withStyles} from '../theme'
import {isolateMixin, focusSourceMixin} from '../utils/mixins'
import {RadioButtonContext} from './context'
import {subscribeFocusEvents} from '../utils/focus-source'

subscribeFocusEvents()

const isSimpleType = value =>
  typeof value === 'string' ||
  typeof value === 'number' ||
  typeof value === 'boolean' ||
  value === null ||
  value === undefined

const styles = theme => ({
  root: {
    extend: isolateMixin,
    fontFamily: theme.fontFamily,
    fontSize: theme.radio.fontSize,
    fontWeight: theme.radio.fontWeight,
    display: 'flex',
    width: '100%',
    cursor: 'pointer',
    position: 'relative',
    userSelect: 'none',
    '&:not(:last-child)': {
      marginBottom: theme.radio.marginBottom
    }
  },
  isDisabled: {
    pointerEvents: 'none',
    cursor: 'not-allowed'
  },
  regular: {
    color: theme.radio.types.regular.colors.default.text,
    '&$isDisabled': {
      color: theme.radio.types.regular.colors.disabled.text
    },
    '& $fake': {
      borderColor: theme.radio.types.regular.colors.default.dotBorder,
      background: theme.radio.types.regular.colors.default.dotBackground,
      color: theme.radio.types.regular.colors.default.dot
    },
    '&$isChecked $fake': {
      borderColor: theme.radio.types.regular.colors.checked.dotBorder,
      background: theme.radio.types.regular.colors.checked.dotBackground
    },
    '&$isEnabled:hover $fake': {
      borderColor: theme.radio.types.regular.colors.hover.dotBorder,
      color: theme.radio.types.regular.colors.hover.dot
    },
    ...focusSourceMixin('other', '& $real:focus + $fake', {
      borderColor: theme.radio.types.regular.colors.focus.dotBorder
    }),
    '&$isEnabled:active $fake': {
      borderColor: theme.radio.types.regular.colors.active.dotBorder,
      background: theme.radio.types.regular.colors.active.dotBackground,
      color: theme.radio.types.regular.colors.active.dot
    },
    '&$isDisabled $fake': {
      borderColor: theme.radio.types.regular.colors.disabled.dotBorder,
      color: theme.radio.types.regular.colors.disabled.dot,
      background: theme.radio.types.regular.colors.disabled.dotBackground
    }
  },
  awesome: {
    color: theme.radio.types.awesome.colors.default.text,
    '&$isDisabled': {
      color: theme.radio.types.awesome.colors.disabled.text
    },
    '& $fake': {
      borderColor: theme.radio.types.awesome.colors.default.dotBorder,
      background: theme.radio.types.awesome.colors.default.dotBackground,
      color: theme.radio.types.awesome.colors.default.dot
    },
    '&$isChecked $fake': {
      borderColor: theme.radio.types.awesome.colors.checked.dotBorder,
      background: theme.radio.types.awesome.colors.checked.dotBackground
    },
    '&$isEnabled:hover $fake': {
      borderColor: theme.radio.types.awesome.colors.hover.dotBorder,
      color: theme.radio.types.awesome.colors.hover.dot
    },
    '&$isEnabled$isChecked:hover $fake': {
      borderColor: 'transparent',
      background: theme.radio.types.awesome.colors.checkedHover.dotBackground
    },
    ...focusSourceMixin('other', '& $real:focus + $fake', {
      borderColor: theme.radio.types.awesome.colors.focus.dotBorder
    }),
    '&$isDisabled $fake': {
      borderColor: theme.radio.types.awesome.colors.disabled.dotBorder,
      color: theme.radio.types.awesome.colors.disabled.dot,
      background: theme.radio.types.awesome.colors.disabled.dotBackground
    },
    '&$isDisabled$isChecked $fake': {
      borderColor: 'transparent',
      color: theme.radio.types.awesome.colors.disabled.dotBackground,
      background: theme.radio.types.awesome.colors.disabled.dot
    }
  },
  real: {
    fontFamily: theme.fontFamily,
    position: 'absolute',
    opacity: '0',
    appearance: 'none',
    pointerEvents: 'none'
  },
  fake: {
    flex: 'none',
    display: 'inline-block',
    verticalAlign: 'middle',
    position: 'relative',
    boxSizing: 'border-box',
    borderRadius: '50%',
    width: theme.radio.sizes.size,
    height: theme.radio.sizes.size,
    border: '1px solid',
    marginTop: Math.ceil((theme.radio.lineHeight - theme.radio.sizes.size) / 2),
    transitionDuration: theme.radio.animationDuration,
    transitionProperty: 'border-color, background-color, color',
    '&:after': {
      boxSizing: 'border-box',
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      margin: 'auto',
      width: theme.radio.sizes.dotSize,
      height: theme.radio.sizes.dotSize,
      transform: 'scale(0.5, 0.5)',
      opacity: 0,
      transitionDuration: 'inherit',
      transitionProperty: 'opacity, transform, background-color',
      background: 'currentColor',
      borderRadius: '50%'
    },
    '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      width: theme.radio.sizes.size + theme.radio.outline.width,
      height: theme.radio.sizes.size + theme.radio.outline.width,
      borderRadius: '50%',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      border: `solid ${theme.radio.outline.color}`,
      borderWidth: 0,
      transitionDuration: 'inherit',
      transitionProperty: 'border-width'
    },
    '$isChecked &:after': {
      transform: 'scale(1, 1)',
      opacity: 1
    },
    '$labelright &': {
      marginRight: theme.radio.sizes.labelMargin
    },
    '$labelleft &': {
      marginLeft: theme.radio.sizes.labelMargin
    },
    '$isEnabled:active &:before': {
      borderWidth: theme.radio.outline.width
    }
  },
  label: {
    display: 'inline-block',
    verticalAlign: 'middle',
    lineHeight: theme.radio.lineHeight + 'px',
    '$labelleft &': {
      order: -1,
      marginRight: 'auto'
    }
  },
  isChecked: {},
  isEnabled: {},
  labelleft: {},
  labelright: {}
})

class RadioButton extends PureComponent {
  static propTypes = {
    /**
     * Выбранное значение radioButton
     */
    value: PropTypes.any.isRequired,
    /**
     * Если true, RadioButton задизэйблен
     */
    disabled: PropTypes.bool,
    /**
     * Css-класс root-компонента(radioButton)
     */
    className: PropTypes.string,
    /**
     * Css-класс span-radio
     */
    radioClassName: PropTypes.string,
    /**
     * Css-класс span-label
     */
    labelClassName: PropTypes.string,
    /**
     * Переопределение стандартных стилей компонента radioButton
     */
    style: PropTypes.object,
    /**
     * Переопределение стандартных стилей label
     */
    labelStyle: PropTypes.object,
    /**
     * Позиция label - либо слева, либо справа
     */
    labelPosition: PropTypes.oneOf(['left', 'right']),
    /**
     * Разновидность инпута
     */
    variation: PropTypes.oneOf(['regular', 'awesome']),
    /**
     * Контент поля
     */
    children: PropTypes.node
  }

  static defaultProps = {
    labelPosition: 'right',
    value: null,
    disabled: false,
    style: {},
    labelStyle: {},
    variation: 'regular'
  }

  static contextType = RadioButtonContext

  constructor(props) {
    super(props)
    this.setInputValue(this.props.value)
  }

  get isChecked() {
    return this.inputValue === this.context.getValue()
  }

  componentDidMount() {
    this.context.events.on('updateValue', this.onUpdateValue)
    if (this.input) this.input.checked = this.isChecked
  }

  componentDidUpdate(prevProps) {
    if (this.props.value !== prevProps.value)
      this.setInputValue(this.props.value)
    if (this.input) this.input.checked = this.isChecked
  }

  componentWillUnmount() {
    this.context.events.removeListener('updateValue', this.onUpdateValue)
  }

  setInputValue(value) {
    this.inputValue = value
    this.stringValue = isSimpleType(value) ? String(value) : uuid()
  }

  onUpdateValue = () => {
    this.forceUpdate()
  }

  onChange = event => {
    this.context.events.emit('newValue', event, this.props.value)
    // оставляем для обратной совместимости
    // eslint-disable-next-line react/prop-types
    if (this.props.onChange) this.props.onChange(event, this.inputValue)
  }

  render() {
    const {
      children,
      labelPosition,
      disabled,
      className,
      radioClassName,
      labelClassName,
      labelStyle,
      variation,
      classes,
      onFocus,
      onBlur,
      theme, // eslint-disable-line no-unused-vars
      value, // eslint-disable-line no-unused-vars
      onChange, // eslint-disable-line no-unused-vars, react/prop-types
      ...other
    } = this.props

    const rootClassName = classnames(
      className,
      classes.root,
      classes[variation],
      classes[`label${labelPosition}`],
      disabled ? classes.isDisabled : classes.isEnabled,
      this.isChecked && classes.isChecked
    )

    return (
      <label className={rootClassName} {...other}>
        <input
          className={classes.real}
          type="radio"
          ref={input => {
            this.input = input
          }}
          name={this.context.getName()}
          value={this.stringValue}
          disabled={disabled}
          onChange={this.onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        <span className={classnames(radioClassName, classes.fake)} />
        <span
          className={classnames(labelClassName, classes.label)}
          style={labelStyle}>
          {children}
        </span>
      </label>
    )
  }
}

export default withStyles(styles, {name: 'RadioButton'})(RadioButton)
