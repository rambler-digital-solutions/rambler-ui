import { Component } from 'react'
import { provideDocModules } from utils
import ChildrenContent from 'doc/components/ChildrenContent'
import SideMenu from 'doc/components/SideMenu'
import Helmet from 'react-helmet'

import css from './index.css'

// Список компонентов, которые показываем в меню
const reqContext = require.context('../../../src', true, /^\.\/.+\/__doc__\/index\.js$/)
const docModules = provideDocModules(reqContext)

export default class ComponentsPage extends Component {

  render() {
    // текущий компонент
    let { component = '' } = this.props.params
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
          <Breadcrumbs docModules={ docModules } componentName={ component } className={ css.Content__breadcrumbs } />
          <div className={ css.Content__wrapper }>
            <ChildrenContent componentName={ component } docModules={ docModules } />
          </div>
        </div>
      </div>
    )
  }

}
