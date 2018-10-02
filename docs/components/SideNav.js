import React, {PureComponent} from 'react'
import classnames from 'classnames'
import StickySidebar from 'sticky-sidebar'
import debounce from 'lodash.debounce'
import {withRouter, Link} from 'react-router-dom'
import {ApplyTheme} from 'rambler-ui/theme'
import Dropdown from 'rambler-ui/Dropdown'
import OnClickOutside from 'rambler-ui/OnClickOutside'
import {Menu, MenuItem} from 'rambler-ui/Menu'
import {throttle} from 'rambler-ui/utils/raf'
import {createMutationObserver} from 'rambler-ui/utils/DOM'
import config from 'docs/config'
import injectSheet, {fontFamily} from 'docs/utils/theming'
import Button from 'docs/components/Button'
import NavLink from 'docs/components/NavLink'
import Logo from 'docs/components/icons/Logo'
import ArrowIcon from 'docs/components/icons/Arrow'
import ChevronIcon from 'docs/components/icons/Chevron'

const initOnDesktop = window.innerWidth >= 768

const styles = theme => ({
  root: {
    position: 'absolute !important',
    top: 0,
    bottom: 0,
    left: -230,
    width: 230,
    minHeight: '100%',
    backgroundColor: theme.colors.light,
    transitionDuration: 200,
    transitionProperty: 'width, box-shadow',
    zIndex: 1000,
    '& + div': {
      transitionDuration: 200,
      transitionProperty: 'margin-left'
    }
  },
  mobile: {
    position: 'fixed !important',
    height: '100%',
    '& $scroll': {
      height: '100%',
      overflowY: 'auto'
    }
  },
  opened: {
    left: 0,
    boxShadow: '0 5px 15px 0 rgba(52, 59, 76, 0.16)',
    '@media screen and (min-width: 768px)': {
      boxShadow: 'none'
    },
    '& + div': {
      '@media screen and (min-width: 768px)': {
        marginLeft: 230
      }
    },
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
  scroll: {
    padding: '22px 15px 30px 25px',
    transitionDuration: 200,
    transitionProperty: 'margin-left'
  },
  logo: {
    position: 'relative',
    display: 'inline-block',
    marginLeft: 2,
    marginBottom: 27,
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
      backgroundImage:
        'linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0.1))'
    }
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
    cursor: 'pointer',
    '&, &:visited': {
      color: theme.colors.black
    },
    '&:active': {
      color: theme.colors.alternativeBlue
    },
    '&:hover, &:active': {
      '& $linkIcon': {
        fill: theme.colors.alternativeBlue + '!important'
      }
    }
  },
  activeLink: {
    composes: '$link',
    '&, &:visited': {
      color: theme.colors.alternativeBlue
    }
  },
  openedLink: {
    composes: '$link',
    '& + $list': {
      display: 'block'
    }
  },
  linkIcon: {
    display: 'inline-block',
    verticalAlign: 'middle',
    marginTop: -2,
    marginLeft: 3
  },
  buttons: {
    width: 170,
    '& a': {
      marginTop: 15,
      textAlign: 'left'
    }
  },
  version: {
    position: 'relative',
    marginTop: 25,
    marginLeft: 10,
    '& button': {
      display: 'block',
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
})

class SideNav extends PureComponent {
  state = {
    desktop: initOnDesktop,
    navOpened: initOnDesktop,
    activeSubtree: this.props.location.pathname,
    versions: [],
    showVersions: false
  }

  componentDidMount() {
    const {desktop} = this.state
    const req = new XMLHttpRequest()
    req.open('GET', `${config.pathPrefix}/versions.json`, true)
    req.onreadystatechange = () => {
      if (req.readyState === 4 && req.status === 200)
        this.setState({
          versions: JSON.parse(req.responseText)
        })
    }
    req.send(null)
    if (desktop) this.connectSidebar()
    window.addEventListener('resize', this.updateViewport)
  }

  componentDidUpdate(prevProps, prevState) {
    const {desktop} = this.state
    const {location} = this.props
    if (desktop !== prevState.desktop)
      if (desktop) this.connectSidebar()
      else this.destroySidebar()
    if (location !== prevProps.location) {
      this.setState({
        activeSubtree: location.pathname,
        ...(!desktop && {
          navOpened: false
        })
      })
      window.scrollTo(0, 0)
    }
  }

  componentWillUnmount() {
    const {desktop} = this.state
    if (desktop) this.destroySidebar()
    window.removeEventListener('resize', this.updateViewport)
  }

  connectSidebar() {
    const {classes} = this.props
    if (this.sidebar) {
      this.sidebar.bindEvents()
      this.updateSidebar()
    } else {
      this.sidebar = new StickySidebar(`.${classes.root}`, {
        containerSelector: '#root',
        innerWrapperSelector: `.${classes.scroll}`
      })
    }
    this.bodyObserver = createMutationObserver(debounce(this.updateSidebar))
    this.bodyObserver.observe(document.getElementById('root'), {
      subtree: true,
      childList: true,
      attributes: true,
      characterData: true
    })
  }

  updateSidebar = () => {
    this.sidebar.updateSticky({type: 'resize'})
  }

  destroySidebar() {
    this.sidebar.destroy()
    this.bodyObserver.disconnect()
    this.bodyObserver = null
  }

  toggleNav = () => {
    this.setState({
      navOpened: !this.state.navOpened
    })
  }

  closeNavOnClickOutside = () => {
    const {desktop} = this.state
    if (desktop) return
    this.setState({
      navOpened: false
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

  activeSubtree(path) {
    const {activeSubtree} = this.state
    if (!activeSubtree) return false
    return activeSubtree.indexOf(path) === 0
  }

  toggleSubtree = event => {
    const path = event.currentTarget.getAttribute('data-href')
    this.setState({
      activeSubtree: this.activeSubtree(path) ? null : path
    })
  }

  updateViewport = throttle(() => {
    const desktop = window.innerWidth >= 768
    if (desktop === this.state.desktop) return
    this.setState({
      desktop
    })
  })

  renderLink(page) {
    const {classes} = this.props

    if (!page.children)
      return (
        <NavLink
          to={page.path}
          className={classes.link}
          activeClassName={classes.activeLink}>
          {page.title}
        </NavLink>
      )

    return (
      <span
        className={
          this.activeSubtree(page.path) ? classes.openedLink : classes.link
        }
        data-href={page.path}
        onClick={this.toggleSubtree}>
        {page.title}
        {page.children && (
          <ChevronIcon size={20} className={classes.linkIcon} />
        )}
      </span>
    )
  }

  renderList(index) {
    const {classes} = this.props

    return (
      <div className={classes.list}>
        {index.map(page => (
          <div className={classes.item} key={page.path}>
            {this.renderLink(page)}
            {page.children &&
              this.activeSubtree(page.path) &&
              this.renderList(page.children)}
          </div>
        ))}
      </div>
    )
  }

  renderVersion() {
    const {classes} = this.props
    const {versions, showVersions} = this.state

    if (versions.length === 0) return null

    let currentVersion = versions.reduce((acc, v) => {
      const currentPath = window.location.pathname
        .replace(config.pathPrefix, '')
        .replace(/^\//, '')
        .split('/')
        .join('/')
      if (currentPath === v.path)
        return v.title ? v.title.replace(/[^0-9.]/g, '') : v.path
      return acc
    }, null)

    if (!currentVersion)
      currentVersion = versions[0].title.replace(/[^0-9.]/g, '')

    return (
      <div className={classes.version}>
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
              <ChevronIcon color="currentColor" />
            </button>
          }
          onClose={this.hideVersions}>
          <Menu size="small" value={this.version} onChange={this.changeVersion}>
            {versions.map(v => (
              <MenuItem key={v.path} value={v.path}>
                {v.title || v.path}
              </MenuItem>
            ))}
          </Menu>
        </Dropdown>
      </div>
    )
  }

  render() {
    const {classes, index} = this.props
    const {desktop, navOpened} = this.state

    return (
      <OnClickOutside handler={this.closeNavOnClickOutside}>
        <ApplyTheme>
          <div
            className={classnames(
              classes.root,
              navOpened && classes.opened,
              !desktop && classes.mobile
            )}>
            <div className={classes.scroll}>
              <Link to="/" className={classes.logo}>
                <Logo />
              </Link>
              <button
                type="button"
                className={classes.toggle}
                onClick={this.toggleNav}>
                <span />
                <span />
                <span />
              </button>
              {this.renderList(index)}
              <div className={classes.buttons}>
                <Button type="outline" block href="https://brand.rambler.ru">
                  Дизайнеру
                  <ArrowIcon color="#315efb" />
                </Button>
                <Button
                  type="outline"
                  block
                  href="https://github.com/rambler-digital-solutions/rambler-ui">
                  Разработчику
                  <ArrowIcon color="#315efb" />
                </Button>
              </div>
              {this.renderVersion()}
            </div>
          </div>
        </ApplyTheme>
      </OnClickOutside>
    )
  }
}

export default withRouter(injectSheet(styles)(SideNav))
