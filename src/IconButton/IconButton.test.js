import React from 'react'
import IconButton from './IconButton'
import {ThemeProvider} from '../theme'
import {mount, getStyles, getWrapperNode} from '../../test/utils'
import theme from '../theme/base'
import {normalize as nc} from '../utils/colors'
import RamblerMailIcon from '../icons/services/RamblerMailIcon'

const applyTheme = children => <ThemeProvider>{children}</ThemeProvider>

describe('<IconButton />', () => {
  const defaultProps = {
    type: 'primary',
    size: 'medium',
    className: 'my-btn-test',
    ref: () => {},
    onClick: () => {}
  }

  const anchorProps = {
    href: 'http://www.rambler.ru',
    target: '_blank'
  }
  const defaultLinkProps = {
    ref: () => {},
    container: <a {...anchorProps} />
  }

  const defaultDisabledButtonProps = {
    disabled: true,
    ref: () => {}
  }

  it('expect type="primary" size="medium" affect style', () => {
    const wrapper = mount(
      applyTheme(
        <IconButton type="primary" size="medium">
          <RamblerMailIcon />
        </IconButton>
      )
    )
    const styles = getStyles(wrapper)
    const stylesIcon = getStyles(wrapper.find('svg'))
    expect(styles.width).toEqual(theme.iconButton.sizes.medium + 'px')
    expect(styles.height).toEqual(theme.iconButton.sizes.medium + 'px')
    expect(nc(styles['background-color'])).toEqual(
      nc(theme.button.types.primary.colors.default.background)
    )
    expect(Math.round(parseInt(stylesIcon.width))).toEqual(
      theme.iconButton.sizes.icon
    )
    expect(Math.round(parseInt(stylesIcon.height))).toEqual(
      theme.iconButton.sizes.icon
    )
    expect(nc(stylesIcon.fill)).toEqual(
      nc(theme.button.types.primary.colors.default.icon)
    )
  })

  it('expect type="secondary" size="small" affect style', () => {
    const color = '#00FF00'
    const wrapper = mount(
      applyTheme(
        <IconButton type="secondary" size="small">
          <RamblerMailIcon color={color} />
        </IconButton>
      )
    )
    const styles = getStyles(wrapper)
    const stylesIcon = getStyles(wrapper.find('svg'))
    expect(styles.width).toEqual(theme.iconButton.sizes.small + 'px')
    expect(styles.height).toEqual(theme.iconButton.sizes.small + 'px')
    expect(nc(styles['background-color'])).toEqual(
      nc(theme.button.types.secondary.colors.default.background)
    )
    expect(Math.round(parseInt(stylesIcon.width))).toEqual(
      theme.iconButton.sizes.icon
    )
    expect(Math.round(parseInt(stylesIcon.height))).toEqual(
      theme.iconButton.sizes.icon
    )
    expect(nc(stylesIcon.fill)).toEqual(nc(color))
  })

  it('expect type="danger" size={30} affect style', () => {
    const wrapper = mount(
      applyTheme(
        <IconButton type="danger" size={30}>
          <RamblerMailIcon />
        </IconButton>
      )
    )
    const styles = getStyles(wrapper)
    const stylesIcon = getStyles(wrapper.find('svg'))
    expect(styles.width).toEqual(30 + 'px')
    expect(styles.height).toEqual(30 + 'px')
    expect(nc(styles['background-color'])).toEqual(
      nc(theme.button.types.danger.colors.default.background)
    )
    expect(Math.floor(parseInt(stylesIcon.width))).toEqual(
      Math.floor((30 * theme.iconButton.iconPercentSize) / 100)
    )
    expect(Math.floor(parseInt(stylesIcon.height))).toEqual(
      Math.floor((30 * theme.iconButton.iconPercentSize) / 100)
    )
    expect(nc(stylesIcon.fill)).toEqual(
      nc(theme.button.types.danger.colors.default.icon)
    )
  })

  it('callback onClick', () => {
    let event
    const wrapper = mount(
      applyTheme(
        <IconButton
          type="primary"
          size="medium"
          {...defaultProps}
          onClick={e => (event = e)}>
          <RamblerMailIcon />
        </IconButton>
      )
    )
    const btn = wrapper.find('button')
    btn.simulate('click')
    expect(event.type).toEqual('click')
    expect(btn.type()).toEqual('button')
  })

  it('check link is link and attrs - href, target', () => {
    const wrapper = mount(
      applyTheme(
        <IconButton type="primary" size="small" {...defaultLinkProps}>
          <RamblerMailIcon />
        </IconButton>
      )
    )
    const link = getWrapperNode(wrapper.find('a').first())
    expect(link.getAttribute('target')).toEqual(anchorProps.target)
    expect(link.getAttribute('href')).toEqual(anchorProps.href)
  })

  it('check attr disabled', () => {
    const wrapper = mount(
      applyTheme(
        <IconButton type="primary" size="small" {...defaultDisabledButtonProps}>
          <RamblerMailIcon />
        </IconButton>
      )
    )
    const button = getWrapperNode(wrapper.find('button').first())
    expect(button.disabled).toBeTruthy()
  })

  it('check button type=button', () => {
    const wrapper = mount(
      applyTheme(
        <IconButton {...defaultProps} buttonType="button">
          <RamblerMailIcon />
        </IconButton>
      )
    )
    const button = getWrapperNode(wrapper.find('button').first())
    expect(button.getAttribute('type')).toEqual('button')
  })

  it('check icon parent container in button', () => {
    const wrapper = mount(
      applyTheme(
        <IconButton {...defaultProps}>
          <RamblerMailIcon />
        </IconButton>
      )
    )
    const buttonInner = getWrapperNode(wrapper.find('button').childAt(0))
    const iconParent = getWrapperNode(wrapper.find('svg')).parentNode
    expect(buttonInner).toEqual(iconParent)
  })
})
