import React, { PureComponent, Children, cloneElement } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { injectSheet } from '../theme'
import { isolateMixin } from '../style/mixins'

@injectSheet(() => ({
  root: {
    extend: isolateMixin,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    '& > :nth-child(1n+2) input': {
      borderLeftWidth: 0,
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0
    },
    '& > :not(:last-child) input': {
      borderRightWidth: 0,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0
    }
  }
}))
export default class FieldGroup extends PureComponent {

  static propTypes = {
    /**
     * Класс контейнера
     */
    className: PropTypes.string,
    /**
     * Переопределение стилей контейнера
     */
    style: PropTypes.object,
    /**
     * Размер инпутов группы
     */
    size: PropTypes.oneOf(['small', 'medium']),
    /**
     * Разновидность инпутов группы
     */
    variation: PropTypes.oneOf(['regular', 'awesome', 'promo']),
    /**
     * Статус валидации инпутов группы
     */
    status: PropTypes.oneOf(['error', 'warning', 'success', null]),
    /**
     * Доступность инпутов группы
     */
    disabled: PropTypes.bool
  };

  render() {
    const {
      className,
      style,
      disabled,
      size,
      variation,
      status,
      sheet: { classes: css },
      children
    } = this.props

    return (
      <div style={style} className={classnames(className, css.root)}>
        {Children.map(children, child => cloneElement(
          child,
          {
            disabled: disabled || child.props.disabled,
            size: size || child.props.size,
            status: status || child.props.status,
            variation: variation || child.props.variation
          }
        ))}
      </div>
    )
  }

}
