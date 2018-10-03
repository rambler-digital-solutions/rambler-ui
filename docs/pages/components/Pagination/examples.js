import Pagination from 'rambler-ui/Pagination'
import React, {Component} from 'react'

export default class PaginationExample extends Component {
  state = {
    page: 1
  }

  handleChange = (event, page) => {
    this.setState({page})
  }

  render() {
    return (
      <div>
        <h4>default</h4>
        {[...Array(15)].map((item, index) => (
          <div style={{marginBottom: 10}} key={index}>
            <Pagination pagesCount={15} currentPage={index + 1} />
          </div>
        ))}
        <div style={{marginTop: 40}}>
          <h4>
            pageContainer:{' '}
            <code>{'(pageNumber) => <a href={`#${pageNumber}`} />'}</code>
          </h4>
          <Pagination
            pagesCount={9999}
            currentPage={this.state.page}
            onChange={this.handleChange}
            pageContainer={pageNumber => <a href={`#${pageNumber}`} />}
          />
        </div>
        <div style={{marginTop: 40}}>
          this.state.page: <b>{this.state.page}</b>
        </div>
      </div>
    )
  }
}
