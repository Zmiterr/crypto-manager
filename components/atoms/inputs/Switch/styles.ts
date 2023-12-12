import { FormControl, styled } from '@mui/material'

export const StyledSwitchContainer = styled(FormControl, { name: 'StyledSwitchContainer' })(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  width: 'fit-content',
  gap: '0.75rem',
  margin: 0,

  ...theme.typography.body2,

  '& .Mui-disabled': {
    '& .MuiButtonBase-root': {
      opacity: 0.5,
    },
  },

  '& .MuiButtonBase-root': {
    marginRight: '0.75rem',
    '&:focus-visible:not(:disabled)': {
      '&:before': {
        content: "''",
        marginTop: '1.375rem',
        marginLeft: '-0.625rem',
        position: 'absolute',
        height: '1.4375rem',
        width: '2.44rem',
        inset: -5,
        borderRadius: '0.7rem',
        padding: '2px',
        background: theme.palette.primary.main,
        WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
        WebkitMaskComposite: 'xor',
        pointerEvents: 'none',
      },
    },
  },

  '& a': {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
  },

  '& .MuiCheckbox-root': {
    paddingBlock: '0.5rem',
    paddingLeft: 0,
    paddingRight: 0,

    '&:not(.Mui-checked)': {
      transition: 'background 0.2s linear',

      '&.Mui-disabled': {
        '& .icon': {
          background: theme.palette.general.secondaryText,
        },
      },

      '& .icon': {
        background: theme.palette.general.secondaryText,
      },
    },

    '&:before': {
      content: '""',
      transform: 'translate(9.6px, -13.6px)',
      border: 'none',
    },
  },

  '& .Mui-checked': {
    '& .icon': {
      background: theme.palette.primary.main,
      borderColor: theme.palette.primary.main,

      '&:before': {
        borderColor: theme.palette.primary.main,
      },
    },
  },

  '& .icon': {
    position: 'relative',
    display: 'block',
    width: '1.75rem',
    height: '0.875rem',
    borderRadius: '1.25rem',
    borderColor: 'transparent',
    transition: 'border-color 0.2s linear, background-color 0.2s linear',
    transitionProperty: theme.palette.primary.light,
    flexShrink: 0,

    '&:before': {
      display: 'block',
      width: '0.5rem',
      height: '0.5rem',
      content: '""',
      position: 'absolute',
      left: '0.4375rem',
      top: '0.4375rem',
      borderRight: 'none',
      borderTop: 'none',
      transform: 'translate(-50%, -50%) rotate(135deg)',
      transition: 'border-color 0.2s linear, transform 0.1s linear',
      borderRadius: '50%',
      backgroundColor: theme.palette.background.light,
    },
  },

  '& .checkedIcon': {
    '&:before': {
      content: '""',
      transform: 'translate(10px, -4px)',
      border: 'none',
    },
  },

  '& .MuiFormControlLabel-root': {
    marginLeft: 0,
    '& .MuiFormControlLabel-label': {
      ...theme.typography.body2,
      color: theme.palette.background.light,

      '&.Mui-disabled': {
        color: theme.palette.general.secondaryText,
      },
    },
  },
}))
