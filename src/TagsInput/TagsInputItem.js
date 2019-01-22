/**
 * Компонент TagsInputItem
 */
import React, {Component, cloneElement} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {isolateMixin} from '../utils/mixins'
import {injectSheet} from '../theme'
import ClearIcon from './ClearIcon'

const iconStyle = {
  fill: null
}

@injectSheet(
  ({tagsInput}) => ({
    root: {
      extend: isolateMixin,
      display: 'inline-flex',
      fontSize: tagsInput.fontSize,
      whiteSpace: 'nowrap',
      pointerEvents: 'none',
      transition: 'background-color .2s'
    },
    icon: {
      alignSelf: 'center',
      fill: 'currentColor'
    },
    text: {
      flex: '0 1 auto',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      transition: 'color .2s'
    },
    remove: {
      order: 1,
      flex: 'none',
      fontSize: 15,
      width: '1em',
      height: '1em',
      alignSelf: 'center',
      pointerEvents: 'auto',
      transition: 'fill .2s'
    },
    isClickable: {
      pointerEvents: 'auto'
    },
    isEnabled: {
      '&$isClickable, & $remove': {
        cursor: 'pointer'
      }
    },
    isDisabled: {
      '&$isClickable, & $remove': {
        cursor: 'not-allowed'
      }
    },
    ...['regular', 'background'].reduce((result, type) => {
      const typeTheme = tagsInput.types[type]
      const {height, colors} = typeTheme
      return {
        ...result,
        [type]: {
          borderRadius: typeTheme.borderRadius,
          lineHeight: `${height}px`,
          '& $icon': {
            marginLeft: typeTheme.iconLeftMargin
          },
          '& $text': {
            marginLeft: typeTheme.paddingLeft
          },
          '& $text:only-child, & $icon + $text': {
            marginRight: typeTheme.paddingRight
          },
          '& $icon ~ $text': {
            marginLeft: typeTheme.iconRightMargin
          },
          '& $remove': {
            marginRight: typeTheme.removeRightMargin,
            marginLeft: typeTheme.removeLeftMargin
          },
          '&$isEnabled': {
            color: colors.default.text,
            background: colors.default.background,
            '&$isClickable': {
              '&:hover': {
                background: colors.hover.background,
                '& $remove:not(:hover) + $text, & $text:only-child, & $icon + $text': {
                  color: colors.hover.text
                }
              },
              '&:active': {
                background: colors.active.background,
                '& $remove:not(:active) + $text$text, & $text$text:only-child, & $icon + $text$text': {
                  color: colors.active.text
                }
              }
            },
            '& $remove': {
              fill: colors.default.icon,
              '&:hover': {
                fill: colors.hover.icon
              },
              '&:active': {
                fill: colors.active.icon
              }
            }
          },
          '&$isDisabled': {
            color: colors.disabled.text,
            background: colors.disabled.background,
            '& $remove': {
              fill: colors.disabled.icon
            }
          }
        }
      }
    }, {})
  }),
  {name: 'TagsInputItem'}
)
class TagsInputItem extends Component {
  static propTypes = {
    /**
     * Дополнительный CSS-класс
     */
    className: PropTypes.string,
    /**
     * Значение тега, по-умолчанию считается, что это примитив
     */
    value: PropTypes.any.isRequired,
    /**
     * Контент тега
     */
    children: PropTypes.string.isRequired,
    /**
     * Иконка
     */
    icon: PropTypes.node,
    /**
     * Коллбек клика на тег, в качестве аргументов принимает объект события и value
     */
    onClick: PropTypes.func,
    /**
     * Коллбек клика на иконку удаления, в качестве аргументов принимает объект события и value (автоматически проставляется компонентом `<TagsInput/>`)
     */
    onRemove: PropTypes.func,
    /**
     * Коллбек для получения ссылки на элемент, принимает ref в качестве аргумента (автоматически проставляется компонентом `<TagsInput/>`)
     */
    nodeRef: PropTypes.func,
    /**
     * Отключить элемент (автоматически проставляется компонентом `<TagsInput/>`)
     */
    disabled: PropTypes.bool,
    /**
     * Разновидность тега (автоматически проставляется компонентом `<TagsInput/>`)
     */
    type: PropTypes.oneOf(['regular', 'background'])
  }

  static defaultProps = {
    type: 'regular'
  }

  handleClick = event => {
    const {value, onClick} = this.props
    onClick(event, value)
  }

  handleRemoveClick = event => {
    event.stopPropagation()
    const {value, onRemove} = this.props
    onRemove(event, value)
  }

  handleMouseDown = event => {
    event.preventDefault()
  }

  render() {
    const {
      className,
      disabled,
      nodeRef,
      children,
      icon,
      onClick,
      onRemove,
      classes,
      type,
      theme,
      value, // eslint-disable-line no-unused-vars
      ...other
    } = this.props
    return (
      <div
        {...other}
        className={classnames(
          className,
          classes.root,
          classes[type],
          onClick && classes.isClickable,
          disabled ? classes.isDisabled : classes.isEnabled
        )}
        onClick={disabled ? undefined : this.handleClick}
        ref={nodeRef}>
        {icon &&
          cloneElement(icon, {
            className: classnames(classes.icon, icon.props.className),
            size: theme.tagsInput.types[type].iconSize,
            color: (!disabled && icon.props.color) || null
          })}
        {onRemove && (
          <ClearIcon
            className={classes.remove}
            size={null}
            style={iconStyle}
            onClick={disabled ? undefined : this.handleRemoveClick}
            onMouseDown={disabled ? undefined : this.handleMouseDown}
            role={disabled ? undefined : 'button'}
          />
        )}
        <span className={classes.text}>{children}</span>
      </div>
    )
  }
}
TagsInputItem.displayName = 'ruiTagsInputItem'

export default TagsInputItem
