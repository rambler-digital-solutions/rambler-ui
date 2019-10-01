import {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {findDOMNode} from 'react-dom'
import throttle from 'lodash.throttle'
import windowEvents from '../hoc/window-events'

@windowEvents('touchstart', 'click')
export default class OnClickOutside extends PureComponent {
  static propTypes = {
    /**
     * Функция обработчик
     */
    handler: PropTypes.func.isRequired
  }

  onClick = throttle(event => {
    let outsideClick = true
    let element = event.target
    let insideBody = false
    while (element.parentNode) {
      if (element === this.componentNode) {
        outsideClick = false
        break
      }
      if (element === document.body) insideBody = true
      element = element.parentNode
    }
    if (!outsideClick || !insideBody) return
    this.props.handler(event)
  })

  componentDidMount() {
    this.componentNode = findDOMNode(this)
    this.props.windowEvents.on('click', this.onClick)
    this.props.windowEvents.on('touchstart', this.onClick)
  }

  componentWillUnmount() {
    this.props.windowEvents.removeListener('click', this.onClick)
    this.props.windowEvents.removeListener('touchstart', this.onClick)
  }

  render() {
    return this.props.children
  }
}
