import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {MDXProvider} from '@mdx-js/react'
import {withRouter} from 'react-router-dom'
import IconButton from 'rambler-ui/IconButton'
import createSourceUrl from 'docs/utils/create-source-url'
import {withStyles} from 'docs/utils/theming'
import 'highlight.js/styles/default.css'
import H1 from 'docs/components/H1'
import H2 from 'docs/components/H2'
import H3 from 'docs/components/H3'
import Button from 'docs/components/Button'
import PreCode from 'docs/components/PreCode'
import InlineCode from 'docs/components/InlineCode'
import GithubIcon from 'docs/components/icons/Github'

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  code: PreCode,
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
  toc: {
    marginTop: 15,
    marginLeft: -6,
    '@media screen and (min-width: 768px)': {
      marginLeft: -11
    },
    '& button': {
      marginTop: 15,
      marginRight: 10
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
    padding: '40px 0',
    marginLeft: 30,
    marginRight: 30,
    '@media screen and (min-width: 768px)': {
      marginLeft: 100,
      marginRight: 100,
      maxWidth: 670
    },
    '& ~ footer': {
      display: 'flex'
    }
  }
})

export default function withDoc(meta) {
  return Component =>
    withRouter(
      withStyles(styles)(
        class Docs extends PureComponent {
          static propTypes = {
            history: PropTypes.any,
            location: PropTypes.any
          }

          sourceUrl = createSourceUrl(this.props.location.pathname)

          componentDidMount() {
            const {classes} = this.props
            this.headingElements = document.querySelectorAll(
              `.${classes.content} h2, .${classes.content} h3`
            )
          }

          scrollToHeading = event => {
            const index = parseInt(
              event.currentTarget.getAttribute('data-index'),
              10
            )
            const headingElement = this.headingElements[index]
            if (!headingElement) return
            window.scrollTo(0, headingElement.offsetTop - 30)
          }

          render() {
            const {
              classes,
              location, // eslint-disable-line no-unused-vars
              history, // eslint-disable-line no-unused-vars
              ...props
            } = this.props
            return (
              <MDXProvider components={components}>
                <>
                  <header className={classes.header}>
                    {this.sourceUrl && (
                      <IconButton
                        className={classes.source}
                        size="small"
                        href={this.sourceUrl}
                        rel="noreferrer noopener"
                        target="_blank">
                        <GithubIcon />
                      </IconButton>
                    )}
                    <H1>{meta.title}</H1>
                    {meta.description && <p>{meta.description}</p>}
                    {meta.toc && (
                      <div className={classes.toc}>
                        {meta.toc.map((item, index) => (
                          <Button
                            type="outline"
                            key={item}
                            data-index={index}
                            onClick={this.scrollToHeading}>
                            {item}
                          </Button>
                        ))}
                      </div>
                    )}
                  </header>
                  <div className={classes.content}>
                    <Component {...props} />
                  </div>
                </>
              </MDXProvider>
            )
          }
        }
      )
    )
}
