import React from 'react'
import Input from '../../Input'
import InputStatus from '../../InputStatus'
import FormGroup from '../../FormGroup'
import { ApplyTheme } from '../../theme'
import { mount, getStyles, getNodeStyles } from '../../utils/test-utils'
import theme from '../../theme/base'
import {normalize as nc} from '../../utils/colors'
import RamblerMailIcon from '../../icons/services/RamblerMailIcon'

const applyTheme = (children) => (
  <ApplyTheme>{ children }</ApplyTheme>
)

describe('Input', () => {
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
    inputClassName: 'inputCls',
    onChange: () => {}
  }

  const passwordProps = {
    status: 'warning',
    type: 'password',
    name: 'password',
    value: '',
    placeholder: 'Password',
    inputClassName: 'passwordCls',
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

  it('style', () => {
    const wrapper = mount(applyTheme(
      <FormGroup {...formGroupProps}>
        <InputStatus>
          <Input {...defaultProps} />
          <Input {...defaultProps} inputClassName='inputCls2' status='warning' />
          <Input {...defaultProps} inputClassName='inputCls3' status='error' />
          <Input {...defaultProps} inputClassName='inputCls4' status={null} />
        </InputStatus>
      </FormGroup>
    ))

    const inputSuccess = wrapper.find('.inputCls')
    const inputWarning = wrapper.find('.inputCls2')
    const inputError = wrapper.find('.inputCls3')
    const inputWithoutStatus = wrapper.find('.inputCls4')

    // Стили border - success
    const inputSuccessStyles = getStyles(inputSuccess)
    expect(nc(inputSuccessStyles['border-bottom-color'])).toEqual(nc(theme.colors.success))
    expect(inputSuccessStyles['border-bottom-style']).toEqual('solid')
    expect(inputSuccessStyles['border-bottom-width']).toEqual('2px')
    expect(inputSuccessStyles.height).toEqual('45px')

    // border - warning
    const inputWarningStyles = getStyles(inputWarning)
    expect(nc(inputWarningStyles['border-bottom-color'])).toEqual(nc(theme.colors.warn))

    // border - error
    const inputErrorStyles = getStyles(inputError)
    expect(nc(inputErrorStyles['border-bottom-color'])).toEqual(nc(theme.colors.danger))

    // Станратные стили input'a
    const inputWithoutStatusStyles = getStyles(inputWithoutStatus)
    expect(inputWithoutStatusStyles['border-bottom-color']).toEqual('rgba(0, 0, 0, 0)')
  })

  it('events: onChange, onBlur, onFocus, onKeyUp, onKeyDown', () => {
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

  it('value, type, placeholder, name, disabled', () => {
    const wrapper = mount(applyTheme(
      <FormGroup {...formGroupProps}>
        <InputStatus>
          <Input {...defaultProps} />
          <Input {...defaultProps} value='Value' inputClassName='disabledInput' disabled />
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
    expect(nc(disabledInputStyles['background-color'])).toEqual(nc(theme.field.colors.disabled.background))
    expect(disabledInputStyles.cursor).toEqual('not-allowed')
  })

  it('iconLeft, eyeIcon', () => {
    const wrapper = mount(applyTheme(
      <FormGroup {...formGroupProps}>
        <InputStatus>
          <Input {...passwordProps} iconLeft={<RamblerMailIcon />} />
        </InputStatus>
      </FormGroup>
    ))

    const arrOfIcons = wrapper.find('svg')
    const iconLeftStyles = getNodeStyles(arrOfIcons.nodes[0])
    const iconEyeStyles = getNodeStyles(arrOfIcons.nodes[1])
    // расположение iconLeft
    expect(iconLeftStyles.top).toEqual('50%')
    expect(iconLeftStyles.left).toEqual('13px')
    // расположение iconEye для password
    expect(iconEyeStyles.top).toEqual('50%')
    expect(iconEyeStyles.right).toEqual('13px')
  })

  it('paddingHelpers', () => {
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

    expect(inputTextStyles['padding-right']).toEqual(theme.field.sizes.medium.withIconPadding + 'px')
    expect(inputPassStyles['padding-right']).toEqual(theme.field.sizes.medium.withIconsPadding + 'px')
    expect(inputPassStyles['padding-left']).toEqual(theme.input.padding + 'px')
  })

  it('size small', () => {
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

    expect(inputTextStyles.height).toEqual(theme.field.sizes.small.height + 'px')
  })

})
