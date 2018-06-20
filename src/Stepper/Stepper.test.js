import React from 'react'
import { Step, Stepper } from '../Stepper'
import { ApplyTheme } from '../theme'
import { mount, getStyles, getWrapperNode } from '../utils/test-utils'
import theme from '../theme/base'
import { normalize as nc } from '../utils/colors'

const applyTheme = children => (
  <ApplyTheme>{ children }</ApplyTheme>
)

describe('<Stepper />', () => {
  it('Step styles', () => {
    const stepProps = {
      className: 'step',
      badgeClassName: 'badge',
      textClassName: 'text'
    }

    const completedStep = mount(applyTheme(
      <Step value={2} {...stepProps} completed>Step</Step>
    ))
    const completedStepStyles = getStyles(completedStep)
    expect(completedStepStyles['font-family']).toEqual(theme.stepper.fontFamily)
    expect(completedStepStyles['font-size']).toEqual(theme.stepper.fontSize + 'px')
    expect(completedStepStyles['color']).toEqual(nc(theme.stepper.colors.default.color))
    expect(completedStepStyles['background-color']).toEqual(nc(theme.stepper.colors.default.background))
    const completedBadge = completedStep.find('.badge')
    const completedBadgeStyles = getStyles(completedBadge)
    expect(completedBadgeStyles['background-color']).toEqual(nc(theme.stepper.colors.default.badge.background))
    expect(completedBadgeStyles['color']).toEqual(nc(theme.stepper.colors.default.badge.color))

    const disabledStep = mount(applyTheme(
      <Step value={1} {...stepProps} disabled>Step</Step>
    ))
    const disabledStepStyles = getStyles(disabledStep)
    expect(disabledStepStyles['color']).toEqual(nc(theme.stepper.colors.disabled.color))
    const disabledBadge = disabledStep.find('.badge')
    const disabledBadgeStyles = getStyles(disabledBadge)
    expect(disabledBadgeStyles['font-size']).toEqual(theme.stepper.badge.fontSize + 'px')
    expect(disabledBadgeStyles['background-color']).toEqual(nc(theme.stepper.colors.disabled.badge.background))

    const activeStep = mount(applyTheme(
      <Step value={3} {...stepProps} active>Step</Step>
    ))
    const activeStepStyles = getStyles(activeStep)
    expect(activeStepStyles['color']).toEqual(nc(theme.stepper.colors.active.color))
    const activeBadge = activeStep.find('.badge')
    const activeBadgeStyles = getStyles(activeBadge)
    expect(activeBadgeStyles['background-color']).toEqual(nc(theme.stepper.colors.active.badge.background))
    expect(activeBadgeStyles['color']).toEqual(nc(theme.stepper.colors.active.badge.color))
  })

  it('Stepper separator test', () => {
    const props = {
      value: 1,
      onChange: () => {},
      className: 'stepper'
    }
    const wrapper = mount(applyTheme(
      <Stepper {...props}>
        {[1, 2, 3, 4].map((value, index) => <Step key={index} className={`step_${value}`}>{value}</Step>)}
      </Stepper>
    ))

    const wrapperNode = getWrapperNode(wrapper)

    expect(wrapperNode.children.length).toEqual(7)
    expect(wrapperNode.children[1].nodeName).toEqual('SPAN')
    expect(wrapperNode.children[3].nodeName).toEqual('SPAN')
    expect(wrapperNode.children[5].nodeName).toEqual('SPAN')

    expect(getComputedStyle(wrapperNode.children[5])['background-color']).toEqual(nc(theme.stepper.colors.default.separator.background))
  })

  it('Stepper', () => {
    let event, value = 1
    const props = {
      onChange: (e, val) => {
        event = e
        value = val
      },
      className: 'stepper'
    }

    const wrapper = mount(applyTheme(
      <Stepper {...props} value={value}>
        {[0, 1, 2].map(value => <Step key={value} className={`step_${value}`} />)}
      </Stepper>
    ))

    const wrapperNode = getWrapperNode(wrapper)
    expect(wrapperNode.children[0].className.includes('step')).toEqual(true)
    expect(wrapperNode.children[2].className.includes('active')).toEqual(true)
    expect(wrapperNode.children[4].className.includes('disabled')).toEqual(true)

    wrapper.find('.step_2').first().simulate('click')
    expect(value).toEqual(1)

    wrapper.find('.step_1').first().simulate('click')
    expect(value).toEqual(1)

    wrapper.find('.step_0').first().simulate('click')
    expect(value).toEqual(0)

    expect(event.type).toEqual('click')
  })

  it('Stepper like a status', () => {
    let event, value = 1
    const props = {
      onChange: (e, val) => {
        event = e
        value = val
      },
      className: 'stepper'
    }

    const wrapper = mount(applyTheme(
      <Stepper {...props} value={value}>
        {[0, 1, 2].map(value =>
          <Step
            key={value}
            className={`step_${value}`}
            disabled={false}
            completed={false} />)}
      </Stepper>
    ))

    wrapper.find('.step_2').first().simulate('click')
    expect(value).toEqual(2)

    wrapper.find('.step_0').first().simulate('click')
    expect(value).toEqual(0)

    wrapper.find('.step_2').first().simulate('click')
    expect(value).toEqual(2)

    expect(event.type).toEqual('click')
  })
})
