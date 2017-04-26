import { borderMixin } from '../style/mixins'

const styleButtonBaseMixin = (type, options) => ({
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
    ...options.loaderColor && {
      '& $loaderDot': { background: options.loaderColor }
    }
  }
})

export default {
  font: {
    fontFamily: 'Roboto, sans-serif'
  },
  sizes: {
    medium: {
      height: 45,
      icon: 20
    },
    small: {
      height: 35,
      icon: 15
    }
  },
  toggle: {
    borderColor: '#ccc',
    color: '#262626',
    bgColor: '#fff',
    hoverBgColor: '#fff',
    activeBgColor: '#eee',
    selectedColor: '#315EFB',
    selectedBgColor: 'rgba(49, 94, 251, 0.1)',
    font: { size: 13 },
    sizes: {
      medium: {
        paddingHr: 25
      },
      small: {
        paddingHr: 15
      }
    }
  },
  checkbox: {
    bgColor: '#fff',
    borderColor: '#ddd',
    borderRadius: 0,
    hoverBorderColor: '#262626',
    activeBorderColor: '#315efb',
    checkedBorderColor: '#315efb',
    activeBgColor: '#eee',
    disabledBorderColor: '#eee',
    disabledBgColor: '#eee',
    disabledColor: 'rgba(38, 38, 38, 0.4)',
    color: '#262626',
    iconMargin: 10,
    size: 15,
    font: {
      size: 13
    }
  },
  button: {
    font: {
      weight: 400,
      size: 12
    },
    types: {
      primary: {
        textColor: '#fff',
        loaderColor: '#fff',
        disabledTextColor: 'rgba(255, 255, 255, .4)',
        defaultBg: '#315efb',
        defaultBorder: '#315efb',
        hoverBorder: '#3059DD',
        hoverBg: '#3059DD',
        activeBorder: '#2A4FC5',
        activeBg: '#2A4FC5',
        focusBorder: '#3264fb',
        focusBg: '#1660e0',
        loadingBorder: '#315efb',
        disabledBorder: '#315efb',
        disabledBg: '#315efb',
        focusOffset: 3,
        borderRadius: 0
      },
      secondary: {
        textColor: '#315efb',
        loaderColor: '#315efb',
        disabledTextColor: 'rgba(49, 94, 251, .4)',
        defaultBg: '#eaefff',
        defaultBorder: '#eaefff',
        hoverBorder: 'transparent',
        hoverBg: 'rgba(49, 94, 251, .2)',
        activeBorder: 'transparent',
        activeBg: 'rgba(49, 94, 251, .3)',
        focusBorder: '#649dff',
        focusBg: '#eaefff',
        loadingBorder: '#eaefff',
        loadingDot: '#315efb',
        disabledBorder: '#eaefff',
        disabledBg: '#eaefff',
        focusOffset: 0,
        borderRadius: 0
      },
      outline: {
        textColor: '#262626',
        loaderColor: '#315efb',
        disabledTextColor: 'rgba(38, 38, 38, .4)',
        defaultBg: '#fff',
        defaultBorder: '#ccc',
        hoverBorder: '#262626',
        hoverBg: '#fff',
        activeBorder: '#ccc',
        activeBg: '#eee',
        focusBorder: '#315efb',
        focusBg: '#fff',
        loadingBorder: '#ccc',
        loadingDot: '#315efb',
        disabledBorder: '#eee',
        disabledBg: '#eee',
        focusOffset: 0,
        borderRadius: 0
      },
      flat: {
        textColor: '#262626',
        loaderColor: '#315efb',
        disabledTextColor: 'rgba(38, 38, 38, .4)',
        defaultBg: '#fff',
        defaultBorder: '#fff',
        hoverBorder: '#f9f9f9',
        hoverBg: '#f9f9f9',
        activeBorder: '#ccc',
        activeBg: '#eee',
        focusBorder: '#315efb',
        focusBg: '#fff',
        loadingBorder: '#ccc',
        loadingDot: '#315efb',
        disabledBorder: '#fff',
        disabledBg: '#fff',
        focusOffset: 0,
        borderRadius: 0
      },
      danger: {
        textColor: '#fff',
        loaderColor: '#fff',
        disabledTextColor: 'rgba(255, 255, 255, .4)',
        defaultBg: '#ff564c',
        defaultBorder: '#ff564c',
        hoverBorder: '#f0473d',
        hoverBg: '#f0473d',
        activeBorder: '#e63d33',
        activeBg: '#e63d33',
        focusBorder: '#fa5147',
        focusBg: '#fa5147',
        loadingBorder: '#315efb',
        disabledBorder: '#ff564c',
        disabledBg: '#ff564c',
        focusOffset: 3,
        borderRadius: 0
      }
    },
    buttonMixin: styleButtonBaseMixin
  },
  iconButton: {
    borderRadius: '50%',
    sizes: {
      medium: {
        size: 40,
        icon: 20
      },
      small: {
        size: 23,
        icon: 11
      }
    }
  },
  radio: {
    borderRadius: '50%',
    baseRadioBorder: '1px solid #ccc',
    activeRadioColor: '#315efb',
    font: {size: 14}
  },
  popup: {
    borderRadius: 2,
    boxShadow: '1px 2px 7px 0 rgba(124, 130, 134, 0.2)',
    padding: '20px 30px 30px',
    width: 350,
    background: 'white',
    backdropBackground: 'rgba(0, 0, 0, 0.1)',
    closeColor: '#cccccc',
    animationDuration: 200,
    font: {
      size: 13,
      titleSize: 16
    }
  },
  input: {
    padding: '0 13px 2px 13px',
    border: '1px solid #e8e8e8',
    height: 44,
    '&:focus': {
      borderBottom: '2px solid #315efb',
      paddingBottom: 1
    }
  },
  inputRequiredProps: {
    successBorderBottom: {
      borderBottom: '2px solid #28bc00 !important'
    },
    errorBorderBottom: {
      borderBottom: '2px solid #ff564e !important'
    },
    warningBorderBottom: {
      borderBottom: '2px solid #f4c914 !important'
    },
    inputBaseColor: {
      color: '#aebbc9'
    },
    inputPaddingLeft: {
      paddingLeft: 40
    },
    inputOneIconRight: {
      paddingRight: 40
    },
    inputTwoIconRight: {
      paddingRight: '70px !important'
    },
    inputIconRightWithoutPass: {
      right: 13
    },
    inputEye: {
      top: 13,
      right: 13,
      fill: '#315efb'
    },
    icon: {
      top: 13,
      left: 13,
      right: 40,
      fill: 'initial !important'
    }
  }
}
