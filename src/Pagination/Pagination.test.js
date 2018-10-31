import React from 'react'
import Pagination from './Pagination'
import {mount, withTheme, getStyles} from '../utils/test-utils'

describe('<Pagination />', () => {
  it('should apply default styles', () => {
    const wrapper = mount(
      withTheme(<Pagination pagesCount={10} currentPage={1} />)
    )

    const pagination = wrapper.find(Pagination)
    const paginationStyles = getStyles(pagination)

    expect(pagination.getDOMNode().nodeName).toEqual('DIV')
    expect(paginationStyles.display).toEqual('inline-flex')
    expect(paginationStyles.color).toEqual('rgb(38, 38, 38)')
    expect(paginationStyles['flex-wrap']).toEqual('wrap')
  })

  it('should append style', () => {
    const wrapper = mount(
      withTheme(
        <Pagination style={{marginLeft: 10}} pagesCount={10} currentPage={1} />
      )
    )

    const pagination = wrapper.find(Pagination)
    const paginationStyles = getStyles(pagination)

    expect(paginationStyles['margin-left']).toEqual('10px')
  })

  it('should correctly change pages', () => {
    let currentPage = 5
    const onPageChange = (event, pageNumber) => {
      currentPage = pageNumber
    }

    const wrapper = mount(
      withTheme(
        <Pagination
          pagesCount={10}
          currentPage={currentPage}
          onChange={onPageChange}
        />
      )
    )

    wrapper.find('[className*="nextArrow"]').simulate('click')
    expect(currentPage).toEqual(6)
    wrapper.find('[className*="prevArrow"]').simulate('click')
    expect(currentPage).toEqual(4)
  })

  it('should append className', () => {
    const wrapper = mount(
      withTheme(
        <Pagination pagesCount={10} currentPage={1} className="pagination" />
      )
    )

    const pagination = wrapper.find(Pagination)

    expect(pagination.hasClass('pagination')).toBe(true)
  })

  it('should apply pageInputLabel and pageInputLabelClassName', () => {
    const wrapper = mount(
      withTheme(
        <Pagination
          showPageInput
          pagesCount={10}
          currentPage={2}
          pageInputLabelClassName="label"
          pageInputLabel="foo"
        />
      )
    )

    const label = wrapper.find('.label')

    expect(label.text()).toEqual('foo')
  })
})
