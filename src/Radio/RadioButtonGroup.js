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
     * Имя, которое будет применяться ко всей группе radio.
     * Генерируется автоматически, если не указано
     */
    name: PropTypes.string,
    /**
     * Колбэк, который вызывается при нажатии на input и меняет state radioButtonGroup.
     */
    onChangeState: PropTypes.func,
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
    value: null,
    name: null
  }

  componentWillMount() {
    this.setState({
      value: (!!this.props.value) ? this.props.value : null,
      name: (!!this.props.name) ? this.props.name : this.nameHelper()
    })
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.value !== nextProps.value)
      this.setValue(nextProps.value)
  }

  setValue(value) {
    if (this.state.value !== value)
      this.setState({ value })
  }

  nameHelper() {
    return `RadioGroup-${((Math.floor(Math.random() * 10000)).toString(36))}`
  }

  onChangeValue = (event) => {
    if (this.props.onChangeState)
      this.props.onChangeState(event, event.target.value)
  }

  render() {
    /* eslint-disable no-unused-vars */
    const {
      labelPosition,
      styleForGroup,
      className,
      sheet: { classes: css }
    } = omit(this.props, 'theme')
    const name = this.state.name
    /* eslint-disable no-unused-vars */
    const labelWrap = classnames(css.labelWrap, className)
    let i = 0

    const options = React.Children.map(this.props.children, (child) => {
      if (!child.type || child.type.displayName !== 'ruiRadioButton')
        return child

      /* eslint-disable no-unused-vars */
      const {
        value,
        style,
        disabled,
        labelStyle,
        onChange,
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
              labelStyle,
              key: ++i,
              onChange: (...args) => {
                if (onChange)
                  onChange(...args)
                this.onChangeValue(...args)
              },
              ...other
            })
          }
        </div>
      )
    }, this)

    const resultClassName = classnames(css.radioButtonGroup, className)

    return (
      <div className={resultClassName} style={styleForGroup}>
          {options}
      </div>
    )

  }

}
