import React from 'react'
import Input from '../Input/Input'
import Hint from '../Hint/Hint'
import {mount, withTheme, getStyles} from '../../test/utils'
import FormGroup from './FormGroup'

describe('<FormGroup />', () => {
  const defaultProps = {
    value: '',
    type: 'text'
  }

  it('should apply default styles', () => {
    const props = {
      label: 'Пароль'
    }

    const wrapper = mount(
      withTheme(
        <FormGroup {...props}>
          <Input className="input" {...defaultProps} />
        </FormGroup>
      )
    )

    const group = wrapper.find(FormGroup)
    const groupStyles = getStyles(group)

    const label = group.find('label')
    const labelStyles = getStyles(label)

    expect(groupStyles.display).toEqual('block')
    expect(labelStyles['margin-bottom']).toEqual('10px')
  })

  it('should apply custom styles', () => {
    const props = {
      inline: true,
      label: 'Пароль'
    }

    const wrapper = mount(
      withTheme(
        <FormGroup {...props}>
          <Input className="input" {...defaultProps} />
        </FormGroup>
      )
    )

    const group = wrapper.find(FormGroup)
    const groupStyles = getStyles(group)

    const label = group.find('label')
    const labelStyles = getStyles(label)

    expect(groupStyles.display).toEqual('flex')
    expect(labelStyles['margin-bottom']).toEqual('0px')
    expect(labelStyles['padding-top']).toEqual('15px')

    const wrapperWithSize = mount(
      withTheme(
        <FormGroup inline label="Пароль" size="small">
          <Input className="input" {...defaultProps} />
        </FormGroup>
      )
    )

    const labelSmall = wrapperWithSize.find('label')
    const labelSmallStyles = getStyles(labelSmall)

    expect(labelSmallStyles['padding-top']).toEqual('12px')
  })

  it('should accept label prop as a string', () => {
    const props = {
      inline: true,
      label: 'Пароль'
    }
    const wrapper = mount(
      withTheme(
        <FormGroup {...props}>
          <Input className="input" {...defaultProps} />
        </FormGroup>
      )
    )

    const textLabel = wrapper.find('label').text()
    expect(textLabel).toEqual(props.label)
  })

  it('should accept label prop as a node', () => {
    const el = (
      <div>
        Пароль
        <Hint>Подсказка</Hint>
      </div>
    )
    const props = {
      label: el
    }
    const wrapper = mount(
      withTheme(
        <FormGroup {...props}>
          <Input className="input" {...defaultProps} />
        </FormGroup>
      )
    )
    const labelChildren = wrapper.find('label').children()
    const childDiv = labelChildren.find('div')
    const childHint = labelChildren.find(Hint)

    expect(labelChildren.length).toEqual(1)
    expect(childDiv).toBeTruthy()
    expect(childHint).toBeTruthy()
  })
})
