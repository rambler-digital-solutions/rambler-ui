import IconButton from '../IconButton'
import React from 'react'
import { ApplyTheme } from '../../theme'
import { mount, getStyles} from '../../utils/test-utils'
import RamblerMailIcon from '../../icons/services/RamblerMailIcon'
import color from 'color'

const applyTheme = (children) => (
  <ApplyTheme>{ children }</ApplyTheme>
)

describe('<IconButton />', () => {
  const defaultProps = {
    type: 'primary',
    size: 'medium',
    className: 'my-btn-test',
    ref: () => {},
    onClick: () => {}
  }

  const defaultPropsLink = {
    href: 'http://www.rambler.ru',
    ref: () => {},
    target: '_blank'
  }

  const defaultPropsDisabledBtn = {
    disabled: true,
    ref: () => {}
  }

  let event, linkComponent, btnComponent
  beforeEach(() => {
    spyOn(defaultProps, 'onClick').and.callFake(e => { event = e })
    spyOn(defaultPropsLink, 'ref').and.callFake(component => { linkComponent = component })
    spyOn(defaultPropsDisabledBtn, 'ref').and.callFake(component => { btnComponent = component })
    spyOn(defaultProps, 'ref').and.callFake(component => { btnComponent = component })
  })

  it('expect type="primary" size="medium" affect style', () => {
    const wrapper = mount(applyTheme(<IconButton type="primary" size="medium"><RamblerMailIcon /></IconButton>))
    const styles = getStyles(wrapper)
    const stylesIcon = getStyles(wrapper.find('svg'))
    expect(styles.width).toEqual('40px')
    expect(styles.height).toEqual('40px')
    expect(styles['background-color']).toEqual('rgb(49, 94, 251)')
    expect(stylesIcon.width).toEqual('20px')
    expect(stylesIcon.height).toEqual('20px')
    expect(color(stylesIcon.fill).toString()).toEqual('rgb(255, 255, 255)')
  })

  it('expect type="secondary" size="small" affect style', () => {
    const wrapper = mount(applyTheme(<IconButton type="secondary" size="small"><RamblerMailIcon /></IconButton>))
    const styles = getStyles(wrapper)
    const stylesIcon = getStyles(wrapper.find('svg'))
    expect(styles.width).toEqual('23px')
    expect(styles.height).toEqual('23px')
    expect(color(styles['background-color']).toString()).toEqual('rgb(234, 239, 255)')
    expect(stylesIcon.width).toEqual('11px')
    expect(stylesIcon.height).toEqual('11px')
    expect(color(stylesIcon.fill).toString()).toEqual('rgb(49, 94, 251)')
  })

  it('callback onClick', () => {
    const wrapper = mount(applyTheme(<IconButton type="primary" size="medium" {...defaultProps}><RamblerMailIcon /></IconButton>))
    const btn = wrapper.find('button')
    btn.simulate('click')
    expect(event.type).toEqual('click')
    expect(btn.type()).toEqual('button')
  })

  it('check link is link and attrs - href, target', () => {
    const wrapper = mount(applyTheme(<IconButton type="primary" size="small" {...defaultPropsLink}><RamblerMailIcon /></IconButton>))
    const a = wrapper.find('a')
    expect(a.type()).toEqual('a')
    expect(linkComponent.props.target).toEqual('_blank')
    expect(linkComponent.props.href).toEqual('http://www.rambler.ru')
  })

  it('check attr disabled', () => {
    mount(applyTheme(<IconButton type="primary" size="small" {...defaultPropsDisabledBtn}><RamblerMailIcon /></IconButton>))
    expect(btnComponent.props.disabled).toBeTruthy()
  })

  it('check button type=button', () => {
    mount(applyTheme(<IconButton {...defaultProps} buttonType='button'><RamblerMailIcon /></IconButton>))
    expect(btnComponent.props.buttonType).toEqual('button')
  })

  it('check icon parent container in button', () => {
    const wrapper = mount(applyTheme(<IconButton {...defaultProps}><RamblerMailIcon /></IconButton>))
    const button = wrapper.find('button')
    const icon = wrapper.find('svg')
    expect(button.childAt(0).node).toEqual(icon.node.parentNode)
  })
})
