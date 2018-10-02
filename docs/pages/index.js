import React from 'react'
import {ApplyTheme} from 'rambler-ui/theme'
import injectSheet, {fontFamily} from 'docs/utils/theming'
import Button from 'docs/components/Button'
import H1 from 'docs/components/H1'
import H3 from 'docs/components/H3'
import Logo from 'docs/components/icons/Logo'
import ArrowIcon from 'docs/components/icons/Arrow'
import PdfIcon from 'docs/components/icons/Pdf'
import SketchIcon from 'docs/components/icons/Sketch'
import GithubIcon from 'docs/components/icons/FullGithub'
// TODO: move these to image storage
import BrandIcon from 'static/brand.png'
import GuidelinesIcon from 'static/guidelines.png'
import ComponentsIcon from 'static/components.png'
import ProductsIcon from 'static/products.png'
import IntroFull from 'static/intro.png'
import IntroMobile from 'static/intro-mobile.png'
import HiringFull from 'static/hiring.png'
import HiringMobile from 'static/hiring-mobile.png'

const styles = theme => ({
  root: {
    fontFamily: fontFamily.CorsicaRamblerLX,
    '& ~ footer': {
      display: 'flex'
    }
  },
  intro: {
    padding: '136px 30px 134px',
    backgroundColor: theme.colors.argentumLight,
    backgroundImage: `url(${IntroMobile})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    color: theme.colors.black,
    '@media screen and (min-width: 768px)': {
      backgroundImage: `url(${IntroFull})`,
      padding: '113px 100px 125px'
    },
    '& small': {
      display: 'block',
      margin: '-11px 0',
      fontSize: 12,
      lineHeight: '22px',
      '@media screen and (min-width: 768px)': {
        margin: '-10px 0 -20px',
        fontSize: 17,
        lineHeight: '30px'
      }
    },
    '& svg': {
      width: '221px !important',
      height: '68px !important',
      '@media screen and (min-width: 768px)': {
        width: '305px !important',
        height: '94px !important'
      }
    },
    '& p': {
      margin: '40px 0 0',
      '@media screen and (min-width: 768px)': {
        marginTop: 43,
        width: 350
      }
    },
    '& > a': {
      marginTop: 40,
      marginLeft: -5,
      '@media screen and (min-width: 768px)': {
        marginLeft: -9
      }
    }
  },
  info: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    flexWrap: 'wrap',
    padding: '60px 40px 75px',
    backgroundColor: theme.colors.light,
    color: theme.colors.black,
    '@media screen and (min-width: 768px)': {
      flexDirection: 'row',
      padding: '45px 145px 45px 50px'
    },
    '& section': {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'column',
      flexGrow: 1,
      flexBasis: '30%',
      margin: '15px 0',
      '@media screen and (min-width: 768px)': {
        flexDirection: 'row',
        margin: '20px 35px'
      },
      '& img': {
        flexShrink: 0,
        width: 150,
        height: 110
      },
      '& h3': {
        marginTop: 0
      },
      '& p': {
        margin: '15px 0 0'
      },
      '& div': {
        flex: 1,
        marginTop: 20,
        marginLeft: 20,
        '@media screen and (min-width: 768px)': {
          marginTop: 0,
          marginLeft: 30
        }
      }
    }
  },
  hiring: {
    backgroundColor: theme.colors.argentumLight,
    backgroundImage: `url(${HiringMobile})`,
    backgroundSize: '100%',
    backgroundPosition: 'top',
    backgroundRepeat: 'no-repeat',
    color: theme.colors.black,
    padding: '250px 30px 65px',
    '@media screen and (min-width: 768px)': {
      padding: '60px 130px 64px 50%',
      backgroundImage: `url(${HiringFull})`,
      backgroundSize: 'cover',
      backgroundPosition: '30% 50%'
    },
    '& p': {
      margin: '21px 0 0',
      '@media screen and (min-width: 768px)': {
        marginTop: 15
      }
    },
    '& > a': {
      marginTop: 40,
      marginLeft: -5,
      '@media screen and (min-width: 768px)': {
        marginLeft: -9
      }
    }
  },
  informer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    padding: '65px 21px 65px 13px',
    backgroundColor: '#202531',
    color: theme.colors.light,
    '@media screen and (min-width: 768px)': {
      flexDirection: 'row',
      padding: '60px 80px 60px 90px'
    },
    '& section': {
      flexGrow: 1,
      display: 'flex',
      justifyContent: 'space-between',
      '& svg': {
        flexShrink: 0,
        marginRight: 6
      }
    },
    '& section + section': {
      marginTop: 30,
      '@media screen and (min-width: 768px)': {
        marginTop: 0,
        marginLeft: 20
      }
    },
    '& div': {
      flex: 1
    },
    '& h4': {
      margin: '4px 0',
      fontSize: 16,
      fontWeight: 500
    },
    '& p': {
      margin: 0,
      color: theme.colors.argentumLight
    }
  }
})

const Main = ({classes}) => (
  <ApplyTheme>
    <div className={classes.root}>
      <div className={classes.intro}>
        <small>Design System</small>
        <Logo />
        <p>
          Ратио — дизайн-система нового Рамблера, созданная для того, чтобы
          оптимизировать работу с визуальным языком продуктов, их интерфейсами и
          создать среду, в которой пользователи смогут эффективнее решать свои
          задачи.
        </p>
        <Button type="primary" href="#">
          Начать работу <ArrowIcon />
        </Button>
      </div>
      <div className={classes.info}>
        <section>
          <img src={BrandIcon} />
          <div>
            <H3>Бренд</H3>
            <p>Миссия, ценности и визуальный язык Рамблера</p>
          </div>
        </section>
        <section>
          <img src={GuidelinesIcon} />
          <div>
            <H3>Гайдлайны</H3>
            <p>Инструменты и правила решения дизайн-задач </p>
          </div>
        </section>
        <section>
          <img src={ComponentsIcon} />
          <div>
            <H3>Компоненты</H3>
            <p>NPM-пакет с более чем 30 компонентами и стилями</p>
          </div>
        </section>
        <section>
          <img src={ProductsIcon} />
          <div>
            <H3>Продукты</H3>
            <p>Более 50 миллионов пользователей со всей России</p>
          </div>
        </section>
      </div>
      <div className={classes.hiring}>
        <H1 style={{textOverflow: 'none'}}>Хочешь стать частью команды?</H1>
        <p>
          У нашей группы компаний всегда много открытых вакансий! Работа в
          Рамблере — это возможность создавать продукты для более чем 50
          миллионов пользователей.
        </p>
        <Button type="primary" href="#">
          Подать резюме <ArrowIcon />
        </Button>
      </div>
      <div className={classes.informer}>
        <section>
          <GithubIcon size={80} />
          <div>
            <h4>GitHub</h4>
            <p>Публичный репозиторий Ratio на GitHub</p>
          </div>
        </section>
        <section>
          <SketchIcon size={80} />
          <div>
            <h4>Sketch</h4>
            <p>Sketch-библиотека, UI-Kit и набор ассетов</p>
          </div>
        </section>
        <section>
          <PdfIcon style={{height: 80, width: 'auto'}} />
          <div>
            <h4>PDF</h4>
            <p>Описание основ дизайн-системы в удобном формате</p>
          </div>
        </section>
      </div>
    </div>
  </ApplyTheme>
)

export default injectSheet(styles)(Main)
