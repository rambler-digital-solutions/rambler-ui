import isArray from 'lodash/isArray'

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

export const borderMixin = color => ({
  boxShadow: `inset 0 0 0 1px ${color}`
})

export const bottomBorderMixin = color => ({
  boxShadow: `inset 0 -1px 0px ${color}`
})

export const isolateMixin = {
  borderCollapse: 'separate',
  borderSpacing: '0',
  captionSide: 'top',
  cursor: 'auto',
  direction: 'ltr',
  emptyCells: 'show',
  fontFamily: 'inherit',
  fontSize: 'medium',
  fontStyle: 'normal',
  fontVariant: 'normal',
  fontWeight: 'normal',
  fontStretch: 'normal',
  lineHeight: 'normal',
  verticalAlign: 'baseline',
  hyphens: 'none',
  letterSpacing: 'normal',
  listStyle: 'disc outside none',
  tabSize: '8',
  textAlign: 'left',
  textAlignLast: 'auto',
  textIndent: '0',
  textShadow: 'none',
  textTransform: 'none',
  visibility: 'visible',
  whiteSpace: 'normal',
  widows: '2',
  wordSpacing: 'normal',
  padding: 0,
  margin: 0
}

// https://github.com/cssinjs/jss/issues/446
// Пока используем как временное решение
const responsiveFactory = (rule) => {
  const replaceResponsiveKeys = (options) => {
    const result = {}
    Object.keys(options).forEach((key) => {
      const value = options[key]
      if (/[\$&]/.test(key) && !(key === 'composes' && (isArray(value) || typeof value === 'string'))) {
        result[key] = replaceResponsiveKeys(options[key])
      } else {
        if (!result[rule])
          result[rule] = {}
        result[rule][key] = value
      }
    })
    return result
  }
  return replaceResponsiveKeys
}

export const ifDesktop = responsiveFactory('@media (min-width: 768px)')

export const ifMobile = responsiveFactory('@media (max-width: 768px)')

const pseudoSelectors = ['::-webkit-input-placeholder', '::-moz-placeholder', ':-moz-placeholder', ':-ms-input-placeholder', '::placeholder']
export const placeholderMixin = (selector, style) => (
  pseudoSelectors.reduce((result, pseudo) => ({
    ...result,
    [`${selector}${pseudo}`]: style
  }), {})
)

export const uppercaseMixin = {
  textTransform: 'uppercase',
  letterSpacing: 1.3
}

export const fontSmoothingMixin = {
  '-webkit-font-smoothing': 'antialiased',
  '-moz-osx-font-smoothing': 'grayscale'
}
