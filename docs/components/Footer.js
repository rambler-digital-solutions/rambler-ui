import React from 'react'
import IconButton from 'rambler-ui/IconButton'
import FacebookIcon from 'rambler-ui/icons/profiles/FacebookIcon'
import GithubIcon from 'docs/components/icons/Github'
// import MediumIcon from 'docs/components/icons/Medium'
import injectSheet, {fontFamily} from 'docs/utils/theming'

const currentYear = new Date().getFullYear()

const styles = theme => ({
  root: {
    display: 'none',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginLeft: 30,
    marginRight: 30,
    paddingTop: 35,
    paddingBottom: 30,
    fontFamily: fontFamily.CorsicaRamblerLX,
    color: theme.colors.cloudGray,
    lineHeight: '20px',
    '@media screen and (min-width: 768px)': {
      flexDirection: 'row',
      alignItems: 'center',
      maxWidth: 925,
      marginLeft: 50,
      paddingTop: 30,
      paddingBottom: 25
    },
    '@media screen and (min-width: 1275px)': {
      marginLeft: 100
    }
  },
  copy: {
    marginRight: 20
  },
  links: {
    flex: 1,
    marginTop: 10,
    marginRight: 20,
    marginBottom: 10,
    '@media screen and (min-width: 768px)': {
      marginTop: 0,
      marginBottom: 0
    },
    '& a': {
      color: theme.colors.black,
      transitionDuration: 200,
      transitionProperty: 'color',
      '&:hover': {
        color: theme.colors.alternativeBlue
      }
    },
    '& a + a': {
      marginLeft: 20
    }
  },
  help: {
    marginRight: 20
  },
  buttons: {
    marginTop: 30,
    whiteSpace: 'nowrap',
    '@media screen and (min-width: 768px)': {
      marginTop: 0
    },
    '& a': {
      marginRight: 10,
      '&:last-child': {
        marginRight: 0
      }
    }
  }
})

const Footer = ({classes}) => (
  <footer className={classes.root}>
    <div className={classes.copy}>© Рамблер, {currentYear}</div>
    <div className={classes.links}>
      <a href="https://rambler-co.ru/jobs" target="_blank">
        Вакансии
      </a>
      <a href="https://rambler-co.ru/contacts" target="_blank">
        Контакты
      </a>
      <a href="https://rambler-co.ru/" target="_blank">
        О компании
      </a>
    </div>
    <div className={classes.help}>
      Появились вопросы? <a href="mailto:design-team@rambler.ru">Напишите</a>{' '}
      нам!
    </div>
    <div className={classes.buttons}>
      <IconButton
        size="small"
        href="https://github.com/rambler-digital-solutions/rambler-ui"
        target="_blank">
        <GithubIcon />
      </IconButton>
      <IconButton
        size="small"
        href="https://www.facebook.com/ramblerdesign/"
        target="_blank">
        <FacebookIcon />
      </IconButton>
      {/* <IconButton */}
      {/*   size="small" */}
      {/*   href="https://medium.com/ramblerdesign" */}
      {/*   target="_blank"> */}
      {/*   <MediumIcon /> */}
      {/* </IconButton> */}
    </div>
  </footer>
)

export default injectSheet(styles)(Footer)
