/**
 * Компонент radioButtonGroup
 */
import React, { Component, PropTypes } from 'react'
import RadioButton from './RadioButton'

import classnames from 'classnames'
import omit from 'lodash/omit'
import { injectSheet } from '../theme'

@injectSheet(() => ({
  radioButtonGroup: {
    display: 'flex'
  },
  block: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'baseline'
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
    name: PropTypes.string.isRequired,
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
     * Отображать как блочный или не блочный элемент
     */
    block: PropTypes.bool,
    /**
     * Значение, выбранного в данный момент radio
     */
    valueSelected: PropTypes.any
  }

  static defaultProps = {
    labelPosition: 'right',
    block: false,
    styleForGroup: {}
  }

  state = {
    value: null
  }

  componentWillMount() {
    this.setValue(this.props.value)
  }

  componentWillReceiveProps(nextProps) {
    this.setValue(nextProps)
  }

  componentDidMount() {
    this.setValue(this.props.value)
  }

  setValue(value) {
    if (this.state.value !== value)
      this.setState({ value })
  }

  handleChange = (event) => {
    if (this.props.onChange)
      this.props.onChange(event, event.target.value)
  }

  render() {
    /* eslint-disable no-unused-vars */
    const {
      name,
      labelPosition,
      block,
      styleForGroup,
      sheet: { classes: css }
    } = omit(this.props, 'theme')
    /* eslint-disable no-unused-vars */
    let i = 0

    const options = React.Children.map(this.props.children, (child) => {
      if (!child instanceof RadioButton)
        throw new Error('Child component should be instance of <RadioButton />')

      /* eslint-disable no-unused-vars */
      const {
        value,
        label,
        style,
        ...other
      } = child.props
      /* eslint-disable no-unused-vars */

      const isSelected = value === this.state.value

      return (
          <RadioButton
            name={name}
            value={value}
            label={label}
            labelPosition={labelPosition}
            ref={value}
            key={++i}
            style={style}
            onChange={::this.handleChange}
            isSelected={isSelected}
            {...other}
          />
      )
    }, this)

    const resultClassName = classnames(css.radioButtonGroup, {
      [css.block]: block
    })

    return (
      <div className={resultClassName} style={styleForGroup}>
          {options}
      </div>
    )

  }

}
