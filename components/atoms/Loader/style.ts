import { Box, styled } from '@mui/material'

import { shouldForwardProp } from '@/helpers'

type PropsType = {
  $scale?: number
}

export const StyledLoader = styled(Box, { name: 'StyledLoader', shouldForwardProp })<PropsType>(
  ({ theme, $scale }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    position: 'absolute',
    zIndex: 100,
    transform: `scale(${$scale})`,
    borderRadius: 'inherit',

    '.MuiBackdrop-root': {
      backgroundColor: theme.palette.background.block,
      borderRadius: 'inherit',
    },
  })
)
