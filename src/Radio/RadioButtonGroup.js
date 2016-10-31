/**
 * Компонент radioButtonGroup
 */
import React, { Component, PropTypes, cloneElement} from 'react'

import classnames from 'classnames'
import omit from 'lodash/omit'
import { injectSheet } from '../theme'
import { isolateMixin } from '../style/mixins'

function nameHelper() {
  return `RadioGroup-${((Math.floor(Math.random() * 10000)).toString(36))}`
}

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
    * Имя, которое будет применяться ко всей группе radio.
    * Генерируется автоматически, если не указано
    */
    name: PropTypes.string,
    /**
    * Значение по умолчанию выбранного radio
    */
    defaultSelect: PropTypes.any,
    /**
     * Дочерние узлы - radio
     */
    children: PropTypes.node,
    /**
     * Css - класс компонента
     */
    className: PropTypes.string,
    /**
    * Добавление стандартных стилей для группы
    */
    styleForGroup: PropTypes.object,
    /**
     * Позиция label - либо слева, либо справа
     */
    labelPosition: PropTypes.oneOf(['left', 'right']),
    /**
     * Обязательный колбэк, который вызывается при нажатии на input и меняет state root-компонента.
     */
    onChange: PropTypes.func.isRequired,
    /**
     * Значение, выбранного в данный момент radio
     */
    valueSelected: PropTypes.any
  }

  static defaultProps = {
    labelPosition: 'right',
    styleForGroup: {},
    name: null,
    onChange: () => {}
  }

  state = {
    name: null
  }

  componentWillMount() {
    this.setState({
      name: this.props.name || nameHelper()
    })
  }

  onChangeValue = (event) => {
    if (this.props.onChange)
      this.props.onChange(event, event.target.value)
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
        onChange,
        ...other
      } = child.props
      /* eslint-disable no-unused-vars */
      const isSelected = value === this.props.value
      return (
        <div className={labelWrap}>
          {
            cloneElement(child, {
              name,
              value,
              labelPosition,
              isSelected,
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
