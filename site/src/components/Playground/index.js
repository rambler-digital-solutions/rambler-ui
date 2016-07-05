/*
  eslint
  no-new-func: ['off']
 */
/**
 * Плейграунд
 */
import { PropTypes, Component } from 'react'
import Codemirror from 'react-codemirror'
import 'codemirror/mode/javascript/javascript'
import { debounce } from 'core-decorators'
import classnames from 'classnames'
import pure from 'recompose/pure'
import { get, compact } from 'lodash'
import css from './index.css'
import * as rui from '../../../../src'
import hljs from 'highlight.js'
import { transform } from 'babel-standalone'
import '!!style!css!highlight.js/styles/default.css'

const LIB_NAME = 'rambler-ui'

@pure
export default class Playground extends Component {

  static propTypes = {
    /**
     * Код для отображения
     */
    code: PropTypes.string.isRequired,
    /**
     * Можно редактировать код
     */
    canEdit: PropTypes.bool,
    /**
     * Показывать превью
     */
    showPreview: PropTypes.bool,
    /**
     * Открытая вкладка
     */
    mode: PropTypes.string,
    /**
     * Заголовок
     */
    title: PropTypes.string
  }

  static defaultProps = {
    canEdit: true,
    showPreview: true,
    mode: 'read',
    title: 'Пример'
  }

  state = {
    mode: 'read' // read or write
  }

  componentWillMount() {
    const { code, canEdit } = this.props
    let mode = this.props.mode
    if (!canEdit)
      mode = 'read'
    this.setState({ code, mode })
    this.initialCode = code
  }

  setMode(mode) {
    this.setState({ mode })
    if (mode === 'read')
      this.setState({ code: this.initialCode })
  }

  @debounce(1000)
  onCodeChange(code) {
    this.setState({ code })
  }

  renderPreview() {
    const { code } = this.state
    const resCode = transform(code, { presets: ['es2015', 'stage-0', 'stage-1', 'stage-2', 'react'] }).code
    const resModule = new Function('module', 'exports', 'require', resCode)

    let ResComponent = null
    let error = null

    try {
      const scopeModule = { exports: {} }
      const scopeRequire = function (moduleName) {
        if (moduleName.indexOf(LIB_NAME) === 0 && moduleName.indexOf('/') !== -1)
          return get(rui, compact(moduleName.replace(LIB_NAME, '').split('/')).join('.'))
        return rui
      }
      resModule(scopeModule, scopeModule.exports, scopeRequire)
      ResComponent = scopeModule.exports.default
    } catch (e) {
      error = e.toString()
    }

    return (
      <div className={ css.Preview }>
        { ResComponent && <ResComponent /> }
        { error && <pre className={ css.Preview__error }>{ error }</pre>}
      </div>
    )
  }

  render() {
    const { code, mode } = this.state
    const { showPreview, canEdit, title } = this.props
    const codeElement = mode === 'read' ?
      <pre dangerouslySetInnerHTML={{ __html: hljs.highlight('javascript', code).value }}/> :
      <Codemirror
        options={{ mode: 'javascript' }}
        onChange={ ::this.onCodeChange }
        autoSave={ true }
        value={ code }
        />

    return (
      <div className={ css.Wrapper }>
        <div className={ css.Header }>
          <div className={ css.Header__title }>{ title }</div>
          <div className={ css.Header__tabs }>
            <div
              onClick={() => this.setMode('read')}
              className={ classnames(css.Header__tab, { [css.isActive]: mode === 'read' }) }>Код</div>
            {
              canEdit && <div
                onClick={() => this.setMode('write')}
                className={ classnames(css.Header__tab, { [css.isActive]: mode === 'write' }) }>Редактировать</div>
            }
          </div>
        </div>
        <div className={ css.Body }>
          <div className={ css.Code }>
            { codeElement }
          </div>
          { showPreview && this.renderPreview() }
        </div>
      </div>
    )
  }

}
