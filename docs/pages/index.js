import React from 'react'
import injectSheet, {fontFamily} from 'docs/utils/theming'
import Button from 'docs/components/Button'
import H1 from 'docs/components/H1'
import H3 from 'docs/components/H3'
import Link from 'docs/components/Link'
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
    },
    '& section[disabled]': {
      '& h3:after, h4:after': {
        boxSizing: 'border-box',
        border: `1px solid ${theme.colors.cloudGray}`,
        borderRadius: 20,
        display: 'inline-block',
        height: 20,
        marginLeft: 10,
        marginRight: -10,
        paddingLeft: 9,
        paddingRight: 9,
        color: theme.colors.cloudGray,
        fontSize: 10,
        lineHeight: '18px',
        verticalAlign: 'middle',
        content: '"Soon..."'
      }
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
      padding: '113px 0 125px 100px',
      backgroundImage: `url(${IntroFull})`,
      backgroundPosition: '-500px 50%'
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
    '& > svg': {
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
    backgroundColor: theme.colors.light,
    '& > div': {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'column',
      flexWrap: 'wrap',
      padding: '60px 40px 75px',
      '@media screen and (min-width: 768px)': {
        flexDirection: 'row',
        maxWidth: 870,
        marginLeft: 50,
        marginRight: 50,
        padding: '45px 0'
      }
    },
    '&, & a': {
      color: theme.colors.black,
      transitionDuration: 200,
      transitionProperty: 'color'
    },
    '& section': {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'column',
      flex: 1,
      padding: '15px 0',
      '@media screen and (min-width: 768px)': {
        flexBasis: '50%',
        padding: '20px 35px'
      },
      '@media screen and (min-width: 1024px)': {
        flexDirection: 'row',
        flexBasis: 0
      },
      '&[disabled]': {
        color: theme.colors.cloudGray
      },
      '& img': {
        flexShrink: 0,
        width: 150,
        height: 110
      },
      '& h3': {
        marginTop: 0,
        '& a:hover': {
          color: '#3662fb'
        }
      },
      '& p': {
        margin: '15px 0 0',
        '& a:hover': {
          color: '#62687f'
        }
      },
      '& div': {
        flex: 1,
        marginTop: 20,
        marginLeft: 20,
        '@media screen and (min-width: 1024px)': {
          marginTop: 0,
          marginLeft: 30
        }
      }
    }
  },
  hiring: {
    backgroundColor: theme.colors.argentumLight,
    backgroundImage: `url(${HiringMobile})`,
    backgroundSize: '350px auto',
    backgroundPosition: 'right top',
    backgroundRepeat: 'no-repeat',
    color: theme.colors.black,
    padding: '250px 30px 65px',
    '@media screen and (min-width: 540px)': {
      backgroundSize: '400px auto'
    },
    '@media screen and (min-width: 610px)': {
      backgroundSize: '450px auto'
    },
    '@media screen and (min-width: 768px)': {
      padding: '60px 0 64px 100px',
      backgroundImage: `url(${HiringFull})`,
      backgroundSize: 'cover',
      backgroundPosition: '300px 50%'
    },
    '@media screen and (min-width: 1024px)': {
      paddingLeft: 530,
      backgroundPosition: '-340px 50%'
    },
    '@media screen and (min-width: 1275px)': {
      paddingLeft: 570,
      backgroundPosition: '-300px 50%'
    },
    '& h1': {
      maxWidth: 430
    },
    '& h1, & p': {
      '@media screen and (min-width: 768px)': {
        width: 430
      }
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
    backgroundColor: '#202531',
    '& > div': {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'column',
      flexWrap: 'wrap',
      padding: '65px 21px 65px 13px',
      '@media screen and (min-width: 768px)': {
        flexDirection: 'row',
        maxWidth: 925,
        marginLeft: 80,
        marginRight: 80,
        padding: '60px 0'
      }
    },
    '&, & a': {
      color: theme.colors.light,
      transitionDuration: 200,
      transitionProperty: 'color'
    },
    '& section': {
      display: 'flex',
      justifyContent: 'space-between',
      flex: 1,
      '& svg': {
        flexShrink: 0,
        marginRight: 6
      },
      '&[disabled]': {
        '&, & p': {
          color: theme.colors.cloudGray
        }
      },
      '&:last-child': {
        '@media screen and (min-width: 768px)': {
          flexBasis: '100%',
          marginTop: 30,
          marginLeft: 0
        },
        '@media screen and (min-width: 1024px)': {
          flexBasis: 0,
          marginTop: 0,
          marginLeft: 20
        }
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
      fontWeight: 500,
      '& a:hover': {
        color: '#3662fb'
      }
    },
    '& p': {
      margin: 0,
      '&, & a': {
        color: theme.colors.argentumLight
      },
      '& a:hover': {
        color: theme.colors.cloudGray
      }
    }
  }
})

const Main = ({classes}) => (
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
      <Button type="primary" container={<Link to="/usage/install" />}>
        Начать работу <ArrowIcon />
      </Button>
    </div>
    <div className={classes.info}>
      <div>
        <section>
          <img src={BrandIcon} />
          <div>
            <H3>
              <a href="https://brand.rambler.ru" target="_blank">
                Бренд
              </a>
            </H3>
            <p>
              <a href="https://brand.rambler.ru" target="_blank">
                Миссия, ценности и визуальный язык Рамблера
              </a>
            </p>
          </div>
        </section>
        <section disabled>
          <img src={GuidelinesIcon} />
          <div>
            <H3>Гайдлайны</H3>
            <p>Инструменты и правила решения дизайн-задач </p>
          </div>
        </section>
        <section>
          <img src={ComponentsIcon} />
          <div>
            <H3>
              <Link to="/components/Avatar">Компоненты</Link>
            </H3>
            <p>
              <Link to="/components/Avatar">
                NPM-пакет с более чем 30 компонентами и стилями
              </Link>
            </p>
          </div>
        </section>
        <section>
          <img src={ProductsIcon} />
          <div>
            <H3>
              <a href="https://we.rambler.ru/" target="_blank">
                Продукты
              </a>
            </H3>
            <p>
              <a href="https://we.rambler.ru/" target="_blank">
                Более 50 миллионов пользователей со всей России
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
    <div className={classes.hiring}>
      <H1 style={{textOverflow: 'none'}}>Хочешь стать частью команды?</H1>
      <p>
        У нашей группы компаний всегда много открытых вакансий! Работа в
        Рамблере — это возможность создавать продукты для более чем 50 миллионов
        пользователей.
      </p>
      <Button type="primary" href="https://rambler-co.ru/jobs" target="_blank">
        Подать резюме <ArrowIcon />
      </Button>
    </div>
    <div className={classes.informer}>
      <div>
        <section>
          <GithubIcon size={80} />
          <div>
            <h4>
              <a
                href="https://github.com/rambler-digital-solutions/rambler-ui"
                target="_blank">
                GitHub
              </a>
            </h4>
            <p>
              <a
                href="https://github.com/rambler-digital-solutions/rambler-ui"
                target="_blank">
                Публичный репозиторий Ratio на GitHub
              </a>
            </p>
          </div>
        </section>
        <section disabled>
          <SketchIcon size={80} />
          <div>
            <h4>Sketch</h4>
            <p>Sketch-библиотека, UI-Kit и&nbsp;набор ассетов</p>
          </div>
        </section>
        <section disabled>
          <PdfIcon style={{height: 80, width: 'auto'}} />
          <div>
            <h4>PDF</h4>
            <p>Описание основ дизайн-системы в&nbsp;удобном формате</p>
          </div>
        </section>
      </div>
    </div>
  </div>
)

export default injectSheet(styles)(Main)
