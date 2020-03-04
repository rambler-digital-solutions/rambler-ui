import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {injectSheet} from '../theme'
import Dropdown from '../Dropdown'

@injectSheet(
  () => ({
    dropdown: {
      transition: 'none',
      animation: 'none',
      width: '100%'
    },
    overlay: {
      width: '100%'
    },
    suggest: {
      width: '100%',
      background: 'white',
      boxShadow: '1px 2px 5px 0 rgba(102, 116, 166, 0.15)'
    }
  }),
  {name: 'SuggestDropdown'}
)
export default class SuggestDropdown extends React.PureComponent {
  static propTypes = {
    /**
     * Признак того, открыт ли дропдаун
     */
    isOpened: PropTypes.bool,
    /**
     * Нода, к которой привязывается дропдаун
     */
    anchor: PropTypes.node,
    /**
     * Дополнительный класс для дропдауна
     */
    className: PropTypes.string,
    /**
     * Вставлять ли dropdown внутри body
     */
    appendToBody: PropTypes.bool,
    /**
     * 	Автоматическое позиционирование дропдауна по оси Y (если выходит за пределы экрана)
     */
    autoPositionY: PropTypes.bool,
    /**
     * Переопределение стилей дропдауна
     */
    style: PropTypes.object
  }

  static defaultProps = {
    isOpened: false,
    anchor: null,
    className: '',
    autoPositionY: false,
    appendToBody: true,
    overlayClassName: '',
    style: {},
    setNode: () => {}
  }

  render() {
    const {
      children,
      isOpened,
      anchor,
      appendToBody,
      autoPositionY,
      dropdownStyle,
      dropdownClassName,
      classes
    } = this.props

    return (
      <Dropdown
        isOpened={isOpened}
        anchor={anchor}
        padding={false}
        style={dropdownStyle}
        className={classnames(classes.dropdown, dropdownClassName)}
        appendToBody={appendToBody}
        anchorFullWidth={true}
        autoPositionY={autoPositionY}
        anchorPointY="bottom"
        contentPointY="top"
        overlayClassName={classes.overlay}
        cachePositionOptions={false}
        closeOnClickOutside={false}>
        <div className={classes.suggest}>{children}</div>
      </Dropdown>
    )
  }
}
