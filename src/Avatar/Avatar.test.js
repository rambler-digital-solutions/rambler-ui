import React from 'react'
import Avatar from './Avatar'
import theme from '../theme/base'
import {mount, withTheme, getStyles} from '../../test/utils'
import {normalize as nc} from '../utils/colors'

const TEST_IMAGE =
  'https://api.adorable.io/avatars/face/eyes4/nose5/mouth7/8e8895/'

function normalizaImageUrl(url) {
  return url.replace(/['"]/g, '')
}

describe('<Avatar />', () => {
  it('should apply default styles', () => {
    const wrapper = mount(withTheme(<Avatar src={TEST_IMAGE} />))

    const image = wrapper.find(Avatar)
    const imageStyles = getStyles(image)

    expect(image.getDOMNode().nodeName).toEqual('DIV')
    expect(imageStyles.display).toEqual('inline-block')
    expect(imageStyles.width).toEqual('45px')
    expect(imageStyles.height).toEqual('45px')
    expect(imageStyles['vertical-align']).toEqual('middle')
    expect(normalizaImageUrl(imageStyles['background-image'])).toEqual(
      `url(${TEST_IMAGE})`
    )
    expect(imageStyles['border-top-left-radius']).toEqual('50%')
    expect(imageStyles['border-top-right-radius']).toEqual('50%')
    expect(imageStyles['border-bottom-left-radius']).toEqual('50%')
    expect(imageStyles['border-bottom-right-radius']).toEqual('50%')
  })

  it('should be a rounded', () => {
    const wrapper = mount(
      withTheme(<Avatar shape="rounded" src={TEST_IMAGE} />)
    )

    const image = wrapper.find(Avatar)
    const imageStyles = getStyles(image)

    expect(imageStyles['border-top-left-radius']).toEqual('7%')
    expect(imageStyles['border-top-right-radius']).toEqual('7%')
    expect(imageStyles['border-bottom-left-radius']).toEqual('7%')
    expect(imageStyles['border-bottom-right-radius']).toEqual('7%')
  })

  it('should be a square', () => {
    const wrapper = mount(withTheme(<Avatar shape="square" src={TEST_IMAGE} />))

    const image = wrapper.find(Avatar)
    const imageStyles = getStyles(image)

    expect(imageStyles['border-top-left-radius']).toEqual('0px')
    expect(imageStyles['border-top-right-radius']).toEqual('0px')
    expect(imageStyles['border-bottom-left-radius']).toEqual('0px')
    expect(imageStyles['border-bottom-right-radius']).toEqual('0px')
  })

  it('should apply custom size', () => {
    const wrapper = mount(withTheme(<Avatar size={75} src={TEST_IMAGE} />))

    const image = wrapper.find(Avatar)
    const imageStyles = getStyles(image)

    expect(imageStyles.width).toEqual('75px')
    expect(imageStyles.height).toEqual('75px')
  })

  it('should append className', () => {
    const wrapper = mount(
      withTheme(<Avatar className="avatar" src={TEST_IMAGE} />)
    )

    const image = wrapper.find(Avatar)

    expect(image.hasClass('avatar')).toBe(true)
  })

  it('should append style', () => {
    const wrapper = mount(
      withTheme(<Avatar style={{marginLeft: 10}} src={TEST_IMAGE} />)
    )

    const image = wrapper.find(Avatar)
    const imageStyles = getStyles(image)

    expect(imageStyles['margin-left']).toEqual('10px')
  })

  it('should append backgroundColor', () => {
    const color = 'rgb(255, 255, 255)'

    const wrapper = mount(
      withTheme(<Avatar backgroundColor={color} src={TEST_IMAGE} />)
    )
    const image = wrapper.find(Avatar)
    const imageStyles = getStyles(image)
    expect(imageStyles['background-color']).toEqual(color)
  })

  it('should append profile icon', () => {
    const wrapper = mount(
      withTheme(<Avatar profileType="facebook" src={TEST_IMAGE} />)
    )

    const image = wrapper.find(Avatar)
    const iconStyles = getStyles(image.find('svg'))
    const iconContainerStyles = getStyles(image.find('div > div'))

    expect(nc(iconStyles.fill)).toEqual(nc('#1877f2'))
    expect(iconStyles.width).toEqual('15px')
    expect(iconStyles.height).toEqual('15px')

    expect(iconContainerStyles.position).toEqual('absolute')
    expect(iconContainerStyles.width).toEqual('22px')
    expect(iconContainerStyles.height).toEqual('22px')
    expect(nc(iconContainerStyles['background-color'])).toEqual(
      nc(theme.avatar.colors.iconBackground)
    )
  })

  it('should append iconBackgroundColor', () => {
    const color = 'rgb(255, 0, 0)'

    const wrapper = mount(
      withTheme(
        <Avatar
          profileType="facebook"
          iconBackgroundColor={color}
          src={TEST_IMAGE}
        />
      )
    )

    const image = wrapper.find(Avatar)
    const iconContainerStyles = getStyles(image.find('div > div'))

    expect(iconContainerStyles['background-color']).toEqual(color)
  })

  it('should append `<a />` as container', () => {
    const wrapper = mount(
      withTheme(<Avatar src={TEST_IMAGE} container={<a href="/foo" />} />)
    )

    const image = wrapper.find(Avatar)
    const imageNode = image.getDOMNode()

    expect(imageNode.nodeName).toEqual('A')
    expect(imageNode.getAttribute('href')).toEqual('/foo')
  })

  it('should append container', () => {
    const wrapper = mount(
      withTheme(<Avatar src={TEST_IMAGE} container={<span />} />)
    )

    const image = wrapper.find(Avatar)

    expect(image.getDOMNode().nodeName).toEqual('SPAN')
  })

  it('should call props.onClick() when click on avatar', () => {
    let event

    const wrapper = mount(
      withTheme(
        <Avatar
          src={TEST_IMAGE}
          onClick={e => {
            event = e
          }}
        />
      )
    )

    const image = wrapper.find(Avatar)

    image.simulate('click')
    expect(event.type).toEqual('click')
  })
})
