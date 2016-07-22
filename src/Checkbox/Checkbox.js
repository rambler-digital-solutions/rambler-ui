import React, { Component, PropTypes, createElement } from 'react'
import css from './Checkbox.css'
import Tick from '../icons/serviceIcons/Tick'
import classnames from 'classnames'

export default class Checkbox extends Component {
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
    style: PropTypes.object,
    /**
     * Поставить галочку изначально
     */
    checked: PropTypes.bool,
    /**
     * Колбек отрабатывающий при изменении checkbox'a
     */
    onCheck: PropTypes.func
  };
  static defaultProps = {
    labelPosition: 'right',
    disabled: false
  };
  state = {
    checked: false
  }
  onChange = (a, b) => {
    this.toggleCheckbox()
    this.handleCheck(a, b)
  }
  toggleCheckbox() {
    this.setState({
      checked: !this.state.checked
    })
  }
  handleCheck = (event, isInputChecked) => {
    if (this.props.onCheck)
      this.props.onCheck(event, isInputChecked)
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
      [css['float-right']]: labelPosition === 'left'
    })
    direction.label = classnames({
      [css['float-left']]: labelPosition === 'left'
    })
    const labelClasses = classnames([
      css.label,
      direction.label
    ])
    return (
      <div className={`${css.checkbox} ${css[effect]}`} style={style} >
        <input checked={this.state.checked} name={name} id={name} type="checkbox" className={css['real-checkbox']} disabled={disabled} onChange={this.onChange} onSwitch={this.handleCheck}/>
        <span className={`${css['fake-checkbox']} ${direction.checkbox}`}>
          <span className={css.icon}><Tick viewBox="0 0 9 9" style={{width: 9, height: 9}}/></span>
        </span>
        {createElement('label', {
          className: labelClasses,
          htmlFor: name,
          style: labelStyle
        },
        this.props.children)}
      </div>
    )
  }
}
