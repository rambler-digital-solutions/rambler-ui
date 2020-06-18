import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {FixedOverlay, RelativeOverlay} from '../Overlay'
import DropdownContent from './DropdownContent'

export default class Dropdown extends PureComponent {
  static propTypes = {
    /**
     * Функция, возвращающая элемент, к которому привязывается Dropdown. Принимает коллбек для передачи ссылки на ноду в качестве аргумента
     */
    anchor: PropTypes.func.isRequired,
    /**
     * Контент дропдауна
     */
    children: PropTypes.node.isRequired,
    /**
     * CSS класс для контейнера Dropdown
     */
    className: PropTypes.string,
    /**
     * Стили для контейнера Dropdown
     */
    style: PropTypes.object,
    /**
     * CSS класс контейнера оверлея
     */
    overlayClassName: PropTypes.string,
    /**
     * Стили для контейнера оверлея
     */
    overlayStyle: PropTypes.object,
    /**
     * Показывать ли дропдаун
     * Укажите этот параметр, если хотите контроллировать состояние открытия
     */
    isOpened: PropTypes.bool,
    /**
     * Колбек открытия попапа
     */
    onOpen: PropTypes.func,
    /**
     * Колбек закрытия попапа
     */
    onClose: PropTypes.func,
    /**
     * Коллбек вызывающийся при клике вне контента.
     * Используется в случае если необходим полный контроль состояния открытия/закрытия из вне.
     */
    onRequestClose: PropTypes.func,
    /**
     * Закрывать ли при клике вне контента
     */
    closeOnClickOutside: PropTypes.bool,
    /**
     * Точка прикрепления контента по оси X
     */
    contentPointX: PropTypes.oneOf(['left', 'right', 'center']),
    /**
     * Точка прикрепления anchor по оси X
     */
    anchorPointX: PropTypes.oneOf(['left', 'right', 'center']),
    /**
     * Точка прикрепления контента по оси Y
     */
    contentPointY: PropTypes.oneOf(['top', 'bottom', 'center']),
    /**
     * Точка прикрепления anchor по оси Y
     */
    anchorPointY: PropTypes.oneOf(['top', 'bottom', 'center']),
    /**
     * Автоматическое позиционирование по оси Y (если выходит за пределы экрана)
     */
    autoPositionY: PropTypes.bool,
    /**
     * Тянуть контент на всю ширину anchor
     */
    anchorFullWidth: PropTypes.bool,
    /**
     * Вставлять ли dropdown внутри body
     */
    appendToBody: PropTypes.bool,
    /**
     * Паддинги
     * Если паддинг не нужен, нужно передать false
     */
    padding: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    /**
     * Порядок фокусировки элемента
     */
    tabIndex: PropTypes.number,
    /**
     * Показать стрелку
     */
    showArrow: PropTypes.bool
  }

  static defaultProps = {
    closeOnClickOutside: true,
    contentPointX: 'left',
    anchorPointX: 'left',
    contentPointY: 'top',
    anchorPointY: 'bottom',
    autoPositionY: true,
    appendToBody: false,
    tabIndex: null
  }

  Overlay = this.props.appendToBody ? FixedOverlay : RelativeOverlay

  render() {
    const {
      isOpened,
      anchor,
      children,
      autoPositionY,
      anchorFullWidth,
      closeOnClickOutside,
      contentPointX,
      anchorPointX,
      contentPointY,
      anchorPointY,
      onOpen,
      onClose,
      onRequestClose,
      className,
      style,
      padding,
      overlayClassName,
      overlayStyle,
      appendToBody,
      tabIndex,
      showArrow
    } = this.props
    const dropdownProps = {
      onRequestClose,
      closeOnClickOutside,
      anchorFullWidth,
      className,
      style,
      padding,
      tabIndex,
      showArrow
    }
    const overlayProps = {
      anchor,
      contentPointX,
      anchorPointX,
      autoPositionY,
      contentPointY,
      anchorPointY,
      isOpened,
      onContentOpen: onOpen,
      onContentClose: onClose,
      content: <DropdownContent {...dropdownProps}>{children}</DropdownContent>
    }
    if (appendToBody) {
      overlayProps.containerNodeClassName = overlayClassName
      overlayProps.containerNodeStyle = overlayStyle
    } else {
      overlayProps.className = overlayClassName
      overlayProps.style = overlayStyle
    }
    return <this.Overlay {...overlayProps} />
  }
}
