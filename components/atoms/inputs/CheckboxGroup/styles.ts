import { FormControl, styled } from '@mui/material'

export const StyledCheckboxGroupContainer = styled(FormControl, { name: 'StyledCheckboxGroupContainer' })(() => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '2rem',
  width: '100%',
}))
