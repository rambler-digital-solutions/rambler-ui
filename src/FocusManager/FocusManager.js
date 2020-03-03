import {PureComponent} from 'react'
import PropTypes from 'prop-types'

export default class FocusManager extends PureComponent {
  static propTypes = {
    tabIndex: PropTypes.number,
    children: PropTypes.func.isRequired
  }

  beforeActiveElement = null

  componentDidMount() {
    const {tabIndex} = this.props
    if (tabIndex == null || tabIndex < 0) return
    this.beforeActiveElement = document.activeElement
  }

  componentWillUnmount() {
    if (
      this.beforeActiveElement &&
      typeof this.beforeActiveElement.focus === 'function'
    )
      this.beforeActiveElement.focus()
  }

  focusElement = element => {
    const {tabIndex} = this.props
    if (!element || tabIndex == null || tabIndex < 0) return
    setTimeout(() => {
      element.tabIndex = tabIndex
      element.focus()
    }, 60)
  }

  render() {
    const {focusElement} = this
    const {children} = this.props
    return children({focusElement})
  }
}
