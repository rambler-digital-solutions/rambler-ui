import { Component } from 'react'
import { provideDocModules } from 'utils'
import ChildrenContent from 'components/ChildrenContent'
import SideMenu from 'components/SideMenu'
import Breadcrumbs from 'components/Breadcrumbs'
import Helmet from 'react-helmet'

import css from './index.css'

// Список компонентов, которые показываем в меню
const reqContext = require.context('../../../../src', true, /^\.\/.+\/__doc__\/index\.js$/)
const docModules = provideDocModules(reqContext)

export default class ComponentsPage extends Component {

  render() {
    // текущий компонент
    let { splat: component = '' } = this.props.params
    component = component.replace(/^\/{0,}(.*?)\/{0,}$/, '$1')

    let title = 'Компоненты'
    if (component)
      title += ' - ' + component

    return (
      <div>
        <Helmet title={ title } />
        <div className={ css.SideMenu }>
          <SideMenu docModules={ docModules } />
        </div>
        <div className={ css.Content }>
          <Breadcrumbs docModules={ docModules } currentComponentName={ component } className={ css.Content__breadcrumbs } />
          <div className={ css.Content__wrapper }>
            <ChildrenContent
              currentComponentName={ component }
              rootComponentName={ component }
              docModules={ docModules } />
          </div>
        </div>
      </div>
    )
  }

}
