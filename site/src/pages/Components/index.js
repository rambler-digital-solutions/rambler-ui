import { Component } from 'react'
import ChildrenContent from 'components/ChildrenContent'
import Breadcrumbs from 'components/Breadcrumbs'
import Helmet from 'react-helmet'

import css from './index.css'
import docModules from 'doc-modules'
// Список компонентов, которые показываем в меню


export default class ComponentsPage extends Component {

  render() {
    // текущий компонент
    let { component = '' } = this.props.match.params
    component = component.replace(/^\/{0,}(.*?)\/{0,}$/, '$1')

    let title = 'Компоненты'
    if (component)
      title += ' - ' + component

    return (
      <div className={ css.Wrapper }>
        <Helmet title={ title } />
        <div className={ css.Content }>
          {component &&
            <Breadcrumbs docModules={ docModules } currentComponentName={ component } className={ css.Content__breadcrumbs } />
          }
          <div className={ css.Content__wrapper }>
            <ChildrenContent
              currentComponentName={ component }
              rootComponentName={ component }
              docModules={ docModules }
            />
          </div>
        </div>
      </div>
    )
  }

}
