import React, {Component} from 'react'
import classnames from 'classnames'
import {NavLink} from 'react-router-dom'
import OnClickOutside from 'rambler-ui/OnClickOutside'
import AddIcon from 'rambler-ui/icons/forms/AddIcon'
import injectSheet from 'docs/src/utils/theming'

@injectSheet(theme => ({
  root: {
    position: 'fixed',
    top: 0,
    left: -230,
    width: 230,
    height: '100vh',
    backgroundColor: theme.colors.light,
    transitionDuration: 200,
    transitionProperty: 'left',
    '@media screen and (min-width: 768px)': {
      left: 0
    }
  },
  opened: {
    left: 0
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
      display: 'block',
      height: 2,
      backgroundColor: theme.colors.light
    },
    '& span + span': {
      marginTop: 8
    }
  },
  scroll: {
    height: '100vh',
    padding: 25,
    paddingRight: 15,
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
    lineHeight: '25px',
    color: theme.colors.black,
    '&:hover $linkIcon': {
      fill: theme.colors.alternativeBlue + '!important'
    }
  },
  activeLink: {
    color: theme.colors.alternativeBlue
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
    marginLeft: 10
  }
}))
export default class SideNav extends Component {
  state = {
    navOpened: false
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
            <AddIcon size={10} className={classes.linkIcon} />
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
    const {navOpened} = this.state
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
          <div className={classes.scroll}>
            {this.renderList(pages)}
          </div>
        </div>
      </OnClickOutside>
    )
  }
}
