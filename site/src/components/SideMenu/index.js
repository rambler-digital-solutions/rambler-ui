import { Component, PropTypes } from 'react'
import { DocModules } from 'prop-types'
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
          docModules.map((module) => (
            <div className={ css.List__item }>
              <Link
                to={ module.linkToComponent }
                className={ css.List__link }
                activeClassName={ css.isActive }
              >{ module.selfName }</Link>
              {
                item.childrenDocModules &&
                item.childrenDocModules.length &&
                <div className={ css.List__embed }>{ this.renderUl(item.childrenDocModules, level + 1) }</div>
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
