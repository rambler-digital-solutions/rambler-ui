import { Component } from 'react'
import { DocModules } from 'internal-prop-types'
import { Link } from 'react-router'

import css from './index.css'

export default class SideMenu extends Component {

  static propTypes = {
    /**
     * Список модулей для отображения в меню
     */
    docModules: DocModules
  }

  renderUl(docModules, level = 0) {
    return (
      <div className={ css.List } data-level={ level }>
        {
          docModules.map((module, i) => (
            <div className={ css.List__item } key={ i }>
              <Link
                to={ module.linkToComponent }
                className={ css.List__link }
                activeClassName={ css['is-active'] }
              >{ module.module.title || module.selfName }</Link>
              {
                module.childrenDocModules &&
                module.childrenDocModules.length ?
                  <div className={ css.List__embed }>{ this.renderUl(module.childrenDocModules, level + 1) }</div> :
                  null
              }
            </div>
          ))
        }
      </div>
    )
  }

  render() {
    return (
      <div className={css.SideMenu}>
        { this.renderUl(this.props.docModules.rootDocModules) }
      </div>
    )
  }

}
