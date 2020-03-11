import React from 'react'
import {TagsInputItem} from '../TagsInput'
import PhotoCameraIcon from '../icons/forms/PhotoCameraIcon'
import {ThemeProvider} from '../theme'
import {mount, getStyles, getWrapperNode} from '../../test/utils'
import theme from '../theme/base'
import {normalize as nc} from '../utils/colors'

const applyTheme = children => <ThemeProvider>{children}</ThemeProvider>

describe('TagsInputItem: should apply props', () => {
  it('className and children', () => {
    const className = 'testCn'
    const children = 'test'
    const wrapper = mount(
      applyTheme(
        <TagsInputItem className={className} value="">
          {children}
        </TagsInputItem>
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
          onClick={(ev, val) => {
            clickEvent = ev
            clickValue = val
          }}
          value={v}>
          text
        </TagsInputItem>
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
          onClick={(ev, val) => {
            clickEvent = ev
            clickValue = val
          }}
          value={v}
          disabled>
          text
        </TagsInputItem>
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
          onClick={(ev, val) => {
            clickEvent = ev
            clickValue = val
          }}
          onRemove={(ev, val) => {
            removeEvent = ev
            removeValue = val
          }}
          value={v}>
          text
        </TagsInputItem>
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
          onClick={(ev, val) => {
            clickEvent = ev
            clickValue = val
          }}
          onRemove={(ev, val) => {
            removeEvent = ev
            removeValue = val
          }}
          value={v}
          disabled>
          text
        </TagsInputItem>
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
          nodeRef={ref => {
            nodeRef = ref
          }}
          value="">
          text
        </TagsInputItem>
      )
    )

    expect(getWrapperNode(wrapper)).toEqual(nodeRef)
  })
})

