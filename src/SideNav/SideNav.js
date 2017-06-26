/**
 * Компонент боковой навигации
 */
import React, { Component, Children, cloneElement } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import omit from 'lodash/omit'
import { injectSheet } from '../theme'
import { isolateMixin } from '../style/mixins'

@injectSheet(() => ({
  sideNav: {
    ...isolateMixin,
    fontFamily: 'inherit',
    display: 'inline-block',
    '&, & *': {
      transitionDuration: '.2s',
      transitionProperty: 'background, opacity, border, box-shadow'
    }
  },
  block: {
    display: 'block'
  }
}))
export default class SideNav extends Component {

  static propTypes = {
    /**
     * Класс контейнера
     */
    className: PropTypes.string,
    /**
     * CSS-стили навигации
     */
    style: PropTypes.object,
    /**
     * Элементы навигации, обязаны быть компонентами типа `<SideNavItem/>`
     */
    children: PropTypes.node,
    /**
     * Размер компонента:
     * `small` - только иконки
     * `medium` - иконки с текстом
     */
    size: PropTypes.oneOf(['small', 'medium']),
    /**
     * Выбранное значение навигации
     */
    value: PropTypes.any,
    /**
     * Отображать навигацию как блочный элемент (т.е. он будет растянут на всю ширину родительского элемента)
     */
    block: PropTypes.bool,
    /**
     * Функция, вызывающая при изменении значения `function (event: object, newValue: any) {}`
     */
    onChange: PropTypes.func
  }

  static defaultProps = {
    value: null,
    block: false,
    size: 'medium'
  }

  constructor(props) {
    super(props)

    this.state = {
      value: props.value
    }

    this.value = props.value
  }

  componentWillReceiveProps({ value }) {
    this.setValue(value)
  }

  setValue(value) {
    if (value !== this.value) {
      this.value = value
      this.setState({ value })
    }
  }

  onValueChange = (event, value) => {
    this.setValue(value)

    if (this.props.onChange)
      this.props.onChange(event, value)

  }

  render() {
    const {
      size,
      block,
      children,
      className,
      sheet: { classes: css },
      ...other
    } = omit(this.props, 'theme')

    const resultChildren = Children.map(children, child => {
      if (!child.type || child.type.displayName !== 'ruiSideNavItem')
        throw new Error('Child component should be instance of <SideNavItem />')


      const hasValue = 'value' in child.props
      const isSelected = hasValue && child.props.value === this.state.value

      return cloneElement(child, {
        size,
        isSelected,
        ...hasValue && {
          onPress: this.onValueChange
        }
      })
    })

    const resultClassName = classnames(
      css.sideNav,
      {
        [css.block]: block
      },
      className
    )

    return (
      <div {...other} className={resultClassName}>
        {resultChildren}
      </div>
    )
  }

}
