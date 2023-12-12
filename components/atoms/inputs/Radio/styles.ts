import { FormControlLabel, styled } from '@mui/material'

export const StyledRadioContainer = styled(FormControlLabel, { name: 'StyledRadioContainer' })(({ theme }) => ({
  '&.MuiFormControlLabel-root': {
    width: 'fit-content',
    margin: 0,
    gap: '0.75rem',

    '& .MuiFormControlLabel-label': {
      '&.Mui-disabled': {
        color: theme.palette.general.secondaryText,
      },
    },
  },

  '&:not(.Mui-disabled):hover': {
    '& .icon:not(.checkedIcon)': {
      '&.icon': {
        borderColor: theme.palette.primary.main,
      },
    },
  },

  '& .MuiFormControlLabel-label': {
    ...theme.typography.body2,

    color: theme.palette.background.light,
  },

  '& .MuiRadio-root': {
    '&:focus-visible:not(:disabled)': {
      '& .icon:not(.checkedIcon)': {
        '&.icon': {
          borderColor: theme.palette.primary.main,
        },
      },
      '&:before': {
        content: "''",
        position: 'absolute',
        inset: -4,
        borderRadius: '50%',
        padding: '2px',
        background: theme.palette.primary.main,
        WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
        WebkitMaskComposite: 'xor',
        pointerEvents: 'none',
      },
    },
    '&:hover': {
      backgroundColor: 'transparent',

      '& .icon': {
        borderColor: theme.palette.primary.hover,
      },
    },
  },

  '& .icon': {
    width: '1.25rem',
    height: '1.25rem',
    border: `1px solid ${theme.palette.general.secondaryText}`,
    borderRadius: '50%',
    position: 'relative',
    transition: 'background-color 0.2s linear, border-color 0.2s linear',

    '&:before': {
      content: '""',
      width: '0.5rem',
      height: '0.5rem',
      borderRadius: '50%',
      backgroundColor: 'transparent',
      display: 'block',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      transition: 'background-color 0.2s linear, color 0.2s linear',
    },
  },

  '& .checkedIcon': {
    '&.icon': {
      backgroundColor: theme.palette.primary.main,
      borderColor: theme.palette.primary.main,

      '&:before': {
        backgroundColor: theme.palette.background.dark,
      },
    },
  },

  '&.Mui-disabled': {
    '&.MuiFormControlLabel-root': {
      '& .icon': {
        borderColor: theme.palette.general.disabled,
        backgroundColor: theme.palette.general.input,
      },

      '& .MuiBox-root': {
        '&.checkedIcon': {
          '&.icon': {
            borderColor: theme.palette.general.disabled,
            backgroundColor: theme.palette.general.disabled,

            '&:before': {
              backgroundColor: theme.palette.general.border,
            },
          },
        },
      },
    },
  },
}))
