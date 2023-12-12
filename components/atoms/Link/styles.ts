import { styled, Typography } from '@mui/material'
import { ElementType } from 'react'

export const StyledLink = styled(Typography, {
  name: 'StyledLink',
})<{ component?: ElementType }>(({ theme }) => ({
  position: 'relative',
  width: 'fit-content',
  color: theme.palette.secondary.main,
  cursor: 'pointer',
  transition: 'all 0.3s',

  '&:focus-visible': {
    '&:after': {
      content: "''",
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: '-2px',
      height: '2px',
      backgroundColor: theme.palette.primary.main,
      transition: 'opacity 0.3s',
    },
  },

  '&:hover': {
    color: theme.palette.primary.hover,
    '&:after': {
      backgroundColor: theme.palette.primary.hover,
    },
  },

  '&:active': {
    color: theme.palette.primary.active,
  },
}))
