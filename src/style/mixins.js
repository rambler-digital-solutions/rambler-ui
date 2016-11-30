export const fontStyleMixin = ({ fontFamily }) => ({
  fontFamily
})

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

export const isolateMixin = {
  borderCollapse: 'separate',
  borderSpacing: '0',
  captionSide: 'top',
  cursor: 'auto',
  direction: 'ltr',
  emptyCells: 'show',
  fontFamily: 'serif',
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

export const ifDesktop = (options) => ({
  '@media (min-width: 768px)': options
})

export const ifMobile = (options) => ({
  '@media (max-width: 768px)': options
})

export const placeholderMixin = (options) => ({
  '&::placeholder': options,
  '&::-webkit-input-placeholder': options,
  '&::-moz-placeholder': options,
  '&:-ms-input-placeholder': options,
  '&:-moz-placeholder': options
})
