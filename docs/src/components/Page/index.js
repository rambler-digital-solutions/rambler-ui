import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {ApplyTheme} from 'rambler-ui/theme'
import IconButton from 'rambler-ui/IconButton'
import injectSheet, {fontFamily} from 'docs/src/utils/theming'
import 'highlight.js/styles/default.css'
import PreCode from 'docs/src/components/PreCode'
import InlineCode from 'docs/src/components/InlineCode'
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
    padding: '40px 30px',
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
     * Содержание
     */
    Content: PropTypes.func
  }

  render() {
    const {classes, title, source, Content} = this.props
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
        <div className={classes.content}>
          <Content components={mdComponents} />
        </div>
      </div>
    )
  }
}
