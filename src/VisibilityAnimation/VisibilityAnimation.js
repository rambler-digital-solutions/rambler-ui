import {Component, cloneElement} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

/**
 * Позволяет оборачиваемому элементу реализовать анимации появления/скрытия.
 *
 * Например совместо с `@renderToLayer`:
 * - после монтирования в DOM происходит анимация появления
 * - перед размонтированием - анимация скрытия
 *
 *  @renderToLayer
 *  class Popup extends Component {
 *
 *    render() {
 *      return (
 *        <VisibilityAnimation
 *          isVisible={this.props.isOpened}
 *          className={css.normal}
 *          activeClassName={css.active}
 *          animationDuration={200}
 *          onVisible={this.props.onOpen}
 *          onInvisible={this.props.onClose}>
 *          {children}
 *         </VisibilityAnimation>
 *       )
 *     }
 *
 *  }
 */
export default class VisibilityAnimation extends Component {
  static propTypes = {
    /**
     * Контролирует видимость
     */
    isVisible: PropTypes.bool,
    /**
     * Начальный css-класс
     */
    className: PropTypes.string,
    /**
     * CSS-класс активного состояния
     */
    activeClassName: PropTypes.string.isRequired,
    /**
     * Таймаут для анимации в ms
     */
    animationDuration: PropTypes.number.isRequired,
    /**
     * Коллбек вызывающийся перед показом
     */
    onWillVisible: PropTypes.func,
    /**
     * Коллбек вызывающийся после показа
     */
    onVisible: PropTypes.func,
    /**
     * Коллбек вызывающийся перед скрытием
     */
    onWillInvisible: PropTypes.func,
    /**
     * Коллбек вызывающийся после скрытия
     */
    onInvisible: PropTypes.func
  }

  static defaultProps = {
    isVisible: false,
    onWillVisible: () => {},
    onVisible: () => {},
    onWillInvisible: () => {},
    onInvisible: () => {}
  }

  status = null

  state = {
    isVisible: false
  }

  componentDidMount() {
    if (this.props.isVisible) this.delayTimeout = setTimeout(this.show, 60)
  }

  componentWillReceiveProps({isVisible}) {
    if (isVisible !== this.props.isVisible) {
      clearTimeout(this.delayTimeout)

      if (isVisible) this.delayTimeout = setTimeout(this.show, 60)
      else this.hide()
    }
  }

  componentWillUnmount() {
    clearTimeout(this.delayTimeout)
    clearTimeout(this.animationTimeout)
  }

  show = () => {
    if (this.status === 'showing') return
    this.status = 'showing'
    this.props.onWillVisible()
    clearTimeout(this.animationTimeout)

    this.setState({
      isVisible: true
    })

    this.animationTimeout = setTimeout(() => {
      this.status = null
      this.props.onVisible()
    }, this.props.animationDuration)
  }

  hide = () => {
    if (this.status === 'hiding') return
    this.status = 'hiding'
    this.props.onWillInvisible()
    clearTimeout(this.animationTimeout)

    this.setState({
      isVisible: false
    })

    this.animationTimeout = setTimeout(() => {
      this.status = null
      this.props.onInvisible()
    }, this.props.animationDuration)
  }

  render() {
    const {isVisible} = this.state

    const {children, className, activeClassName} = this.props

    const childProps = children.props || {}

    return cloneElement(children, {
      className: classnames(
        childProps.className,
        className,
        isVisible && activeClassName
      )
    })
  }
}
