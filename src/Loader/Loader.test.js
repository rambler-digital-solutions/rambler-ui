import React from 'react'
import Loader from './Loader'
import Spinner from '../Spinner'
import { mount, withTheme, getStyles, getNodeStyles, getWrapperNode } from '../utils/test-utils'

const contentEl = (
  <div className="content">
    Hello world
  </div>
)

describe('<Loader />', () => {

  it('should apply default props', () => {
    const wrapper = mount(withTheme(<Loader>
      {contentEl}
    </Loader>))

    const loader = wrapper.find(Loader)
    const loaderStyles = getStyles(loader)

    expect(loaderStyles.position).toEqual('relative')

    const content = loader.find('.content')

    expect(content.text()).toEqual('Hello world')
  })

  it('should show spinner when set loading = true', () => {
    const wrapper = mount(withTheme(<Loader>
      {contentEl}
    </Loader>))

    expect(wrapper.find(Spinner).exists()).toBe(false)

    wrapper.setProps({
      loading: true
    })

    expect(wrapper.find(Spinner).exists()).toBe(true)

    wrapper.setProps({
      loading: false
    })

    expect(wrapper.find(Spinner).exists()).toBe(false)
  })

  it('should show spinner when set loading = Promise', async (done) => {
    const wrapper = mount(withTheme(<Loader spinnerClassName="spinner">
      {contentEl}
    </Loader>))

    let completeLoading

    const loading = new Promise((resolve) => {
      completeLoading = () => {
        resolve()
      }
    })

    const wrapperNode = getWrapperNode(wrapper)

    expect(wrapperNode.querySelectorAll('.spinner').length).toBe(0)

    wrapper.setProps({
      loading
    })

    expect(wrapperNode.querySelectorAll('.spinner').length).toBe(1)

    completeLoading()
    await loading

    expect(wrapperNode.querySelectorAll('.spinner').length).toBe(0)
    done()
  })

  it('should append className and loadingClassName', () => {
    const wrapper = mount(withTheme(<Loader className="normal" loadingClassName="loading">
      {contentEl}
    </Loader>))

    const node = getWrapperNode(wrapper)

    expect(node.classList.contains('normal')).toBe(true)
    expect(node.classList.contains('loading')).toBe(false)

    wrapper.setProps({
      loading: true
    })

    expect(node.classList.contains('normal')).toBe(true)
    expect(node.classList.contains('loading')).toBe(true)

    wrapper.setProps({
      loading: false
    })

    expect(node.classList.contains('normal')).toBe(true)
    expect(node.classList.contains('loading')).toBe(false)
  })

  it('should append styles', () => {
    const wrapper = mount(withTheme(<Loader style={{ height: 500 }}>
      {contentEl}
    </Loader>))

    const loaderStyles = getStyles(wrapper)

    expect(loaderStyles.height).toEqual('500px')
  })

  it('should append spinnerClassName and spinnerColor', () => {
    const color = 'rgb(0, 0, 0)'

    const wrapper = mount(withTheme(<Loader loading={true} spinnerClassName="spinner" spinnerColor={color}>
      {contentEl}
    </Loader>))

    const spinner = wrapper.find(Spinner)
    const spinnerNode = getWrapperNode(spinner)

    const dotNode = spinnerNode.firstChild
    const dotStyles = getNodeStyles(dotNode)

    expect(spinnerNode.classList.contains('spinner')).toBe(true)
    expect(dotStyles['background-color']).toEqual(color)
  })

  it('should blur content when loading = true', () => {
    const wrapper = mount(withTheme(<Loader loading={true} blurContent={true}>
      {contentEl}
    </Loader>))

    const loader = wrapper.find(Loader)
    const content = loader.children().first()

    expect(/blur/.test(content.html())).toBe(true)
  })

  it('should show overlay when loading = true', () => {
    const wrapper = mount(withTheme(<Loader loading={true} overlayClassName="overlay">
      {contentEl}
    </Loader>))

    const overlay = getWrapperNode(wrapper).children[1]

    expect(overlay.classList.contains('overlay')).toBe(true)
  })

  it('should hide content when loading = true', () => {
    const wrapper = mount(withTheme(<Loader hideContent={true}>
      {contentEl}
    </Loader>))

    expect(wrapper.find('.content').exists()).toBe(true)

    wrapper.setProps({
      loading: true
    })

    expect(wrapper.find('.content').exists()).toBe(false)

    wrapper.setProps({
      loading: false
    })

    expect(wrapper.find('.content').exists()).toBe(true)
  })

})
