import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {NavLink, withRouter} from 'react-router-dom'
import {ApplyTheme} from 'rambler-ui/theme'
import Dropdown from 'rambler-ui/Dropdown'
import OnClickOutside from 'rambler-ui/OnClickOutside'
import {Menu, MenuItem} from 'rambler-ui/Menu'
import config from 'docs/src/config'
import injectSheet, {fontFamily} from 'docs/src/utils/theming'
import Logo from './Logo'
import ArrowIcon from './ArrowIcon'

@withRouter
@injectSheet(theme => ({
  root: {
    position: 'fixed',
    top: 0,
    left: -230,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: 230,
    height: '100%',
    backgroundColor: theme.colors.light,
    transitionDuration: 200,
    transitionProperty: 'left',
    zIndex: 1000,
    '@media screen and (min-width: 768px)': {
      left: 0
    }
  },
  opened: {
    left: 0,
    '& $toggle span': {
      '@media screen and (max-width: 767px)': {
        '&:nth-child(1)': {
          transform: 'translate(-50%, -1px) rotate(45deg)'
        },
        '&:nth-child(2)': {
          transform: 'translate(-50%, -1px) scaleX(0)'
        },
        '&:nth-child(3)': {
          transform: 'translate(-50%, -1px) rotate(-45deg)'
        }
      }
    }
  },
  toggle: {
    position: 'absolute',
    top: 0,
    left: '100%',
    border: 0,
    width: 50,
    height: 50,
    margin: 0,
    padding: '14px 10px',
    backgroundColor: theme.colors.blue,
    outline: 0,
    cursor: 'pointer',
    '@media screen and (min-width: 768px)': {
      cursor: 'default'
    },
    '& span': {
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: 30,
      height: 2,
      backgroundColor: theme.colors.light,
      transitionDuration: 200,
      transitionProperty: 'transform',
      '&:nth-child(1)': {
        transform: 'translate(-50%, -11px) rotate(0)'
      },
      '&:nth-child(2)': {
        transform: 'translate(-50%, -1px) scaleX(1)'
      },
      '&:nth-child(3)': {
        transform: 'translate(-50%, 9px) rotate(0)'
      }
    }
  },
  logo: {
    position: 'relative',
    padding: '22px 27px',
    '& svg': {
      display: 'block !important'
    }
  },
  shadow: {
    '&::after': {
      position: 'absolute',
      top: '100%',
      left: 0,
      content: '""',
      width: '100%',
      height: 20,
      backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0.1))'
    }
  },
  scroll: {
    flex: 1,
    padding: '10px 15px 25px 25px',
    overflowY: 'auto'
  },
  list: {
    '& $list': {
      display: 'none',
      margin: 10,
      marginRight: 0
    }
  },
  item: {
    padding: '5px 0'
  },
  link: {
    display: 'inline-block',
    fontSize: 15,
    fontWeight: 500,
    lineHeight: '25px',
    '&, &:visited': {
      color: theme.colors.black
    },
    '&:hover $linkIcon': {
      fill: theme.colors.alternativeBlue + '!important'
    }
  },
  activeLink: {
    '&, &:visited': {
      color: theme.colors.alternativeBlue
    }
  },
  openedLink: {
    '& + $list': {
      display: 'block'
    },
    '& $linkIcon': {
      fill: theme.colors.alternativeBlue + '!important'
    }
  },
  linkIcon: {
    display: 'inline-block',
    verticalAlign: 'middle',
    marginTop: -2,
    marginLeft: 3
  },
  version: {
    position: 'relative',
    marginTop: 25,
    '& button': {
      border: 0,
      margin: 0,
      padding: 0,
      backgroundColor: 'transparent',
      color: theme.colors.cloudGray,
      fontFamily: fontFamily.CorsicaRamblerLX,
      fontSize: 14,
      lineHeight: '20px',
      cursor: 'pointer',
      outline: 0,
      '& svg': {
        marginTop: -2,
        marginLeft: 3,
        verticalAlign: 'middle'
      }
    }
  },
  dropdown: {
    padding: '0 !important',
    marginTop: -7.5,
    marginLeft: -13,
    minWidth: 150,
    maxHeight: 160,
    overflowY: 'auto'
  }
}))
export default class SideNav extends PureComponent {

