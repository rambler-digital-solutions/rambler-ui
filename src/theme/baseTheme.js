import { placeholder } from '../style/mixins'

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
    hoverBorderColor: '#262626',
    activeBorderColor: '#315efb',
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
        focusOffset: 3
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
        focusOffset: 0
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
        focusOffset: 0
      }
    }
  },
  radio: {
    borderRadius: '50%',
    baseRadioBorder: '1px solid #ccc',
    activeRadioColor: '#315efb',
    font: {size: 14}
  },
  input: {
    padding: '0 45px 2px 13px',
    border: '1px solid #e8e8e8',
    height: '44px',
    lineHeight: 'normal',
    '&:focus': {
      borderBottom: '2px solid #315efb',
      lineHeight: 'normal',
      paddingBottom: '1px'
    },
    ...placeholder({color: '#aebbc9'}),
    '&::-ms-reveal': {
      display: 'none'
    },
    '&:disabled': {
      backgroundColor: '#eee',
      borderColor: '#eee',
      cursor: 'default'
    }
  },
  inputEye: {
    top: '13px',
    fill: '#315efb'
  },
  iconLeft: {
    position: 'absolute',
    top: '13px',
    left: 0
  },
  iconRight: {
    position: 'absolute',
    top: '13px',
    right: '40px'
  },
  iconRightWithoutPass: {
    position: 'absolute',
    top: '13px',
    right: 0
  }
}
