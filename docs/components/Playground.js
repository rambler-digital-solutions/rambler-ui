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
import {withStyles, fontFamily} from 'docs/utils/theming'
import withError from 'docs/components/with-error'

const modules = {
  react: React,
  'react-dom': ReactDOM,
  'rambler-ui': RamblerUI
}

const styles = theme => ({
  scrollArea: {
    margin: '25px -30px 40px',
    lineHeight: 0,
    overflowX: 'auto',
    overflowY: 'hidden',
    '@media screen and (min-width: 768px)': {
      marginLeft: 0,
      marginRight: 0,
      width: '100%'
    }
  },
  table: {
    display: 'inline-block',
    paddingLeft: 30,
    paddingRight: 30,
    '@media screen and (min-width: 768px)': {
      paddingLeft: 0,
      paddingRight: 0,
      width: '100%'
    }
  },
  tabs: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    border: '1px solid',
    borderColor: lighten(theme.colors.cloudGray, 0.7),
    fontFamily: fontFamily.Roboto,
    '@media screen and (min-width: 768px)': {
      justifyContent: 'flex-end'
    }
  },
  tabItem: {
    borderBottom: '2px solid transparent',
    padding: '14px 0 13px',
    marginLeft: 20,
    marginBottom: -1,
    color: theme.colors.cloudGray,
    lineHeight: '20px',
    cursor: 'pointer',
    '&:last-child': {
      marginRight: 10
    },
    '@media screen and (min-width: 768px)': {
      marginLeft: 30,
      '&:last-child': {
        marginRight: 30
      }
    }
  },
  activeTabItem: {
    borderBottomColor: theme.colors.blue,
    color: theme.colors.dark,
    cursor: 'default'
  },
  content: {
    border: '1px solid',
    borderColor: lighten(theme.colors.cloudGray, 0.7),
    borderTopWidth: 0,
    padding: '14px 20px'
  },
  viewer: {
    composes: '$content',
    margin: 0,
    fontFamily: fontFamily.Menlo,
    fontSize: 13,
    lineHeight: '18px',
    '& code': {
      padding: 0,
      overflow: 'hidden',
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
    fontFamily: fontFamily.Roboto,
    lineHeight: '20px'
  },
  error: {
    composes: '$viewer',
    color: theme.colors.red
  }
})

class Playground extends PureComponent {
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
    raw: this.props.code,
    mode: this.props.showPreview ? 'preview' : 'read'
  }

  setMode = mode => {
    this.setState({
      mode
    })
  }

  changeCode = debounce(raw => {
    this.setState({
      raw
    })
  }, 1e3)

  renderCode() {
    const {mode, raw} = this.state
    const {classes} = this.props

    if (mode === 'preview') return null

    if (mode === 'read')
      return (
        <Highlight className={classes.viewer} language="javascript">
          {raw}
        </Highlight>
      )

    return (
      <Codemirror
        options={{mode: 'javascript', scrollbarStyle: null}}
        autoSave
        className={classes.editor}
        value={raw}
        onChange={this.changeCode}
      />
    )
  }

  renderPreview() {
    const {showPreview, classes} = this.props

    if (!showPreview) return null

    const {raw} = this.state

    try {
      const {code} = transform(raw, {
        presets: ['es2015', 'react'],
        plugins: ['transform-object-rest-spread', 'transform-class-properties']
      })

      const execute = new Function('module', 'exports', 'require', code)

      const module = {
        exports: {}
      }

      const deepRequire = function(moduleName, module = modules) {
        const [name, ...path] = Array.isArray(moduleName)
          ? moduleName
          : moduleName.split('/')
        const child = module[name]
        if (path && path.length > 0) return deepRequire(path, child)
        if (child) return child
        throw new Error(`Module "${moduleName}" is not defined`)
      }

      execute(module, module.exports, deepRequire)

      let Component = module.exports.default

      if (Component == null)
        throw new Error('There is no export in the example')

      Component = withError(Component)

      return (
        <div className={classes.preview}>
          <Component />
        </div>
      )
    } catch (e) {
      return <pre className={classes.error}>{e.toString()}</pre>
    }
  }

  render() {
    const {mode} = this.state
    const {classes, showPreview, canEdit} = this.props

    return (
      <div className={classes.scrollArea}>
        <div className={classes.table}>
          <div className={classes.tabs}>
            {showPreview && (
              <span
                className={classnames(
                  classes.tabItem,
                  mode === 'preview' && classes.activeTabItem
                )}
                onClick={() => this.setMode('preview')}>
                Превью
              </span>
            )}
            <span
              className={classnames(
                classes.tabItem,
                mode === 'read' && classes.activeTabItem
              )}
              onClick={() => this.setMode('read')}>
              Код
            </span>
            {canEdit && (
              <span
                className={classnames(
                  classes.tabItem,
                  mode === 'write' && classes.activeTabItem
                )}
                onClick={() => this.setMode('write')}>
                Редактировать
              </span>
            )}
          </div>
          {this.renderCode()}
          {this.renderPreview()}
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Playground)
