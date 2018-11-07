import React from 'react'
import {TagsInputItem} from '../TagsInput'
import {ApplyTheme} from '../theme'
import {mount, getStyles, getWrapperNode} from '../utils/test-utils'
import theme from '../theme/base'
import {normalize as nc} from '../utils/colors'

const applyTheme = children => <ApplyTheme children={children} />

describe('TagsInputItem: should apply props', () => {
  it('className and children', () => {
    const className = 'testCn'
    const children = 'test'
    const wrapper = mount(
      applyTheme(
        <TagsInputItem children={children} className={className} value="" />
      )
    )
    expect(wrapper.find('div').hasClass(className)).toBeTruthy()
    expect(wrapper.find('span').text()).toEqual(children)
  })

  it('call onClick', () => {
    const v = {}
    let clickEvent
    let clickValue

    const wrapper = mount(
      applyTheme(
        <TagsInputItem
          children="text"
          onClick={(ev, val) => {
            clickEvent = ev
            clickValue = val
          }}
          value={v}
        />
      )
    )

    const item = wrapper.find(TagsInputItem)
    item.simulate('click')
    expect(clickEvent.type).toEqual('click')
    expect(clickValue).toEqual(v)
  })

  it('call onRemove disabled', () => {
    const v = {}
    let clickEvent
    let clickValue

    const wrapper = mount(
      applyTheme(
        <TagsInputItem
          children="text"
          onClick={(ev, val) => {
            clickEvent = ev
            clickValue = val
          }}
          value={v}
          disabled
        />
      )
    )

    const item = wrapper.find(TagsInputItem)
    item.simulate('click')
    expect(clickEvent).toBeUndefined()
    expect(clickValue).toBeUndefined()
  })

  it('call onRemove', () => {
    const v = {}
    let clickEvent
    let clickValue
    let removeEvent
    let removeValue

    const wrapper = mount(
      applyTheme(
        <TagsInputItem
          children="text"
          onClick={(ev, val) => {
            clickEvent = ev
            clickValue = val
          }}
          onRemove={(ev, val) => {
            removeEvent = ev
            removeValue = val
          }}
          value={v}
        />
      )
    )

    const icon = wrapper.find('svg')
    icon.simulate('click')
    expect(removeEvent.type).toEqual('click')
    expect(removeValue).toEqual(v)
    expect(clickEvent).toBeUndefined()
    expect(clickValue).toBeUndefined()
  })

  it('call onRemove disabled', () => {
    const v = {}
    let clickEvent
    let clickValue
    let removeEvent
    let removeValue

    const wrapper = mount(
      applyTheme(
        <TagsInputItem
          children="text"
          onClick={(ev, val) => {
            clickEvent = ev
            clickValue = val
          }}
          onRemove={(ev, val) => {
            removeEvent = ev
            removeValue = val
          }}
          value={v}
          disabled
        />
      )
    )

    const icon = wrapper.find('svg')
    icon.simulate('click')
    expect(removeEvent).toBeUndefined()
    expect(removeValue).toBeUndefined()
    expect(clickEvent).toBeUndefined()
    expect(clickValue).toBeUndefined()
  })

  it('call nodeRef', () => {
    let nodeRef

    const wrapper = mount(
      applyTheme(
        <TagsInputItem
          children="text"
          nodeRef={ref => {
            nodeRef = ref
          }}
          value=""
        />
      )
    )

    expect(getWrapperNode(wrapper)).toEqual(nodeRef)
  })
})

