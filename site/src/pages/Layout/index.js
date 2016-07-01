import { Component } from 'react'
import css from './index.css'
import Helmet from 'react-helmet'
import Link from 'react-router'

export default class Layout extends Component {

  render() {
    const { params: { location } } = this.props
    const menuItems = [{
      name: 'Установка',
      route: '/install'
    }, {
      name: 'Компоненты',
      route: '/components'
    }, {
      name: 'Разработка',
      router: '/contribute'
    }]
    return <div className={ classnames(css.Layout, css.Layout + '_route_' + location.pathname.match(/^\/?([^\/]+)/)[1]) }>
      <Helmet titleTemplate="Rambler UI - %s" defaultTitle="Rambler UI" />
      <div className={ css.Menu }>
        {
          menuItems.map(item =>
            <Link className={ css.Menu__item } activeClassName={ css.isActive } to={ item.route }>{ item.name }</Link>
          )
        }
      </div>
      <div className={ css.Layout__content }>
        { this.props.children }
      </div>
    </div>
  }

}
