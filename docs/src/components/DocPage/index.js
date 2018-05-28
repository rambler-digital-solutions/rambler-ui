import React, {PureComponent} from 'react'
import docPages from 'docs/src/docPages'
import getPage from 'docs/src/utils/getPage'
import 'highlight.js/styles/default.css'
import PreCode from 'docs/src/components/PreCode'
import InlineCode from 'docs/src/components/InlineCode'
import Page from 'docs/src/components/Page'

const H1 = () => null

export default class DocPage extends PureComponent {

  render() {
    const {location} = this.props
    const {title, Content} = getPage(location.pathname, docPages)

    return (
      <Page title={title}>
        <Content components={{h1: H1, pre: PreCode, inlineCode: InlineCode}} />
      </Page>
    )
  }

}
