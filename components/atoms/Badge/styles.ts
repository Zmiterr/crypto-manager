import { styled } from '@mui/material'

export const StyledBadge = styled('span', { name: 'StyledBadge' })(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '2rem',
  padding: '0 1rem',
  borderRadius: '2rem',
  width: 'fit-content',
  whiteSpace: 'nowrap',
  ...theme.typography.body2,

  '&.send': {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.common.black,
  },
}))
