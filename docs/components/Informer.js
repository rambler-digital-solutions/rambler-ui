import React from 'react'
import injectSheet, {fontFamily} from 'docs/utils/theming'
import H3 from 'docs/components/H3'

const styles = theme => ({
  root: {
    display: 'none',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    marginLeft: 30,
    marginRight: 30,
    paddingBottom: 20,
    fontFamily: fontFamily.CorsicaRamblerLX,
    '& section': {
      flex: 1
    },
    '@media screen and (min-width: 768px)': {
      flexDirection: 'row',
      maxWidth: 980,
      marginLeft: 100,
      paddingBottom: 40,
      '& section + section': {
        marginLeft: 10
      }
    },
    '& h3': {
      marginTop: 40,
      '& a': {
        color: theme.colors.black,
        '&:hover': {
          color: theme.colors.blue
        }
      }
    },
    '& h3 + p': {
      marginTop: 25,
      marginBottom: 0,
      '& a': {
        color: theme.colors.black,
        '&:hover': {
          color: '#62687f'
        }
      }
    }
  }
})

const Informer = ({classes}) => (
  <footer className={classes.root}>
    <section>
      <H3>
        <a href="#">О Рамблере</a>
      </H3>
      <p>
        <a href="#">
          Рамблер это медиа и сервисы с аудиторией в более 50 миллионов
          пользователей по всей России.
        </a>
      </p>
    </section>
    <section>
      <H3>
        <a href="#">Вакансии</a>
      </H3>
      <p>
        <a href="#">
          Работа в Рамблере это амбициозные задачи, большая команда, уютный офис
          и дружелюбная атмосфера.
        </a>
      </p>
    </section>
    <section>
      <H3>
        <a href="#">Rambler&Co</a>
      </H3>
      <p>
        <a href="#">
          Rambler&Co — это группа компаний, в которую входят такие проекты как
          Afisha, Championat, Lenta, Gazeta, Kassa и многие другие.
        </a>
      </p>
    </section>
  </footer>
)

export default injectSheet(styles)(Informer)
