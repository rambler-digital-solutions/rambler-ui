import React from 'react'
import {TagsInput, TagsInputItem} from '../TagsInput'
import {ThemeProvider} from '../theme'
import {mount, getStyles} from '../utils/test-utils'
import theme from '../theme/base'
import {normalize as nc} from '../utils/colors'

const applyTheme = children => <ThemeProvider children={children} />

describe('TagsInput: should apply props', () => {
  it('apply className and children, moreButton is renered', () => {
    const className = 'testCn'
    const children1ClassName = 'testChildren1Cn'

    const wrapper = mount(
      applyTheme(
        <TagsInput className={className}>
          <TagsInputItem
            children="1"
            className={children1ClassName}
            value="1"
          />
          <TagsInputItem children="2" value="2" />
        </TagsInput>
      )
    )

    const firstItem = wrapper.find(TagsInputItem).first()
    const container = firstItem.closest('div')

    expect(wrapper.find(TagsInput).hasClass(className)).toBeTruthy()
    expect(container.childAt(0).is(TagsInputItem)).toBeTruthy()
    expect(firstItem.hasClass(children1ClassName)).toBeTruthy()
    expect(container.childAt(1).is(TagsInputItem)).toBeTruthy()
    expect(container.childAt(2).not(TagsInputItem)).toBeTruthy()

    expect(container.children().length).toEqual(3)
    expect(container.childAt(2).text()).toContain('+')
  })

  it('isExpanded, moreButton is not renered', () => {
    const wrapper = mount(
      applyTheme(
        <TagsInput isExpanded>
          <TagsInputItem children="1" value="1" />
          <TagsInputItem children="2" value="2" />
        </TagsInput>
      )
    )

    const container = wrapper
      .find(TagsInputItem)
      .first()
      .closest('div')
    expect(container.children().length).toEqual(2)
    expect(container.childAt(0).is(TagsInputItem)).toBeTruthy()
    expect(container.childAt(1).is(TagsInputItem)).toBeTruthy()
  })

  it('call onMoreClick', () => {
    let event

    const wrapper = mount(
      applyTheme(
        <TagsInput
          onMoreClick={ev => {
            event = ev
          }}
        />
      )
    )
    const more = wrapper.find('[role="button"]')

    more.simulate('click')
    expect(event.type).toEqual('click')
  })

  it('call onMoreClick disabled', () => {
    let event

    const wrapper = mount(
      applyTheme(
        <TagsInput
          onMoreClick={ev => {
            event = ev
          }}
          disabled
        />
      )
    )

    wrapper.find('[role="button"]').simulate('click')
    expect(event).toBeUndefined()
  })

  it('call onChange', () => {
    let value

    const wrapper = mount(
      applyTheme(
        <TagsInput
          onChange={val => {
            value = val
          }}>
          <TagsInputItem children="1" value={1} id="ch1" />
          <TagsInputItem children="2" value={2} id="ch2" />
        </TagsInput>
      )
    )

    wrapper.find('#ch1 svg').simulate('click')
    expect(Array.isArray(value)).toBeTruthy()
    expect(value.length === 1).toBeTruthy()
    expect(value[0]).toEqual(2)

    wrapper.find('#ch2 svg').simulate('click')
    expect(Array.isArray(value)).toBeTruthy()
    expect(value.length === 1).toBeTruthy()
    expect(value[0]).toEqual(1)
  })

  it('call onChange disabled', () => {
    let value = 'initial'

    const wrapper = mount(
      applyTheme(
        <TagsInput
          onChange={val => {
            value = val
          }}
          disabled>
          <TagsInputItem children="1" value={1} id="ch1" />
          <TagsInputItem children="2" value={2} />
        </TagsInput>
      )
    )

    wrapper.find('#ch1 svg').simulate('click')
    expect(value).toEqual('initial')
  })
})

