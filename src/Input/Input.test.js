import React from 'react'
import Input from './Input'
import FieldStatus from '../FieldStatus'
import FormGroup from '../FormGroup'
import {ThemeProvider} from '../theme'
import {mount, getStyles, getNodeStyles, getWrapperNode} from '../../test/utils'
import theme from '../theme/base'
import {normalize as nc} from '../utils/colors'
import RamblerMailIcon from '../icons/services/RamblerMailIcon'

const applyTheme = children => <ThemeProvider>{children}</ThemeProvider>

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
    spyOn(handlersProps, 'onChange').and.callFake(e => {
      event = e
    })
    spyOn(handlersProps, 'onBlur').and.callFake(e => {
      event = e
    })
    spyOn(handlersProps, 'onFocus').and.callFake(e => {
      event = e
    })
    spyOn(handlersProps, 'onKeyUp').and.callFake(e => {
      event = e
    })
    spyOn(handlersProps, 'onKeyDown').and.callFake(e => {
      event = e
    })
  })

  it('style', () => {
    const wrapper = mount(
      applyTheme(
        <FormGroup {...formGroupProps}>
          <FieldStatus>
            <Input {...defaultProps} />
            <Input
              {...defaultProps}
              inputClassName="inputCls2"
              status="warning"
            />
            <Input
              {...defaultProps}
              inputClassName="inputCls3"
              status="error"
              isFocused={true}
            />
            <Input {...defaultProps} inputClassName="inputCls4" status={null} />
            <Input
              {...defaultProps}
              inputClassName="inputCls5"
              status={null}
              isFocused={true}
            />
          </FieldStatus>
        </FormGroup>
      )
    )

    const inputSuccess = wrapper.find('.inputCls + div')
    const inputWarning = wrapper.find('.inputCls2 + div')
    const inputError = wrapper.find('.inputCls3 + div')
    const inputWithoutStatus = wrapper.find('.inputCls4 + div')
    const inputWithFocus = wrapper.find('.inputCls5 + div')

    // Стили border - success
    const inputSuccessStyles = getStyles(inputSuccess)
    expect(nc(inputSuccessStyles['border-bottom-color'])).toEqual(
      nc(theme.colors.success)
    )
    expect(inputSuccessStyles['border-bottom-style']).toEqual('solid')
    expect(inputSuccessStyles['border-bottom-width']).toEqual('2px')
    expect(inputSuccessStyles.height).toEqual('43px')

    // border - warning
    const inputWarningStyles = getStyles(inputWarning)
    expect(nc(inputWarningStyles['border-bottom-color'])).toEqual(
      nc(theme.colors.warn)
    )

    // border - error
    const inputErrorStyles = getStyles(inputError)
    expect(nc(inputErrorStyles['border-bottom-color'])).toEqual(
      nc(theme.colors.danger)
    )

    // border - isFocused
    const inputWithFocusStyles = getStyles(inputWithFocus)
    expect(nc(inputWithFocusStyles['border-bottom-color'])).toEqual(
      nc(theme.field.colors.focus.border)
    )

    // Стандартные стили input'a
    const inputWithoutStatusStyles = getStyles(inputWithoutStatus)
    expect(inputWithoutStatusStyles['border-bottom-color']).toEqual(
      'rgba(0, 0, 0, 0)'
    )
  })

  it('events: onChange, onBlur, onFocus, onKeyUp, onKeyDown', () => {
    const wrapper = mount(
      applyTheme(
        <FormGroup {...formGroupProps}>
          <FieldStatus>
            <Input {...defaultProps} {...handlersProps} />
          </FieldStatus>
        </FormGroup>
      )
    )

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
    const wrapper = mount(
      applyTheme(
        <FormGroup {...formGroupProps}>
          <FieldStatus>
            <Input {...defaultProps} />
            <Input
              {...defaultProps}
              value="Value"
              inputClassName="disabledInput"
              disabled
            />
            <Input {...passwordProps} />
          </FieldStatus>
        </FormGroup>
      )
    )

    const inputNode = getWrapperNode(wrapper.find('.inputCls'))
    const inputDisabledNode = getWrapperNode(wrapper.find('.disabledInput'))
    const inputPassNode = getWrapperNode(wrapper.find('.passwordCls'))

    const disabledInputStyles = getNodeStyles(inputDisabledNode)
    // input is disabled
    expect(inputNode.disabled).toBe(false)
    expect(inputDisabledNode.disabled).toBeTruthy()
    expect(inputPassNode.disabled).toBe(false)
    // input placeholder && value
    expect(inputNode.placeholder).toEqual('Name')
    expect(inputDisabledNode.placeholder).toEqual('Name')
    expect(inputPassNode.placeholder).toEqual('Password')
    expect(inputDisabledNode.value).toEqual('Value')
    // input type
    expect(inputNode.type).toEqual('text')
    expect(inputDisabledNode.type).toEqual('text')
    expect(inputPassNode.type).toEqual('password')
    // input name
    expect(inputNode.name).toEqual('name')
    expect(inputDisabledNode.name).toEqual('name')
    expect(inputPassNode.name).toEqual('password')
    // Стили input disabled
    expect(disabledInputStyles.cursor).toEqual('not-allowed')
  })

  it('iconLeft, eyeIcon', () => {
    const wrapper = mount(
      applyTheme(
        <FormGroup {...formGroupProps}>
          <FieldStatus>
            <Input {...passwordProps} iconLeft={<RamblerMailIcon />} />
          </FieldStatus>
        </FormGroup>
      )
    )

    const icons = [...getWrapperNode(wrapper).querySelectorAll('svg')]
    const iconLeftStyles = getNodeStyles(icons[0].parentNode)
    const iconEyeStyles = getNodeStyles(icons[1].parentNode.parentNode)
    // расположение iconLeft
    // const iconMargin =
    //   (theme.field.sizes.medium.height - theme.field.sizes.medium.icon) / 2 +
    //   'px'
    // expect(iconLeftStyles['margin-top']).toEqual(iconMargin)
    // expect(iconLeftStyles['margin-bottom']).toEqual(iconMargin)
    // expect(iconLeftStyles.top).toEqual('0px')
    // expect(iconLeftStyles.bottom).toEqual('0px')
    expect(iconLeftStyles.left).toEqual(
      theme.field.sizes.medium.iconMargin + 'px'
    )
    // расположение iconEye для password
    // const eyeMargin =
    //   (theme.field.sizes.medium.height - theme.field.sizes.medium.eyeIcon) / 2 +
    //   'px'
    // expect(iconEyeStyles['margin-top']).toEqual(eyeMargin)
    // expect(iconEyeStyles['margin-bottom']).toEqual(eyeMargin)
    // expect(iconEyeStyles.top).toEqual('0px')
    // expect(iconEyeStyles.bottom).toEqual('0px')
    expect(iconEyeStyles.right).toEqual(
      theme.field.sizes.medium.iconMargin + 'px'
    )
  })

  it('paddingHelpers', () => {
    const wrapper = mount(
      applyTheme(
        <FormGroup {...formGroupProps}>
          <FieldStatus>
            <Input {...passwordProps} iconRight={<RamblerMailIcon />} />
            <Input {...defaultProps} iconRight={<RamblerMailIcon />} />
          </FieldStatus>
        </FormGroup>
      )
    )

    const inputText = wrapper.find('.inputCls')
    const inputPass = wrapper.find('.passwordCls')

    const inputTextStyles = getStyles(inputText)
    const inputPassStyles = getStyles(inputPass)

    expect(inputTextStyles['padding-right']).toEqual(
      theme.field.sizes.medium.withIconPadding + 'px'
    )
    expect(inputPassStyles['padding-right']).toEqual(
      theme.field.sizes.medium.withIconsPadding + 'px'
    )
    expect(inputPassStyles['padding-left']).toEqual(
      theme.input.sizes.medium.padding + 'px'
    )
  })

  it('size small', () => {
    const sizeProps = {
      size: 'small'
    }

    const wrapper = mount(
      applyTheme(
        <FormGroup {...formGroupProps}>
          <FieldStatus>
            <Input {...defaultProps} {...sizeProps} />
          </FieldStatus>
        </FormGroup>
      )
    )

    const inputText = wrapper.find('.inputCls')
    const inputTextStyles = getStyles(inputText)

    expect(inputTextStyles.height).toEqual(
      theme.field.sizes.small.height + 'px'
    )
  })

  it('classNames of icons', () => {
    const leftClName = 'aaaaaaa'
    const rightClName = 'bbbbbbb'

    const wrapper = mount(
      applyTheme(
        <Input
          {...defaultProps}
          iconLeft={<RamblerMailIcon />}
          iconLeftClassName={leftClName}
          iconRight={<RamblerMailIcon />}
          iconRightClassName={rightClName}
        />
      )
    )
    const svg = getWrapperNode(wrapper).querySelectorAll('svg')
    expect(svg[0].parentNode.classList.contains(leftClName)).toBeTruthy()
    expect(svg[1].parentNode.classList.contains(rightClName)).toBeTruthy()
  })
})
