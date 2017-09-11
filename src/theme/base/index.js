import merge from 'lodash/merge'
import {fade, darken, lighten} from '../../utils/colors'
import colorsConfig from './colors'

/**
 * Создание темы
 */
export function createTheme(config) {
  const { colors } = config
  return merge({
    fontFamily: 'Roboto, sans-serif',
    button: {
      fontFamily: 'Roboto, sans-serif',
      sizes: {
        medium: {
          fontSize: 11,
          icon: 8,
          height: 45
        },
        small: {
          fontSize: 11,
          icon: 8,
          height: 35
        }
      },
      borderRadius: 1,
      types: {
        primary: {
          outlineOffset: 3,
          colors: {
            default: {
              text: colors.light,
              icon: colors.light,
              loader: colors.light,
              background: colors.primary
            },
            hover: {
              background: darken(colors.primary, 0.1)
            },
            active: {
              background: darken(colors.primary, 0.2)
            },
            disabled: {
              text: fade(colors.light, 0.2),
              icon: fade(colors.light, 0.2)
            },
            focus: {
              outline: colors.primary
            }
          }
        },
        danger: {
          outlineOffset: 3,
          colors: {
            default: {
              text: colors.light,
              icon: colors.light,
              loader: colors.light,
              background: colors.danger
            },
            hover: {
              background: darken(colors.danger, 0.1)
            },
            active: {
              background: darken(colors.danger, 0.2)
            },
            disabled: {
              text: fade(colors.light, 0.2),
              icon: fade(colors.light, 0.2)
            },
            focus: {
              outline: colors.danger
            }
          }
        },
        secondary: {
          colors: {
            default: {
              text: colors.dark,
              icon: colors.primary,
              loader: colors.primary,
              background: colors.controls.grey.background
            },
            hover: {
              text: colors.primary,
              background: colors.controls.grey.background
            },
            active: {
              text: darken(colors.primary, 0.2),
              icon: darken(colors.primary, 0.2),
              background: colors.controls.grey.background
            },
            disabled: {
              text: fade(colors.dark, 0.1),
              icon: fade(colors.dark, 0.1)
            },
            focus: {
              outline: colors.primary
            }
          }
        },
        outline: {
          colors: {
            default: {
              text: colors.dark,
              icon: colors.primary,
              loader: colors.primary,
              border: colors.controls.grey.default,
              background: 'transparent'
            },
            hover: {
              text: colors.primary,
              border: colors.primary
            },
            active: {
              text: darken(colors.primary, 0.2),
              icon: darken(colors.primary, 0.2),
              border: darken(colors.primary, 0.2),
              background: colors.controls.grey.background
            },
            disabled: {
              text: colors.controls.grey.disabled,
              icon: colors.controls.grey.disabled,
              border: colors.controls.grey.disabled
            },
            focus: {
              outline: colors.primary
            }
          }
        },
        flat: {
          colors: {
            default: {
              text: colors.dark,
              icon: colors.primary,
              loader: colors.primary,
              background: 'transparent'
            },
            hover: {
              background: colors.controls.grey.background
            },
            active: {
              background: colors.controls.grey.background
            },
            disabled: {
              text: colors.controls.grey.disabled,
              icon: colors.controls.grey.disabled
            },
            focus: {
              outline: colors.primary
            }
          }
        }
      }
    },
    checkbox: {
      colors: {
        default: {
          background: colors.light,
          border: colors.controls.grey.default,
          tick: colors.primary,
          text: colors.dark
        },
        active: {
          background: colors.controls.grey.activeBackground,
          border: colors.primary
        },
        focus: {
          border: colors.primary
        },
        hover: {
          border: colors.primary
        },
        checked: {
          border: colors.primary
        },
        disabled: {
          tick: colors.controls.grey.disabled,
          border: colors.controls.grey.disabled,
          text: colors.controls.grey.disabled
        }
      },
      animationDuration: 200,
      borderRadius: 1,
      size: 15,
      labelMargin: 10,
      tick: {
        size: 10,
        left: 2,
        top: 1
      },
      fontSize: 13
    },
    switcher: {
      colors: {
        default: {
          default: {
            background: colors.controls.grey.default,
            track: colors.light,
            text: colors.dark
          },
          hover: {
            background: colors.controls.grey.outline
          },
          active: {
            track: fade(colors.light, 0.9)
          },
          disabled: {
            background: lighten(colors.controls.grey.disabled, 0.5),
            track: colors.light,
            text: colors.controls.grey.disabled
          }
        },
        checked: {
          default: {
            background: colors.primary,
            track: colors.light,
            text: colors.dark
          },
          hover: {
            background: darken(colors.primary, 0.2)
          },
          active: {
            track: fade(colors.light, 0.9)
          },
          disabled: {
            background: colors.controls.grey.disabled,
            track: colors.light,
            text: colors.controls.grey.disabled
          }
        }
      },
      animationDuration: 200,
      width: 30,
      height: 15,
      trackMargin: 1,
      labelMargin: 10,
      fontSize: 13
    },
    dropdown: {
      borderRadius: 1,
      animationDuration: 200,
      boxShadow: '0 2px 6px 0 rgba(0, 0, 0, 0.1), 0 -2px 6px 0 rgba(0, 0, 0, 0.1)'
    },
    formGroup: {
      fontSize: 13
    },
    hint: {
      borderRadius: 1,
      animationDuration: 200,
      boxShadow: '0 2px 6px 0 rgba(0, 0, 0, 0.1), 0 -2px 6px 0 rgba(0, 0, 0, 0.1)',
      colors: {
        background: colors.light,
        text: colors.dark,
        icon: colors.primary
      },
      fontSize: 13
    },
    iconButton: {
      borderRadius: '50%',
      iconPercentSize: 45,
      sizes: {
        medium: 45,
        small: 23
      }
    },
    field: { // input, select, textarea
      borderRadius: 1,
      icon: {
        colors: {
          default: colors.controls.grey.icon,
          active: colors.primary
        }
      },
      eyeIcon: {
        colors: {
          default: colors.controls.grey.icon,
          active: colors.primary
        }
      },
      colors: {
        default: {
          outline: colors.controls.grey.fieldOutline,
          border: 'transparent',
          background: colors.light,
          text: colors.dark,
          arrow: colors.controls.grey.icon
        },
        disabled: {
          border: colors.controls.grey.disabled,
          text: colors.controls.grey.disabled,
          background: colors.controls.grey.disabled
        },
        focus: {
          border: colors.primary
        }
      },
      sizes: {
        medium: {
          height: 45,
          fontSize: 13,
          icon: 18,
          eyeIcon: 20,
          withIconPadding: 40,
          withIconsPadding: 70,
          iconMargin: 13
        },
        small: {
          height: 35,
          fontSize: 12,
          icon: 16,
          eyeIcon: 18,
          withIconPadding: 40,
          withIconsPadding: 70,
          iconMargin: 13
        }
      },
      animationDuration: 200
    },
    input: {
      padding: 13,
      eyeMargin: 13
    },
    inputStatus: {
      fontSize: 13
    },
    loader: {
      animationDuration: 200,
      color: colors.light
    },
    menu: {
      colors: {
        default: {
          text: colors.dark,
          background: colors.light
        },
        hover: {
          background: colors.controls.grey.background
        },
        focus: {
          background: colors.controls.grey.background
        },
        checked: {
          text: colors.primary
        }
      }
    },
    notification: {
      borderRadius: 2,
      boxShadow: '0 2px 6px 0 rgba(0, 0, 0, 0.1), 0 -2px 6px 0 rgba(0, 0, 0, 0.1)',
      padding: '20px 25px 20px 20px',
      colors: {
        background: colors.light,
        iconBackground: colors.controls.grey.lightBackground,
        text: colors.dark,
        close: colors.controls.grey.icon
      },
      actionButton: {
        fontSize: 13,
        colors: {
          default: colors.primary,
          hover: darken(colors.primary, 0.1),
          active: darken(colors.primary, 0.2)
        }
      },
      fontSize: 13,
      titleSize: 14,
      animationDuration: 200
    },
    radio: {
      colors: {
        default: {
          text: colors.dark,
          dot: colors.primary,
          dotBorder: colors.controls.grey.outline,
          dotBackground: colors.light
        },
        focus: {
          dotBorder: lighten(colors.primary, 0.1)
        },
        checked: {
          dotBorder: colors.primary
        },
        active: {
          dotBackground: colors.controls.grey.activeBackground,
          dotBorder: darken(colors.primary, 0.2)
        },
        hover: {
          dotBorder: darken(colors.primary, 0.1)
        },
        disabled: {
          dot: colors.controls.grey.disabled,
          text: colors.controls.grey.disabled,
          dotBorder: colors.controls.grey.disabled
        }
      },
      dotSize: 5,
      radioSize: 15,
      labelMargin: 10,
      fontSize: 13,
      marginBottom: 15,
      animationDuration: 200
    },
    toggle: {
      animationDuration: 200,
      borderRadius: 1,
      colors: {
        default: {
          text: colors.dark,
          border: lighten(colors.controls.grey.outline, 0.7),
          background: colors.light
        },
        hover: {
          border: lighten(colors.controls.grey.outline, 0.5),
          text: colors.primary
        },
        focus: {
          text: colors.primary
        },
        active: {
          background: fade(colors.primary, 0.1)
        },
        checked: {
          border: colors.primary,
          text: colors.primary
        },
        checkedHover: {
          border: darken(colors.primary, 0.2),
          text: darken(colors.primary, 0.2)
        },
        disabled: {
          text: colors.controls.grey.disabled,
          border: fade(colors.controls.grey.outline, 0.2)
        },
        checkedDisabled: {
          background: lighten(colors.controls.grey.outline, 0.9)
        }
      },
      transparentColors: {
        hover: {
          background: fade(colors.controls.grey.outline, 0.05)
        },
        checked: {
          background: fade(colors.controls.grey.outline, 0.1)
        },
        disabled: {
          text: colors.controls.grey.disabled,
          border: lighten(colors.controls.grey.outline, 0.7)
        }
      },
      sizes: {
        medium: {
          fontSize: 13,
          height: 45,
          paddingHr: 25,
          icon: 13
        },
        small: {
          fontSize: 13,
          icon: 13,
          height: 35,
          paddingHr: 15
        }
      }
    },
    sideNav: {
      colors: {
        default: {
          text: colors.dark,
          icon: colors.controls.grey.icon
        },
        selected: {
          icon: colors.dark,
          border: colors.primary
        }
      },
      height: 25,
      sideMargin: 17,
      betweenMargin: 20,
      fontSize: 14
    },
    popup: {
      borderRadius: 2,
      boxShadow: '1px 2px 7px 0 rgba(124, 130, 134, 0.2)',
      colors: {
        text: colors.dark,
        background: colors.light,
        backdrop: fade(colors.fullDark, 0.6),
        close: colors.controls.grey.icon
      },
      font: {
        textSize: 13,
        titleSize: 16
      },
      animationDuration: 200
    },
    textarea: {
      sizes: {
        small: {
          padding: '8px 13px',
          height: 75,
          focusPaddingBottom: 7
        },
        medium: {
          padding: 13,
          height: 85,
          focusPaddingBottom: 12
        }
      }
    },
    tooltip: {
      borderRadius: 1,
      animationDuration: 200,
      fontSize: 13,
      colors: {
        default: {
          background: fade(colors.blueDark, 0.95),
          text: colors.light
        },
        error: {
          background: fade(colors.danger, 0.9)
        },
        success: {
          background: fade(colors.success, 0.9)
        },
        warning: {
          background: fade(colors.warn, 0.9)
        }
      }
    },
    snackbar: {
      borderRadius: 2,
      padding: '15px 20px',
      colors: {
        text: colors.light,
        actionButton: colors.light,
        background: {
          main: fade(colors.blueDark, 0.95),
          primary: fade(colors.primary, 0.9),
          success: fade(colors.success, 0.9),
          danger: fade(colors.danger, 0.9)
        }
      },
      fontSize: 14,
      animationDuration: 200
    },
    spinner: {
      color: colors.primary
    }
  }, config)
}

export default createTheme({colors: colorsConfig})