  static propTypes = {
    /**
     * Список страниц для вывода
     */
    pages: PropTypes.arrayOf(PropTypes.object)
  }

  state = {
    navOpened: false,
    navScrolled: false,
    versions: [],
    showVersions: false
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

  componentDidUpdate (prevProps) {
    const {location} = this.props
    if (location === prevProps.location)
      return
    this.closeNav()
    window.scrollTo(0, 0)
  }

  toggleNav = () => {
    this.setState({
      navOpened: !this.state.navOpened
    })
  }

  closeNav = () => {
    this.setState({
      navOpened: false
    })
  }

  scrollMenu = event => {
    const navScrolled = event.currentTarget.scrollTop !== 0
    if (navScrolled === this.state.navScrolled)
      return
    this.setState({
      navScrolled
    })
  }

  changeVersion = version => {
    window.location = `${config.pathPrefix}/${version}${version ? '/' : ''}`
  }

  showVersions = () => {
    this.setState({
      showVersions: true
    })
  }

  hideVersions = () => {
    this.setState({
      showVersions: false
    })
  }

  renderList(pages) {
    const {classes} = this.props

    const list = pages.map(page => (
      <div className={classes.item} key={page.pathname}>
        <NavLink
          to={page.pathname}
          className={classes.link}
          activeClassName={page.children ? classes.openedLink : classes.activeLink}>
          {page.title}
          {page.children &&
            <ArrowIcon size={20} className={classes.linkIcon} />
          }
        </NavLink>
        {page.children && this.renderList(page.children)}
      </div>
    ))

    return (
      <div className={classes.list}>
        {list}
      </div>
    )
  }

  renderVersion() {
    const {classes} = this.props
    const {versions, showVersions} = this.state

    if (versions.length === 0)
      return null

    let currentVersion = versions.reduce(
      (acc, v) => {
        const currentPath =
          window.location.pathname.replace(config.pathPrefix, '').replace(/^\//, '').split('/').join('/')
        if (currentPath === v.path)
          return v.title ? v.title.replace(/[^0-9.]/g, '') : v.path
        return acc
      },
      null
    )

    if (!currentVersion)
      currentVersion = versions[0].title.replace(/[^0-9.]/g, '')

    return (
      <div className={classes.version}>
        <ApplyTheme>
          <Dropdown
            className={classes.dropdown}
            anchorPointY="top"
            contentPointY="top"
            anchorPointX="left"
            contentPointX="left"
            isOpened={showVersions}
            anchor={
              <button onClick={this.showVersions}>
                Версия {currentVersion}
                <ArrowIcon color="currentColor" />
              </button>
            }
            onClose={this.hideVersions}>
            <Menu
              size="small"
              value={this.version}
              onChange={this.changeVersion}>
              {versions.map(v => (
                <MenuItem key={v.path} value={v.path}>
                  {v.title || v.path}
                </MenuItem>
              ))}
            </Menu>
          </Dropdown>
        </ApplyTheme>
      </div>
    )
  }

  render() {
    const {navOpened, navScrolled} = this.state
    const {classes, pages} = this.props

    return (
      <OnClickOutside handler={this.closeNav}>
        <div className={classnames(classes.root, navOpened && classes.opened)}>
          <button
            type="button"
            className={classes.toggle}
            onClick={this.toggleNav}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className={classnames(classes.logo, navScrolled && classes.shadow)}>
            <Logo />
          </div>
          <div className={classes.scroll} onScroll={this.scrollMenu}>
            {this.renderList(pages)}
            {this.renderVersion()}
          </div>
        </div>
      </OnClickOutside>
    )
  }

}
