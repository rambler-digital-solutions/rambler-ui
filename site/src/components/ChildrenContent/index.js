import { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { DocModules } from 'prop-types'

import css from './index.css'

/**
 * Рендерит обертку вокруг компонента
 */
function ComponentWrapper(props) {
  const {
    title,
    name,
    description,
    linkToComponent,
    linkToCode,
    children,
    ...other
  } = props
  return (
    <div className={ css.ComponentWrapper } { ...other } >
      <div className={ css.ComponentWrapper__header } >
        <Link className={ css.ComponentWrapper__link } to={ linkToComponent }>
          <h2 className={ css.ComponentWrapper__title } id={ name }>{ title || name }</h2>
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
        childrenDocModules.map(({ name, title, linkToComponent }, i) => (
          <div key={ i } className={ css.ChildrenLinks__item }>
            <Link className={ css.ChildrenLinks__link } to={ linkToComponent }>
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
    currentComponentName: PropTypes.string,
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
    const rootDocModules = rootComponentName ?
      [docModules.dict[rootComponentName]] : docModules.rootDocModules
    return (
      <div className={ css.Content } data-level={ level }>
        {
          rootDocModules.map((module, i) => {
            const {
              name,
              linkToComponent,
              linkToCode,
              childrenDocModules = [],
              module: {
                title,
                description,
                hideChildrenIfNotCurrent,
                DocIfNotCurrent,
                default: Doc
              }
            } = module
            const renderChildrenDoc = () => (
              childrenDocModules.map(({ name: childName }) => (
                <ChildrenContent
                  {...{ docModules, currentComponentName }}
                  rootComponentName={ childName }
                  level={ level + 1 }
                  key={ childName }
                  />
              ))
            )
            let result
            if (name !== currentComponentName)
              if (hideChildrenIfNotCurrent)
                result = <ChildrenLinks childrenDocModules={ childrenDocModules } />
              else if (DocIfNotCurrent)
                result = <DocIfNotCurrent {...{ renderChildrenDoc }} >
                  <ChildrenLinks childrenDocModules={ childrenDocModules } />
                </DocIfNotCurrent>
              else if (Doc)
                result = <Doc {...{ renderChildrenDoc }} />
              else // рендерим дочерние компоненты
                result = renderChildrenDoc()
            else
              if (Doc)
                result = <Doc {...{ renderChildrenDoc }} />
              else
                result = renderChildrenDoc()
            return <ComponentWrapper
              {...{
                description,
                title,
                name,
                linkToComponent,
                linkToCode
              }}
              key={ i }
            >{ result }</ComponentWrapper>
          })
        }
      </div>
    )
  }

}
