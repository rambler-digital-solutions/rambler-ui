import { PropTypes } from 'react'

function lazyPropType(f) {
  return function (...args) {
    return f().call(this, ...args)
  }
}

export const DocModule = PropTypes.shape({
  /**
   * Полное название модуля с компонентом, например forms/TextInput
   */
  name: PropTypes.string,
  /**
   * Ссылка на компонент
   */
  linkToComponent: PropTypes.string,
  /**
   * Ссылка на код компонента в репозитории
   */
  linkToCode: PropTypes.string,
  /**
   * Название только компонента без namespace, например TextInput
   */
  selfName: PropTypes.string,
  /**
   * Название родительского компонента
   */
  parentName: PropTypes.string,
  /**
   * Дочерние модули
   */
  childrenDocModules: PropTypes.arrayOf(lazyPropType(() => DocModule)),
  /**
   * Сам модуль компонента
   */
  module: PropTypes.shapeOf({
    /**
     * Заголовок компонента
     */
    title: PropTypes.string.isRequired,
    /**
     * Описание компонента (показывается в компоненте ChildrenContent)
     */
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /**
     * Скрывать контент дочерних компонент, если текущий компонент не выбран
     */
    hideChildrenIfNotCurrent: PropTypes.bool,
    /**
     * Компонент
     */
    DocIfNotCurrent: PropTypes.func,
    /**
     * Компонент
     */
    default: PropTypes.func
  })
})

export const DocModules = PropTypes.shape({
  /**
   * Название модуля - значение
   */
  dict: PropTypes.objectOf(DocModule),
  /**
   * Рутовые модули
   */
  rootDocModules: PropTypes.arrayOf(DocModule)
})
