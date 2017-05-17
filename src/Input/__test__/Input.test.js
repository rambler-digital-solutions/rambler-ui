import React from 'react'
import Input from '../../Input'
import InputStatus from '../../InputStatus'
import FormGroup from '../../FormGroup'
import { ApplyTheme } from '../../theme'
import { mount, getStyles, getNodeStyles } from '../../utils/test-utils'
import RamblerMailIcon from '../../icons/services/RamblerMailIcon'

const applyTheme = (children) => (
  <ApplyTheme>{ children }</ApplyTheme>
)

describe('<Input style={{width: 200}}/>', () => {
  const formGroupProps = {
    inline: false,
    label: 'Label',
    fieldId: 'name',
    className: 'formGroup',
    style: {width: 300}
  }

  const defaultProps = {
    status: 'success',
    type: 'text',
    name: 'name',
    value: '',
    placeholder: 'Name',
    className: 'inputCls',
    onChange: () => {}
  }

  const passwordProps = {
    status: 'warning',
    type: 'password',
    name: 'password',
    value: '',
    placeholder: 'Password',
    className: 'passwordCls',
    onChange: () => {}
  }

  const handlersProps = {
    onChange: () => {},
    onBlur: () => {},
    onFocus: () => {},
    onKeyUp: () => {},
    onKeyDown: () => {}
  }

  let event
  beforeEach(() => {
    spyOn(handlersProps, 'onChange').and.callFake((e) => { event = e })
    spyOn(handlersProps, 'onBlur').and.callFake((e) => { event = e })
    spyOn(handlersProps, 'onFocus').and.callFake((e) => { event = e })
    spyOn(handlersProps, 'onKeyUp').and.callFake((e) => { event = e })
    spyOn(handlersProps, 'onKeyDown').and.callFake((e) => { event = e })
  })

  it('Проверяем стили && объект style', () => {
    const wrapper = mount(applyTheme(
      <FormGroup {...formGroupProps}>
        <InputStatus>
          <Input {...defaultProps} />
          <Input {...defaultProps} className='inputCls2' status='warning' />
          <Input {...defaultProps} className='inputCls3' status='error' />
          <Input {...defaultProps} className='inputCls4' status={null} />
        </InputStatus>
      </FormGroup>
    ))

    const inputSuccess = wrapper.find('.inputCls')
    const inputWarning = wrapper.find('.inputCls2')
    const inputError = wrapper.find('.inputCls3')
    const inputWithoutStatus = wrapper.find('.inputCls4')

    const inputSuccessStyles = getStyles(inputSuccess)
    const inputWarningStyles = getStyles(inputWarning)
    const inputErrorStyles = getStyles(inputError)
    const inputWithoutStatusStyles = getStyles(inputWithoutStatus)
    // Стили border - success
    expect(inputSuccessStyles['border-bottom-color']).toEqual('rgb(40, 188, 0)')
    expect(inputSuccessStyles['border-bottom-style']).toEqual('solid')
    expect(inputSuccessStyles['border-bottom-width']).toEqual('2px')
    // border - warning
    expect(inputWarningStyles['border-bottom-color']).toEqual('rgb(244, 201, 20)')
    // border - error
    expect(inputErrorStyles['border-bottom-color']).toEqual('rgb(255, 86, 78)')
    // Станратные стили input'a
    expect(inputWithoutStatusStyles['border-top-color']).toEqual('rgb(232, 232, 232)')
    expect(inputWithoutStatusStyles['border-top-style']).toEqual('solid')
    expect(inputWithoutStatusStyles['border-top-width']).toEqual('1px')
    expect(inputWithoutStatusStyles['border-bottom-color']).toEqual('rgb(232, 232, 232)')
    expect(inputWithoutStatusStyles['border-bottom-style']).toEqual('solid')
    expect(inputWithoutStatusStyles['border-bottom-width']).toEqual('1px')
    expect(inputSuccessStyles.height).toEqual('45px')
  })

  it('Проверяем колбэки onChange, onBlur, onFocus, onKeyUp, onKeyDown', () => {
    const wrapper = mount(applyTheme(
      <FormGroup {...formGroupProps}>
        <InputStatus>
          <Input {...defaultProps} {...handlersProps} />
        </InputStatus>
      </FormGroup>
    ))

    const input = wrapper.find('.inputCls')

    input.simulate('change')
    expect(event.type).toEqual('change')
    input.simulate('focus')
    expect(event.type).toEqual('focus')
    input.simulate('blur')
    expect(event.type).toEqual('blur')
    input.simulate('keyUp')
    expect(event.type).toEqual('keyup')
    input.simulate('keyDown')
    expect(event.type).toEqual('keydown')
  })

  it('Проверяем value, type, placeholder, name, disabled && стили для disabled', () => {
    const wrapper = mount(applyTheme(
      <FormGroup {...formGroupProps}>
        <InputStatus>
          <Input {...defaultProps} />
          <Input {...defaultProps} value='Value' className='disabledInput' disabled/>
          <Input {...passwordProps} />
        </InputStatus>
      </FormGroup>
    ))

    const input = wrapper.find('.inputCls')
    const inputDisabled = wrapper.find('.disabledInput')
    const inputPass = wrapper.find('.passwordCls')

    const disabledInputStyles = getStyles(inputDisabled)
    // input is disabled
    expect(input.node.disabled).toBe(false)
    expect(inputDisabled.node.disabled).toBeTruthy()
    expect(inputPass.node.disabled).toBe(false)
    // input placeholder && value
    expect(input.node.placeholder).toEqual('Name')
    expect(inputDisabled.node.placeholder).toEqual('Name')
    expect(inputPass.node.placeholder).toEqual('Password')
    expect(inputDisabled.node.value).toEqual('Value')
    // input type
    expect(input.node.type).toEqual('text')
    expect(inputDisabled.node.type).toEqual('text')
    expect(inputPass.node.type).toEqual('password')
    // input name
    expect(input.node.name).toEqual('name')
    expect(inputDisabled.node.name).toEqual('name')
    expect(inputPass.node.name).toEqual('password')
    // Стили input disabled
    expect(disabledInputStyles['background-color']).toEqual('rgb(238, 238, 238)')
    expect(disabledInputStyles['border-top-color']).toEqual('rgb(238, 238, 238)')
    expect(disabledInputStyles.cursor).toEqual('default')
  })

  it('Проверяем iconLeft, eyeIcon для <input type="password" /> ', () => {
    const wrapper = mount(applyTheme(
      <FormGroup {...formGroupProps}>
        <InputStatus>
          <Input {...passwordProps} iconLeft={<RamblerMailIcon />} />
        </InputStatus>
      </FormGroup>
    ))

    const arrOfIcons = wrapper.find('svg')
    const iconLeftStyles = getNodeStyles(arrOfIcons.nodes[0].parentNode)
    const iconEyeStyles = getNodeStyles(arrOfIcons.nodes[1].parentNode)
    // расположение iconLeft
    expect(iconLeftStyles.top).toEqual('50%')
    expect(iconLeftStyles.left).toEqual('13px')
    // расположение iconEye для password
    expect(iconEyeStyles.top).toEqual('50%')
    expect(iconEyeStyles.right).toEqual('13px')
  })

  it('Проверяем paddingHelpers', () => {
    const wrapper = mount(applyTheme(
      <FormGroup {...formGroupProps}>
        <InputStatus>
          <Input {...passwordProps} iconRight={<RamblerMailIcon />} />
          <Input {...defaultProps} iconRight={<RamblerMailIcon />} />
        </InputStatus>
      </FormGroup>
    ))

    const inputText = wrapper.find('.inputCls')
    const inputPass = wrapper.find('.passwordCls')

    const inputTextStyles = getStyles(inputText)
    const inputPassStyles = getStyles(inputPass)

    expect(inputTextStyles['padding-right']).toEqual('40px')
    expect(inputPassStyles['padding-right']).toEqual('70px')
    expect(inputPassStyles['padding-left']).toEqual('13px')
  })

  it('Проверяем size small', () => {
    const sizeProps = {
      size: 'small'
    }

    const wrapper = mount(applyTheme(
      <FormGroup {...formGroupProps}>
        <InputStatus>
          <Input {...defaultProps} {...sizeProps} />
        </InputStatus>
      </FormGroup>
    ))

    const inputText = wrapper.find('.inputCls')
    const inputTextStyles = getStyles(inputText)

    expect(inputTextStyles.height).toEqual('35px')
  })
})
