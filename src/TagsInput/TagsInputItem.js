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
  theme => ({
    root: {
      extend: isolateMixin,
      display: 'inline-flex',
      fontSize: theme.tagsInput.fontSize,
      lineHeight: theme.tagsInput.height + 'px',
      color: theme.tagsInput.colors.default.text,
      whiteSpace: 'nowrap',
      pointerEvents: 'none'
    },
    text: {
      flex: '0 1 auto',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },
    icon: {
      flex: 'none',
      fontSize: 15,
      width: '1em',
      height: '1em',
      alignSelf: 'center',
      color: theme.tagsInput.colors.default.icon,
      fill: 'currentColor',
      cursor: 'pointer',
      pointerEvents: 'auto',
      '&:hover , &:active': {
        color: theme.tagsInput.colors.hover.icon
      }
    },
    isDisabled: {
      color: theme.tagsInput.colors.disabled.text,
      '&& $icon': {
        color: theme.tagsInput.colors.disabled.icon,
        cursor: 'not-allowed'
      }
    }
  }),
  {name: 'TagsInputItem'}
)
class TagsInputItem extends Component {
  static propTypes = {
    /**
     * Дополнительный CSS-класс (автоматически проставляется компонентом `<TagsInput/>`)
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
     * Коллбек для получения ссылки на элемент, принимает ref в качестве аргумента (автоматически проставляется компонентом `<TagsInput/>`)
     */
    nodeRef: PropTypes.func,
    /**
     * Отключить элемент (автоматически проставляется компонентом `<TagsInput/>`)
     */
    disabled: PropTypes.bool
  }

  handleClick = event => {
    const {value, onClick} = this.props
    onClick(event, value)
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
      classes,
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
          disabled && classes.isDisabled
        )}
        style={style}
        ref={nodeRef}>
        <span className={classes.text}>{children}</span>
        {onClick && (
          <ClearIcon
            className={classes.icon}
            size={null}
            style={iconStyle}
            onClick={disabled ? undefined : this.handleClick}
            onMouseDown={disabled ? undefined : this.handleMouseDown}
            role={disabled ? undefined : 'button'}
          />
        )}
      </div>
    )
  }
}
TagsInputItem.displayName = 'ruiTagsInputItem'

export default TagsInputItem
