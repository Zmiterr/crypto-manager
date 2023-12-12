import { Select as MuiSelect, styled } from '@mui/material'

export const StyledSelectContainer = styled('div', { name: 'StyledSelectContainer' })(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.25rem',
  position: 'relative',

  '& .title': {
    paddingLeft: '1rem',
  },

  '& .captionWrapper': {
    bottom: '-1.56rem',
    paddingLeft: '1rem',
    color: theme.palette.general.secondaryText,

    '&.isError': {
      color: theme.palette.alerts.error,
    },
  },
}))

export const Select = styled(MuiSelect, { name: 'Select' })(({ theme }) => ({
  ...theme.typography.body1,
  height: '2.75rem',
  cursor: 'pointer',

  '.MuiInputBase-input': {
    padding: '0.25rem 0 0.125rem',
    color: theme.palette.background.light,

    '&:focus': {
      background: 'transparent',
    },
  },

  '&.primary:not(.isError):not(.isDisabled)': {
    '&:active': {
      borderColor: theme.palette.primary.dark,
    },
    '&:hover': {
      border: '1px solid',
      borderColor: theme.palette.primary.dark,
    },
  },

  '&.transparent': {
    border: 'unset',
  },

  '&.isError:not(.transparent)': {
    borderColor: theme.palette.alerts.error,
  },

  '&.isDisabled': {
    '& > div': {
      WebkitTextFillColor: 'unset',
    },

    '&:not(.transparent)': {
      border: 'none',
    },

    '&.transparent': {
      color: theme.palette.primary.main,
    },
  },
}))