describe('TagsInputItem: should apply default styles', () => {
  it('regular type', () => {
    const regularTheme = theme.tagsInput.types.regular
    const wrapper = mount(
      applyTheme(<TagsInputItem value="">text</TagsInputItem>)
    )
    const itemStyles = getStyles(wrapper.find(TagsInputItem))
    const textStyles = getStyles(wrapper.find('span'))

    expect(itemStyles['background-color']).toEqual('rgba(0, 0, 0, 0)')
    expect(itemStyles['font-size']).toEqual(theme.tagsInput.fontSize + 'px')
    expect(itemStyles.height).toEqual(regularTheme.height + 'px')
    expect(textStyles.color).toEqual(nc(regularTheme.colors.default.text))
    expect(textStyles['margin-left']).toEqual(
      (regularTheme.paddingLeft || 0) + 'px'
    )
    expect(textStyles['margin-right']).toEqual(
      (regularTheme.paddingRight || 0) + 'px'
    )
  })

  it('background type', () => {
    const backgroundTheme = theme.tagsInput.types.background
    const wrapper = mount(
      applyTheme(
        <TagsInputItem type="background" value="">
          text
        </TagsInputItem>
      )
    )
    const itemStyles = getStyles(wrapper.find(TagsInputItem))
    const textStyles = getStyles(wrapper.find('span'))

    expect(itemStyles['background-color']).toEqual(
      nc(theme.tagsInput.types.background.colors.default.background)
    )
    expect(itemStyles['font-size']).toEqual(theme.tagsInput.fontSize + 'px')
    expect(itemStyles.height).toEqual(backgroundTheme.height + 'px')
    expect(textStyles.color).toEqual(nc(backgroundTheme.colors.default.text))
    expect(textStyles['margin-left']).toEqual(
      (backgroundTheme.paddingLeft || 0) + 'px'
    )
    expect(textStyles['margin-right']).toEqual(
      (backgroundTheme.paddingRight || 0) + 'px'
    )
  })

  it('regular type with remove button', () => {
    const wrapper = mount(
      applyTheme(
        <TagsInputItem value="" onRemove={() => {}}>
          text
        </TagsInputItem>
      )
    )
    const textStyles = getStyles(wrapper.find('span'))
    const iconStyles = getStyles(wrapper.find('svg'))

    expect(textStyles['margin-left']).toEqual(
      (theme.tagsInput.types.regular.paddingLeft || 0) + 'px'
    )
    expect(textStyles['margin-right']).toEqual('0px')
    expect(iconStyles.fill).toEqual(
      nc(theme.tagsInput.types.regular.colors.default.icon)
    )
    expect(iconStyles['margin-left']).toEqual(
      (theme.tagsInput.types.regular.removeLeftMargin || 0) + 'px'
    )
    expect(iconStyles['margin-right']).toEqual(
      (theme.tagsInput.types.regular.removeRightMargin || 0) + 'px'
    )
  })

  it('background type with remove button', () => {
    const wrapper = mount(
      applyTheme(
        <TagsInputItem type="background" value="" onRemove={() => {}}>
          text
        </TagsInputItem>
      )
    )
    const textStyles = getStyles(wrapper.find('span'))
    const iconStyles = getStyles(wrapper.find('svg'))

    expect(textStyles['margin-left']).toEqual(
      (theme.tagsInput.types.background.paddingLeft || 0) + 'px'
    )
    expect(textStyles['margin-right']).toEqual('0px')
    expect(iconStyles.fill).toEqual(
      nc(theme.tagsInput.types.background.colors.default.icon)
    )
    expect(iconStyles['margin-left']).toEqual(
      (theme.tagsInput.types.background.removeLeftMargin || 0) + 'px'
    )
    expect(iconStyles['margin-right']).toEqual(
      (theme.tagsInput.types.background.removeRightMargin || 0) + 'px'
    )
  })

  it('regular type with icon', () => {
    const regularTheme = theme.tagsInput.types.regular
    const wrapper = mount(
      applyTheme(
        <TagsInputItem value="" icon={<PhotoCameraIcon />}>
          text
        </TagsInputItem>
      )
    )
    const iconStyles = getStyles(wrapper.find('svg'))
    const textStyles = getStyles(wrapper.find('span'))

    expect(iconStyles['width']).toEqual(regularTheme.iconSize + 'px')
    expect(iconStyles['height']).toEqual(regularTheme.iconSize + 'px')

    expect(iconStyles.fill).toEqual(nc(regularTheme.colors.default.text))

    expect(iconStyles['margin-left']).toEqual(
      (regularTheme.iconLeftMargin || 0) + 'px'
    )
    expect(iconStyles['margin-right']).toEqual(
      (regularTheme.iconRightMargin || 0) + 'px'
    )
    expect(textStyles['margin-left']).toEqual('0px')
    expect(textStyles['margin-right']).toEqual(
      (regularTheme.paddingRight || 0) + 'px'
    )
  })

  it('background type with icon and custom color', () => {
    const backgroundTheme = theme.tagsInput.types.regular
    const color = '#FF0000'
    const wrapper = mount(
      applyTheme(
        <TagsInputItem value="" icon={<PhotoCameraIcon color={color} />}>
          text
        </TagsInputItem>
      )
    )
    const iconStyles = getStyles(wrapper.find('svg'))
    const textStyles = getStyles(wrapper.find('span'))

    expect(iconStyles.fill).toEqual(nc(color))

    expect(iconStyles['margin-left']).toEqual(
      (backgroundTheme.iconLeftMargin || 0) + 'px'
    )
    expect(iconStyles['margin-right']).toEqual(
      (backgroundTheme.iconRightMargin || 0) + 'px'
    )
    expect(textStyles['margin-left']).toEqual('0px')
    expect(textStyles['margin-right']).toEqual(
      (backgroundTheme.paddingRight || 0) + 'px'
    )
  })

  it('background type disabled with icon and custom color', () => {
    const color = '#FF0000'
    const wrapper = mount(
      applyTheme(
        <TagsInputItem
          disabled
          value=""
          icon={<PhotoCameraIcon color={color} />}>
          text
        </TagsInputItem>
      )
    )
    const iconStyles = getStyles(wrapper.find('svg'))
    expect(iconStyles.fill).toEqual(
      nc(theme.tagsInput.types.background.colors.disabled.text)
    )
  })

  it('regular type with remove button and disabled', () => {
    const wrapper = mount(
      applyTheme(
        <TagsInputItem disabled value="" onRemove={() => {}}>
          text
        </TagsInputItem>
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
        <TagsInputItem disabled type="background" value="" onRemove={() => {}}>
          text
        </TagsInputItem>
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
