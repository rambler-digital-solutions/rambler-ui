import React, {PureComponent, Fragment} from 'react'
import docPages from 'docs/src/docPages'
import getPage from 'docs/src/utils/getPage'
import Page from 'docs/src/components/Page'

export default class ComponentPage extends PureComponent {

  getPage() {
    const {match, location} = this.props
    if (match.params.component)
      return getPage(location.pathname, docPages)
    const {title, children} = docPages[0]
    const Content = props => children.map(child =>
      <Fragment key={child.pathname}>
        <h2>{child.title}</h2>
        <child.Content {...props} />
      </Fragment>
    )
    return {
      title,
      Content
    }
  }

  render() {
    const {title, Content} = this.getPage()

    return (
      <Page title={title}>
        <Content />
      </Page>
    )
  }

}
