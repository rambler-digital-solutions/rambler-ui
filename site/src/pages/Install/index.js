import { Component } from 'react'
import MarkdownElement from 'components/MarkdownElement'
import readme from '!raw!../../../../install.md'
import Helmet from 'react-helmet'

export default class InstallPage extends Component {

  render() {
    return (
      <div>
        <Helmet>
          <title>Установка</title>
        </Helmet>
        <MarkdownElement text={ readme } />
      </div>
    )
  }

}
