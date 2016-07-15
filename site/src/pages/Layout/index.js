import { Component } from 'react'
import css from './index.css'
import Helmet from 'react-helmet'
import { Link } from 'react-router'
import classnames from 'classnames'
import SideMenu from 'components/SideMenu'
import docModules from 'doc-modules'
import config from 'config'
import { find, compact } from 'lodash'

export default class Layout extends Component {

  state = {
    versions: []
  }

  componentDidMount() {
    this.fetchVersions()
  }

  onVersionChange(e) {
    window.location = `${config.pathPrefix}/${e.target.value}`
  }

  fetchVersions() {
    const req = new XMLHttpRequest()
    req.open('GET', `${config.pathPrefix}/versions.json`, true)
    req.onreadystatechange = () => {
      if (req.readyState === 4 && req.status === 200)
        this.setState({ versions: JSON.parse(req.responseText) })
    }
    req.send(null)
  }

  render() {
    const { location } = this.props
    const { versions } = this.state
    const currentVersion = find(versions, {
      path: compact(window.location.pathname.replace(config.pathPrefix, '').split('/')).join('/')
    })
    const menuItems = [{
      name: 'Компоненты',
      route: '/components'
    }, {
      name: 'Установка',
      route: '/install'
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
            <div className={ css.Menu__items }>
              {
                menuItems.map((item, i) =>
                  <Link key={ i } className={ css.Menu__item } activeClassName={ css['is-active'] } to={ item.route }>{ item.name }</Link>
                )
              }
            </div>
            <div className={ css.Menu__version } >
              <select value={ currentVersion && currentVersion.path } onChange={ ::this.onVersionChange }>
                {
                  versions.map(({ title, path }, i) => (
                    <option key={ i } value={ path }>{ title || path }</option>
                  ))
                }
              </select>
            </div>
          </div>
          <div className={ css.Layout__content }>
            { this.props.children }
          </div>
        </div>
      </div>
    )

  }

}
