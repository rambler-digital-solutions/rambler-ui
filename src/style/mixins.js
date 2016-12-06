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

export const borderChampMixin = (color) => ({
  boxShadow: `0 3px 7px 0 ${color}`
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

export const styleButtonBaseMixin = (type, options) => ({
  [`type-${type}`]: {
    extend: borderMixin(options.defaultBorder),
    color: `${options.textColor} !important`,
    borderRadius: options.borderRadius,
    background: options.defaultBg,
    '&:focus:not(:active)': {
      background: `${options.focusBg} !important`
    },
    '&:focus:not(:active):before': {
      extend: borderMixin(options.focusBorder),
      color: `${options.activeTextColor} !important`,
      top: -options.focusOffset,
      bottom: -options.focusOffset,
      left: -options.focusOffset,
      right: -options.focusOffset,
      borderRadius: options.borderRadius
    },
    '&:hover:not(:active)': {
      extend: borderMixin(options.hoverBorder),
      color: `${options.activeTextColor} !important`,
      borderRadius: options.borderRadius,
      background: `${options.hoverBg} !important`
    },
    '&:active': {
      extend: borderMixin(options.defaultBorder),
      color: `${options.activeTextColor} !important`,
      borderRadius: options.borderRadius,
      background: options.activeBg
    },
    '&[disabled]': {
      extend: borderMixin(options.defaultBorder),
      color: `${options.disabledTextColor} !important`,
      background: options.disabledBg
    },
    '& $loaderDot': { background: options.loaderColor }
  }
})

export const styleButtonChampMixin = (type, options) => ({
  [`type-${type}`]: {
    extend: type === 'secondary' ? borderMixin(options.defaultBorder) : null,
    color: `${options.textColor} !important`,
    borderRadius: options.borderRadius,
    background: options.defaultBg,
    '&:focus:not(:active)': {
      background: `${options.focusBg} !important`
    },
    '&:focus:not(:active):before': {
      extend: type === 'secondary' ? borderMixin(options.focusBorder) : null,
      color: `${options.activeTextColor} !important`,
      top: -options.focusOffset,
      bottom: -options.focusOffset,
      left: -options.focusOffset,
      right: -options.focusOffset,
      borderRadius: options.borderRadius
    },
    '&:hover:not(:active)': {
      extend: type === 'primary' ? borderChampMixin(options.hoverBorder) : type === 'secondary' ? borderMixin(options.hoverBorder) : null,
      color: `${options.activeTextColor} !important`,
      borderRadius: options.borderRadius,
      background: `${options.hoverBg} !important`
    },
    '&:active': {
      extend: type === 'primary' ? borderChampMixin(options.defaultBorder) : type === 'secondary' ? borderMixin(options.hoverBorder) : null,
      color: `${options.activeTextColor} !important`,
      borderRadius: options.borderRadius,
      background: options.activeBg
    },
    '&[disabled]': {
      extend: null,
      color: `${options.disabledTextColor} !important`,
      background: options.disabledBg
    },
    '& $loaderDot': { background: options.loaderColor }
  }
})
