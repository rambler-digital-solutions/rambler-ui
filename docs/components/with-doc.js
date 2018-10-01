import React, {Fragment} from 'react'
import {MDXProvider} from '@mdx-js/tag'
import {withRouter} from 'react-router-dom'
import {ApplyTheme} from 'rambler-ui/theme'
import IconButton from 'rambler-ui/IconButton'
import createSourceUrl from 'docs/utils/create-source-url'
import injectSheet from 'docs/utils/theming'
import 'highlight.js/styles/default.css'
import H1 from 'docs/components/H1'
import H2 from 'docs/components/H2'
import H3 from 'docs/components/H3'
import PreCode from 'docs/components/PreCode'
import InlineCode from 'docs/components/InlineCode'
import GithubIcon from 'docs/components/icons/Github'

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  pre: PreCode,
  inlineCode: InlineCode
}

const styles = theme => ({
  header: {
    padding: '107px 30px 48px',
    backgroundColor: theme.colors.argentumLight,
    '@media screen and (min-width: 768px)': {
      padding: '65px 200px 35px 100px'
    },
    '& h1 + p': {
      marginTop: 25,
      marginBottom: 0,
      '@media screen and (min-width: 768px)': {
        marginTop: 15
      }
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
    '& ~ footer': {
      display: 'flex'
    }
  }
})

export default meta => Component =>
  withRouter(
    injectSheet(styles)(({classes, location: {pathname}, ...props}) => {
      const sourceUrl = createSourceUrl(pathname)
      return (
        <MDXProvider components={components}>
          <Fragment>
            <header className={classes.header}>
              {sourceUrl && (
                <ApplyTheme>
                  <IconButton
                    className={classes.source}
                    size="small"
                    href={sourceUrl}
                    target="_blank">
                    <GithubIcon />
                  </IconButton>
                </ApplyTheme>
              )}
              <H1>{meta.title}</H1>
              {meta.description && <p>{meta.description}</p>}
            </header>
            <div className={classes.content}>
              <Component {...props} />
            </div>
          </Fragment>
        </MDXProvider>
      )
    })
  )
