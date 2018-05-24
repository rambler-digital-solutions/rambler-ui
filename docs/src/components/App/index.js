import React, {Component} from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'docs/src/utils/theming'
import loadStyleSheet from 'docs/src/utils/loadStyleSheet'

loadStyleSheet('https://static.rambler.ru/fonts/Roboto/Roboto.css')
loadStyleSheet('https://static.rambler.ru/fonts/CorsicaRamblerLX/CorsicaRamblerLX.css')

@injectSheet(theme => ({
  '@global': {
    '*': {
      boxSizing: 'border-box'
    },
    'html, body': {
      height: '100%',
      backgroundColor: theme.colors.light
    },
    body: {
      display: 'flex',
      flexFlow: 'row nowrap',
      maxWidth: '100%',
      maxHeight: '100%',
      margin: 0,
      fontFamily: 'CorsicaRamblerLX, sans-serif',
      fontSize: 14,
      fontWeight: 400,
      overflow: 'hidden',
      color: theme.colors.black,
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale'
    },
    a: {
      textDecoration: 'none'
    }
  },
  root: {
    display: 'flex',
    maxWidth: '100%'
  }
}))
export default class App extends Component {
  static propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object
  }

  render () {
    const {classes, children} = this.props

    return (
      <div className={classes.root}>
        {children}
      </div>
    )
  }
}
