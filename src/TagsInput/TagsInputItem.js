/**
 * Компонент TagsInputItem
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { isolateMixin } from '../style/mixins'
import { injectSheet } from '../theme'
import DelIcon from '../icons/forms/DelIcon'

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
    fill: theme.tagsInput.colors.default.icon,
    marginTop: 5,
    cursor: 'pointer',
    pointerEvents: 'auto',
    '&:hover , &:active': {
      fill: theme.tagsInput.colors.hover.icon
    }
  },
  isDisabled: {
    color: theme.tagsInput.colors.disabled.text,
    '&& $icon': {
      fill: theme.tagsInput.colors.disabled.icon
    }
  }
}))
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
  };

  handleClick = (event) => {
    const {props} = this
    if (props.onClick)
      props.onClick(event, props.value)
  }

  render() {
    const {props} = this
    const {classes} = props.sheet
    return (
      <div
        className={classnames(props.className, classes.root, props.disabled && classes.isDisabled)}
        ref={props.nodeRef}
      >
        <span className={classes.text}>
          {props.children}
        </span>
        <DelIcon
          className={classes.icon}
          size="small"
          style={iconStyle}
          onClick={props.disabled ? undefined : this.handleClick}
          role={props.disabled ? undefined : 'button'}
        />
      </div>
    )
  }
}
TagsInputItem.displayName = 'ruiTagsInputItem'

export default TagsInputItem