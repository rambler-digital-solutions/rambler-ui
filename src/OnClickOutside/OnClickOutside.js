import {PureComponent} from 'react'
import PropTypes from 'prop-types'
import throttle from 'lodash.throttle'
import windowEvents from '../hoc/window-events'

class OnClickOutside extends PureComponent {
  static propTypes = {
    /**
     * Функция обработчик
     */
    handler: PropTypes.func.isRequired,
    /**
     * Функция возращающая контент
     */
    children: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.windowEvents.on('mousedown', this.onClick)
    this.props.windowEvents.on('touchstart', this.onClick)
  }

  componentWillUnmount() {
    this.props.windowEvents.removeListener('mousedown', this.onClick)
    this.props.windowEvents.removeListener('touchstart', this.onClick)
  }

  componentRef = element => {
    this.componentNode = element
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

  render() {
    return this.props.children(this.componentRef)
  }
}

export default windowEvents('mousedown', 'touchstart')(OnClickOutside)
