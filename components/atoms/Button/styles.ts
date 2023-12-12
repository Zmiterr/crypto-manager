import { alpha, styled } from '@mui/material'
import Button from '@mui/material/Button'

export const StyledButton = styled(Button, { name: 'StyledButton' })(({ theme }) => ({
  display: 'inline-flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: 'fit-content',
  textTransform: 'none',
  textAlign: 'center',
  borderRadius: '0.875rem',
  border: '1px solid transparent',
  transitionDuration: '0.5s',
  ...theme.typography.buttonText,

  '&:hover:not(:disabled)': {
    cursor: 'pointer',
  },

  '&.isFullWidth': {
    width: '100%',
  },

  '&:disabled': {
    '& svg': {
      opacity: 0.5,
    },

    '& .MuiButton-startIcon *, & .MuiButton-endIcon *': {
      transition: '0.3s',
      opacity: 0.5,
    },
  },

  '&:focus-visible:not(:disabled)': {
    '&:before': {
      content: "''",
      position: 'absolute',
      inset: -6,
      borderRadius: '1.125rem',
      padding: '2px',
      background: theme.palette.primary.main,
      WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
      WebkitMaskComposite: 'xor',
      pointerEvents: 'none',
    },
  },

  '&.primary': {
    background: theme.palette.primary.main,
    color: theme.palette.background.dark,
    '& svg *': {
      fill: theme.palette.background.dark,
    },

    '&:hover:not(:disabled)': {
      background: theme.palette.primary.hover,
    },

    '&&:active': {
      color: alpha(theme.palette.background.dark, 0.5),
      background: theme.palette.primary.active,
    },

    '&.selected': {
      background: theme.palette.primary.active,
    },

    '&:disabled': {
      color: alpha(theme.palette.background.dark, 0.5),
      background: theme.palette.general.disabled,
    },
  },

  '&.secondary': {
    background: theme.palette.general.input,
    color: theme.palette.background.light,
    borderRadius: '0.875rem',

    '&:before': {
      content: "''",
      position: 'absolute',
      inset: -1.6,
      borderRadius: '0.875rem',
      padding: '2px',
      background: theme.palette.general.border,
      WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
      WebkitMaskComposite: 'xor',
      pointerEvents: 'none',
    },

    '&:hover:not(:disabled)': {
      color: theme.palette.primary.main,
      '& svg *': {
        fill: theme.palette.primary.main,
      },
    },

    '&&:active': {
      color: alpha(theme.palette.primary.dark, 0.5),
    },

    '&.selected': {
      background: theme.palette.general.secondary,
      '& svg *': {
        fill: theme.palette.primary.main,
      },
    },

    '&:disabled': {
      color: theme.palette.general.secondary,
      '& svg *': {
        fill: theme.palette.primary.main,
      },
    },
  },

  '&.transparent': {
    background: 'transparent',
    color: theme.palette.background.light,

    '&:hover:not(:disabled)': {
      color: theme.palette.primary.main,
      '& svg *': {
        fill: theme.palette.primary.main,
      },
    },

    '&&:active': {
      color: alpha(theme.palette.primary.dark, 0.5),
    },

    '&.selected': {
      background: theme.palette.general.secondary,
      '& svg *': {
        fill: theme.palette.primary.main,
      },
    },

    '&:disabled': {
      color: theme.palette.general.secondary,
      '& svg *': {
        fill: theme.palette.primary.main,
      },
    },

    '&.isLoading:not(.round)': {
      '&:before': {
        content: "''",
        position: 'absolute',
        inset: -2,
        borderRadius: '0.875rem',
        padding: '2px',
        background: theme.palette.general.border,
        WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
        WebkitMaskComposite: 'xor',
        pointerEvents: 'none',
      },
    },
  },

  '&.l': {
    padding: '1.125rem 2.5rem',
  },

  '&.m': {
    padding: '0.875rem 1rem',
  },

  '&.round': {
    alignItems: 'center',
    width: '3rem',
    minWidth: '3rem',
    height: '3rem',
    minHeight: '3rem',
    padding: '0',
    borderRadius: '50%',

    '&:before': {
      borderRadius: '50%',
    },

    '&:focus-visible:not(:disabled)': {
      '&:before': {
        borderRadius: '50%',
      },
    },
  },

  '& .loaderWrapper': {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
  },

  '& .buttonChildren': {
    display: 'flex',
    alignItems: 'center',
  },

  '&.isLoading': {
    '& .MuiButton-startIcon, .MuiButton-endIcon': {
      opacity: 0,
    },
  },

  '&&& .transparent': {
    opacity: 0,
  },
}))
