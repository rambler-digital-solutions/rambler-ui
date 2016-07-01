import { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { DocModules } from 'prop-types'
import classnames from 'classnames'

import css from './index.css'

export default class Breadcrumb extends Component {

  static propTypes = {
    /**
     * Список модулей для отображения в меню
     */
    docModules: DocModules,
    /**
     * Имя текущего выбранного компонента (если есть)
     */
    currentComponentName: PropTypes.string
  }

  render() {
    const { docModules, currentComponentName } = this.props

    let currentModule = docModules.dict[currentComponentName]
    if (!currentModule)
      return null

    let crumbs = []
    crumbs.push(<span className={ classnames(css.Breadcrumbs__item, css.isActive) }>{ currentModule.selfName }</span>)
    while (currentModule.parentName) {
      currentModule = docModules[currentModule.parentName]
      crumbs.unshift(<span className={ css.Breadcrumbs__divider }>/</span>)
      crumbs.unshift(
        <Link className={ classnames(css.Breadcrumbs__item) } to={ currentModule.linkToComponent }>
          { currentModule.selfName }
        </Link>
      )
    }

    return (
      <div className={ css.Breadcrumbs }>{ crumbs }</div>
    )
  }

}
