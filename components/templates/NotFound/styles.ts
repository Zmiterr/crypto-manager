import { Stack, styled } from '@mui/material'

export const StyledNotFoundWrapper = styled(Stack, { name: 'StyledNotFoundWrapper' })(() => ({
  width: '100%',
  height: '100vh',

  '& .main': {
    display: 'flex',
    flex: '1 0 auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
}))
