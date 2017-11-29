import { Component } from 'react'
import MarkdownElement from 'components/MarkdownElement'
import readme from '!raw!../../../../contribute.md'
import Helmet from 'react-helmet'

export default class ContributePage extends Component {

  render() {
    return (
      <div>
        <Helmet>
          <title>Гайд по разработке</title>
        </Helmet>
        <MarkdownElement text={ readme } />
      </div>
    )
  }

}
