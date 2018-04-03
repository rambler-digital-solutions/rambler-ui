import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { injectSheet } from '../theme'
import { isolateMixin } from '../utils/mixins'

const setThemeForSelector = colors => ({
  color: colors.text,
  '& $switcher': {
    backgroundColor: colors.background
  },
  '& $track': {
    backgroundColor: colors.track
  }
})

@injectSheet(theme => ({
  root: {
    ...isolateMixin,
    fontFamily: theme.fontFamily,
    fontSize: theme.switcher.fontSize,
    position: 'relative',
    display: 'inline-flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    verticalAlign: 'top',
    lineHeight: theme.switcher.height + 'px',
    cursor: 'pointer',
    ...setThemeForSelector(theme.switcher.colors.default.default),
    '&:hover': setThemeForSelector(theme.switcher.colors.default.hover),
    '&:active': setThemeForSelector(theme.switcher.colors.default.active),
    '&$disabled': setThemeForSelector(theme.switcher.colors.default.disabled)
  },
  checked: {
    ...setThemeForSelector(theme.switcher.colors.checked.default),
    '&:hover': setThemeForSelector(theme.switcher.colors.checked.hover),
    '&:active': setThemeForSelector(theme.switcher.colors.checked.active),
    '&$disabled': setThemeForSelector(theme.switcher.colors.checked.disabled),
    '& $track': {
      left: theme.switcher.width - theme.switcher.height + theme.switcher.trackMargin
    }
  },
  disabled: {
    pointerEvents: 'none'
  },
  left: {
    flexDirection: 'row',
    '& $label': {
      marginLeft: theme.switcher.labelMargin
    }
  },
  right: {
    flexDirection: 'row-reverse',
    '& $label': {
      marginRight: theme.switcher.labelMargin
    }
  },
  checkbox: {
    position: 'absolute',
    opacity: 0,
    appearance: 'none',
    pointerEvents: 'none'
  },
  switcher: {
    position: 'relative',
    flexShrink: 0,
    borderRadius: 9999,
    marginTop: 1,
    width: theme.switcher.width,
    height: theme.switcher.height,
    transitionProperty: 'background',
    transitionDuration: theme.switcher.animationDuration
  },
  track: {
    position: 'absolute',
    top: theme.switcher.trackMargin,
    left: theme.switcher.trackMargin,
    width: theme.switcher.height - (2 * theme.switcher.trackMargin),
    height: theme.switcher.height - (2 * theme.switcher.trackMargin),
    borderRadius: 9999,
    transitionProperty: 'left, background',
    transitionDuration: theme.switcher.animationDuration
  },
  label: {
    cursor: 'pointer',
    fontWeight: 'normal',
    lineHeight: 1.43
  }
}), {name: 'Switcher'})
export default class Switcher extends PureComponent {

  static propTypes = {
    /**
     * Имя элемента
     */
    name: PropTypes.string,
    /**
     * Будет недоступен, если `true`
     */
    disabled: PropTypes.bool,
    /**
     * CSS-класс контейнера
     */
    className: PropTypes.string,
    /**
     * Стили контейнера
     */
    style: PropTypes.object,
    /**
     * CSS-класс переключателя
     */
    switcherClassName: PropTypes.string,
    /**
     * Стили переключателя
     */
    switcherStyle: PropTypes.object,
    /**
     * CSS-класс ползунка
     */
    trackClassName: PropTypes.string,
    /**
     * Стили ползунка
     */
    trackStyle: PropTypes.object,
    /**
     * CSS-класс подписи
     */
    labelClassName: PropTypes.string,
    /**
     * Стили подписи
     */
    labelStyle: PropTypes.object,
    /**
     * C какой стороны показывать переключатель
     */
    iconPosition: PropTypes.oneOf(['left', 'right']),
    /**
     * Будет включен, если `true`
     */
    checked: PropTypes.bool.isRequired,
    /**
     * Подпись переключателя
     */
    children: PropTypes.node,
    /**
     * Коллбек изменения состояния переключателя `onCheck(event, checked)`
     */
    onCheck: PropTypes.func.isRequired
  }

  static defaultProps = {
    checked: false,
    disabled: false,
    iconPosition: 'left',
    onCheck: () => {}
  }

  state = {
    checked: false
  }

  get css() {
    return this.props.classes
  }

  componentWillMount() {
    this.switch(this.props.checked)
  }

  componentWillReceiveProps(nextProps) {
    this.switch(nextProps.checked)
  }

  switch(checked) {
    if (this.checked !== checked) {
      this.checked = checked

      this.setState({
        checked
      })
    }
  }

  onCheck = (event) => {
    const checked = event.target.checked

    this.switch(checked)
    this.props.onCheck(event, checked)
  }

  render() {
    const {checked} = this.state

    const {
      className,
      style,
      switcherClassName,
      switcherStyle,
      trackClassName,
      trackStyle,
      labelClassName,
      labelStyle,
      disabled,
      children,
      iconPosition,
      checked: check, // eslint-disable-line no-unused-vars
      theme, // eslint-disable-line no-unused-vars
      classes, // eslint-disable-line no-unused-vars
      onCheck, // eslint-disable-line no-unused-vars
      ...other
    } = this.props

    const rootClassName = classnames(
      this.css.root,
      this.css[iconPosition],
      {
        [this.css.checked]: checked,
        [this.css.disabled]: disabled
      },
      className
    )

    return (
      <label style={style} className={rootClassName}>
        <input
          {...other}
          className={this.css.checkbox}
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={this.onCheck} />
        <span
          style={switcherStyle}
          className={classnames(this.css.switcher, switcherClassName)}>
          <span
            style={trackStyle}
            className={classnames(this.css.track, trackClassName)} />
        </span>
        {children &&
          <span
            style={labelStyle}
            className={classnames(this.css.label, labelClassName)}>
            {children}
          </span>
        }
      </label>
    )
  }

}
