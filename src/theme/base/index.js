import merge from 'lodash/merge'
import {fade, darken, lighten} from '../../utils/colors'
import colorsConfig from './colors'
import i18n from './i18n'

const fontFamilies = {
  Corsica: 'Corsica, sans-serif',
  Roboto: 'Roboto, sans-serif',
  Georgia: 'Georgia, serif'
}

/**
 * Создание темы
 */
export function createTheme(config) {
  const { colors } = config
  return merge({
    fontFamily: fontFamilies.Roboto,
    typography: {
      h1: {
        fontSize: 30,
        lineHeight: 40,
        fontWeight: 500,
        fontFamily: fontFamilies.Corsica
      },
      h2: {
        fontSize: 24,
        lineHeight: 35,
        fontWeight: 500,
        fontFamily: fontFamilies.Corsica
      },
      h3: {
        fontSize: 20,
        lineHeight: 30,
        fontWeight: 500,
        fontFamily: fontFamilies.Corsica
      },
      text: {
        fontSize: 18,
        lineHeight: 28,
        fontFamily: fontFamilies.Georgia
      },
      quote: {
        fontSize: 22,
        lineHeight: 32,
        fontStyle: 'italic',
        fontFamily: fontFamilies.Georgia,
        borderColor: colors.primary
      },
      epigraph: {
        fontSize: 22,
        lineHeight: 32,
        fontStyle: 'italic',
        fontFamily: fontFamilies.Georgia
      },
      source: {
        fontSize: 11,
        fontFamily: fontFamilies.Roboto
      },
      timestamp: {
        fontSize: 12,
        fontFamily: fontFamilies.Roboto
      },
      description: {
        fontSize: 12,
        lineHeight: 15,
        fontFamily: fontFamilies.Roboto
      },
      galleryDescription: {
        fontSize: 13,
        lineHeight: 20,
        fontFamily: fontFamilies.Corsica
      },
      photoSource: {
        fontSize: 12,
        fontFamily: fontFamilies.Roboto
      },
      list: {
        bullet: {
          color: lighten(colors.controls.grey.outline, 0.3)
        },
        number: {
          color: colors.controls.grey.outline,
          fontSize: 22,
          lineHeight: 25
        }
      }
    },
    avatar: {
      colors: {
        iconBackground: colors.controls.grey.iconBackground
      }
    },
    button: {
      fontFamily: fontFamilies.Roboto,
      fontWeight: 500,
      letterSpacing: 1.3,
      textTransform: 'uppercase',
      borderRadius: 1,
      mobile: {
        sizes: {
          medium: {
            fontSize: 12
          },
          small: {
            fontSize: 12
          }
        }
      },
      sizes: {
        medium: {
          fontSize: 11,
          icon: 10,
          height: 45
        },
        small: {
          fontSize: 11,
          icon: 10,
          height: 35
        }
      },
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
              background: colors.controls.grey.darkBackground
            },
            active: {
              text: darken(colors.primary, 0.2),
              icon: darken(colors.primary, 0.2),
              background: colors.controls.grey.darkBackground
            },
            disabled: {
              text: colors.controls.grey.outline,
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
      types: {
        regular: {
          colors: {
            default: {
              background: colors.light,
              border: lighten(colors.controls.grey.outline, 0.7),
              tick: colors.dark,
              text: colors.dark
            },
            active: {
              background: fade(darken(colors.primary, 0.2), 0.1),
              border: darken(colors.primary, 0.2),
              tick: darken(colors.primary, 0.2)
            },
            focus: {
              border: colors.primary
            },
            hover: {
              border: colors.primary,
              tick: colors.primary
            },
            checked: {},
            disabled: {
              tick: fade(colors.controls.grey.outline, 0.5),
              border: fade(colors.controls.grey.outline, 0.2),
              text: fade(colors.controls.grey.outline, 0.5)
            }
          }
        },
        awesome: {
          colors: {
            default: {
              background: colors.light,
              border: lighten(colors.controls.grey.outline, 0.7),
              tick: colors.light,
              text: colors.dark
            },
            hover: {
              border: fade(colors.controls.grey.outline, 0.7)
            },
            disabled: {
              border: fade(colors.controls.grey.outline, 0.2),
              text: fade(colors.controls.grey.outline, 0.5)
            },
            checked: {
              background: colors.primary,
              border: 'transparent'
            },
            checkedHover: {
              background: darken(colors.primary, 0.2)
            },
            checkedDisabled: {
              background: fade(colors.controls.grey.outline, 0.3),
              border: 'transparent'
            }
          }
        }
      },
      animationDuration: 200,
      borderRadius: 1,
      size: 15,
      labelMargin: 10,
      fontSize: 13,
      lineHeight: 1.54
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
    search: {
      fontSize: 14,
      height: 40,
      maxWidth: 765,

      input: {
        color: colors.dark,
        default: {
          borderColor: colors.primary
        },
        hover: {
          borderColor: colors.primaryDark
        }
      },

      clear: {
        color: colors.controls.grey.outline,
        hover: {
          color: colors.primary
        }
      },

      division: {
        color: colors.controls.grey.background
      },
      button: {
        color: colors.light,
        fontSize: 12,
        fontWeight: 500,
        letterSpacing: 1.4,
        textTransform: 'uppercase',
        default: {
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
        }
      },

      bottomLinks: {
        fontSize: 12
      }
    },
    suggestItem: {
      fontSize: 14,

      removeButton: {
        fontSize: 13,
        color: colors.purpleDeep
      },

      highlighted: {
        backgroundColor: colors.controls.grey.background,
        color: colors.dark
      }
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
    // input, select, textarea
    field: {
      fontFamily: fontFamilies.Roboto,
      fontWeight: 400,
      borderRadius: 1,
      icon: {
        colors: {
          default: colors.controls.grey.fieldIcon,
          active: colors.primary
        }
      },
      colors: {
        default: {
          outline: colors.controls.grey.fieldOutline,
          border: 'transparent',
          background: colors.light,
          text: colors.dark,
          placeholder: colors.controls.grey.placeholder,
          arrow: colors.dark
        },
        hover: {
          outline: darken(colors.controls.grey.fieldOutline, 0.1),
          arrow: colors.primary
        },
        focus: {
          border: colors.primary,
          arrow: colors.primary
        },
        disabled: {
          outline: fade(colors.controls.grey.fieldOutline, 0.6),
          text: colors.controls.grey.disabled,
          placeholder: colors.controls.grey.disabled,
          arrow: lighten(colors.controls.grey.outline, 0.5),
          background: colors.light
        }
      },
      mobile: {
        sizes: {
          medium: {
            fontSize: 14
          },
          small: {
            fontSize: 14
          }
        }
      },
      sizes: {
        medium: {
          height: 45,
          fontSize: 13,
          icon: 18,
          eyeIcon: 15,
          withIconPadding: 40,
          withIconsPadding: 70,
          iconMargin: 13
        },
        small: {
          height: 35,
          fontSize: 13,
          icon: 16,
          eyeIcon: 15,
          withIconPadding: 40,
          withIconsPadding: 70,
          iconMargin: 13
        }
      },
      animationDuration: 200
    },
    tagsInput: {
      sideMargin: 20,
      height: 25,
      fontSize: 13,
      colors: {
        default: {
          text: colors.dark,
          more: colors.controls.grey.outline,
          icon: lighten(colors.controls.grey.outline, 0.3)
        },
        hover: {
          more: colors.primary,
          icon: colors.primary
        },
        disabled: {
          text: colors.controls.grey.disabled,
          more: lighten(colors.controls.grey.outline, 0.75),
          icon: fade(lighten(colors.controls.grey.outline, 0.75), 0.60)
        }
      },
      sizes: {
        medium: {
          verticalMargin: 5
        },
        small: {
          verticalMargin: 0
        }
      }
    },
    input: {
      eyeMargin: 13,
      sizes: {
        small: {
          padding: 13
        },
        medium: {
          padding: 15
        }
      }
    },
    inputStatus: {
      sizes: {
        fontSize: 13,
        mobile: {
          fontSize: 14
        }
      }
    },
    loader: {
      animationDuration: 200,
      color: colors.light
    },
    menu: {
      padding: 13,
      fontSize: 13,
      lineHeight: 18,
      sizes: {
        medium: {
          height: 45
        },
        small: {
          height: 35
        }
      },
      colors: {
        default: {
          text: colors.dark,
          background: colors.light
        },
        hover: {
          text: colors.primary,
          background: lighten(colors.controls.grey.outline, 0.95)
        },
        active: {
          text: darken(colors.primary, 0.2),
          background: lighten(colors.controls.grey.outline, 0.9)
        },
        focus: {
          text: colors.dark,
          background: lighten(colors.controls.grey.outline, 0.95)
        },
        selected: {
          text: lighten(colors.controls.grey.outline, 0.5)
        },
        disabled: {
          text: lighten(colors.controls.grey.outline, 0.5)
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
          dot: colors.dark,
          dotBorder: lighten(colors.controls.grey.outline, 0.7),
          dotBackground: colors.light
        },
        focus: {
          dotBorder: colors.primary
        },
        checked: {
          dotBorder: colors.primary
        },
        active: {
          dotBackground: fade(darken(colors.primary, 0.2), 0.1),
          dotBorder: darken(colors.primary, 0.2),
          dot: darken(colors.primary, 0.2)
        },
        hover: {
          dotBorder: colors.primary,
          dot: colors.primary
        },
        disabled: {
          dot: fade(colors.controls.grey.outline, 0.5),
          text: fade(colors.controls.grey.outline, 0.5),
          dotBorder: fade(colors.controls.grey.outline, 0.2)
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
          text: colors.dark
        },
        selected: {
          text: colors.primary
        }
      },
      height: 25,
      betweenMargin: 20,
      fontSize: 13
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
        titleSize: 15
      },
      animationDuration: 200
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
      colors: {
        text: colors.light,
        actionButton: colors.light,
        background: {
          main: colors.snackbarBlueDark,
          primary: colors.primary,
          success: colors.success,
          danger: colors.danger
        }
      },
      sizes: {
        small: {
          padding: '10px 20px'
        },
        medium: {
          padding: '18px 20px 17px'
        }
      },
      fontSize: 13,
      animationDuration: 200
    },
    spinner: {
      color: colors.primary
    },
    tabs: {
      sidePadding: 10,
      betweenMargin: 40,
      borderWidth: 2,
      animationDuration: 200,
      colors: {
        default: {
          text: colors.dark,
          border: 'transparent',
          outline: lighten(colors.controls.grey.outline, 0.8)
        },
        hover: {
          text: colors.primary
        },
        active: {
          text: darken(colors.primary, 0.2)
        },
        selected: {
          text: colors.primary,
          border: 'currentColor'
        },
        disabled: {
          text: lighten(colors.controls.grey.outline, 0.5)
        },
        disabledSelected: {
          border: lighten(colors.controls.grey.outline, 0.8)
        }
      },
      sizes: {
        small: {
          fontSize: 11,
          paddingBottom: 9
        },
        medium: {
          fontSize: 14,
          paddingBottom: 11
        }
      }
    },
    pagination: {
      size: 35,
      fontSize: 13,
      colors: {
        default: {
          text: colors.dark,
          background: 'transparent',
          arrow: fade(colors.dark, 0.6)
        },
        hover: {
          text: darken(colors.primary, 0.1),
          arrow: darken(colors.primary, 0.1)
        },
        active: {
          text: darken(colors.primary, 0.2),
          background: '#eee',
          arrow: darken(colors.primary, 0.2)
        },
        selected: {
          text: colors.primary
        },
        focus: {
          text: lighten(colors.primary, 0.25),
          arrow: lighten(colors.primary, 0.25)
        },
        disabled: {
          text: fade(colors.dark, 0.2),
          arrow: fade(colors.dark, 0.1)
        }
      }
    }
  }, config)
}

export default createTheme({colors: colorsConfig, i18n})
