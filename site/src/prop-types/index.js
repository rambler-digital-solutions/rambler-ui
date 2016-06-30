import { PropTypes } from 'react'

export const DocModule = PropTypes.shape({
  /**
   * Полное название модуля с компонентом, например forms/TextInput
   */
  name: PropTypes.string,
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
  childrenDocModules: PropTypes.arrayOf(DocModule),
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
    description: PropTypes.string,
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
