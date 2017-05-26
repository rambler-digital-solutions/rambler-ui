import React from 'react'
import Loader from '../Loader'
import Spinner from '../../Spinner'
import { mount, withTheme, getStyles } from '../../utils/test-utils'

const contentEl = (
  <div className="content">
    Hello world
  </div>
)

describe('<Loader />', () => {

  it('should apply default props', () => {
    const wrapper = mount(
      withTheme(
        <Loader>
          {contentEl}
        </Loader>
      )
    )

    const loader = wrapper.find(Loader)
    const loaderStyles = getStyles(loader)

    expect(loaderStyles.position).toEqual('relative')

    const content = loader.find('.content')

    expect(content.text()).toEqual('Hello world')
  })

  it('should show spinner when set loading = true', () => {
    const wrapper = mount(
      withTheme(
        <Loader>
          {contentEl}
        </Loader>
      )
    )

    const loader = wrapper.find(Loader)

    expect(loader.find(Spinner).exists()).toBe(false)

    wrapper.setProps({
      loading: true
    })

    expect(loader.find(Spinner).exists()).toBe(true)

    wrapper.setProps({
      loading: false
    })

    expect(loader.find(Spinner).exists()).toBe(false)
  })

  it('should show spinner when set loading = Promise', async done => {
    const wrapper = mount(
      withTheme(
        <Loader>
          {contentEl}
        </Loader>
      )
    )

    let completeLoading

    const loading = new Promise(resolve => {
      completeLoading = () => setTimeout(() => {
        resolve()
      }, 500)
    })

    const loader = wrapper.find(Loader)

    expect(loader.find(Spinner).exists()).toBe(false)

    wrapper.setProps({
      loading
    })

    expect(loader.find(Spinner).exists()).toBe(true)

    completeLoading()
    await loading

    expect(loader.find(Spinner).exists()).toBe(false)
    done()
  })

  it('should append className and loadingClassName', () => {
    const wrapper = mount(
      withTheme(
        <Loader className="normal" loadingClassName="loading">
          {contentEl}
        </Loader>
      )
    )

    const loader = wrapper.find(Loader)

    expect(loader.hasClass('normal')).toBe(true)
    expect(loader.hasClass('loading')).toBe(false)

    wrapper.setProps({
      loading: true
    })

    expect(loader.hasClass('normal')).toBe(true)
    expect(loader.hasClass('loading')).toBe(true)

    wrapper.setProps({
      loading: false
    })

    expect(loader.hasClass('normal')).toBe(true)
    expect(loader.hasClass('loading')).toBe(false)
  })

  it('should append styles', () => {
    const wrapper = mount(
      withTheme(
        <Loader style={{ height: 500 }}>
          {contentEl}
        </Loader>
      )
    )

    const loader = wrapper.find(Loader)
    const loaderStyles = getStyles(loader)

    expect(loaderStyles.height).toEqual('500px')
  })

  it('should append spinnerClassName and spinnerColor', () => {
    const color = 'rgb(0, 0, 0)'

    const wrapper = mount(
      withTheme(
        <Loader loading={true} spinnerClassName="spinner" spinnerColor={color}>
          {contentEl}
        </Loader>
      )
    )

    const spinner = wrapper.find(Spinner)
    const dotStyles = getStyles(spinner.children().first())

    expect(spinner.hasClass('spinner')).toBe(true)
    expect(dotStyles['background-color']).toEqual(color)
  })

  it('should blur content when loading = true', () => {
    const wrapper = mount(
      withTheme(
        <Loader loading={true} blurContent={true}>
          {contentEl}
        </Loader>
      )
    )

    const loader = wrapper.find(Loader)
    const content = loader.children().last()

    expect(/blur/.test(content.html())).toBe(true)
  })

  it('should hide content when loading = true', () => {
    const wrapper = mount(
      withTheme(
        <Loader hideContent={true}>
          {contentEl}
        </Loader>
      )
    )

    const loader = wrapper.find(Loader)

    expect(loader.find('.content').exists()).toBe(true)

    wrapper.setProps({
      loading: true
    })

    expect(loader.find('.content').exists()).toBe(false)

    wrapper.setProps({
      loading: false
    })

    expect(loader.find('.content').exists()).toBe(true)
  })

})
