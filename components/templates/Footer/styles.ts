import { styled } from '@mui/material'

export const StyledFooter = styled('footer', { name: 'StyledFooter' })(() => ({
  display: 'flex',
  flexDirection: 'column',

  '& .main': {
    display: 'flex',
    justifyContent: 'space-between',
  },
}))
