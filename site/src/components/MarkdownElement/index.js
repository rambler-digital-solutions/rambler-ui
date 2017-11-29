/* eslint global-require: ["off"] */

import { Component } from 'react'
import PropTypes from 'prop-types'
import marked from 'marked'
import './index.css'
import 'highlight.js/styles/default.css'
import hljs from 'highlight.js'

export default class MarkdownElement extends Component {

  static propTypes = {
    style: PropTypes.object,
    text: PropTypes.string.isRequired
  }

  static defaultProps = {
    text: ''
  }

  componentWillMount() {
    marked.setOptions({
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      highlight(code, lang) {
        const { value } = lang ? hljs.highlight(lang, code) : hljs.highlightAuto(code)
        return value
      }
    })
  }

  render() {
    const {props} = this

    /* eslint-disable react/no-danger */
    return (
      <div
        style={props.style}
        className="markdown-body"
        dangerouslySetInnerHTML={{ __html: marked(props.text) }}
      />
    )
    /* eslint-enable */
  }
}
