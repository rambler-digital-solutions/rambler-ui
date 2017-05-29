import {Component} from 'react'
import PropTypes from 'prop-types'
import {findDOMNode} from 'react-dom'
import debounce from 'lodash/debounce'
import windowEvents from '../hoc/window-events'


@windowEvents('touchstart', 'click')
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
