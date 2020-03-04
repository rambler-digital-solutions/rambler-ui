import React, {Component, Children, cloneElement} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {injectSheet} from '../theme'
import {isolateMixin} from '../utils/mixins'

const styles = theme => ({
  sideNav: {
    extend: isolateMixin,
    fontFamily: theme.fontFamily,
    display: 'inline-block'
  },
  block: {
    display: 'block'
  }
})

class SideNav extends Component {
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

  value = this.props.value

  state = {
    value: this.value
  }

  componentDidUpdate() {
    this.setValue(this.props.value)
  }

  setValue(value) {
    if (value !== this.value) {
      this.value = value
      this.setState({value})
    }
  }

  onValueChange = (event, value) => {
    this.setValue(value)

    if (this.props.onChange) this.props.onChange(event, value)
  }

  render() {
    const {
      size,
      block,
      children,
      className,
      classes,
      theme, // eslint-disable-line no-unused-vars
      value, // eslint-disable-line no-unused-vars
      ...other
    } = this.props

    const resultChildren = Children.map(children, child => {
      if (!child.type || child.type.displayName !== 'ruiSideNavItem')
        throw new Error('Child component should be instance of <SideNavItem />')

      const hasValue = 'value' in child.props
      const isSelected = hasValue && child.props.value === this.state.value

      return cloneElement(child, {
        size,
        isSelected,
        ...(hasValue && {
          onPress: this.onValueChange
        })
      })
    })

    const resultClassName = classnames(
      classes.sideNav,
      {
        [classes.block]: block
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

export default injectSheet(styles, {name: 'SideNav'})(SideNav)
