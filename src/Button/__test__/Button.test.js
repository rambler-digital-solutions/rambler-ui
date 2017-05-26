import Button from '../Button'
import React from 'react'
import { mount, getStyles, applyTheme } from '../../utils/test-utils'
import RamblerMailIcon from '../../icons/services/RamblerMailIcon'

describe('<Button />', () => {
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
    const wrapper = mount(applyTheme(<Button type="primary" size="medium">test</Button>))
    const styles = getStyles(wrapper)
    expect(styles.height).toEqual('45px')
    expect(styles['background-color']).toEqual('rgb(49, 94, 251)')
    expect(styles['font-family']).toEqual('Roboto, sans-serif')
    expect(styles['font-size']).toEqual('12px')
  })

  it('expect type="secondary" size="small" affect style', () => {
    const wrapper = mount(applyTheme(<Button type="secondary" size="small">test</Button>))
    const styles = getStyles(wrapper)
    expect(styles.height).toEqual('35px')
    expect(styles['background-color']).toEqual('rgb(234, 239, 255)')
    expect(styles['font-family']).toEqual('Roboto, sans-serif')
    expect(styles['font-size']).toEqual('12px')
  })

  it('expect block={true} size="small" affect style', () => {
    const wrapper = mount(applyTheme(
      <div style={{width: 300, padding: 20, margin: 20, background: '#fafafa', border: '1px solid #eee'}}>
        <Button type="outline" block={true} size="small" className='my-test-btn'>test</Button>
      </div>
    ))

    const stylesWrap = getStyles(wrapper)
    const stylesBtn = getStyles(wrapper.find('button'))

    expect(stylesWrap['padding-top']).toEqual('20px')
    expect(stylesWrap['padding-bottom']).toEqual('20px')
    expect(stylesWrap['padding-left']).toEqual('20px')
    expect(stylesWrap['padding-right']).toEqual('20px')
    expect(stylesWrap.width).toEqual('300px')
    expect(stylesWrap['margin-top']).toEqual('20px')
    expect(stylesWrap['margin-bottom']).toEqual('20px')
    expect(stylesWrap['margin-left']).toEqual('20px')
    expect(stylesWrap['margin-right']).toEqual('20px')
    expect(stylesWrap['border-top-color']).toEqual('rgb(238, 238, 238)')
    expect(stylesWrap['border-bottom-color']).toEqual('rgb(238, 238, 238)')
    expect(stylesWrap['border-top-style']).toEqual('solid')
    expect(stylesWrap['border-bottom-style']).toEqual('solid')
    expect(stylesWrap['border-top-width']).toEqual('1px')
    expect(stylesWrap['border-bottom-width']).toEqual('1px')
    expect(stylesBtn.height).toEqual('35px')
    expect(stylesBtn.width).toEqual('300px')
    expect(stylesBtn.display).toEqual('block')
  })

  it('callback onClick', () => {
    const wrapper = mount(applyTheme(<Button type="primary" size="medium" {...defaultProps}>test</Button>))
    const btn = wrapper.find('button')
    btn.simulate('click')
    expect(event.type).toEqual('click')
    expect(btn.type()).toEqual('button')
    expect(btn.text()).toEqual('test')
  })

  it('check link is link and attrs - href, target', () => {
    const wrapper = mount(applyTheme(<Button type="primary" size="small" {...defaultPropsLink}>test</Button>))
    const a = wrapper.find('a')
    expect(a.type()).toEqual('a')
    expect(a.text()).toEqual('test')
    expect(linkComponent.props.target).toEqual('_blank')
    expect(linkComponent.props.href).toEqual('http://www.rambler.ru')
  })

  it('check attr disabled', () => {
    mount(applyTheme(<Button type="primary" size="small" {...defaultPropsDisabledBtn}>test</Button>))
    expect(btnComponent.props.disabled).toBeTruthy()
  })

  it('check button type=submit', () => {
    mount(applyTheme(<Button {...defaultProps} buttonType='submit'>test</Button>))
    expect(btnComponent.props.buttonType).toEqual('submit')
  })

  it('check button type=button', () => {
    mount(applyTheme(<Button {...defaultProps} buttonType='button'>test</Button>))
    expect(btnComponent.props.buttonType).toEqual('button')
  })

  it('should be rounded', () => {
    const wrapper = mount(applyTheme(<Button {...defaultProps} buttonType='button' rounded={true}>test</Button>))
    const stylesBtn = getStyles(wrapper.find('button'))
    expect(stylesBtn['border-top-left-radius']).toEqual('9999px')
    expect(stylesBtn['border-top-right-radius']).toEqual('9999px')
    expect(stylesBtn['border-bottom-left-radius']).toEqual('9999px')
    expect(stylesBtn['border-bottom-right-radius']).toEqual('9999px')
  })

  it('Проверяем кнопку на наличие контейнера, который является родительским для icon', () => {
    const wrapper = mount(applyTheme(<Button icon={<RamblerMailIcon/>} {...defaultProps}>Почта</Button>))
    const button = wrapper.find('button')
    const icon = wrapper.find('svg')
    expect(button.childAt(0).node).toEqual(icon.node.parentNode)
  })

})
