/**
 * Компонент radioButtonGroup
 */
import React, { Component, PropTypes, cloneElement} from 'react'
// import RadioButton from './RadioButton'

import classnames from 'classnames'
import omit from 'lodash/omit'
import { injectSheet } from '../theme'
import { isolateMixin } from '../style/mixins'

@injectSheet(() => ({
  radioButtonGroup: {
    display: 'block'
  },
  labelWrap: {
    ...isolateMixin,
    width: '100%'
  }
}))
export default class RadioButtonGroup extends Component {

  static propTypes = {
    /**
     * Количество дочерних узлов - radio
     */
    children: PropTypes.node,
    /**
     * Css - класс компонента
     */
    className: PropTypes.string,
    /**
     * Значение по умолчанию выбранного radio
     */
    defaultSelect: PropTypes.any,
    /**
     * Позиция label - либо слева, либо справа
     */
    labelPosition: PropTypes.oneOf(['left', 'right']),
    /**
     * Имя, которое будет применяться ко всем radio
     */
    name: PropTypes.string,
    /**
     * Колбэк, который вызывается при нажатии на input.
     * '{object}' event `change` event targeting the selected
     * radio button.
     * '{*}' value The `value` of the selected radio button.
     */
    onChange: PropTypes.func,
    /**
     * Добавление стандартных стилей для группы
     */
    styleForGroup: PropTypes.object,
    /**
     * Значение, выбранного в данный момент radio
     */
    valueSelected: PropTypes.any
  }

  static defaultProps = {
    labelPosition: 'right',
    styleForGroup: {},
    name: null
  }

  state = {
    value: null
  }

  componentWillMount() {
    this.setValue(this.props.value)
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.value !== nextProps.value)
      this.setValue(nextProps.value)
  }

  setValue(value) {
    // console.log(value)
    if (this.state.value !== value)
      this.setState({ value })
  }

  handleChange = (event) => {
    if (this.props.onChange)
      this.props.onChange(event, event.target.value)
  }

  handleName = () => {
    if (!this.props.name)
      return `RadioGroup-${((Math.floor(Math.random() * 10000)).toString(36))}`
  }

  render() {

    /* eslint-disable no-unused-vars */
    const {
      labelPosition,
      block,
      styleForGroup,
      sheet: { classes: css }
    } = omit(this.props, 'theme')
    const name = this.props.name || this.handleName()
    /* eslint-disable no-unused-vars */
    const labelWrap = classnames(css.labelWrap)
    let i = 0

    const options = React.Children.map(this.props.children, (child) => {
      if (!child.type || child.type.displayName !== 'ruiRadioButton')
        return child

      /* eslint-disable no-unused-vars */
      const {
        value,
        style,
        disabled,
        onFocus,
        onBlur,
        ...other
      } = child.props
      /* eslint-disable no-unused-vars */

      const isSelected = value === this.state.value
      return (
        <div className={labelWrap}>
          {
            cloneElement(child, {
              name,
              value,
              style,
              disabled,
              labelPosition,
              isSelected,
              key: ++i,
              onChange: this.handleChange,
              onFocus,
              onBlur,
              ...other
            })
          }
        </div>
      )
    }, this)

    const resultClassName = classnames(css.radioButtonGroup)

    return (
      <div className={resultClassName} style={styleForGroup}>
          {options}
      </div>
    )

  }

}
