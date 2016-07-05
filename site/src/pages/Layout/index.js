import { Component } from 'react'
import css from './index.css'
import Helmet from 'react-helmet'
import { Link } from 'react-router'
import classnames from 'classnames'
import SideMenu from 'components/SideMenu'
import docModules from 'doc-modules'

export default class Layout extends Component {

  render() {
    const { location } = this.props
    const menuItems = [{
      name: 'Установка',
      route: '/install'
    }, {
      name: 'Компоненты',
      route: '/components'
    }, {
      name: 'Разработка',
      route: '/contribute'
    }]
    return (
      <div className={ classnames(css.Layout, css.Layout + '_route_' + location.pathname.match(/^\/?([^\/]+)/)[1]) }>
        <Helmet titleTemplate="Rambler UI - %s" defaultTitle="Rambler UI" />
        <div className={ css.Layout__left }>
          <SideMenu docModules={ docModules } />
        </div>
        <div className={ css.Layout__right }>
          <div className={ css.Menu }>
            {
              menuItems.map((item, i) =>
                <Link key={ i } className={ css.Menu__item } activeClassName={ css['is-active'] } to={ item.route }>{ item.name }</Link>
              )
            }
          </div>
          <div className={ css.Layout__content }>
            { this.props.children }
          </div>
        </div>
      </div>
    )

  }

}
