import { styled, Tooltip } from '@mui/material'

export const StyledTooltip = styled(Tooltip, { name: 'StyledTooltip' })(() => ({
  width: 'fit-content',
  zIndex: 1,
}))
