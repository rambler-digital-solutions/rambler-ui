import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'docs/src/utils/theming'

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
      fontFamily: 'Roboto, sans-serif',
      fontSize: 40,
      fontWeight: 300,
      lineHeight: '52px'
    }
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
     * Заголовок
     */
    title: PropTypes.node,
    /**
     * Содержимое страницы
     */
    children: PropTypes.node
  }

  render() {
    const {classes, title, children} = this.props

    return (
      <div className={classes.root}>
        <header className={classes.header}>
          <h1>{title}</h1>
        </header>
        <div className={classes.content}>
          {children}
        </div>
      </div>
    )
  }

}
