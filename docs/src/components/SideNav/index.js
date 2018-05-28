import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {NavLink, withRouter} from 'react-router-dom'
import OnClickOutside from 'rambler-ui/OnClickOutside'
import injectSheet from 'docs/src/utils/theming'
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
    height: '100vh',
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
    marginLeft: 5
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
    navScrolled: false
  }

  componentDidUpdate (prevProps) {
    const {location} = this.props
    if (location !== prevProps.location)
      this.closeNav()
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
    const navScrolled = event.target.scrollTop !== 0
    if (navScrolled === this.state.navScrolled)
      return
    this.setState({
      navScrolled
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
          </div>
        </div>
      </OnClickOutside>
    )
  }

}
