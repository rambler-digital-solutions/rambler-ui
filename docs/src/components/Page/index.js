import React, {PureComponent, Fragment} from 'react'
import PropTypes from 'prop-types'
import injectSheet, {fontFamily} from 'docs/src/utils/theming'
import 'highlight.js/styles/default.css'
import PreCode from 'docs/src/components/PreCode'
import InlineCode from 'docs/src/components/InlineCode'

const mdComponents = {
  h1: () => null,
  pre: PreCode,
  inlineCode: InlineCode
}

@injectSheet(theme => ({
  root: {
    '@media screen and (min-width: 768px)': {
      marginLeft: 230
    }
  },
  header: {
    padding: '111px 30px 48px',
    backgroundColor: theme.colors.argentumLight,
    '@media screen and (min-width: 768px)': {
      padding: '71px 200px 48px 100px'
    },
    '& h1': {
      fontFamily: fontFamily.Roboto,
      fontSize: 40,
      fontWeight: 300,
      lineHeight: '52px',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },
    '& $source': {
      marginTop: 8
    }
  },
  source: {
    display: 'inline-block',
    fontSize: 14,
    fontWeight: 400,
    lineHeight: '23px',
    whiteSpace: 'nowrap',
    verticalAlign: 'top'
  },
  content: {
    padding: '40px 30px 30px',
    '@media screen and (min-width: 768px)': {
      padding: '28px 100px 62px',
      maxWidth: 870
    },
    '& h2': {
      fontSize: 35,
      fontWeight: 500,
      lineHeight: '35px'
    },
    '& h3': {
      fontSize: 25,
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
    if (!children || children.length === 0)
      return
    this.addChildrenToRender(children)
  }

  componentWillUnmount() {
    clearTimeout(this.addTimeout)
  }

  addChildrenToRender([firstChild, ...rest]) {
    const {children} = this.state
    this.setState({
      children: [...children, firstChild]
    }, () => {
      if (rest.length === 0)
        return
      this.addTimeout = setTimeout(() => {
        this.addChildrenToRender(rest)
      }, 33)
    })
  }

  renderTitle({title/* , source */}) {
    // const {classes} = this.props
    return title
    // TODO: add source link
    // return (
    //   <Fragment>
    //     {title}
    //     {' '}
    //     {source &&
    //       <a className={classes.source} href={source} target="_blank">
    //         &#x3C;source /&#x3E;
    //       </a>
    //     }
    //   </Fragment>
    // )
  }

  renderContent() {
    const {children, Content} = this.props
    if (!children || children.length === 0)
      return <Content components={mdComponents} />
    const {children: childrenToRender} = this.state
    return childrenToRender.map(child =>
      <Fragment key={child.pathname}>
        <h2>{this.renderTitle(child)}</h2>
        <child.Content components={mdComponents} />
      </Fragment>
    )
  }

  render() {
    const {classes, ...rest} = this.props
    return (
      <div className={classes.root}>
        <header className={classes.header}>
          <h1>{this.renderTitle(rest)}</h1>
        </header>
        <div className={classes.content}>
          {this.renderContent()}
        </div>
      </div>
    )
  }

}
