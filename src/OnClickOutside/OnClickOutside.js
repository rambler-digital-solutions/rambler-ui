import {Component} from 'react'
import PropTypes from 'prop-types'
import {findDOMNode} from 'react-dom'
import throttle from 'lodash.throttle'
import windowEvents from '../hoc/window-events'

@windowEvents('touchstart', 'click')
export default class OnClickOutside extends Component {
  static propTypes = {
    /**
     * Функция обработчик
     */
    handler: PropTypes.func.isRequired
  }

  onClick = throttle(e => {
    let outsideClick = true
    let el = e.target
    let insideBody = false
    while (el.parentNode) {
      if (el === this.componentNode) {
        outsideClick = false
        break
      }
      if (el === document.body) insideBody = true
      el = el.parentNode
    }
    if (!outsideClick || !insideBody) return
    this.props.handler(e)
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
