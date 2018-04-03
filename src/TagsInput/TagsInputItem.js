/**
 * Компонент TagsInputItem
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { isolateMixin } from '../utils/mixins'
import { injectSheet } from '../theme'
import ClearIcon from '../icons/forms/ClearIcon'

const iconStyle = {
  fill: null
}

@injectSheet((theme) => ({
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
    alignSelf: 'center',
    color: theme.tagsInput.colors.default.icon,
    stroke: 'currentColor',
    fill: 'currentColor',
    marginTop: 1,
    marginLeft: 6,
    cursor: 'pointer',
    pointerEvents: 'auto',
    '&:hover , &:active': {
      color: theme.tagsInput.colors.hover.icon
    }
  },
  isDisabled: {
    color: theme.tagsInput.colors.disabled.text,
    '&& $icon': {
      color: theme.tagsInput.colors.disabled.icon
    }
  }
}), {name: 'TagsInputItem'})
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

  handleClick = (event) => {
    const {props} = this
    props.onClick(event, props.value)
  }

  handleMouseDown = (event) => {
    event.preventDefault()
  }

  render() {
    const {props} = this
    const {classes} = props
    return (
      <div
        className={classnames(props.className, classes.root, props.disabled && classes.isDisabled)}
        ref={props.nodeRef}
      >
        <span className={classes.text}>
          {props.children}
        </span>
        {props.onClick &&
          <ClearIcon
            className={classes.icon}
            size={8}
            style={iconStyle}
            onClick={props.disabled ? undefined : this.handleClick}
            onMouseDown={props.disabled ? undefined : this.handleMouseDown}
            role={props.disabled ? undefined : 'button'}
          />
        }
      </div>
    )
  }
}
TagsInputItem.displayName = 'ruiTagsInputItem'

export default TagsInputItem