describe('TagsInputItem: should apply default styles', () => {
  it('regular type', () => {
    const wrapper = mount(
      applyTheme(<TagsInputItem children="text" value="" />)
    )
    const itemStyles = getStyles(wrapper.find(TagsInputItem))
    const textStyles = getStyles(wrapper.find('span'))

    expect(itemStyles['background-color']).toEqual('rgba(0, 0, 0, 0)')
    expect(itemStyles['font-size']).toEqual(theme.tagsInput.fontSize + 'px')
    expect(itemStyles.height).toEqual(theme.tagsInput.height + 'px')
    expect(textStyles.color).toEqual(
      nc(theme.tagsInput.types.regular.colors.default.text)
    )
    expect(textStyles['margin-left']).toEqual(
      (theme.tagsInput.types.regular.paddingLeft || 0) + 'px'
    )
    expect(textStyles['margin-right']).toEqual(
      (theme.tagsInput.types.regular.paddingRight || 0) + 'px'
    )
  })

  it('background type', () => {
    const wrapper = mount(
      applyTheme(<TagsInputItem children="text" type="background" value="" />)
    )
    const itemStyles = getStyles(wrapper.find(TagsInputItem))
    const textStyles = getStyles(wrapper.find('span'))

    expect(itemStyles['background-color']).toEqual(
      nc(theme.tagsInput.types.background.colors.default.background)
    )
    expect(itemStyles['font-size']).toEqual(theme.tagsInput.fontSize + 'px')
    expect(itemStyles.height).toEqual(theme.tagsInput.height + 'px')
    expect(textStyles.color).toEqual(
      nc(theme.tagsInput.types.background.colors.default.text)
    )
    expect(textStyles['margin-left']).toEqual(
      (theme.tagsInput.types.background.paddingLeft || 0) + 'px'
    )
    expect(textStyles['margin-right']).toEqual(
      (theme.tagsInput.types.background.paddingRight || 0) + 'px'
    )
  })

  it('regular type with remove button', () => {
    const wrapper = mount(
      applyTheme(<TagsInputItem children="text" value="" onRemove={() => {}} />)
    )
    const textStyles = getStyles(wrapper.find('span'))
    const iconStyles = getStyles(wrapper.find('svg'))

    expect(textStyles['margin-left']).toEqual(
      (theme.tagsInput.types.regular.paddingLeft || 0) + 'px'
    )
    expect(textStyles['margin-right']).toEqual(0 + 'px')
    expect(iconStyles.fill).toEqual(
      nc(theme.tagsInput.types.regular.colors.default.icon)
    )
    expect(iconStyles['margin-left']).toEqual(
      (theme.tagsInput.types.regular.iconLeftMargin || 0) + 'px'
    )
    expect(iconStyles['margin-right']).toEqual(
      (theme.tagsInput.types.regular.iconRightMargin || 0) + 'px'
    )
  })

  it('background type  with remove button', () => {
    const wrapper = mount(
      applyTheme(
        <TagsInputItem
          children="text"
          type="background"
          value=""
          onRemove={() => {}}
        />
      )
    )
    const textStyles = getStyles(wrapper.find('span'))
    const iconStyles = getStyles(wrapper.find('svg'))

    expect(textStyles['margin-left']).toEqual(
      (theme.tagsInput.types.background.paddingLeft || 0) + 'px'
    )
    expect(textStyles['margin-right']).toEqual(0 + 'px')
    expect(iconStyles.fill).toEqual(
      nc(theme.tagsInput.types.background.colors.default.icon)
    )
    expect(iconStyles['margin-left']).toEqual(
      (theme.tagsInput.types.background.iconLeftMargin || 0) + 'px'
    )
    expect(iconStyles['margin-right']).toEqual(
      (theme.tagsInput.types.background.iconRightMargin || 0) + 'px'
    )
  })

  it('regular type with remove button and disabled', () => {
    const wrapper = mount(
      applyTheme(
        <TagsInputItem disabled children="text" value="" onRemove={() => {}} />
      )
    )
    const itemStyles = getStyles(wrapper.find(TagsInputItem))
    const textStyles = getStyles(wrapper.find('span'))
    const iconStyles = getStyles(wrapper.find('svg'))

    expect(itemStyles['background-color']).toEqual('rgba(0, 0, 0, 0)')
    expect(textStyles.color).toEqual(
      nc(theme.tagsInput.types.regular.colors.disabled.text)
    )
    expect(iconStyles.fill).toEqual(
      nc(theme.tagsInput.types.regular.colors.disabled.icon)
    )
  })

  it('background type with remove button disabled', () => {
    const wrapper = mount(
      applyTheme(
        <TagsInputItem
          disabled
          children="text"
          type="background"
          value=""
          onRemove={() => {}}
        />
      )
    )
    const itemStyles = getStyles(wrapper.find(TagsInputItem))
    const textStyles = getStyles(wrapper.find('span'))
    const iconStyles = getStyles(wrapper.find('svg'))

    expect(itemStyles['background-color']).toEqual(
      nc(theme.tagsInput.types.background.colors.disabled.background)
    )
    expect(textStyles.color).toEqual(
      nc(theme.tagsInput.types.background.colors.disabled.text)
    )
    expect(iconStyles.fill).toEqual(
      nc(theme.tagsInput.types.background.colors.disabled.icon)
    )
  })
})
