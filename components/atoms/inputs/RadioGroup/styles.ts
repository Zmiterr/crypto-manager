import { FormControl, styled } from '@mui/material'

export const StyledRadioGroupContainer = styled(FormControl, { name: 'StyledRadioGroupContainer' })(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '2rem',
  '& .MuiFormLabel-asterisk': {
    ...theme.typography.body1,
    color: theme.palette.error.main,
  },

  [theme.breakpoints.down('md')]: {
    '& .MuiFormControlLabel-label': {
      ...theme.typography.body2,
    },
  },

  '&.disabled': {
    '&$root': {
      opacity: 0.5,
      pointerEvents: 'none',
    },
  },

  '&.isRow': {
    '& .MuiFormControlLabel-root:last-child': {
      marginRight: 0,
    },
  },

  '& .label': {
    ...theme.typography.body2,

    paddingLeft: 0,
    paddingRight: 0,
    color: theme.palette.background.light,
  },
}))
