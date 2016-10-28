import { RadioButton, RadioButtonGroup} from '../../Radio'
import { ApplyTheme } from '../../theme'
import { mount, getStyles } from '../../utils/test-utils'

import React from 'react'

const applyTheme = (children) => (
  <ApplyTheme>{ children }</ApplyTheme>
)

describe('<RadioButtonGroup />', () => {
  const defaultProps = {
    className: 'my-radio-button',
    value: 1,
    onClick: () => {},
    onBlur: () => {},
    onChange: () => {},
    onFocus: () => {}
  }

  beforeEach(() => {
    spyOn(defaultProps, 'onClick').and.callThrough()
    spyOn(defaultProps, 'onBlur').and.callThrough()
    spyOn(defaultProps, 'onChange').and.callThrough()
    spyOn(defaultProps, 'onFocus').and.callThrough()
  })

  it('Проверяем произошел ли вызов функции', () => {
    const wrapper = mount(applyTheme(<RadioButtonGroup
                                      name='group'
                                      className='my-radio-button-group'>
                                        <RadioButton
                                          {...defaultProps}>
                                          radio
                                        </RadioButton>
                                     </RadioButtonGroup>))

    const input = wrapper.find('input')
    input.simulate('click')
    expect(defaultProps.onClick).toHaveBeenCalled()
    input.simulate('blur')
    expect(defaultProps.onBlur).toHaveBeenCalled()
    input.simulate('change')
    expect(defaultProps.onChange).toHaveBeenCalled()
    input.simulate('focus')
    expect(defaultProps.onFocus).toHaveBeenCalled()
  })
})

describe('<RadioButtonGroup />', () => {
  const defaultProps = {
    className: 'my-radio-button',
    value: 1,
    onClick: () => {},
    onBlur: () => {},
    onChange: () => {},
    onFocus: () => {}
  }

  let event
  beforeEach(() => {
    spyOn(defaultProps, 'onClick').and.callFake((e) => { event = e })
    spyOn(defaultProps, 'onBlur').and.callFake((e) => { event = e })
    spyOn(defaultProps, 'onChange').and.callFake((e) => { event = e })
    spyOn(defaultProps, 'onFocus').and.callFake((e) => { event = e })
  })

  it('Проверяем тип события', () => {
    const wrapper = mount(applyTheme(<RadioButtonGroup
                                      name='group'
                                      className='my-radio-button-group'>
                                        <RadioButton
                                          {...defaultProps}>
                                          radio
                                        </RadioButton>
                                     </RadioButtonGroup>))
    const input = wrapper.find('input')
    input.simulate('click')
    expect(event.type).toEqual('click')
    input.simulate('blur')
    expect(event.type).toEqual('blur')
    input.simulate('change')
    expect(event.type).toEqual('change')
    input.simulate('focus')
    expect(event.type).toEqual('focus')
  })
})

describe('<RadioButtonGroup />', () => {
  const defaultProps = {
    className: 'my-radio-button',
    onClick: () => {},
    onBlur: () => {},
    onChange: () => {},
    onFocus: () => {}
  }

  it('Проверяем value и disabled', () => {
    const wrapper = mount(applyTheme(<RadioButtonGroup
                                      name='group'
                                      className='my-radio-button-group'>
                                        <RadioButton
                                          value = '1'
                                          {...defaultProps}>
                                          1
                                        </RadioButton>
                                        <RadioButton
                                          value = '2'
                                          {...defaultProps}>
                                          2
                                        </RadioButton>
                                        <RadioButton
                                          value = '3'
                                          disabled={true}
                                          {...defaultProps}>
                                          3
                                        </RadioButton>
                                     </RadioButtonGroup>))
    const arr = wrapper.find('input')
    expect(arr.nodes[0].disabled).toEqual(false)
    expect(arr.nodes[1].disabled).toEqual(false)
    expect(arr.nodes[2].disabled).toEqual(true)
    let i = 1
    arr.nodes.forEach((node) => {
      expect(node.value).toEqual(`${i++}`)
    })
  })
})

describe('<RadioButton />', () => {
  it('Проверяем стили span=radio', () => {
    const defaultProps = {
      className: 'my-radio-button',
      value: 1
    }
    const wrapper = mount(applyTheme(<RadioButtonGroup style={{width: '700px'}}>
                                      <RadioButton
                                        name='group'
                                        radioClassName='my-class'
                                        isSelected={true}
                                        {...defaultProps}>
                                        radio
                                      </RadioButton>
                                    </RadioButtonGroup>))
    const styles = getStyles(wrapper.find('.my-class'))
    expect(styles['border-bottom-left-radius']).toEqual('50%')
    expect(styles['border-bottom-right-radius']).toEqual('50%')
    expect(styles.height).toEqual('16px')
    expect(styles.width).toEqual('16px')
    expect(styles['border-top-width']).toEqual('1px')
    expect(styles['border-bottom-width']).toEqual('1px')
    expect(styles['border-top-style']).toEqual('solid')
    expect(styles['border-bottom-style']).toEqual('solid')
  })

  it('Проверяем стили span=label', () => {
    const defaultProps = {
      className: 'my-radio-button',
      value: 1
    }
    const wrapper = mount(applyTheme(<RadioButton
                                      name='group'
                                      radioClassName='my-class'
                                      labelClassName='my-class2'
                                      isSelected={true}
                                      {...defaultProps}>
                                      radio
                                    </RadioButton>))
    const styles = getStyles(wrapper.find('.my-class2'))
    expect(styles['font-family']).toEqual('Roboto, sans-serif')
    expect(styles['font-size']).toEqual('14px')
  })

  it('Проверяем стили RadioButtonGroup, display == block', () => {
    const wrapper = mount(applyTheme(<RadioButtonGroup
                                      className='radio-group'
                                      >
                                    </RadioButtonGroup>))
    const styles = getStyles(wrapper.find('.radio-group'))
    expect(styles.display).toEqual('block')
  })

  it('Наличие input внутри label', () => {
    const defaultProps = {
      className: 'my-radio-button',
      value: 1
    }
    const wrapper = mount(applyTheme(<RadioButton
                                      name='group'
                                      radioClassName='my-class'
                                      labelClassName='my-class2'
                                      isSelected={true}
                                      {...defaultProps}>
                                      radio
                                    </RadioButton>))

    expect(wrapper.find('.my-radio-button').children().length).toEqual(3)
    expect(wrapper.find('.my-radio-button').childAt(0).type()).toEqual('input')
    expect(wrapper.find('.my-radio-button').childAt(1).type()).toEqual('span')
    expect(wrapper.find('.my-radio-button').childAt(2).type()).toEqual('span')
  })

  it('Наличие input внутри label, labelPosition=left', () => {
    const defaultProps = {
      className: 'my-radio-button',
      value: 1
    }

    const wrapper = mount(applyTheme(<RadioButton
                                      name='group'
                                      radioClassName='my-class'
                                      labelClassName='my-class2'
                                      labelPosition='left'
                                      isSelected={true}
                                      {...defaultProps}>
                                      radio
                                    </RadioButton>))

    expect(wrapper.find('.my-radio-button').children().length).toEqual(3)
    expect(wrapper.find('.my-radio-button').childAt(0).type()).toEqual('span')
    expect(wrapper.find('.my-radio-button').childAt(1).type()).toEqual('input')
    expect(wrapper.find('.my-radio-button').childAt(2).type()).toEqual('span')
  })
})
