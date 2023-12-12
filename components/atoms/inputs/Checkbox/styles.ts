import { FormControl, styled } from '@mui/material'

export const StyledCheckboxContainer = styled(FormControl, { name: 'StyledCheckboxContainer' })(({ theme }) => ({
  position: 'relative',
  marginLeft: '0',
  width: 'fit-content',
  display: 'flex',
  gap: '0.5rem',

  '&:hover': {
    '& .MuiCheckbox-root:not(.Mui-checked):not(.Mui-disabled)': {
      '& .icon': {
        borderColor: theme.palette.primary.main,
      },
    },
  },

  '& .Mui-disabled': {
    '& .icon': {
      borderColor: theme.palette.general.disabled,
    },
  },

  '& .MuiCheckbox-root': {
    padding: 0,
    '&:focus-visible:not(:disabled)': {
      '& .icon': {
        borderColor: theme.palette.primary.main,
      },
      '&:before': {
        content: "''",
        position: 'absolute',
        inset: -4,
        borderRadius: '0.5rem',
        padding: '2px',
        background: theme.palette.primary.main,
        WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
        WebkitMaskComposite: 'xor',
        pointerEvents: 'none',
      },
    },
  },

  '& .Mui-checked': {
    '& .icon': {
      background: theme.palette.primary.main,
      borderColor: theme.palette.primary.main,

      '&:before': {
        borderColor: theme.palette.background.dark,
      },
    },

    '&:hover:not(.Mui-disabled)': {
      '& .icon': {
        borderColor: theme.palette.primary.hover,
        background: theme.palette.primary.hover,
      },
    },

    '&.Mui-disabled': {
      '& .icon': {
        borderColor: theme.palette.general.disabled,
        background: theme.palette.general.disabled,

        '&:before': {
          borderColor: theme.palette.background.dark,
        },
      },
    },
  },

  '& .icon': {
    display: 'block',
    position: 'relative',
    width: '1.25rem',
    height: '1.25rem',
    border: `1px solid ${theme.palette.general.secondaryText}`,
    borderRadius: '0.375rem',
    transition: 'border-color 0.2s linear, background-color 0.2s linear',
    flexShrink: 0,

    '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      width: '0.6rem',
      height: '0.3rem',
      top: 'calc(50% - 1px)',
      left: 'calc(50% + 1px)',
      borderRight: '0.14rem solid transparent',
      borderTop: '0.14rem solid transparent',
      transform: 'translate(-50%, -50%) rotate(135deg)',
      transition: 'border-color 0.2s linear, transform 0.1s linear',
    },
  },

  '& .MuiFormControlLabel-root': {
    display: 'flex',
    alignItems: 'center',
    margin: 0,
    gap: '0.75rem',

    '& .MuiFormControlLabel-label': {
      ...theme.typography.body2,

      color: theme.palette.background.light,
      '&.Mui-disabled': {
        color: theme.palette.general.secondaryText,
      },
    },
  },

  '& .formHelperText': {
    position: 'absolute',
    margin: 0,
    bottom: '-1rem',
  },
}))