describe('TagsInput: should apply default styles', () => {
  it('regular type', () => {
    const regularTheme = theme.tagsInput.types.regular
    const wrapper = mount(
      applyTheme(
        <TagsInput style={{width: 100}}>
          <TagsInputItem children="1" value={1} style={{width: 60}} />
        </TagsInput>
      )
    )

    const firstItem = wrapper.find(TagsInputItem).first()
    const container = firstItem.closest('div')

    const containerStyles = getStyles(container)
    expect(containerStyles['margin-top']).toEqual(
      -regularTheme.verticalGap + 'px'
    )
    expect(containerStyles['margin-left']).toEqual(
      -regularTheme.horizontalGap + 'px'
    )
    expect(containerStyles['min-height']).toEqual(
      regularTheme.verticalGap + regularTheme.height + 'px'
    )

    const itemStyles = getStyles(firstItem)
    expect(itemStyles['margin-top']).toEqual(regularTheme.verticalGap + 'px')
    expect(itemStyles['margin-left']).toEqual(regularTheme.horizontalGap + 'px')

    const moreButton = container.children().last()
    expect(moreButton.not(TagsInputItem)).toBeTruthy()
    const moreStyles = getStyles(moreButton)
    expect(moreStyles.visibility).toEqual('hidden')
    expect(moreStyles.order).toEqual('1')
  })

  it('regular type with hidden items', () => {
    const wrapper = mount(
      applyTheme(
        <TagsInput style={{width: 100}}>
          <TagsInputItem children="1" value={1} style={{width: 60}} />
          <TagsInputItem children="2" value={2} style={{width: 60}} />
        </TagsInput>
      )
    )

    const firstItem = wrapper.find(TagsInputItem).first()
    const container = firstItem.closest('div')

    const firstItemStyles = getStyles(firstItem)
    expect(firstItemStyles.visibility).toEqual('visible')

    const hiddenItemStyles = getStyles(container.childAt(1))
    expect(hiddenItemStyles.visibility).toEqual('hidden')
    expect(hiddenItemStyles.order).toEqual('1')

    const moreButton = container.children().last()
    expect(moreButton.not(TagsInputItem)).toBeTruthy()
    const moreStyles = getStyles(moreButton)
    expect(moreStyles['margin-top']).toEqual(
      theme.tagsInput.types.regular.verticalGap + 'px'
    )
    expect(moreStyles['margin-left']).toEqual(
      theme.tagsInput.types.regular.horizontalGap + 'px'
    )
    expect(moreStyles.visibility).toEqual('visible')
    expect(moreStyles.color).toEqual(nc(theme.tagsInput.colors.default.more))

    const containerStyles = getStyles(container)
    expect(containerStyles['flex-wrap']).toEqual('nowrap')
  })

  it('regular type isExpanded', () => {
    const wrapper = mount(
      applyTheme(
        <TagsInput style={{width: 100}} isExpanded>
          <TagsInputItem children="1" value={1} style={{width: 60}} />
          <TagsInputItem children="2" value={2} style={{width: 60}} />
        </TagsInput>
      )
    )

    const firstItem = wrapper.find(TagsInputItem).first()
    const container = firstItem.closest('div')

    expect(getStyles(firstItem).visibility).toEqual('visible')
    expect(getStyles(container.childAt(1)).visibility).toEqual('visible')
    expect(getStyles(container)['flex-wrap']).toEqual('wrap')
  })

  it('regular type disabled', () => {
    const wrapper = mount(
      applyTheme(
        <TagsInput style={{width: 100}} disabled>
          <TagsInputItem children="1" value={1} style={{width: 60}} />
          <TagsInputItem children="2" value={2} style={{width: 60}} />
        </TagsInput>
      )
    )

    const firstItem = wrapper.find(TagsInputItem).first()
    const container = firstItem.closest('div')

    const moreButton = container.children().last()
    expect(moreButton.not(TagsInputItem)).toBeTruthy()
    expect(getStyles(moreButton).color).toEqual(
      nc(theme.tagsInput.colors.disabled.more)
    )
  })

  it('background type', () => {
    const backgroundTheme = theme.tagsInput.types.background
    const wrapper = mount(
      applyTheme(
        <TagsInput style={{width: 100}} type="background">
          <TagsInputItem children="1" value={1} style={{width: 60}} />
        </TagsInput>
      )
    )

    const firstItem = wrapper.find(TagsInputItem).first()
    const container = firstItem.closest('div')

    const containerStyles = getStyles(container)
    expect(containerStyles['margin-top']).toEqual(
      -backgroundTheme.verticalGap + 'px'
    )
    expect(containerStyles['margin-left']).toEqual(
      -backgroundTheme.horizontalGap + 'px'
    )
    expect(containerStyles['min-height']).toEqual(
      backgroundTheme.verticalGap + backgroundTheme.height + 'px'
    )

    const itemStyles = getStyles(firstItem)
    expect(itemStyles['margin-top']).toEqual(backgroundTheme.verticalGap + 'px')
    expect(itemStyles['margin-left']).toEqual(
      backgroundTheme.horizontalGap + 'px'
    )
  })

  it('background type with hidden items', () => {
    const wrapper = mount(
      applyTheme(
        <TagsInput style={{width: 100}} type="background">
          <TagsInputItem children="1" value={1} style={{width: 60}} />
          <TagsInputItem children="2" value={2} style={{width: 60}} />
        </TagsInput>
      )
    )

    const container = wrapper
      .find(TagsInputItem)
      .first()
      .closest('div')

    const moreButton = container.children().last()
    expect(moreButton.not(TagsInputItem)).toBeTruthy()
    const moreStyles = getStyles(moreButton)
    expect(moreStyles['margin-top']).toEqual(
      theme.tagsInput.types.background.verticalGap + 'px'
    )
    expect(moreStyles['margin-left']).toEqual(
      theme.tagsInput.types.background.horizontalGap + 'px'
    )
  })
})
