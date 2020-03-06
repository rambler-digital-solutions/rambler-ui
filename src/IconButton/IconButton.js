import React, {PureComponent, cloneElement, isValidElement} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Spinner from '../Spinner'
import {withStyles} from '../theme'
import {isolateMixin, ifMobile, focusSourceMixin} from '../utils/mixins'
import '../utils/focus-source'

const styles = theme => ({
  button: {
    extend: isolateMixin,
    cursor: 'pointer',
    boxSizing: 'border-box',
    borderRadius: theme.iconButton.borderRadius,
    outline: 'none',
    position: 'relative',
    display: 'inline-block',
    border: 'none !important',
    userSelect: 'none',
    verticalAlign: 'middle',
    '&, & *': {
      transition: 'background-color .2s, border .2s, box-shadow .2s'
    },
    '&:before, &:after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      pointerEvents: 'none',
      borderRadius: theme.iconButton.borderRadius,
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      border: '1px solid transparent',
      transition: 'all .2s'
    },
    '&[disabled]': {
      pointerEvents: 'none'
    },
    '&::-moz-focus-inner': {
      border: 'none !important',
      outline: 'none !important'
    }
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    opacity: 0,
    width: '100%',
    cursor: 'pointer'
  },
  icon: {
    flex: 'none',
    fontSize: theme.iconButton.iconPercentSize + '%',
    width: '1em',
    height: '1em',
    margin: 'auto',
    transition: 'fill .2s',
    '$size-medium &, $size-small &': {
      fontSize: theme.iconButton.sizes.icon,
      ...ifMobile({
        fontSize: theme.iconButton.mobile.sizes.icon
      })
    }
  },
  iconWithStandardColor: {},
  isLoading: {
    pointerEvents: 'none',
    opacity: 0
  },
  loader: {
    fontSize: 3,
    ...ifMobile({
      fontSize: 4
    })
  },
  content: {
    display: 'flex',
    width: '1em',
    height: '1em'
  },
  'size-medium': {
    fontSize: theme.iconButton.sizes.medium,
    ...ifMobile({
      fontSize: theme.iconButton.mobile.sizes.medium
    })
  },
  'size-small': {
    fontSize: theme.iconButton.sizes.small,
    ...ifMobile({
      fontSize: theme.iconButton.mobile.sizes.small
    })
  },
  ...['primary', 'secondary', 'outline', 'flat', 'danger'].reduce(
    (result, type) => {
      const conf = theme.button.types[type]
      const offset = conf.outlineOffset || 0

      const setThemeForSelector = (colors, outlineOffset) => ({
        background: colors.background,
        '&:before': {
          ...(colors.border && {
            borderColor: colors.border
          })
        },
        '&:after': {
          ...(colors.outline && {
            left: -outlineOffset,
            right: -outlineOffset,
            top: -outlineOffset,
            bottom: -outlineOffset,
            borderColor: colors.outline
          })
        },
        '& $iconWithStandardColor': {
          color: colors.icon
        }
      })

      return {
        ...result,
        [`type-${type}`]: {
          ...setThemeForSelector(conf.colors.default, offset),
          '&:hover': setThemeForSelector(conf.colors.hover, offset),
          '&:active': setThemeForSelector(conf.colors.active, offset),
          '&[disabled]': setThemeForSelector(conf.colors.disabled, offset),
          ...focusSourceMixin(
            'other',
            '&:focus',
            setThemeForSelector(conf.colors.focus, offset)
          ),
          '& $loader': {
            color: conf.colors.default.loader
          }
        }
      }
    },
    {}
  )
})

class IconButton extends PureComponent {
  static propTypes = {
    /**
     * Тип стиля кнопки
     */
    type: PropTypes.oneOf([
      'primary',
      'secondary',
      'outline',
      'flat',
      'danger'
    ]),
    /**
     * Если указан href, то кнопка будет ссылкой
     */
    href: PropTypes.string,
    /**
     * Атрибут target для ссылки, если указан атрибут href
     */
    target: PropTypes.string,
    /**
     * Css-класс
     */
    className: PropTypes.string,
    /**
     * Inline-стили
     */
    style: PropTypes.object,
    /**
     * Контент для кнопки
     */
    children: PropTypes.node,
    /**
     * Размер кнопки - small/medium или размер в пикселях
     */
    size: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.oneOf(['small', 'medium'])
    ]),
    /**
     * Обработчик клика
     */
    onClick: PropTypes.func,
    /**
     * Элемент, который содержит контент, например `<Link />`
     * в случае с `react-router`
     */
    container: PropTypes.element,
    /**
     * Элемент, который прозрачно накладывается на кнопку (Например `<input type="file" />`)
     */
    overlay: PropTypes.element,
    /**
     * Отключаем кнопку/ссылку
     */
    disabled: PropTypes.bool,
    /**
     * Тип кнопки
     */
    buttonType: PropTypes.string,
    /**
     * Показывать индикатор загрузки
     */
    loading: PropTypes.bool,
    /**
     * Ширина кнопки
     */
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  }

  static defaultProps = {
    type: 'primary',
    size: 'medium',
    buttonType: 'button'
  }

  renderIcon(icon) {
    if (!icon) return null

    const {type, disabled, classes} = this.props
    const initialProps = icon.props || {}
    const isStandardColor =
      type === 'primary' ||
      type === 'danger' ||
      disabled ||
      !initialProps.hasOwnProperty('color')

    const iconProps = {
      size: null
    }
    if (isStandardColor) iconProps.color = 'currentColor'

    const className = classnames(
      initialProps.className,
      classes.icon,
      isStandardColor && classes.iconWithStandardColor
    )
    const resultProps = {...initialProps, ...iconProps, className}
    return cloneElement(icon, resultProps)
  }

  render() {
    const {
      children,
      type,
      href,
      container,
      buttonType,
      disabled,
      className,
      overlay,
      width,
      loading,
      size,
      style = {},
      classes,
      theme, // eslint-disable-line no-unused-vars
      ...other
    } = this.props

    const iconEl = this.renderIcon(children)

    const isStandardSize = typeof this.props.size !== 'number'

    const resultStyle = {
      width,
      fontSize: isStandardSize ? null : size,
      ...style
    }

    const resultClassName = classnames(
      className,
      classes.button,
      classes[`type-${type}`],
      isStandardSize && classes[`size-${size}`]
    )

    const resultChildren = (
      <span
        className={classnames(classes.content, loading && classes.isLoading)}>
        {iconEl}
        {overlay && cloneElement(overlay, {className: classes.overlay})}
      </span>
    )

    const resultProps = {
      ...other,
      style: resultStyle,
      className: resultClassName,
      disabled: disabled ? 'disabled' : null
    }

    const resultContainer = isValidElement(container) ? (
      container
    ) : href ? (
      <a href={href} />
    ) : overlay ? (
      <div />
    ) : (
      <button type={buttonType} />
    )

    return cloneElement(
      resultContainer,
      resultProps,
      resultChildren,
      loading && <Spinner className={classes.loader} color={null} />
    )
  }
}

export default withStyles(styles, {name: 'IconButton'})(IconButton)
