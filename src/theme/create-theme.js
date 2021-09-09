import deepmerge from 'deepmerge'
import {fade, darken, lighten, mix} from '../utils/colors'

const fontFamilies = {
  Georgia: 'Georgia, serif',
  Roboto: 'Roboto, sans-serif',
  CorsicaRamblerLX: 'CorsicaRamblerLX, sans-serif'
}

export default function createTheme(config) {
  const {colors} = config

  const disabledButtonColors = {
    text: colors.controls.grey.disabledText,
    icon: mix(colors.controls.grey.outline, '#ffffff', 0.7),
    background: colors.controls.grey.background
  }

  return deepmerge(
    {
      fontFamily: fontFamilies.Roboto,
      typography: {
        h1: {
          fontSize: 30,
          lineHeight: 40,
          fontWeight: 500,
          fontFamily: fontFamilies.CorsicaRamblerLX
        },
        h2: {
          fontSize: 24,
          lineHeight: 35,
          fontWeight: 500,
          fontFamily: fontFamilies.CorsicaRamblerLX
        },
        h3: {
          fontSize: 20,
          lineHeight: 30,
          fontWeight: 500,
          fontFamily: fontFamilies.CorsicaRamblerLX
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
          fontFamily: fontFamilies.CorsicaRamblerLX
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
          fontWeight: 500,
          letterSpacing: 1.4,
          sizes: {
            medium: {
              fontSize: 13,
              height: 55
            },
            small: {
              fontSize: 13,
              height: 45
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
              disabled: disabledButtonColors,
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
              disabled: disabledButtonColors,
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
                background: mix(colors.controls.grey.outline, '#ffffff', 0.2)
              },
              active: {
                text: darken(colors.primary, 0.2),
                icon: darken(colors.primary, 0.2),
                background: mix(colors.controls.grey.outline, '#ffffff', 0.2)
              },
              disabled: disabledButtonColors,
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
                border: mix(colors.controls.grey.outline, '#ffffff', 0.3),
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
                text: colors.controls.grey.disabledText,
                icon: mix(colors.controls.grey.outline, '#ffffff', 0.7),
                border: mix(colors.controls.grey.outline, '#ffffff', 0.2)
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
                text: colors.controls.grey.disabledText,
                icon: mix(colors.controls.grey.outline, '#ffffff', 0.7)
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
                background: fade(colors.controls.grey.outline, 0.2),
                border: 'rgba(0, 0, 0, 0)',
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
                tick: fade(colors.controls.grey.outline, 0.5),
                background: fade(colors.controls.grey.outline, 0.2),
                border: 'transparent',
                text: fade(colors.controls.grey.outline, 0.5)
              },
              checked: {
                background: colors.primary,
                border: 'transparent'
              },
              checkedHover: {
                background: darken(colors.primary, 0.2)
              }
            }
          }
        },
        sizes: {
          medium: {
            size: 15,
            tickSize: 9,
            labelMargin: 10,
            lineHeight: 20
          },
          small: {
            size: 13,
            tickSize: 13,
            labelMargin: 5,
            lineHeight: 15
          }
        },
        animationDuration: 200,
        borderRadius: 1,
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
      search: {
        fontSize: 14,
        maxWidth: 765,

        sizes: {
          small: {
            height: 40
          },
          medium: {
            height: 40
          }
        },
        division: {
          color: colors.controls.grey.background
        },
        clear: {
          color: colors.dark,

          hover: {
            color: colors.primary
          }
        },
        serviceIcon: {
          color: colors.controls.grey.outline,
          hover: {
            color: colors.primary
          }
        },
        input: {
          color: colors.dark,
          backgroundColor: colors.light,
          default: {
            borderColor: colors.primary,
            icon: colors.controls.grey.outline
          },
          hover: {
            borderColor: colors.primaryDark,
            icon: colors.primary
          },
          placeholder: {
            fontSize: 14,
            color: colors.controls.grey.outline
          }
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
        }
      },
      simpleSearch: {
        fontSize: 13,
        maxWidth: 765,

        sizes: {
          small: {
            height: 35
          },
          medium: {
            height: 35
          }
        },

        button: {
          color: colors.primary,
          active: {
            color: colors.primaryDark
          }
        },
        input: {
          color: colors.dark,
          default: {
            borderColor: colors.primary,
            icon: colors.controls.grey.fieldIcon
          },
          hover: {
            borderColor: colors.primary
          },
          placeholder: {
            fontSize: 13,
            color: colors.controls.grey.outline
          }
        }
      },
      serviceSearch: {
        fontSize: 13,
        maxWidth: 765,

        sizes: {
          small: {
            height: 35
          },

          medium: {
            height: 45
          }
        },
        clear: {
          color: colors.dark,

          hover: {
            color: colors.dark
          }
        },
        input: {
          color: colors.dark,
          default: {
            borderColor: lighten(colors.controls.grey.outline, 0.3),
            icon: colors.controls.grey.outline
          },
          hover: {
            borderColor: colors.primary
          },
          placeholder: {
            fontSize: 13,
            color: colors.controls.grey.outline
          }
        }
      },
      suggestItem: {
        fontSize: 14,
        height: 40,

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
        boxShadow: '-2px 2px 10px 0 rgba(102, 116, 166, 0.2)',
        colors: {
          background: colors.light,
          border: colors.light
        }
      },
      formGroup: {
        fontSize: 13,
        lineHeight: 15,

        mobile: {
          fontSize: 14,
          lineHeight: 20
        }
      },
      hint: {
        borderRadius: 1,
        animationDuration: 200,
        boxShadow: '-2px 2px 10px 0 rgba(102, 116, 166, 0.2)',
        colors: {
          background: colors.light,
          text: colors.dark
        },
        icon: {
          colors: {
            default: '#8d96b2',
            active: colors.primary
          }
        },
        fontSize: 13
      },
      iconButton: {
        borderRadius: '50%',
        iconPercentSize: 45,
        sizes: {
          medium: 45,
          small: 35,
          icon: 15
        },
        mobile: {
          sizes: {
            medium: 55,
            small: 45,
            icon: 19
          }
        }
      },
      // input, select, textarea
      field: {
        fontFamily: fontFamilies.Roboto,
        fontWeight: 400,
        letterSpacing: 0,
        borderRadius: 1,

        icon: {
          colors: {
            default: colors.controls.grey.outline,
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
            arrow: colors.primary,
            background: colors.light
          },
          disabled: {
            outline: fade(colors.controls.grey.fieldOutline, 0.6),
            text: colors.controls.grey.disabled,
            placeholder: colors.controls.grey.disabled,
            arrow: lighten(colors.controls.grey.outline, 0.5),
            background: colors.light
          },
          success: {},
          warning: {},
          error: {}
        },
        sizes: {
          medium: {
            height: 45,
            withIconPadding: 45,
            withIconsPadding: 75,
            iconMargin: 15,
            icon: 15,
            eyeIcon: 15,
            fontSize: 13
          },
          small: {
            height: 35,
            withIconPadding: 45,
            withIconsPadding: 75,
            iconMargin: 15,
            icon: 15,
            eyeIcon: 15,
            fontSize: 13
          }
        },
        animationDuration: 200,

        mobile: {
          fontWeight: 400,
          letterSpacing: 0,

          sizes: {
            medium: {
              height: 55,
              withIconPadding: 60,
              withIconsPadding: 100,
              iconMargin: 20,
              icon: 19,
              eyeIcon: 19,
              fontSize: 16
            },
            small: {
              height: 45,
              withIconPadding: 50,
              withIconsPadding: 85,
              iconMargin: 15,
              icon: 19,
              eyeIcon: 19,
              fontSize: 16
            }
          }
        }
      },
      tagsInput: {
        fontSize: 13,
        colors: {
          default: {
            more: colors.controls.grey.outline
          },
          hover: {
            more: colors.primary
          },
          active: {
            more: colors.primaryDark
          },
          disabled: {
            more: colors.controls.grey.disabledText
          }
        },
        types: {
          regular: {
            height: 25,
            verticalGap: 0,
            horizontalGap: 15,
            iconSize: 15,
            iconRightMargin: 5,
            colors: {
              default: {
                text: colors.controls.grey.outline,
                icon: colors.controls.grey.outline
              },
              hover: {
                text: colors.primary,
                icon: colors.primary
              },
              active: {
                text: colors.primaryDark,
                icon: colors.primaryDark
              },
              disabled: {
                text: colors.controls.grey.disabledText,
                icon: colors.controls.grey.disabledText
              }
            }
          },
          background: {
            height: 25,
            verticalGap: 10,
            horizontalGap: 5,
            iconSize: 15,
            iconLeftMargin: 12,
            iconRightMargin: 5,
            removeLeftMargin: 5,
            removeRightMargin: 10,
            paddingLeft: 15,
            paddingRight: 15,
            borderRadius: 25 / 2,
            colors: {
              default: {
                text: colors.controls.grey.outline,
                icon: colors.controls.grey.outline,
                background: colors.controls.grey.background
              },
              hover: {
                text: colors.primary,
                icon: colors.primary,
                background: mix(colors.controls.grey.outline, '#ffffff', 0.2)
              },
              active: {
                text: colors.primaryDark,
                icon: colors.primaryDark,
                background: mix(colors.controls.grey.outline, '#ffffff', 0.2)
              },
              disabled: disabledButtonColors
            }
          }
        }
      },
      input: {
        eyeMargin: 15,
        sizes: {
          medium: {
            padding: 15
          },
          small: {
            padding: 15
          }
        },

        mobile: {
          eyeMargin: 20,
          sizes: {
            medium: {
              padding: 20
            },
            small: {
              padding: 15
            }
          }
        }
      },
      inputStatus: {
        sizes: {
          fontSize: 13,
          lineHeight: 15,

          mobile: {
            fontSize: 14,
            lineHeight: 20
          }
        }
      },
      loader: {
        animationDuration: 200,
        color: colors.light
      },
      menu: {
        padding: 15,
        fontSize: 13,
        lineHeight: 19,
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
        boxShadow: '-2px 2px 10px 0 rgba(102, 116, 166, 0.2)',
        padding: '15px 20px',
        colors: {
          background: colors.light,
          iconBackground: colors.controls.grey.lightBackground,
          text: colors.dark,
          close: colors.dark
        },
        lineHeight: 1.54,
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
        types: {
          regular: {
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
                dotBorder: lighten(colors.controls.grey.outline, 0.7),
                dotBackground: colors.light
              },
              active: {
                dot: darken(colors.primary, 0.2),
                dotBorder: darken(colors.primary, 0.2),
                dotBackground: fade(darken(colors.primary, 0.2), 0.1)
              },
              hover: {
                dot: colors.primary,
                dotBorder: colors.primary
              },
              disabled: {
                text: fade(colors.controls.grey.outline, 0.5),
                dot: fade(colors.controls.grey.outline, 0.5),
                dotBorder: fade(colors.controls.grey.outline, 0.2),
                dotBackground: colors.light
              }
            }
          },
          awesome: {
            colors: {
              default: {
                text: colors.dark,
                dot: colors.light,
                dotBorder: lighten(colors.controls.grey.outline, 0.7),
                dotBackground: colors.light
              },
              focus: {
                dotBorder: colors.primary
              },
              checked: {
                dotBorder: colors.primary,
                dotBackground: colors.primary
              },
              hover: {
                dot: colors.light,
                dotBorder: fade(colors.controls.grey.outline, 0.7)
              },
              checkedHover: {
                dotBackground: darken(colors.primary, 0.2)
              },
              disabled: {
                text: fade(colors.controls.grey.outline, 0.5),
                dot: fade(colors.controls.grey.outline, 0.2),
                dotBorder: fade(colors.controls.grey.outline, 0.2),
                dotBackground: colors.light
              }
            }
          }
        },
        sizes: {
          size: 15,
          dotSize: 5,
          labelMargin: 10
        },
        fontSize: 13,
        lineHeight: 20,
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
        height: 35,
        fontSize: 13,
        iconSize: 15,
        iconRightMargin: 15
      },
      popup: {
        borderRadius: 1,
        boxShadow: '-2px 2px 10px 0 rgba(102, 116, 166, 0.2)',
        colors: {
          text: colors.dark,
          background: colors.light,
          backdrop: {
            default: fade(colors.fullDark, 0.8),
            blue: fade(colors.blueDark, 0.95)
          },
          close: {
            default: colors.dark,
            hover: colors.primary
          }
        },
        text: {
          fontSize: 13,
          lineHeight: 20
        },
        title: {
          fontSize: 20,
          lineHeight: 25
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
            horizontalGap: 40,
            verticalPadding: 9,
            fontSize: 11,
            lineHeight: 1.36
          },
          medium: {
            horizontalGap: 20,
            verticalPadding: 13,
            fontSize: 13,
            lineHeight: 15 / 13
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
            text: colors.primary,
            background: 'rgba(49, 94, 251, 0.05)'
          },
          focus: {
            text: lighten(colors.primary, 0.25),
            arrow: lighten(colors.primary, 0.25)
          },
          disabled: {
            text: fade(colors.dark, 0.2),
            arrow: fade(colors.dark, 0.1)
          },
          label: {
            default: colors.arrowBlueDark,
            hover: colors.primary
          }
        }
      },
      stepper: {
        fontSize: 13,
        fontFamily: fontFamilies.Roboto,
        badge: {
          fontSize: 13
        },
        colors: {
          default: {
            color: colors.dark,
            background: colors.light,
            badge: {
              border: '#dcdfe7',
              color: colors.dark,
              background: colors.light
            }
          },
          active: {
            color: colors.dark,
            badge: {
              color: colors.dark,
              background: fade(colors.controls.grey.outline, 0.11)
            }
          },
          disabled: {
            color: '#c6cad8',
            badge: {
              color: '#c6cad8',
              background: colors.light
            }
          }
        }
      },
      calendar: {
        size: 35,
        animationDuration: 200,
        service: {
          fontFamily: fontFamilies.CorsicaRamblerLX,
          colors: {
            default: colors.arrowBlueDark,
            hover: colors.primary
          }
        },
        media: {
          fontFamily: fontFamilies.Roboto,
          colors: {
            default: colors.primary,
            hover: colors.primaryDark
          }
        },
        colors: {
          default: {
            text: colors.dark,
            background: colors.light,
            weekDay: colors.controls.grey.outline
          },
          hover: {
            text: colors.primary
          },
          selected: {
            text: colors.dark,
            background: colors.blueLight
          },
          active: {
            text: colors.light,
            background: colors.primary
          },
          activeHover: {
            text: colors.light,
            background: colors.primaryDark
          },
          disabled: {
            text: colors.controls.grey.disabledText
          },
          weekend: {
            text: colors.danger
          },
          today: {
            text: colors.primary
          },
          todayHover: {
            text: colors.primaryDark
          }
        },
        arrow: {
          size: 15
        },
        month: {
          size: 15,
          fontWeight: 500,
          fontSize: 13
        },
        weekDay: {
          size: 15,
          fontSize: 11
        },
        date: {
          size: 35,
          fontSize: 13
        }
      },
      slider: {
        height: 5,
        colors: {
          background: '#dcdfe7',
          fill: colors.primary
        },
        thumb: {
          size: 15,
          colors: {
            color: colors.light,
            border: colors.primary
          }
        }
      }
    },
    config
  )
}
