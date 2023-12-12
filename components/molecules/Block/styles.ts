import { alpha, Stack, styled } from '@mui/material'

import { Loader as UILoader } from '@/components/atoms'

export const StyledBlock = styled(Stack, { name: 'StyledBlock' })(({ theme }) => ({
  position: 'relative',
  borderRadius: '1.5rem',
  background: theme.palette.background.block,
  border: `1px solid ${theme.palette.general.border}`,
  color: theme.palette.background.light,
  padding: '1.5rem',
  width: '100%',

  [theme.breakpoints.down('md')]: {
    padding: '1.5rem 1rem',
  },
}))

export const StyledLoader = styled(UILoader, { name: 'StyledLoader' })(({ theme }) => ({
  top: 0,
  left: 0,
  backgroundColor: alpha(theme.palette.background.block, 0.5),
  borderRadius: '1rem',
}))
