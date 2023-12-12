import { Stack, styled } from '@mui/material'

export const StyledLayout = styled(Stack, { name: 'StyledLayout' })(() => ({}))

export const StyledMainContent = styled(Stack, { name: 'StyledMainContent' })(() => ({
  position: 'relative',
  minHeight: '100vh',

  '& > .children': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
}))
