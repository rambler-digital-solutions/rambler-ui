import { loadGoogleRobotoFont } from './load-imports'

export const robotoFontMixin = ({ fontFamily }) => {
  if (fontFamily === 'Roboto')
    loadGoogleRobotoFont()
  return {
    fontFamily
  }
}

export const middleMixin = {
  '&:before': {
    display: 'inline-block',
    height: '100%',
    verticalAlign: 'middle',
    content: '""',
    width: 0
  },
  '& > *': {
    verticalAlign: 'middle'
  }
}

export const borderMixin = (color) => ({
  boxShadow: `inset 0px 0px 0px 1px ${color}`
})
