import React, { Component, PropTypes, createElement } from 'react'
import css from './Checkbox.css'
import Tick from '../icons/serviceIcons/Tick'
import classnames from 'classnames'

export default class Checkbox extends Component {
  constructor() {
    super()
    this.toggleCheckbox = ::this.toggleCheckbox
  }
  componentDidMount() {
    if (this.props.checked) this.setState({checked: true})
  }

  static propTypes = {
    /**
     * Имя чекбокса
     */
    name: PropTypes.string.isRequired,
    /**
     * Отключение чекбокса
     */
    disabled: PropTypes.bool,
    /**
     * С какой стороны от чекбокса будет label
     */
    labelPosition: PropTypes.string,
    /**
     * Стили обертки для label и чекбокса
     */
    style: PropTypes.object
  };
  static defaultProps = {
    labelPosition: 'right',
    disabled: false
  };
  state = {
    checked: false
  }
  toggleCheckbox() {
    this.setState({
      checked: !this.state.checked
    })
  }

  render() {
    const {
      effect,
      name,
      style,
      disabled,
      labelStyle,
      labelPosition
    } = this.props
    const direction = {}
    direction.checkbox = classnames({
      [css.floatRight]: labelPosition === 'left'
    })
    direction.label = classnames({
      [css.floatLeft]: labelPosition === 'left'
    })
    const lableClasses = classnames([
      css.label,
      direction.label
    ])
    return (
      <div className={`${css.checkbox} ${css[effect]}`} style={style} >
        <input checked={this.state.checked} name={name} id={name} type="checkbox" className={css.realCheckbox} disabled={disabled} onChange={this.toggleCheckbox} />
        <span className={`${css.fakeCheckbox} ${direction.checkbox}`}>
          <span className={css.icon}><Tick viewBox="0 0 9 9" style={{width: 9, height: 9}}/></span>
        </span>
        {createElement('label', {
          className: lableClasses,
          htmlFor: name,
          style: labelStyle
        },
        this.props.children)}
      </div>
    )
  }
}
