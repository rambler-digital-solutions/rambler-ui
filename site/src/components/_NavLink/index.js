import { Component, PropTypes } from 'react'
import activeComponent from 'react-router-active-component'
const NavLinkComponent = activeComponent('div')

export default class NavLink extends Component {

  static propTypes = {
    /**
     * Класс ссылки
     */
    linkClassName: PropTypes.string,
    /**
     * Класс элемента
     */
    className: PropTypes.string,
    /**
     * Активный класс, присваивается и ссылке и элементу
     */
    activeClassName: PropTypes.string,
    /**
     * Ссылка
     */
    to: PropTypes.string.isRequired
  }

  render() {
    let {linkProps = {}} = this.props
    let activeClassName = linkProps.activeClassName = this.props.activeClassName || 'is-active'
    linkProps.className = this.props.linkClassName
    return <NavLinkComponent  {...{...this.props, activeClassName, linkProps}}/>
  }
}
