import { Box, styled } from '@mui/material'

export const StyledPageLoaderContainer = styled(Box, { name: 'StyledPageLoaderContainer' })(({ theme }) => ({
  height: '100%',
  width: '100%',
  position: 'fixed',
  top: 0,
  left: 0,
  overflow: 'hidden',

  '& .loadingIcon': {
    width: '22rem',
    height: '5rem',
    color: theme.palette.common.white,

    [theme.breakpoints.down('md')]: {
      width: '16rem',
      height: '2.5rem',
    },
  },
}))
