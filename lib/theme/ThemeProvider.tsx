import { useMediaQuery as useMediaQueryHook } from '@mui/material'
import { alpha, createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import React, { ReactElement } from 'react'

type ThemeProviderProps = {
  children: ReactElement
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
}

export default ThemeProvider

export const useMediaQuery = useMediaQueryHook<typeof theme>

export const theme = createTheme(
  /**
   * @see https://material-ui.com/customization/themes/#theme-configuration-variables
   */
  {
    // direction: "rtl",
    typography: {
      fontFamily: ['Kanit', 'sans-serif'].join(','),
      h1: {
        fontSize: '3rem',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: '108.333%',
      },
      h2: {
        fontSize: '2rem',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: '125%',
      },
      h3: {
        fontSize: '1.75rem',
        fontStyle: 'normal',
        fontWeight: 300,
        lineHeight: '114.286%',
      },
      h4: {
        fontSize: '1.5rem',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: '116.667%',
      },
      h5: {
        fontSize: '1.5rem',
        fontStyle: 'normal',
        fontWeight: 300,
        lineHeight: '116.667%',
      },
      subtitle1: {
        fontSize: '1rem',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: '125%',
      },
      subtitle2: {
        fontSize: '0.875rem',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: '128.571%',
      },
      body1: {
        fontSize: '1rem',
        fontStyle: 'normal',
        fontWeight: 300,
        lineHeight: '125%',
      },
      body2: {
        fontSize: '0.875rem',
        fontStyle: 'normal',
        fontWeight: 300,
        lineHeight: '128.571%',
      },
      label: {
        fontSize: '0.75rem',
        fontStyle: 'normal',
        fontWeight: 300,
        lineHeight: '133.333%',
      },
      link: {
        fontSize: '1rem',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: '125%',
      },
      buttonText: {
        fontSize: '1rem',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: '125%',
      },
    },

    palette: {
      primary: {
        main: '#29FCEB',
        hover: '#21CEC0',
        active: '#1EB8AC',
      },
      secondary: {
        main: '#29FCEB',
      },

      background: {
        dark: '#000000',
        light: '#FFFFFF',
        block:
          'linear-gradient(241deg, rgba(255, 255, 255, 0.03) -12.91%, rgba(255, 249, 249, 0.00) 80.44%), linear-gradient(250deg, #012022 -21.51%, rgba(1, 32, 34, 0.00) 106.13%)',
        block2: 'linear-gradient(180deg, #012022 0%, rgba(1, 32, 34, 0.00) 100%)',
      },

      general: {
        disabled: '#093834',
        secondary: '#093834',
        divider: '#05211F',
        input: '#05211F',
        border: 'linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.00) 100%)',
        secondaryText: '#8A8888',
        hover: '#0E5751',
      },
      system: {
        red: '#BF2600',
        yellow: '#FFC400',
        blue: '#29FCEB',
      },
      alerts: {
        error: '#ff4d4f',
        success: '#52c41a',
      },
      common: {
        white: '#ffffff',
        black: '#000000',
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1180,
        xl: 1920,
      },
    },

    spacing: 16,

    /**
     * @see https://material-ui.com/customization/globals/#default-props
     */
    props: {
      // Name of the component ⚛️
      MuiButtonBase: {
        // The properties to apply
        disableRipple: true, // No more ripple, on the whole application 💣!
      },

      // Set default elevation to 1 for popovers.
      MuiPopover: {
        elevation: 1,
      },
    },
  }
)

theme.components = {
  MuiTypography: {
    styleOverrides: {
      h1: {
        [theme.breakpoints.down('lg')]: {},
      },
      h2: {
        [theme.breakpoints.down('lg')]: {},
      },
      h3: {
        [theme.breakpoints.down('lg')]: {},
      },
      h4: {
        [theme.breakpoints.down('lg')]: {},
      },
      subtitle1: {
        [theme.breakpoints.down('lg')]: {},
      },
      subtitle2: {
        [theme.breakpoints.down('lg')]: {},
      },
      body1: {
        [theme.breakpoints.down('lg')]: {},
      },
      body2: {
        [theme.breakpoints.down('lg')]: {},
      },
    },
  },
  MuiTabs: {
    styleOverrides: {
      indicator: {
        height: '0.25rem',
        width: '0.25rem',
        borderRadius: '0.5rem',
      },

      flexContainer: {
        height: '100%',
        justifyContent: 'center',
        gap: '0.875rem 0',
      },
    },
  },

  MuiRadio: {
    styleOverrides: {
      root: {
        padding: 0,
      },
    },
  },
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        ...theme.typography.body1,

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '2.25rem',
        padding: '0 0.5rem',
        color: theme.palette.background.light,
        background: theme.palette.general.secondaryText,
        borderRadius: '1.25rem',
      },
      arrow: {
        display: 'none',
      },
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        width: '100%',
      },
    },
  },

  MuiDivider: {
    styleOverrides: {
      root: {
        borderColor: alpha(theme.palette.common.white, 0.3),
        borderWidth: '1px',
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: '1.125rem',
        border: `1px solid ${theme.palette.general.border}`,
        background: theme.palette.common.white,
      },

      input: {
        padding: '1rem',
        fontSize: '1rem',
      },
    },
  },
  MuiFormLabel: {
    styleOverrides: {
      root: {
        ...theme.typography.body2,

        margin: 0,
        transform: 'none',
        color: theme.palette.background.light,

        '&.Mui-disabled': {
          color: theme.palette.general.disabled,
        },

        '&.Mui-error': {
          color: theme.palette.primary.light,
        },

        '&.Mui-focused': {
          color: theme.palette.primary.light,
        },
      },

      asterisk: {
        color: theme.palette.error.main,
      },
    },
  },
  MuiFormGroup: {
    styleOverrides: {
      root: {
        flexDirection: 'row',
        alignContent: 'center',
        gap: '1rem',
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      outlined: {
        '&$shrink': {
          transform: 'none',
        },
      },
      formControl: {
        position: 'static',
      },
    },
  },
  MuiFormControlLabel: {
    styleOverrides: {
      label: {
        fontSize: '0.75rem',
        color: theme.palette.primary.dark,

        '&.Mui-disabled': {
          color: theme.palette.general.secondaryText,
        },
      },
    },
  },
  MuiFormHelperText: {
    styleOverrides: {
      root: {
        fontSize: '0.75rem',
        marginLeft: '1rem',
        marginRight: '1rem',
        marginTop: '0.25rem',
      },
    },
  },
  MuiAutocomplete: {
    styleOverrides: {
      root: {
        width: '100%',
      },
      inputRoot: {
        '&[class*="MuiOutlinedInput-root"]': {
          padding: 0,
        },
      },
    },
  },
  MuiLink: {
    styleOverrides: {
      underlineHover: {
        '&:hover': {
          textDecoration: 'none',
        },
      },
    },
  },
  MuiList: {
    styleOverrides: {
      root: {
        display: 'flex',
        flexDirection: 'column',
        padding: ' 1.25rem 0',
        gap: '0.125rem',
        backgroundColor: theme.palette.general.input,

        '&& .Mui-selected': {
          background: theme.palette.general.hover,
        },

        '& .menuItem': {
          ...theme.typography.body2,

          padding: '0 1rem',
          width: '100%',
          height: '2.5rem',
          color: theme.palette.background.light,
          cursor: 'pointer',
          transition: 'all 0.3s',

          '&:hover': {
            background: theme.palette.general.secondary,
          },

          '&:disabled': {
            background: theme.palette.general.secondaryText,
          },
        },
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        background: theme.palette.background.block,
        marginTop: '0.25rem',
        borderRadius: '1.5rem',
      },
    },
  },
  MuiCircularProgress: {
    styleOverrides: {
      root: { color: theme.palette.common.white },
    },
  },
  MuiInput: {
    styleOverrides: {
      root: {
        ...theme.typography.body1,

        padding: '1rem',
        background: theme.palette.general.input,
        borderRadius: '1.5rem',
        borderColor: 'transparent',
        color: theme.palette.background.light,
        WebkitTextFillColor: theme.palette.background.light,
        transition: 'all 0.5s ease',

        input: {
          WebkitTextFillColor: theme.palette.background.light,
        },

        '&:before': {
          content: "''",
          position: 'absolute',
          inset: -1.6,
          borderRadius: '1.5rem',
          padding: '2px',
          background: theme.palette.general.border,
          WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
          WebkitMaskComposite: 'xor',
          pointerEvents: 'none',
        },

        '&:active:not(&.isDisabled):not(&.isError)': {
          borderColor: theme.palette.primary.main,
        },

        '&:focused:not(&.isDisabled):not(&.isError)': {
          borderColor: theme.palette.primary.main,
        },

        '& > *::placeholder': {
          color: theme.palette.general.secondaryText,
          height: '2rem',
        },
      },
    },
  },

  MuiInputBase: {
    styleOverrides: {
      root: {
        ...theme.typography.body1,

        padding: '0.5rem 1rem',
        backgroundColor: theme.palette.general.input,
        borderRadius: '1.5rem',
        border: '2px solid',
        borderColor: 'transparent',
        color: theme.palette.background.light,

        '&:hover:not(&.isDisabled):not(&.isError)': {
          borderColor: alpha(theme.palette.common.white, 0.05),
        },

        '&&&.Mui-focused:not(&.isError)': {
          borderColor: theme.palette.primary.main,
        },
      },

      input: {
        padding: '0 0.1875rem',
        height: 'initial',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        color: theme.palette.background.light,

        '&:-webkit-autofill, &:-internal-autofill-selected, &:-internal-autofill-previewed': {
          WebkitTextFillColor: theme.palette.background.light,
          WebkitBackgroundClip: 'text',
          transition: 'background-color 5000s ease-in-out 0s',
          boxShadow: `inset 0 0 20px 20px ${theme.palette.general.input}`,
        },
      },
    },
  },
}
