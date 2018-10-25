import injectSheet, {fontFamily} from 'docs/utils/theming'
import loadStyleSheet from 'docs/utils/load-style-sheet'

loadStyleSheet('https://static.rambler.ru/fonts/Roboto/Roboto.css')
loadStyleSheet(
  'https://static.rambler.ru/fonts/CorsicaRamblerLX/CorsicaRamblerLX.css'
)

const styles = theme => ({
  '@global': {
    '*': {
      boxSizing: 'border-box'
    },
    'html, body': {
      minHeight: '100%',
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
      MozOsxFontSmoothing: 'grayscale',
      WebkitTextSizeAdjust: '100%'
    },
    a: {
      textDecoration: 'none',
      transitionDuration: 200,
      transitionProperty: 'color',
      '&, &:visited': {
        color: theme.colors.blue
      },
      '&:hover': {
        color: theme.colors.alternativeBlue
      }
    }
  }
})

export default injectSheet(styles)(({children}) => children)
