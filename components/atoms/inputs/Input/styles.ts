import { styled } from '@mui/material'

export const StyledInputContainer = styled('div', { name: 'StyledInputContainer' })(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.25rem',

  '& .labelWrapper': {
    marginLeft: '1rem',
    display: 'flex',
    gap: 2,

    '& .isRequired': {
      color: theme.palette.alerts.error,
    },
  },

  '& .captionWrapper': {
    position: 'absolute',
    bottom: '-1.56rem',
    marginLeft: '1rem',
    color: theme.palette.general.secondaryText,

    '&.isError': {
      color: theme.palette.alerts.error,
    },
  },

  '& .captionSpace': { height: '1rem' },

  '.MuiInput-root:not(.isEditable)': {
    '.MuiInput-input': {
      color: theme.palette.background.light,
      WebkitTextFillColor: theme.palette.background.light,
    },
  },

  '& .MuiInput-root': {
    '&.isDisabled': {
      background: theme.palette.general.secondary,
    },

    '&.isError': {
      borderColor: theme.palette.alerts.error,

      '& > *::placeholder': {
        color: theme.palette.alerts.error,
      },
    },

    '& .startAdornment, .endAdorned': {
      display: 'flex',
      alignItems: 'center',
      width: 'auto',
      height: '1rem',
      flexShrink: 0,
    },

    '& .startAdornment': {
      marginRight: '0.5rem',
    },

    '& .endAdorned': {
      marginLeft: '0.5rem',
    },
  },
}))
