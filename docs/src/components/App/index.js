import {Component} from 'react'
// import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
// import {ApplyTheme} from 'rambler-ui/theme'
// import Dropdown from 'rambler-ui/Dropdown'
// import {Menu, MenuItem} from 'rambler-ui/Menu'
import config from 'docs/src/config'
import injectSheet, {fontFamily} from 'docs/src/utils/theming'
import loadStyleSheet from 'docs/src/utils/load-style-sheet'

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
      maxWidth: '100%',
      maxHeight: '100%',
      margin: 0,
      fontFamily: fontFamily.CorsicaRamblerLX,
      fontSize: 14,
      fontWeight: 400,
      lineHeight: '23px',
      color: theme.colors.black,
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale'
    },
    a: {
      textDecoration: 'none',
      '&, &:visited': {
        color: theme.colors.blue
      }
    }
  },
  version: {
    position: 'absolute',
    top: 15,
    right: 15,
    '& button': {
      border: 0,
      margin: 0,
      padding: 0,
      backgroundColor: 'transparent',
      color: theme.colors.cloudGray,
      fontSize: 'inherit',
      lineHeight: '20px',
      cursor: 'pointer',
      outline: 0
    }
  },
  dropdown: {
    padding: '0 !important',
    width: 110,
    maxHeight: 225,
    overflowY: 'auto'
  }
}))
export default class App extends Component {

  static propTypes = {
    /**
     * Содержимое приложения
     */
    children: PropTypes.node
  }

  state = {
    versions: [],
    dropdownIsOpened: false
  }

  componentDidMount() {
    const req = new XMLHttpRequest()
    req.open('GET', `${config.pathPrefix}/versions.json`, true)
    req.onreadystatechange = () => {
      if (req.readyState === 4 && req.status === 200)
        this.setState({
          versions: JSON.parse(req.responseText)
        })
    }
    req.send(null)
  }

  changeVersion = version => {
    window.location = `${config.pathPrefix}/${version}/`
  }

  openDropdown = () => {
    this.setState({
      dropdownIsOpened: true
    })
  }

  closeDropdown = () => {
    this.setState({
      dropdownIsOpened: false
    })
  }

  render () {
    return this.props.children
    // TODO: add version selector
    // const {versions} = this.state
    // const {children, classes} = this.props
    // const currentVersion = versions.reduce(
    //   (acc, v) => {
    //     const currentPath =
    //       window.location.pathname.replace(config.pathPrefix, '').replace(/^\//, '').split('/').join('/')
    //     if (currentPath === v.path)
    //       return v.title || v.path
    //     return acc
    //   },
    //   null
    // )
    // return (
    //   <Fragment>
    //     {currentVersion &&
    //       <div className={classes.version}>
    //         <ApplyTheme>
    //           <Dropdown
    //             className={classes.dropdown}
    //             anchorPointX="right"
    //             contentPointX="right"
    //             isOpened={this.state.dropdownIsOpened}
    //             anchor={
    //               <button onClick={this.openDropdown}>
    //                 {currentVersion}
    //               </button>
    //             }
    //             onClose={this.closeDropdown}>
    //             <Menu
    //               size="small"
    //               value={this.version}
    //               onChange={this.changeVersion}>
    //               {versions.map(v => (
    //                 <MenuItem key={v.path} value={v.path}>
    //                   {v.title || v.path}
    //                 </MenuItem>
    //               ))}
    //             </Menu>
    //           </Dropdown>
    //         </ApplyTheme>
    //       </div>
    //     }
    //     {children}
    //   </Fragment>
    // )
  }

}
