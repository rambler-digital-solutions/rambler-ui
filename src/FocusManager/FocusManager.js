import {PureComponent} from 'react'
import PropTypes from 'prop-types'

export default class FocusManager extends PureComponent {
  static propTypes = {
    tabIndex: PropTypes.number,
    children: PropTypes.func.isRequired
  }

  beforeActiveElement =
    this.props.tabIndex != null && this.props.tabIndex > -1
      ? document.activeElement
      : null

  componentWillUnmount() {
    if (
      this.beforeActiveElement &&
      typeof this.beforeActiveElement.focus === 'function'
    )
      this.beforeActiveElement.focus()
  }

  focusRef = element => {
    const {tabIndex} = this.props
    if (!element || tabIndex == null || tabIndex < 0) return
    setTimeout(() => {
      element.tabIndex = tabIndex
      element.focus()
    }, 60)
  }

  render() {
    return this.props.children(this.focusRef)
  }
}
