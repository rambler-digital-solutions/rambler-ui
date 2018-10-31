/**
 * Компонент TagsInputItem
 */
import React, {Component} from 'react'
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
      lineHeight: tagsInput.height + 'px',
      whiteSpace: 'nowrap',
      pointerEvents: 'none',
      transition: 'background-color .2s'
    },
    text: {
      flex: '0 1 auto',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      transition: 'color .2s'
    },
    icon: {
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
      '&$isClickable, & $icon': {
        cursor: 'pointer'
      }
    },
    isDisabled: {
      '&$isClickable, & $icon': {
        cursor: 'not-allowed'
      }
    },
    ...['regular', 'background'].reduce((result, type) => {
      const typeTheme = tagsInput.types[type]
      const {colors} = typeTheme
      return {
        ...result,
        [type]: {
          borderRadius: typeTheme.borderRadius,
          '& $text': {
            marginLeft: typeTheme.paddingLeft,
            '&:only-child': {
              marginRight: typeTheme.paddingRight
            }
          },
          '& $icon': {
            margin: [0, typeTheme.iconRightMargin, 0, typeTheme.iconLeftMargin]
          },
          '&$isEnabled': {
            color: colors.default.text,
            background: colors.default.background,
            '&$isClickable': {
              '&:hover': {
                background: colors.hover.background,
                '& $icon:not(:hover) + $text, & $text:only-child': {
                  color: colors.hover.text
                }
              },
              '&:active': {
                background: colors.active.background,
                '& $icon:not(:active) + $text$text, & $text$text:only-child': {
                  color: colors.active.text
                }
              }
            },
            '& $icon': {
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
            '& $icon': {
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
     * Inline-стили
     */
    style: PropTypes.object,
    /**
     * Значение тега, по-умолчанию считается, что это примитив
     */
    value: PropTypes.any.isRequired,
    /**
     * Контент тега
     */
    children: PropTypes.string.isRequired,
    /**
     * Коллбек клика на тег, в качестве аргументов принимает объект события и value (автоматически проставляется компонентом `<TagsInput/>`)
     */
    onClick: PropTypes.func,
    /**
     * Коллбек клика на иконку удаления, в качестве аргументов принимает объект события и value
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
      style,
      disabled,
      nodeRef,
      children,
      onClick,
      onRemove,
      classes,
      type,
      theme, // eslint-disable-line no-unused-vars
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
        style={style}
        ref={nodeRef}>
        {onRemove && (
          <ClearIcon
            className={classes.icon}
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
