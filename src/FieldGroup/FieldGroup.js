import React, { PureComponent, Children, cloneElement } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import omit from 'lodash/omit'
import defaults from 'lodash/defaults'
import { injectSheet } from '../theme'
import { isolateMixin } from '../style/mixins'

@injectSheet(() => ({
  root: {
    extend: isolateMixin,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    '& > *': {
      flex: 1,
      flexBasis: 0
    },
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
      sheet: { classes: css },
      children,
      ...props
    } = omit(this.props, 'theme')

    return (
      <div style={style} className={classnames(className, css.root)}>
        {Children.map(children, child => cloneElement(
          child,
          defaults({}, child.props, props)
        ))}
      </div>
    )
  }

}
