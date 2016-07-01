import { Component } from 'react'
import MarkdownElement from 'components/MarkdownElement'
import readme from '!raw!./README.md'

export default class InstallPage extends Component {

  render() {
    return <MarkdownElement text={ readme } />
  }

}
