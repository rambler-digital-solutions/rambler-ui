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
  }
}
