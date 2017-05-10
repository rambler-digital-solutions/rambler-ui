import React from 'react'
import Hint from '../Hint'
import { withTheme, mount, getStyles, getNodeStyles } from '../../utils/test-utils'

describe('<Hint />', () => {
  const mountWrapper = props => mount(
    withTheme(
      <Hint
        className="anchor"
        contentClassName="content"
        {...props}>
        Hello world
      </Hint>
    )
  )

  it('should open hint content when change props.isOpened', () => {
    const wrapper = mountWrapper()
    let contentNode = document.querySelector('.content')

    expect(contentNode).toEqual(null)

    wrapper.setProps({
      isOpened: true
    })

    contentNode = document.querySelector('.content')

    expect(document.body.lastElementChild).toEqual(contentNode.parentNode)
    expect(document.body.lastElementChild.childElementCount).toEqual(1)
  })

  it('should apply default styles', () => {
    const wrapper = mountWrapper({
      isOpened: true
    })

    const anchorStyles = getStyles(wrapper.find('.anchor'))

    expect(anchorStyles.width).toEqual('16px')
    expect(anchorStyles.height).toEqual('16px')
    expect(anchorStyles.fill).toEqual('#315efb')

    const contentNode = document.querySelector('.content')
    const contentStyles = getNodeStyles(contentNode)

    expect(contentStyles.position).toEqual('relative')
    expect(contentStyles.top).toEqual('-14px')
    expect(contentStyles.width).toEqual('275px')
    expect(contentStyles['padding-top']).toEqual('15px')
    expect(contentStyles['padding-bottom']).toEqual('20px')
    expect(contentStyles['background-color']).toEqual('rgb(255, 255, 255)')
    expect(contentStyles['font-size']).toEqual('13px')
  })
})
