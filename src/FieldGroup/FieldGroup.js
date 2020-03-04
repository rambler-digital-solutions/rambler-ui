import React, {PureComponent, Children, cloneElement} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {injectSheet} from '../theme'
import {isolateMixin} from '../utils/mixins'

const styles = theme => ({
  root: {
    extend: isolateMixin,
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    '& > *': {
      flex: 1,
      flexBasis: 0
    },
    '& input': {
      '&, &:disabled': {
        backgroundColor: 'transparent'
      },
      '&, &:disabled, &:enabled:hover': {
        borderColor: 'transparent'
      }
    },
    '& > :nth-child(n+2)': {
      marginLeft: -1
    },
    '&:before': {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      border: '0 solid',
      borderColor: theme.field.colors.default.outline,
      content: '""',
      transition: `all ${theme.field.animationDuration}ms ease`
    },
    '&:not($disabled):hover:before': {
      borderColor: theme.field.colors.hover.outline
    }
  },
  disabled: {
    '&:before': {
      borderColor: theme.field.colors.disabled.outline
    }
  },
  regular: {
    backgroundColor: theme.field.colors.default.background,
    '&$disabled': {
      backgroundColor: theme.field.colors.disabled.background
    },
    '&:before': {
      borderRadius: theme.field.borderRadius,
      borderWidth: 1
    }
  },
  awesome: {
    composes: ['$regular']
  },
  promo: {
    '&:before': {
      paddingTop: 1,
      borderBottomWidth: 1
    }
  },
  showDivider: {
    '& > :not(:last-child) input': {
      borderRightColor: theme.field.colors.default.outline
    },
    '&:hover > :not(:last-child) input': {
      borderRightColor: theme.field.colors.hover.outline
    }
  }
})

class FieldGroup extends PureComponent {
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
    disabled: PropTypes.bool,
    /**
     * Разделитель между инпутами группы
     */
    showDivider: PropTypes.bool
  }

  static defaultProps = {
    variation: 'awesome',
    showDivider: false
  }

  render() {
    const {
      className,
      style,
      classes,
      children,
      disabled,
      variation,
      showDivider,
      theme, // eslint-disable-line no-unused-vars
      ...props
    } = this.props

    const count = Children.count(children)
    let i = 1

    return (
      <div
        style={style}
        className={classnames(
          className,
          classes.root,
          classes[variation],
          disabled && classes.disabled,
          showDivider && classes.showDivider
        )}>
        {Children.map(children, child => {
          if (!child) return
          let groupPosition = 'middle'
          if (i === 1) groupPosition = 'start'
          else if (i === count) groupPosition = 'end'
          i++
          return cloneElement(child, {
            ...props,
            disabled,
            variation,
            groupPosition
          })
        })}
      </div>
    )
  }
}

export default injectSheet(styles, {name: 'FieldGroup'})(FieldGroup)
