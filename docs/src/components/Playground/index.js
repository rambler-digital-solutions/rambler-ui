import React, {PureComponent} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import * as RamblerUI from 'rambler-ui'
import classnames from 'classnames'
import debounce from 'lodash.debounce'
import Highlight from 'react-highlight.js'
import Codemirror from 'react-codemirror'
import {transform} from 'babel-standalone'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/lib/codemirror.css'
import 'highlight.js/styles/default.css'
import {lighten} from 'rambler-ui/utils/colors'
import injectSheet, {fontFamily} from 'docs/src/utils/theming'

const modules = {
  'react': React,
  'react-dom': ReactDOM,
  'rambler-ui': RamblerUI
}

@injectSheet(theme => ({
  root: {
    border: '1px solid',
    borderColor: lighten(theme.colors.cloudGray, 0.7),
    marginTop: 20,
    marginBottom: 30
  },
  tabs: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: -1,
    fontFamily: fontFamily.Roboto,
    overflowX: 'auto',
    '@media screen and (min-width: 768px)': {
      justifyContent: 'flex-end'
    }
  },
  tabItem: {
    borderBottom: '2px solid transparent',
    padding: '15px 5px',
    marginLeft: 10,
    color: theme.colors.cloudGray,
    cursor: 'pointer',
    '&:last-child': {
      marginRight: 10
    },
    '@media screen and (min-width: 768px)': {
      '&:first-child': {
        marginLeft: 20
      },
      '&:last-child': {
        marginRight: 20
      }
    }
  },
  activeTabItem: {
    borderBottomColor: theme.colors.blue,
    color: theme.colors.dark,
    cursor: 'default'
  },
  content: {
    borderTop: '1px solid',
    borderTopColor: lighten(theme.colors.cloudGray, 0.7),
    padding: '14px 25px 14px 20px'
  },
  viewer: {
    composes: '$content',
    margin: 0,
    fontFamily: fontFamily.Menlo,
    fontSize: 13,
    lineHeight: '18px',
    '& code': {
      padding: 0,
      backgroundColor: 'transparent',
      fontFamily: 'inherit'
    }
  },
  editor: {
    composes: '$content',
    fontFamily: fontFamily.Menlo,
    fontSize: 13,
    lineHeight: '18px',
    '& .CodeMirror': {
      height: 'auto',
      fontFamily: 'inherit'
    },
    '& .CodeMirror-lines': {
      paddingTop: 0,
      paddingBottom: 0
    },
    '& .CodeMirror-line': {
      paddingLeft: 0,
      paddingRight: 0
    }
  },
  preview: {
    composes: '$content',
    overflow: 'auto'
  },
  error: {
    composes: '$viewer',
    color: theme.colors.red,
    overflow: 'auto'
  }
}))
export default class Playground extends PureComponent {

  static propTypes = {
    /**
     * Дополнительный класс
     */
    className: PropTypes.string,
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
    showPreview: PropTypes.bool
  }

  static defaultProps = {
    canEdit: true,
    showPreview: true
  }

  state = {
    code: this.props.code,
    mode: this.props.showPreview ? 'preview' : 'read'
  }

  setMode = mode => {
    this.setState({
      mode
    })
  }

  changeCode = debounce(code => {
    this.setState({
      code
    })
  }, 1e3)

  renderCode() {
    const {mode, code} = this.state
    const {classes} = this.props

    if (mode === 'preview')
      return null

    if (mode === 'read')
      return (
        <Highlight className={classes.viewer} language='javascript'>
          {code}
        </Highlight>
      )

    return (
      <Codemirror
        options={{mode: 'javascript', scrollbarStyle: null}}
        autoSave
        className={classes.editor}
        value={code}
        onChange={this.changeCode}
      />
    )
  }

  renderPreview() {
    const {showPreview, classes} = this.props

    if (!showPreview)
      return null

    const {code} = this.state

    try {
      const compiledCode = transform(code, {
        presets: [
          'es2015',
          'react'
        ],
        plugins: [
          'transform-decorators-legacy',
          'transform-object-rest-spread',
          'transform-class-properties'
        ]
      }).code

      const executeModule = new Function('module', 'exports', 'require', compiledCode)

      const module = {
        exports: {}
      }

      const deepRequire = function (moduleName, module = modules) {
        const [name, ...path] = Array.isArray(moduleName) ? moduleName : moduleName.split('/')
        const child = module[name]
        if (path && path.length > 0)
          return deepRequire(path, child)
        if (child)
          return child
        throw new Error(`Module "${moduleName}" is not defined`)
      }

      executeModule(module, module.exports, deepRequire)
      const Component = module.exports.default

      if (Component == null)
        throw new Error('There is no export in the example')

      return (
        <div className={classes.preview}>
          <Component />
        </div>
      )
    } catch (e) {
      return (
        <pre className={classes.error}>
          {e.toString()}
        </pre>
      )
    }
  }

  render() {
    const {mode} = this.state
    const {classes, showPreview, canEdit} = this.props

    return (
      <div className={classes.root}>
        <div className={classes.tabs}>
          {showPreview &&
            <span
              className={classnames(classes.tabItem, mode === 'preview' && classes.activeTabItem)}
              onClick={() => this.setMode('preview')}>
              Превью
            </span>
          }
          <span
            className={classnames(classes.tabItem, mode === 'read' && classes.activeTabItem)}
            onClick={() => this.setMode('read')}>
            Код
          </span>
          {canEdit &&
            <span
              className={classnames(classes.tabItem, mode === 'write' && classes.activeTabItem)}
              onClick={() => this.setMode('write')}>
              Редактировать
            </span>
          }
        </div>
        {this.renderCode()}
        {this.renderPreview()}
      </div>
    )
  }

}
