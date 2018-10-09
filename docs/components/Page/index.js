import React, {PureComponent, Fragment} from 'react'
import PropTypes from 'prop-types'
import {ApplyTheme} from 'rambler-ui/theme'
import IconButton from 'rambler-ui/IconButton'
import injectSheet, {fontFamily} from 'docs/utils/theming'
import 'highlight.js/styles/default.css'
import PreCode from 'docs/components/PreCode'
import InlineCode from 'docs/components/InlineCode'
import GithubIcon from './GithubIcon'

const mdComponents = {
  h1: () => null,
  pre: PreCode,
  inlineCode: InlineCode
}

@injectSheet(theme => ({
  header: {
    padding: '95px 30px 45px',
    backgroundColor: theme.colors.argentumLight,
    '@media screen and (min-width: 768px)': {
      padding: '65px 200px 35px 100px'
    },
    '& h1': {
      margin: 0,
      fontFamily: fontFamily.Roboto,
      fontSize: 40,
      fontWeight: 300,
      lineHeight: '50px',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  },
  source: {
    position: 'absolute',
    top: 30,
    right: 30,
    '@media screen and (min-width: 768px)': {
      top: 30,
      right: 40
    },
    '& svg': {
      width: 20,
      height: 20
    }
  },
  content: {
    marginTop: 40,
    marginBottom: 40,
    paddingLeft: 30,
    paddingRight: 30,
    '@media screen and (min-width: 768px)': {
      paddingLeft: 100,
      paddingRight: 100,
      maxWidth: 870
    },
    '& h2': {
      marginBottom: 25,
      fontSize: 35
    },
    '& h3': {
      marginBottom: 10,
      fontSize: 25
    },
    '& h2, & h3': {
      marginTop: 40,
      fontWeight: 500,
      lineHeight: '35px'
    }
  }
}))
export default class Page extends PureComponent {
  static propTypes = {
    /**
     * Урл страницы
     */
    pathname: PropTypes.string,
    /**
     * Заголовок страницы
     */
    title: PropTypes.string,
    /**
     * Ссылка на исходный код
     */
    source: PropTypes.string,
    /**
     * Дочерние страницы
     */
    children: PropTypes.arrayOf(PropTypes.object),
    /**
     * Содержание
     */
    Content: PropTypes.func
  }

  state = {
    children: []
  }

  componentDidMount() {
    const {children} = this.props
    if (!children || children.length === 0) return
    this.addChildrenToRender(children)
  }

  componentWillUnmount() {
    clearTimeout(this.addTimeout)
  }

  addChildrenToRender([firstChild, ...rest]) {
    const {children} = this.state
    this.setState(
      {
        children: [...children, firstChild]
      },
      () => {
        if (rest.length === 0) return
        this.addTimeout = setTimeout(() => {
          this.addChildrenToRender(rest)
        }, 33)
      }
    )
  }

  renderContent() {
    const {children, Content} = this.props
    if (!children || children.length === 0)
      return <Content components={mdComponents} />
    const {children: childrenToRender} = this.state
    return childrenToRender.map(child => (
      <Fragment key={child.pathname}>
        <h2>{child.title}</h2>
        <child.Content components={mdComponents} />
      </Fragment>
    ))
  }

  render() {
    const {classes, title, source} = this.props
    return (
      <div>
        <header className={classes.header}>
          <h1>{title}</h1>
          {source && (
            <ApplyTheme>
              <IconButton
                className={classes.source}
                size="small"
                href={source}
                target="_blank">
                <GithubIcon />
              </IconButton>
            </ApplyTheme>
          )}
        </header>
        <div className={classes.content}>{this.renderContent()}</div>
      </div>
    )
  }
}
