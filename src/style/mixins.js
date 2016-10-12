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
  'border-collapse': 'separate',
  'border-spacing': '0',
  'caption-side': 'top',
  cursor: 'auto',
  direction: 'ltr',
  'empty-cells': 'show',
  'font-family': 'serif',
  'font-size': 'medium',
  'font-style': 'normal',
  'font-variant': 'normal',
  'font-weight': 'normal',
  'font-stretch': 'normal',
  'line-height': 'normal',
  hyphens: 'none',
  'letter-spacing': 'normal',
  'list-style': 'disc outside none',
  'tab-size': '8',
  'text-align': 'left',
  'text-align-last': 'auto',
  'text-indent': '0',
  'text-shadow': 'none',
  'text-transform': 'none',
  visibility: 'visible',
  'white-space': 'normal',
  widows: '2',
  'word-spacing': 'normal',
  padding: 0,
  margin: 0
}
