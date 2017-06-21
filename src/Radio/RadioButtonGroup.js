/**
 * Компонент radioButtonGroup
 */
import React, { Component, cloneElement} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import omit from 'lodash/omit'
import { injectSheet } from '../theme'
import { isolateMixin } from '../style/mixins'

function nameHelper() {
  return `RadioGroup-${((Math.floor(Math.random() * 10000)).toString(36))}`
}

@injectSheet((theme) => ({
  radioButtonGroup: {
    ...isolateMixin
  },
  labelWrap: {
    ...isolateMixin,
    '&:not(:last-child)': {
      marginBottom: theme.radio.marginBottom
    }
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
    style: PropTypes.object,
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
    value: PropTypes.any
  }

  static defaultProps = {
    labelPosition: 'right',
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
    const {
      labelPosition,
      className,
      sheet: { classes: css },
      children,
      ...otherRootProps
    } = omit(this.props, 'theme', 'onChange', 'value')
    const name = this.state.name
    const labelWrap = classnames(css.labelWrap, className)
    let i = 0

    const options = React.Children.map(children, (child) => {
      if (!child.type || child.type.displayName !== 'ruiRadioButton')
        return child

      const {
        value,
        onChange,
        ...other
      } = child.props
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
      <div className={resultClassName} {...otherRootProps}>
        {options}
      </div>
    )

  }

}
