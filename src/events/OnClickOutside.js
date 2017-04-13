import {Component, PropTypes} from 'react'
import {findDOMNode} from 'react-dom'
import EventEmitter from 'events'
import debounce from 'lodash/debounce'

const clickEvents = new EventEmitter
clickEvents.setMaxListeners(0)

window.addEventListener('click', (event) => {
  clickEvents.emit('click', event)
}, true)

window.addEventListener('touchstart', (event) => {
  clickEvents.emit('touchstart', event)
}, true)


export default class OnClickOutside extends Component {

  static propTypes = {
    /**
     * Функция обработчик
     */
    handler: PropTypes.func.isRequired
  };

  onClick = debounce((e) => {
    let outsideClick = true
    let el = e.target
    while (el.parentNode) {
      if (el === this.componentNode) {
        outsideClick = false
        break
      }
      el = el.parentNode
    }
    if (!outsideClick)
      return
    this.props.handler(e)
  })

  componentDidMount() {
    this.componentNode = findDOMNode(this)
    clickEvents.on('click', this.onClick)
    clickEvents.on('touchstart', this.onClick)
  }

  componentWillUnmount() {
    clickEvents.removeListener('click', this.onClick)
    clickEvents.removeListener('touchstart', this.onClick)
  }

  render() {
    return this.props.children
  }

}
