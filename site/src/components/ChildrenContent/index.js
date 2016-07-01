import { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { DocModules } from 'prop-types'

import css from './index.css'

/**
 * Рендерит обертку вокруг компонента
 */
function ComponentWrapper({ title, name, description, linkToComponent, linkToCode, children }) {
  return (
    <div className={ css.ComponentWrapper }>
      <div className={ css.ComponentWrapper__header } >
        <Link className={ css.ComponentWrapper__link } to={ linkToComponent }>
          <h2 className={ css.ComponentWrapper__title } id={ name }>{ title || name }</h2>
          <div className={ css.ComponentWrapper__name }>{ name }</div>
        </Link>
        <a className={ css.ComponentWrapper__sourceLink } href={ linkToCode } target="_blank">&#x3C;source/&#x3E;</a>
      </div>

      { !!description && <div className={ css.ComponentWrapper__description }>{ description }</div> }

      <div className={ css.ComponentWrapper__content }>{ children }</div>
    </div>
  )
}

/**
 * Рендерит ссылки на дочерние компоненты
 */
function ChildrenLinks({ childrenDocModules = [] }) {
  if (!childrenDocModules)
    return

  return (
    <div className={ css.ChildrenLinks }>
      {
        childrenDocModules.map(({ name, title }) => (
          <div className={ css.ChildrenLinks__item }>
            <Link className={ css.ChildrenLinks__link } to={ linkToComponent(name) }>
              <span className={ css.ChildrenLinks__title }>{ title }</span>
              <span className={ css.ChildrenLinks__name }>{ name }</span>
            </Link>
          </div>
        ))
      }
    </div>
  )
}

/**
 * Рендерит дочерние компоненты друг за другом
 * Так же пытается отрендерить дочерние компоненты дочерних компонент
 * Если дочерние компоненты дочерних не должны быть отрендерены, рендерит список ссылок на дочерние компоненты
 */
export default class ChildrenContent extends Component {

  static propTypes = {
    /**
     * Список всех модулей
     */
    docModules: DocModules,
    /**
     * Рутовый компонент
     */
    rootComponentName: PropTypes.string,
    /**
     * Имя текущего выбранного компонента (если есть)
     */
    currentComponentName: PropTypes.string
    /**
     * Уровень вложенности
     */
    level: PropTypes.number
  }

  static defaultProps = {
    level: 0
  }

  render() {
    const { docModules, currentComponentName, rootComponentName, level } = this.props
    const childrenDocModules = rootComponentName ?
      (docModules.dict[rootComponentName].childrenDocModules || []) : docModules.rootDocModules

    return (
      <div className={ css.Content } data-level={ level }>
        {
          childrenDocModules.map(function (module) {
            const {
              name,
              childrenDocModules = [],
              module: {
                title,
                description,
                hideChildrenIfNotCurrent,
                DocIfNotCurrent,
                linkToComponent,
                linkToCode,
                default: Doc,
              }
            } = module

            let results

            if (name !== currentComponentName) {
              if (hideChildrenIfNotCurrent)
                result = <ChildrenLinks childrenDocModules={ childrenDocModules } />
              else if (DocIfNotCurrent)
                result = <DocIfNotCurrent>
                  <ChildrenLinks childrenDocModules={ childrenDocModules } />
                </DocIfNotCurrent>
              else if (Doc)
                result = <Doc />
              else if (childrenDocModules.length)
                // рендерим дочерние компоненты
                result = <ChildrenContent
                  allReqContext={ allReqContext }
                  rootComponentName={ name }
                  currentComponentName={ currentComponentName }
                  level={ level + 1 } />
            } else {
              if (Doc)
                result = <Doc />
              else if (childrenDocModules.length)
                result = <ChildrenContent
                  allReqContext={ allReqContext }
                  rootComponentName={ name }
                  currentComponentName={ currentComponentName }
                  level={ level + 1 } />
            }
            return <ComponentWrapper
              description={ description }
              title={ title }
              name={ name }
              linkToComponent={ linkToComponent }
              linkToCode={ linkToCode }
            >{ result }</ComponentWrapper>
          })
        }
      </div>
    )
  }

}
