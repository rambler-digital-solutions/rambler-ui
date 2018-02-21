import React from 'react'
import { Step/*, Stepper*/ } from '../../Stepper'
import { ApplyTheme } from '../../theme'
import { mount, getStyles } from '../../utils/test-utils'
import theme from '../../theme/base'
import { normalize as nc } from '../../utils/colors'

const applyTheme = children => (
  <ApplyTheme>{ children }</ApplyTheme>
)

describe('<Stepper />', () => {
  const stepProps = {
    className: 'step',
    badgeClassName: 'badge',
    textClassName: 'text',
    onClick: () => {},
    disabled: false,
    completed: false,
    active: false
  }

  it('Step styles' , () => {
    const completedStep = mount(applyTheme(
      <Step value={2} {...stepProps} completed>Step</Step>
    ))
    const completedStepStyles = getStyles(completedStep)
    expect(completedStepStyles['font-family']).toEqual(theme.stepper.fontFamily)
    expect(completedStepStyles['font-size']).toEqual(theme.stepper.fontSize + 'px')
    expect(completedStepStyles['color']).toEqual(nc(theme.stepper.colors.default.color))
    expect(completedStepStyles['background-color']).toEqual(nc(theme.stepper.colors.default.backgroundColor))
    const completedBadge = completedStep.find('.badge')
    const completedBadgeStyles = getStyles(completedBadge)
    expect(completedBadgeStyles['background-color']).toEqual(nc(theme.stepper.colors.default.badge.backgroundColor))
    expect(completedBadgeStyles['color']).toEqual(nc(theme.stepper.colors.default.badge.color))

    const disabledStep = mount(applyTheme(
      <Step value={1} {...stepProps} disabled>Step</Step>
    ))
    const disabledStepStyles = getStyles(disabledStep)
    expect(disabledStepStyles['color']).toEqual(nc(theme.stepper.colors.disabled.color))
    const disabledBadge = disabledStep.find('.badge')
    const disabledBadgeStyles = getStyles(disabledBadge)
    expect(disabledBadgeStyles['font-size']).toEqual(theme.stepper.badge.fontSize + 'px')
    expect(disabledBadgeStyles['background-color']).toEqual(nc(theme.stepper.colors.disabled.badge.backgroundColor))

    const activeStep = mount(applyTheme(
      <Step value={3} {...stepProps} active>Step</Step>
    ))
    const activeStepStyles = getStyles(activeStep)
    expect(activeStepStyles['color']).toEqual(nc(theme.stepper.colors.active.color))
    const activeBadge = activeStep.find('.badge')
    const activeBadgeStyles = getStyles(activeBadge)
    expect(activeBadgeStyles['background-color']).toEqual(nc(theme.stepper.colors.active.badge.backgroundColor))
    expect(activeBadgeStyles['color']).toEqual(nc(theme.stepper.colors.active.badge.color))
  })
})
