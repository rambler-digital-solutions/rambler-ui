export default {
  name: 'champTheme',
  sizes: {
    medium: {
      height: 40,
      icon: 20
    },
    small: {
      height: 30,
      icon: 15
    }
  },
  checkbox: {
    borderColor: '#a5acb2',
    borderRadius: 2,
    hoverBorderColor: '#ff4800',
    activeBorderColor: '#ff4800'
  },
  button: {
    types: {
      primary: {
        textColor: '#fff',
        loaderColor: '#fff',
        disabledTextColor: '#fff',
        defaultBg: '#ff4800',
        defaultBorder: 'rgba(255, 76, 7, 0.7)',
        hoverBorder: '#ff4800',
        hoverBg: '#ff4800',
        activeBorder: '#ff4800',
        activeBg: '#ff4800',
        focusBorder: '#ff4800',
        focusBg: '#ff4800',
        loadingBorder: '#ff4800',
        disabledBorder: '#a5acb2',
        disabledBg: '#a5acb2',
        focusOffset: 0,
        opacity: 0.7,
        borderRadius: 2
      },
      secondary: {
        textColor: '#ff4800',
        activeTextColor: '#fff',
        loaderColor: '#ff4800',
        disabledTextColor: '#fff',
        defaultBg: '#fff',
        defaultBorder: '#ff4800',
        hoverBorder: 'rgba(255, 72, 0, 0.7)',
        hoverBg: 'rgba(255, 72, 0, 0.5)',
        activeBorder: 'rgba(255, 72, 0, 0.7)',
        activeBg: 'rgba(255, 72, 0, 0.5)',
        focusBorder: 'rgba(255, 72, 0, 0.7)',
        focusBg: 'rgba(255, 72, 0, 0.5)',
        loadingBorder: 'rgba(255, 72, 0, 0.7)',
        loadingDot: '#ff4800',
        disabledBorder: '#a5acb2',
        disabledBg: '#a5acb2',
        focusOffset: 0,
        borderRadius: 2
      },
      outline: {
        textColor: 'rgba(255, 72, 0, 1)',
        activeTextColor: 'rgba(255, 72, 0, 0.8)',
        loaderColor: '#ff4800',
        disabledTextColor: 'rgba(38, 38, 38, .4)',
        defaultBg: '#fff',
        defaultBorder: '#ccc',
        hoverBorder: '#262626',
        hoverBg: '#fff',
        activeBorder: '#fff',
        activeBg: '#fff',
        focusBorder: '#315efb',
        focusBg: '#fff',
        loadingBorder: '#ccc',
        loadingDot: '#315efb',
        disabledBorder: '#eee',
        disabledBg: '#eee',
        focusOffset: 0,
        borderRadius: 2
      }
    }
  },
  input: {
    padding: '0 45px 1px 35px',
    border: 'none',
    borderBottom: '1px solid #d5d5d5',
    height: 36,
    opacity: 0.7,
    '&:focus': {
      borderBottom: '1px solid #000'
    }
  },
  inputEye: {
    top: 7,
    fill: '#ff4800'
  },
  icon: {
    top: 6
  }
}
